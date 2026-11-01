export const fieldLabels = {
  family: 'Family Situation', concerns: 'Main Concerns', support: 'Support Needed',
  contacts: 'Service Contact History', questions: 'Outstanding Questions',
};
export const initialSummary = {
  family: 'I am a mother of two children. My daughter is eight and attends school in Sydney. My son is four. We currently live with my partner in Sydney. I am considering separation and may move to Wollongong to stay with family. I am not employed and depend mainly on my partner for living expenses.',
  concerns: 'My partner has used violence against me and threatened to seek the children’s return if I leave with them. I am concerned about relocation and parenting arrangements. I am concerned about a school transfer and the privacy of my daughter’s school information. My daughter has been anxious and reluctant to attend school. My son receives speech and developmental support, and I am concerned about continuity. I am also concerned about housing and financial stability.',
  support: 'I would like family law advice and specialist child-safety support. I would like information about school enrolment, privacy and emotional wellbeing support. I would like to understand developmental services, housing and income support.',
  contacts: 'No service contact records have been added.',
  questions: 'I do not know whether parenting orders exist. I need individual advice about any legal limits on relocation. I need to clarify how a school would handle safety and privacy concerns. I need to check continuity of developmental support and eligibility for housing and payments.',
};
export const sampleScenario = 'Fictional scenario: I live in Sydney with my husband, my eight-year-old daughter and my four-year-old son. My husband has been violent towards me and says he would seek to have the children returned if I leave with them. I am considering moving to Wollongong to stay with family, but I do not know whether parenting orders exist. My daughter has been anxious and reluctant to go to school. I am worried about a transfer and whether her father could learn her new school’s details. My son receives speech and developmental support. I am not employed and depend on my husband for living expenses. How do the legal, safety, school, health, housing and financial issues connect?';
export const sampleUpdate = 'Today I contacted LawAccess NSW. Staff said I need to check whether parenting orders exist. I have not found those documents. I would like further legal advice about relocation.';
export function contactProposal(summary) {
  const record = 'I report contacting LawAccess NSW today. According to my account, staff suggested checking whether parenting orders exist; I have not located the relevant documents.';
  return {
    ...summary,
    contacts: summary.contacts === initialSummary.contacts ? record : `${summary.contacts}\n${record}`,
    questions: `${summary.questions}\nI need to verify whether parenting orders exist and obtain individual family law advice about the proposed move.`,
  };
}
export function differences(before, after) {
  return Object.keys(fieldLabels).filter(key => before[key] !== after[key]).map(key => ({key,label:fieldLabels[key],before:before[key],after:after[key],type:!after[key].trim() ? 'Removed' : !before[key].trim() || before[key] === initialSummary.contacts && key === 'contacts' ? 'Added' : 'Changed'}));
}
export function confirmVersion(history, proposed, note) {
  if (!differences(history.at(-1).summary, proposed).length) return history;
  return [...history, {number:history.at(-1).number+1,summary:{...proposed},note}];
}
export function disclosureOptions(summary) {
  return Object.entries(summary).flatMap(([key,text]) => text.split(/(?<=[.!?])\s+|\n+/u).filter(t=>t.trim() && t !== initialSummary.contacts).map((text,index)=>({id:`${key}-${index}`,section:fieldLabels[key],text}))); 
}
export const recipients = [
  {id:'legal',name:'Legal Aid NSW',hint:'Relocation, parenting orders and legal assistance',request:'I would like advice about how a proposed move could affect parenting arrangements, what documents I should check, and how family violence may be relevant. What legal assistance may be available in my circumstances?'},
  {id:'school',name:'School Support',hint:'Enrolment, wellbeing and school information privacy',request:'I would like to understand the enrolment process, whether school support can continue during a transition, and how the school handles family-law-related information and privacy when a parent raises a child-safety concern. Please let me know the appropriate staff member to speak with and what information may be needed to discuss arrangements safely.'},
  {id:'dvline',name:'NSW Domestic Violence Line',hint:'Specialist support, safety planning and housing referrals',request:'I would like to discuss support for my children and me, including safety concerns, possible housing options and referrals. Could you explain what support may be available and how I can discuss my circumstances with a specialist worker?'},
  {id:'respect',name:'1800RESPECT',hint:'Counselling, information and specialist support',request:'I would like to speak with someone about domestic and family violence and its effect on my children and me. Could you explain your counselling and support options, and how I can discuss my concerns and suitable referrals?'},
  {id:'housing',name:'Homes NSW / Link2home',hint:'Housing options, accommodation and eligibility',request:'I would like information about housing and accommodation options for my family. Could you explain the assessment process, eligibility requirements and available referrals? I understand that accommodation availability needs to be checked.'},
  {id:'financial',name:'Services Australia',hint:'Income support, care arrangements and payment eligibility',request:'I would like to understand which income-support or family payments I may be eligible for if my family and care arrangements change. Could you explain what information is needed, relevant eligibility requirements and how to discuss family violence concerns with an appropriate staff member?'},
  {id:'health',name:'GP / Child Mental Health Service',hint:'Children’s wellbeing, assessment and continuity of care',request:'I would like to understand support options for children’s emotional wellbeing and developmental needs. Could you explain suitable assessment or referral pathways, and how continuity of care can be discussed when living arrangements change?'},
  {id:'ndis',name:'NDIS Early Childhood Partner',hint:'Developmental support and local early childhood pathways',request:'I would like information about early childhood developmental support and local service pathways. Could you explain assessment and eligibility requirements, how to connect with an early childhood partner, and how support can be coordinated if living arrangements change?'},
];
export function defaultDisclosures(options, recipient) {
  return options.filter(({id,text})=> {
    if (recipient === 'school') return /daughter|school enrolment/.test(text) && !/partner|violence|son |LawAccess|income|Wollongong/.test(text);
    if (recipient === 'ndis') return /My son is four|My son receives speech|considering separation and may move/.test(text);
    if (recipient === 'health') return /My daughter is eight|My son is four|daughter has been anxious|My son receives speech/.test(text);
    if (recipient === 'financial') return id.startsWith('family-') && /mother of two|daughter is eight|son is four|not employed/.test(text);
    if (recipient === 'housing') return id.startsWith('family-') && /mother of two|daughter is eight|son is four|currently live|considering separation|not employed/.test(text) || /also concerned about housing/.test(text);
    if (recipient === 'dvline' || recipient === 'respect') return id.startsWith('family-') && /mother of two|daughter is eight|son is four|considering separation/.test(text) || id.startsWith('concerns-') && /partner has used violence|housing and financial/.test(text);
    return !/daughter has been anxious|speech and developmental|not employed/.test(text) && !id.startsWith('support-') && (id.startsWith('family-') || id.startsWith('contacts-') || /parenting|relocation|partner has used/.test(text));
  }).map(x=>x.id);
}
export function composeDraft(summary, recipient, selected, request) {
  const facts = disclosureOptions(summary).filter(o=>selected.includes(o.id)).map(o=>o.text).join(' ');
  const purpose = request.trim() || (recipients.find(r=>r.id===recipient)||recipients[0]).request;
  return `Hello,\n\n${facts ? facts+'\n\n' : ''}${purpose}\n\nThank you.`;
}
export function isEnglishDemoText(text) { return !/[\u3400-\u9fff\uf900-\ufaff]/u.test(text); }

// A review batch keeps every confirmed field unchanged until all decisions are made.
export function beginReview(before, after, note) {
  const fields = Object.fromEntries(differences(before, after).map(d => [d.key, {value: after[d.key], status: 'pending'}]));
  return Object.keys(fields).length ? {fields, note} : null;
}
export function reviewField(batch, key, decision, value = batch.fields[key]?.value) {
  if (!batch.fields[key] || !['accepted', 'discarded'].includes(decision)) throw new Error('Invalid review decision');
  return {...batch, fields: {...batch.fields, [key]: {value, status: decision}}};
}
export function finishReview(history, batch) {
  if (Object.values(batch.fields).some(field => field.status === 'pending')) return {complete: false, history};
  const summary = {...history.at(-1).summary};
  for (const [key, field] of Object.entries(batch.fields)) if (field.status === 'accepted') summary[key] = field.value;
  return {complete: true, history: confirmVersion(history, summary, batch.note)};
}
