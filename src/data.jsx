export const topics = [
  {
    id: 'law', title: 'Family Law & Parenting', en: 'Family law & parenting',
    short: 'Care arrangements, parenting orders and relocation',
    lede: 'Understand how parenting arrangements, existing court orders and relocation plans may relate.',
    what: 'Parenting arrangements can cover how a child spends time with each parent. Existing parenting orders, agreements or proceedings may affect what to check next.',
    options: 'Organise relevant documents and a timeline. Ask a family law service what an order means and what process may apply to a relocation plan. Do not rely on general webpages to decide whether a specific plan is permitted.',
    links: ['Child Safety', 'Housing', 'Education & Care'],
    sources: [
      ['Legal Aid NSW — Family law', 'https://www.legalaid.nsw.gov.au/my-problem-is-about/my-family-or-relationship/family-law'],
      ['Federal Circuit and Family Court — Parenting orders', 'https://www.fcfcoa.gov.au/fl/children/parenting-orders'],
    ],
  },
  {
    id: 'safety', title: 'Child Safety', en: 'Child safety',
    short: 'Risk assessment, safety planning and professional support',
    lede: '当住址或日常安排带来担忧时，安全规划可以和法律、Housing及孩子支持一起考虑。',
    what: 'Risk depends on individual circumstances. Specialist family violence services can discuss safety options, support needs and referrals; webpage information cannot replace an individual risk assessment.',
    options: 'If it is safe and appropriate, contact a specialist service to discuss options. If there is immediate danger, contact local emergency services.',
    links: ['Mental Health', 'Housing', 'Family Law & Parenting'],
    sources: [
      ['1800RESPECT — Get support', 'https://www.1800respect.org.au/'],
      ['NSW Domestic Violence Line', 'https://www.nsw.gov.au/family-and-relationships/family-and-domestic-violence/get-help'],
    ],
  },
  {
    id: 'mental', title: 'Mental Health', en: 'Mental health',
    short: 'Emotional wellbeing, trauma support and child services',
    lede: 'Family changes may affect children and caregivers. Support can start with listening, school support or a professional service.',
    what: 'Every child responds differently. A change alone does not indicate a diagnosis. If emotions or daily life are persistently affected, ask a GP, school or child psychology service about suitable support.',
    options: 'Note the changes you observe and the child’s own words. Ask about confidentiality, costs and age-appropriate support.',
    links: ['Child Safety', 'Education & Care', 'Financial Support'],
    sources: [['Healthdirect — Mental health for children', 'https://www.healthdirect.gov.au/mental-health-for-children']],
  },
  {
    id: 'housing', title: 'Housing', en: 'Housing',
    short: 'Temporary accommodation, relocation and stability',
    lede: 'Housing决定可能同时影响安全、School连续性、交通和既有照顾安排。',
    what: '可选择的服务取决于所在地、需求和当时资源。专业家暴服务可讨论安全Housing与转介；NSW Housing 可提供Housing服务信息。',
    options: 'Ask about available options, eligibility, wait times and arrangements for children. If relocating, also check legal and school considerations.',
    links: ['Child Safety', 'Family Law & Parenting', 'Education & Care'],
    sources: [['NSW Government — Housing assistance', 'https://www.nsw.gov.au/housing-and-construction/social-affordable/emergency-housing']],
  },
  {
    id: 'education', title: 'Education & Care', en: 'Education & care',
    short: 'School transfers, student support and daily arrangements',
    lede: 'When moving or family arrangements change, ask schools in advance about enrolment, learning continuity and support services.',
    what: 'Enrolment requirements and available support vary by area, school and child. A school can explain its process but cannot replace legal or family violence advice.',
    options: 'Ask about catchment areas, places, required documents, transfer timing and student wellbeing support. Share only necessary information when safe and appropriate.',
    links: ['Housing', 'Mental Health', 'Family Law & Parenting'],
    sources: [['NSW Department of Education — Enrolment', 'https://education.nsw.gov.au/schooling/parents-and-carers/going-to-school/enrolment']],
  },
  {
    id: 'money', title: 'Financial Support', en: 'Financial support',
    short: 'Parenting costs, income support and eligibility',
    lede: 'Learn about possible income and parenting support, and verify eligibility and application requirements with official services.',
    what: 'Eligibility, amounts and application requirements depend on individual circumstances and may change. This page does not determine eligibility or estimate payments.',
    options: 'Check current information on Services Australia. For help, ask a social worker or community legal centre.',
    links: ['Housing', 'Education & Care', 'Family Law & Parenting'],
    sources: [['Services Australia — Separated parents', 'https://www.servicesaustralia.gov.au/separated-parents']],
  },
];

export const summaryFields = [
  ['Family Situation', 'Fictional scenario: a mother is considering moving to another city with her 8-year-old daughter.'],
  ['Main Concerns', 'She is concerned about the safety of their current home and is unsure whether existing parenting orders affect a move.'],
  ['Support Needed', 'She wants to understand legal advice, safety support and the school transfer process.'],
  ['Service Contact History', 'No contacts recorded yet.'],
  ['Outstanding Questions', 'Are there current parenting orders? What should be checked about the relocation plan?'],
];

export const icons = {
  law: <><path d="M12 3 4 7l8 4 8-4-8-4Z"/><path d="M6 9v6m12-6v6M3 16h6l-1.5 3h-3L3 16Zm12 0h6l-1.5 3h-3L15 16ZM12 11v9m-4 1h8"/></>,
  safety: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
  mental: <><path d="M12 21s-8-4.7-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.3-8 11-8 11Z"/><path d="M8 12h2l1-2 2 4 1-2h2"/></>,
  housing: <><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></>,
  education: <><path d="m3 8 9-5 9 5-9 5-9-5Z"/><path d="M7 11v5c3 3 7 3 10 0v-5m5-3v7"/></>,
  money: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18m-9 2v3m-2-1.5h4"/></>,
  navigator: <><path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1"/><circle cx="12" cy="12" r="4"/></>,
  document: <><path d="M7 3h8l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v5h5M9 13h7M9 17h7"/></>,
};
