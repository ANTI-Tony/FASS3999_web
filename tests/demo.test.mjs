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
 for(const file of ['App.jsx','data.jsx','demo-model.mjs','hub-content.json','styles.css'])assert.ok(isEnglishDemoText(fs.readFileSync(new URL(`../src/${file}`,import.meta.url),'utf8')),`${file} contains Chinese`);
 assert.match(fs.readFileSync(new URL('../index.html',import.meta.url),'utf8'),/lang="en"/);
});
