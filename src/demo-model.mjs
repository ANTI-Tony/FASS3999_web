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
export function defaultDisclosures(options, recipient) {
  return options.filter(({id,text})=> {
    if (recipient === 'school') return /daughter|school enrolment/.test(text) && !/partner|violence|son |LawAccess|income|Wollongong/.test(text);
    return !/daughter has been anxious|speech and developmental|not employed/.test(text) && !id.startsWith('support-') && (id.startsWith('family-') || id.startsWith('contacts-') || /parenting|relocation|partner has used/.test(text));
  }).map(x=>x.id);
}
export function composeDraft(summary, recipient, selected, request) {
  const facts = disclosureOptions(summary).filter(o=>selected.includes(o.id)).map(o=>o.text).join(' ');
  const purpose = request.trim() || (recipient === 'school'
    ? 'I would like to understand the enrolment process, whether school support can continue during a transition, and how the school handles family-law-related information and privacy when a parent raises a child-safety concern. Please let me know the appropriate staff member to speak with and what information may be needed to discuss arrangements safely.'
    : 'I would like advice about how a proposed move could affect parenting arrangements, what documents I should check, and how family violence may be relevant. What legal assistance may be available in my circumstances?');
  return `Hello,\n\n${facts ? facts+'\n\n' : ''}${purpose}\n\nThank you.`;
}
export function isEnglishDemoText(text) { return !/[\u3400-\u9fff\uf900-\ufaff]/u.test(text); }
