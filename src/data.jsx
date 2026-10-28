export const topics = [
  {
    id: 'law', title: '法律与抚养', en: 'Family law & parenting',
    short: '照顾安排、 parenting orders 与搬迁',
    lede: '了解儿童照顾安排、现有法院命令与搬迁计划之间可能有哪些联系。',
    what: 'Parenting arrangements 可以涉及孩子与父母各自相处的安排。是否存在现有 parenting orders、协议或程序，会影响下一步应核实的问题。',
    options: '整理已有文件与时间线；向家庭法律服务询问命令的具体内容及搬迁计划可能涉及的程序。不要仅凭一般网页判断某个具体计划是否获准。',
    links: ['儿童安全', '住房', '教育与照顾'],
    sources: [
      ['Legal Aid NSW — Family law', 'https://www.legalaid.nsw.gov.au/my-problem-is-about/my-family-or-relationship/family-law'],
      ['Federal Circuit and Family Court — Parenting orders', 'https://www.fcfcoa.gov.au/fl/children/parenting-orders'],
    ],
  },
  {
    id: 'safety', title: '儿童安全', en: 'Child safety',
    short: '风险判断、安全规划与专业支持',
    lede: '当住址或日常安排带来担忧时，安全规划可以和法律、住房及孩子支持一起考虑。',
    what: '风险会随具体情况变化。专业家暴服务可以和你一起讨论安全选项、支持需求及转介；网页信息无法替代个别风险评估。',
    options: '在安全且合适的情况下，先联系专业服务讨论可行方案。若存在即时危险，联系当地紧急服务。',
    links: ['心理健康', '住房', '法律与抚养'],
    sources: [
      ['1800RESPECT — Get support', 'https://www.1800respect.org.au/'],
      ['NSW Domestic Violence Line', 'https://www.nsw.gov.au/family-and-relationships/family-and-domestic-violence/get-help'],
    ],
  },
  {
    id: 'mental', title: '心理健康', en: 'Mental health',
    short: '情绪影响、创伤支持与儿童服务',
    lede: '家庭变化可能影响孩子和照顾者的感受。获得支持可以从倾听、学校支持或专业服务开始。',
    what: '孩子的反应因人而异。变化本身不能说明具体诊断；如果情绪或日常生活持续受影响，可以向 GP、学校或儿童心理服务询问合适的支持。',
    options: '记录你观察到的变化和孩子自己的表达；询问服务的保密方式、费用及适龄支持选项。',
    links: ['儿童安全', '教育与照顾', '经济支持'],
    sources: [['Healthdirect — Mental health for children', 'https://www.healthdirect.gov.au/mental-health-for-children']],
  },
  {
    id: 'housing', title: '住房', en: 'Housing',
    short: '临时住宿、搬迁与生活稳定',
    lede: '住房决定可能同时影响安全、学校连续性、交通和既有照顾安排。',
    what: '可选择的服务取决于所在地、需求和当时资源。专业家暴服务可讨论安全住房与转介；NSW Housing 可提供住房服务信息。',
    options: '询问当前可用选项、资格条件、等待时间和带孩子入住的安排。涉及搬迁时，也要核实法律和学校方面的问题。',
    links: ['儿童安全', '法律与抚养', '教育与照顾'],
    sources: [['NSW Government — Housing assistance', 'https://www.nsw.gov.au/housing-and-construction/social-affordable/emergency-housing']],
  },
  {
    id: 'education', title: '教育与照顾', en: 'Education & care',
    short: '转学、校内支持与日常安排',
    lede: '搬迁或家庭安排变化时，可以提前向学校询问入学、学习连续性和支持服务。',
    what: '具体入学要求和可用支持会因地区、学校和孩子情况而不同。学校可以解释本校流程，但不能代替法律或家暴服务建议。',
    options: '询问学区、空位、所需文件、转学时间和校内 wellbeing 支持；仅在安全和合适时分享必要信息。',
    links: ['住房', '心理健康', '法律与抚养'],
    sources: [['NSW Department of Education — Enrolment', 'https://education.nsw.gov.au/schooling/parents-and-carers/going-to-school/enrolment']],
  },
  {
    id: 'money', title: '经济支持', en: 'Financial support',
    short: '育儿费用、收入支持与服务资格',
    lede: '了解可能的收入与育儿支持，并向官方渠道核实资格和申请条件。',
    what: '资格、金额和申请要求会取决于个人情况，也可能随政策更新。此处不判断资格或估算福利金额。',
    options: '通过 Services Australia 官方页面核实当前信息；如需协助，可询问社会工作者或社区法律中心。',
    links: ['住房', '教育与照顾', '法律与抚养'],
    sources: [['Services Australia — Separated parents', 'https://www.servicesaustralia.gov.au/separated-parents']],
  },
];

export const summaryFields = [
  ['Family Situation', '虚构案例：一位母亲正在考虑带 8 岁女儿搬到其他城市。'],
  ['Main Concerns', '她担心目前的住址安全，也不确定现有 parenting orders 是否影响搬迁。'],
  ['Support Needed', '希望了解法律咨询、安全支持与转学流程。'],
  ['Service Contact History', '尚未记录联系。'],
  ['Outstanding Questions', '是否存在现行 parenting orders？搬迁计划需要核实哪些事项？'],
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
