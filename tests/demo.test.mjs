import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {initialSummary, contactProposal, confirmVersion, differences, disclosureOptions,defaultDisclosures,composeDraft,isEnglishDemoText} from '../src/demo-model.mjs';
const initial=()=>[{number:1,summary:{...initialSummary},note:'Initial record'}];
test('proposals do not mutate confirmed data; confirmation adds a version; restoring preserves history',()=>{
 const h1=initial();const proposed=contactProposal(h1[0].summary);
 assert.equal(h1[0].summary.contacts,'No service contact records have been added.');
 assert.deepEqual(differences(h1[0].summary,proposed).map(d=>d.key),['contacts','questions']);
 const h2=confirmVersion(h1,proposed,'LawAccess');
 assert.equal(h2.at(-1).number,2);assert.equal(h1.length,1);
 assert.match(h2.at(-1).summary.contacts,/According to my account/);
 const restore={...h1[0].summary};assert.equal(h2.length,2);
 const h3=confirmVersion(h2,restore,'Restore Version 1');
 assert.equal(h3.length,3);assert.deepEqual(h3[2].summary,h1[0].summary);assert.equal(h3[1].summary.contacts,proposed.contacts);
 assert.equal(confirmVersion(h3,restore,'No change'),h3);
});
test('edits and removals produce explicit differences and can be confirmed',()=>{
 const proposed={...initialSummary,family:'I have two children in this fictional example.',contacts:''};
 assert.equal(differences(initialSummary,proposed).find(d=>d.key==='contacts').type,'Removed');
 const h=confirmVersion(initial(),proposed,'Correction');assert.equal(h[1].summary.contacts,'');
});
test('school draft defaults omit violence, legal history, sibling medical needs and proposed city',()=>{
 const current=contactProposal(initialSummary);const opts=disclosureOptions(current);
 const selected=defaultDisclosures(opts,'school');
 const draft=composeDraft(current,'school',selected,'');
 assert.match(draft,/daughter is eight/);assert.match(draft,/enrolment/);
 assert.doesNotMatch(draft,/LawAccess|partner|violence|speech|Wollongong|son is four/);
 assert.notEqual(draft,composeDraft(current,'legal',defaultDisclosures(opts,'legal'),''));
});
test('drafts reflect confirmed versions and respect unchecked disclosures',()=>{
 const opts=disclosureOptions(initialSummary);const before=composeDraft(initialSummary,'legal',defaultDisclosures(opts,'legal'),'');assert.doesNotMatch(before,/contacting LawAccess/);
 const confirmed=contactProposal(initialSummary);const nextOptions=disclosureOptions(confirmed);
 const selected=defaultDisclosures(nextOptions,'legal');
 assert.match(composeDraft(confirmed,'legal',selected,''),/contacting LawAccess/);
 assert.doesNotMatch(composeDraft(confirmed,'legal',selected.filter(id=>!id.startsWith('contacts-')),''),/contacting LawAccess/);
 const edited={...confirmed,family:'I am considering a move to Newcastle with my children.'};
 assert.match(composeDraft(edited,'legal',defaultDisclosures(disclosureOptions(edited),'legal'),''),/Newcastle/);
 assert.deepEqual(initialSummary,initial()[0].summary);
});
test('36 complete English pages retain working topic references and specific official URLs',()=>{
 const content=JSON.parse(fs.readFileSync(new URL('../src/hub-content.json',import.meta.url)));
 assert.equal(content.pages.length,36);const ids=new Set(content.pages.map(p=>p.id));assert.equal(ids.size,36);
 for(const p of content.pages){assert.ok(p.body.length>150);assert.ok(p.official_information.length);assert.ok(p.professional_services.length);for(const id of p.related_topic_ids)assert.ok(ids.has(id),`${p.id} -> ${id}`);for(const source of p.official_information){assert.ok(source.url.startsWith('https://'));assert.ok(source.organisation);assert.ok(source.supports);}}
 for(const category of 'ABCDEF')assert.equal(content.pages.filter(p=>p.id.startsWith(category)).length,6);
 for(const file of ['App.jsx','data.jsx','demo-model.mjs','hub-content.json','styles.css','visual.css'])assert.ok(isEnglishDemoText(fs.readFileSync(new URL(`../src/${file}`,import.meta.url),'utf8')),`${file} contains Chinese`);
 assert.match(fs.readFileSync(new URL('../index.html',import.meta.url),'utf8'),/lang="en"/);
});

test('a two-field update saves exactly one version only when every field has a decision', async()=>{
 const {beginReview,reviewField,finishReview}=await import('../src/demo-model.mjs');
 const history=initial();let batch=beginReview(initialSummary,contactProposal(initialSummary),'LawAccess');
 const originalBatch=structuredClone(batch);
 batch=reviewField(batch,'contacts','accepted');
 let result=finishReview(history,batch);
 assert.equal(result.complete,false);assert.equal(result.history,history);
 assert.equal(history[0].summary.contacts,initialSummary.contacts);
 assert.equal(originalBatch.fields.contacts.status,'pending');
 batch=reviewField(batch,'questions','accepted');result=finishReview(history,batch);
 assert.equal(result.complete,true);assert.equal(result.history.length,2);assert.match(result.history[1].summary.contacts,/LawAccess/);
 assert.deepEqual(result.history[1].summary,contactProposal(initialSummary));
});
test('discard is field-specific, accepted edits are used, and discarding all creates no version', async()=>{
 const {beginReview,reviewField,finishReview}=await import('../src/demo-model.mjs');
 const history=initial();const initialBatch=beginReview(initialSummary,contactProposal(initialSummary),'LawAccess');
 let batch=reviewField(initialBatch,'contacts','accepted','I report a sample contact with LawAccess NSW.');
 batch=reviewField(batch,'questions','discarded');
 const result=finishReview(history,batch);
 assert.equal(result.history[1].summary.contacts,'I report a sample contact with LawAccess NSW.');
 assert.equal(result.history[1].summary.questions,initialSummary.questions);
 batch=reviewField(reviewField(initialBatch,'contacts','discarded'),'questions','discarded');
 assert.equal(finishReview(history,batch).history,history);
 assert.equal(beginReview(initialSummary,initialSummary,'No change'),null);
});
test('restoration uses field review and creates a new version without replacing existing snapshots',async()=>{
 const {beginReview,reviewField,finishReview}=await import('../src/demo-model.mjs');
 const h2=confirmVersion(initial(),contactProposal(initialSummary),'Contact');
 let batch=beginReview(h2.at(-1).summary,h2[0].summary,'Restore Version 1');
 for(const key of Object.keys(batch.fields))batch=reviewField(batch,key,'accepted');
 const h3=finishReview(h2,batch).history;
 assert.equal(h3.length,3);assert.equal(h3[2].number,3);assert.deepEqual(h3[2].summary,initialSummary);
 assert.match(h3[1].summary.contacts,/LawAccess/);assert.deepEqual(h3[0].summary,initialSummary);
});
