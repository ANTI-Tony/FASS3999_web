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
  {
    "title": "Law & Parenting",
    "ids": [
      "A4",
      "A3",
      "A2"
    ],
    "text": "Your husband saying “you cannot take the children” does not settle the legal issue. Moving without an agreement can still result in a court application and, in some circumstances, an order for the children to return. If parenting orders already exist, their wording matters. Because you do not know whether orders exist, a family-law service can help you understand what documents to check and how a proposed move may affect parenting arrangements.",
    "uncertain": "Whether you may relocate to Wollongong and what existing orders, if any, require.",
    "connection": "A move may also affect where children live, contact arrangements and schooling.",
    "sources": [
      [
        "Family Violence Law Help — Can I move away with the children?",
        "https://familyviolencelaw.gov.au/family-law/arrangements-for-children/can-i-move-away-with-the-children/"
      ]
    ],
    "services": [
      "legal"
    ]
  },
  {
    "title": "Education & Safety",
    "ids": [
      "E3",
      "E2",
      "B4"
    ],
    "text": "A transfer does not automatically mean your daughter’s new school will be hidden from her father. Under NSW public-school guidance, a parent may sometimes receive confirmation of enrolment, while private addresses and contact details have separate protections. The wording of any parenting orders or AVO, including whether the child is named as a protected person, matters. Discuss the privacy concern with the school and obtain legal advice before assuming what the school can or cannot disclose.",
    "uncertain": "How a particular school will handle orders, safety concerns and information requests.",
    "connection": "Changing schools may connect education, child safety and family law.",
    "sources": [
      [
        "NSW Education — Family Law Guidelines, section 10",
        "https://education.nsw.gov.au/rights-and-accountability/legal-issues-bulletins/family-law-guidelines"
      ]
    ],
    "services": [
      "school"
    ]
  },
  {
    "title": "Health & Wellbeing",
    "ids": [
      "C2",
      "C4",
      "E4",
      "E6"
    ],
    "text": "Your daughter’s anxiety and reluctance to attend school are worth discussing with her GP or school support staff, but these signs alone do not establish a diagnosis. If moving is considered, ask the school about continuity of wellbeing support. For your four-year-old son, discuss a transition plan with his current speech or developmental providers; the NDIS early childhood approach may help families find suitable supports, but eligibility and funding cannot be assumed.",
    "connection": "A new home or school may affect access to existing support. Early childhood connections do not automatically establish NDIS funding eligibility.",
    "sources": [
      [
        "NSW Health — Child and Adolescent Mental Health Services",
        "https://www.health.nsw.gov.au/mentalhealth/services/children/Pages/programs-children-teens.aspx"
      ],
      [
        "NDIS — Guide to the early childhood approach",
        "https://www.ndis.gov.au/applying/children/guide-early-childhood-approach"
      ]
    ],
    "services": [
      "health",
      "ndis"
    ]
  },
  {
    "title": "Housing & Living",
    "ids": [
      "D2",
      "D3",
      "D5"
    ],
    "text": "Staying with relatives in Wollongong is one possible arrangement, but it is not the only housing pathway to ask about. NSW’s Staying Home Leaving Violence program can, in suitable and eligible circumstances, support women and children to remain in their home after separating from the person using violence. Whether that is safe or available for your family requires specialist assessment. Ask a domestic-violence support service about housing and safety options rather than assuming a particular placement is guaranteed.",
    "connection": "Housing stability may help maintain school and health support. Legal arrangements and safety assessment affect which options are feasible.",
    "sources": [
      [
        "NSW DCJ — Staying Home Leaving Violence",
        "https://dcj.nsw.gov.au/service-providers/supporting-family-domestic-sexual-violence-services/dfv-programs-funding/staying-home-leaving-violence.html"
      ]
    ],
    "services": [
      "housing"
    ]
  },
  {
    "title": "Financial Support",
    "ids": [
      "F1",
      "F2",
      "F5",
      "F4",
      "F3"
    ],
    "text": "You may wish to check Parenting Payment, Family Tax Benefit and Child Care Subsidy with Services Australia. Crisis Payment is a different payment with separate eligibility rules. Your income, residence, care arrangements and other circumstances can affect what is available. Being in a violent relationship or considering separation does not automatically establish eligibility or an amount.",
    "connection": "Income and care arrangements may affect housing and childcare options. Child support can raise family violence concerns. The Leaving Violence Program is distinct from Crisis Payment; each has its own rules.",
    "sources": [
      [
        "Services Australia — Parenting Payment",
        "https://www.servicesaustralia.gov.au/parenting-payment"
      ],
      [
        "Services Australia — Crisis Payment (family and domestic violence)",
        "https://www.servicesaustralia.gov.au/crisis-payment-for-extreme-circumstances-family-and-domestic-violence"
      ]
    ],
    "services": [
      "financial"
    ]
  },
  {
    "title": "Safety & Protection",
    "ids": [
      "B2",
      "B5",
      "B6"
    ],
    "text": "Separation can change safety risks, especially where threats, monitoring or children’s routines are involved. A specialist domestic-violence service can help you discuss your circumstances, possible safety options, referrals and available accommodation support. This website cannot assess how dangerous the situation is or tell you that a particular move or action is safe. Devices, shared accounts and school information may also raise privacy concerns.",
    "connection": "School information, devices, housing and parenting arrangements may raise connected safety questions.",
    "sources": [
      [
        "NSW Government — Domestic and family violence support",
        "https://www.nsw.gov.au/community-services/domestic-and-family-support"
      ],
      [
        "eSafety — Online safety checklist",
        "https://www.esafety.gov.au/key-topics/domestic-family-violence/online-safety-checklist"
      ]
    ],
    "services": [
      "safety"
    ]
  }
];
export const supportCards = [pageById.B6.professional_services.find(s=>s.name==='NSW Domestic Violence Line'),pageById.A6.professional_services[0],pageById.E3.professional_services.find(s=>s.name.includes('School Counselling')),pageById.C2.professional_services.find(s=>s.name.includes('CAMHS')),pageById.F1.professional_services[0],pageById.C4.professional_services.find(s=>s.name.includes('NDIS'))].filter(Boolean);
export const serviceByKey = {
 legal: supportCards.find(s=>s.name.includes('LawAccess')),
 safety: supportCards.find(s=>s.name==='NSW Domestic Violence Line'),
 school: supportCards.find(s=>s.name.includes('School Counselling')),
 health: supportCards.find(s=>s.name.includes('CAMHS')),
 ndis: supportCards.find(s=>s.name.includes('NDIS')),
 financial: supportCards.find(s=>s.name.includes('Centrelink')),
 housing: pageById.D1.professional_services.find(s=>s.name.includes('Link2home')),
};
export const featuredIds = ['A4','B3','E3','F3'];
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
