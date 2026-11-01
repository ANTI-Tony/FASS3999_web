import content from './hub-content.json';
export const pages = content.pages;
export const pageById = Object.fromEntries(pages.map(p=>[p.id,p]));
export const categories = [
  {id:'A',title:'Law & Parenting',short:'Parenting arrangements, orders and relocation',icon:'law'},
  {id:'B',title:'Safety & Protection',short:'Child safety, protection and privacy',icon:'safety'},
  {id:'C',title:'Health & Wellbeing',short:'Emotions, development and continuing care',icon:'mental'},
  {id:'D',title:'Housing & Living',short:'Accommodation, stability and practical needs',icon:'housing'},
  {id:'E',title:'Education & Care',short:'Schools, early childhood and learning support',icon:'education'},
  {id:'F',title:'Financial Support',short:'Payments, child support and financial safety',icon:'money'},
];
export const domains = [
  {title:'Law & Parenting',ids:['A4','A3','A2'],sourceIds:['A4'],text:'Family Violence Law Help explains that moving with children without the other parent’s agreement can lead to court orders requiring their return. If parenting orders exist, individual legal advice is needed about a possible breach. A partner’s statement alone is not a legal decision.',connection:'A move to family in Wollongong may also affect where children live, contact arrangements and schooling.'},
  {title:'Education & Safety',ids:['E2','E3','B4'],sourceIds:['E3','E2'],text:'NSW Education’s Family Law Guidelines explain that school information and parent involvement depend on circumstances including identity checks, orders, AVOs and the child’s interests. A school cannot promise that all enrolment information will be kept from another parent. Address and contact information also have protections.',connection:'Changing school may involve education, child safety and family law together; the school and legal professionals need to consider the actual documents.'},
  {title:'Health & Wellbeing',ids:['C2','C4','E4','E6'],sourceIds:['C2','C4'],text:'Persistent anxiety and reluctance to attend school can be discussed with a GP, school support staff or child mental health service; this demo cannot diagnose the daughter. For the four-year-old son, ask existing providers about continuity of speech and developmental support and local early childhood pathways.',connection:'A new home or school may affect access to existing support. Early childhood connections do not automatically establish NDIS funding eligibility.'},
  {title:'Housing & Living',ids:['D2','D3','D5'],sourceIds:['D2'],text:'NSW Staying Home Leaving Violence is one possible service pathway: eligible families may be supported to remain in a safe home following specialist risk assessment. Staying at home is not suitable for every family. Availability and eligibility need to be checked.',connection:'Housing stability may help maintain school and health support, while legal arrangements and safety assessment affect which options are feasible.'},
  {title:'Financial Support',ids:['F1','F2','F3','F4','F5'],sourceIds:['F1','F3','F5'],text:'Services Australia explains different programs including Parenting Payment, Family Tax Benefit and Child Care Subsidy. Crisis Payment has separate requirements. The Leaving Violence Program is another distinct program. Eligibility depends on each program’s rules and individual circumstances; none is automatically approved by separation.',connection:'Income and care arrangements may affect housing and childcare options. Ask about family violence considerations when discussing child support.'},
  {title:'Safety & Protection',ids:['B2','B5','B6'],sourceIds:['B2','B5'],text:'Specialist family violence services can discuss changing risks around separation, safety planning and support referrals. eSafety information explains how children’s devices and shared accounts may expose location or activity. This website cannot assess individual risk or promise a safe course of action.',connection:'School information, devices, housing and parenting arrangements may all raise connected safety questions.'},
];
export const supportCards = [pageById.B6.professional_services.find(s=>s.name==='NSW Domestic Violence Line'),pageById.A6.professional_services[0],pageById.E3.professional_services.find(s=>s.name.includes('School Counselling')),pageById.C2.professional_services.find(s=>s.name.includes('CAMHS')),pageById.F1.professional_services[0],pageById.C4.professional_services.find(s=>s.name.includes('NDIS'))].filter(Boolean);
export const icons = {
 law:<><path d="m12 3-8 4 8 4 8-4-8-4Z"/><path d="M6 9v6m12-6v6M3 16h6l-1.5 3h-3L3 16Zm12 0h6l-1.5 3h-3L15 16ZM12 11v9m-4 1h8"/></>,
 safety:<><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
 mental:<><path d="M12 21s-8-4.7-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.3-8 11-8 11Z"/><path d="M8 12h2l1-2 2 4 1-2h2"/></>,
 housing:<><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></>,
 education:<><path d="m3 8 9-5 9 5-9 5-9-5Z"/><path d="M7 11v5c3 3 7 3 10 0v-5m5-3v7"/></>,
 money:<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18m-9 2v3m-2-1.5h4"/></>,
 navigator:<><path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1"/><circle cx="12" cy="12" r="4"/></>,
 document:<><path d="M7 3h8l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v5h5M9 13h7M9 17h7"/></>,
};
