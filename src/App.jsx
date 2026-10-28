import { useMemo, useState } from 'react';
import { icons, summaryFields, topics } from './data.jsx';

const topicByTitle = Object.fromEntries(topics.map((topic) => [topic.title, topic]));

function Icon({ name, className = '' }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>;
}

function ExitButton() {
  return <button className="exit" onClick={() => window.location.replace('about:blank')}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"/></svg>快速退出</button>;
}

function Header({ onHome, onOpen }) {
  return <header className="topbar">
    <a href="#home" className="brand" aria-label="Beyond Stay or Leave 首页" onClick={(event) => { event.preventDefault(); onHome(); }}>
      <span className="brand-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 20s-7-4.3-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 19 10c0 5.7-7 10-7 10Z"/><path d="M8 12h2l1.2-2.2 2 4.4 1.1-2.2H16"/></svg></span>
      <span><span className="brand-name">Beyond Stay or Leave</span><span className="brand-sub">Information · Understanding · Support</span></span>
    </a>
    <nav className="top-actions" aria-label="主导航"><button className="toplink" onClick={() => onOpen('hub')}>Information Hub</button><button className="toplink" onClick={() => onOpen('ai')}>AI Navigator</button><button className="toplink" onClick={() => onOpen('summary')}>My Case Summary</button><ExitButton /></nav>
  </header>;
}

function HomePage({ onOpen, onAsk }) {
  const [question, setQuestion] = useState('');
  const ask = (event) => { event.preventDefault(); onAsk(question.trim() || '我想带 8 岁的女儿搬去别的城市生活，因为丈夫知道我们现在住哪里。但如果搬走，女儿需要转学。丈夫说我不能擅自把孩子带走。'); };
  const fill = (value) => setQuestion(value);
  return <main id="home">
    <section className="intro"><div><div className="eyebrow">A place to find your next clear step</div><h1>先看清孩子可能面对的变化。<br/>再决定下一步。</h1><p>把分散的信息、复杂的问题和求助记录，放到一个更容易理解的地方。</p></div><div className="demo-note"><span className="demo-dot"/>研究原型 · 虚构案例 · 不收集真实资料</div></section>
    <section className="section" aria-labelledby="hub-heading"><div className="section-head"><div><div className="eyebrow">01 · Verified Information Hub</div><h2 id="hub-heading">我想先全面了解孩子可能面临什么变化</h2><p className="section-sub">从一个主题开始，也可以看看它和哪些事情有关。</p></div><span className="count">6 个主题</span></div>
      <div className="hub-grid">{topics.map((topic) => <button className="hub-card" key={topic.id} onClick={() => onOpen('hub', topic.id)}><span className="card-top"><span className="icon"><Icon name={topic.id}/></span><span className="arrow">↗</span></span><strong>{topic.title}</strong><small>{topic.short}</small></button>)}</div>
    </section>
    <section className="section navigator" aria-labelledby="ai-heading"><div className="section-head"><div className="nav-title"><span className="icon"><Icon name="navigator"/></span><div><div className="eyebrow">02 · AI Information Navigator</div><h2 id="ai-heading">我有一个具体问题</h2><p className="section-sub">拆解问题、整合经核实的信息，并找到合适的支持。</p></div></div></div>
      <div className="suggestions"><button className="chip" onClick={() => fill('我想带 8 岁的女儿搬去别的城市，可能需要转学，也担心现在的 parenting orders。')}>带孩子搬迁与转学</button><button className="chip" onClick={() => fill('孩子最近情绪变化很大，我想知道可以从哪里获得支持。')}>孩子的情绪与支持</button><button className="chip" onClick={() => fill('我需要暂时离开现在的住处，但不知道可以联系哪些住房服务。')}>临时住房与安全</button></div>
      <form className="askbox" onSubmit={ask}><textarea rows="1" placeholder="请输入你的具体问题…" aria-label="输入你的问题" value={question} onChange={(event) => setQuestion(event.target.value)}/><button className="send" aria-label="发送问题"><SendIcon/></button></form>
    </section>
    <section className="section" aria-labelledby="case-heading"><div className="section-head"><div><div className="eyebrow">03 · My Case Summary</div><h2 id="case-heading">我已经开始联系机构，需要整理自己的情况</h2><p className="section-sub">先维护一份自己确认过的摘要，再按需要准备不同沟通草稿。</p></div></div>
      <div className="case-card"><div className="case-copy"><span className="icon"><Icon name="document"/></span><div><h3>My Case Summary</h3><p>演示工作区使用虚构资料；更改由你确认。</p></div></div><div className="case-buttons"><button className="primary" onClick={() => onOpen('summary')}>打开工作区 <span aria-hidden="true">→</span></button></div></div>
      <details className="privacy"><summary>了解我的信息会如何被处理</summary><div className="privacy-content"><p>这是研究原型，当前演示只在此浏览器页面内使用预设虚构案例；不连接 AI 服务、不将输入发送给机构，也不提供真实个案的安全存储、加密或删除功能。请勿输入真实姓名、地址、学校或家暴经历。</p><p>AI Navigator 与 My Case Summary 不共享记录。摘要修改只有在你选择“确认更改”后才会更新；沟通草稿只供查看、编辑与复制，不会自动发送。页面离开后演示输入不会被保存。</p><p><strong>快速退出</strong>会离开此页面，但无法清除浏览器历史，也无法阻止他人监控设备。</p></div></details>
    </section>
  </main>;
}

function SendIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m4 12 16-8-5 16-3-7-8-1Z"/><path d="m12 13 4-4"/></svg>;
}

function ArticlePane({ topic, onTopic }) {
  return <article className="pane pane-active"><div className="pane-head"><div><div className="eyebrow">VERIFIED INFORMATION HUB</div><h2>{topic.title}</h2></div></div><div className="pane-body">
    <div className="article-kicker">{topic.en}</div><h1 className="article-title">{topic.title}</h1><p className="article-lede">{topic.lede}</p>
    <div className="article-section"><h3>这是什么问题</h3><p>{topic.what}</p></div><div className="article-section"><h3>一般可以核实什么</h3><p>{topic.options}</p></div>
    <div className="article-section"><h3>相关主题</h3><div className="related">{topic.links.map((label) => <button key={label} onClick={() => onTopic(topicByTitle[label].id)}>{label} →</button>)}</div></div>
    <div className="article-section"><h3>官方或专业来源</h3><div className="source-list">{topic.sources.map(([label, url]) => <a href={url} target="_blank" rel="noreferrer" key={url}>{label} ↗</a>)}</div></div>
    <span className="review-stamp">来源链接仅作原型演示 · 页面内容需由专业人员复核 · 2026 年 10 月</span>
  </div></article>;
}

function AnswerCard({ onTopic }) {
  return <div className="bubble assistant">
    <div className="answer-title">先把几个相关问题分开看</div>
    <div className="answer-block"><strong>1 · 你可能同时在考虑</strong><p>现有 parenting orders 或其他安排、孩子转学与生活连续性，以及你和孩子的安全与支持需求。</p></div>
    <div className="answer-block"><strong>2 · 从这些主题开始</strong><p><button className="text-link" onClick={() => onTopic('law')}>法律与抚养 →</button>　<button className="text-link" onClick={() => onTopic('education')}>教育与照顾 →</button>　<button className="text-link" onClick={() => onTopic('safety')}>儿童安全 →</button></p></div>
    <div className="answer-block"><strong>3 · 综合理解</strong><p>如果存在现行 parenting orders，搬迁计划可能与既有安排有关；搬家也会带来学校、交通和日常照顾的变化。先核实命令原文，并分别询问法律服务、学校和专业安全服务，可以帮助你看清这些问题如何相互影响。<a href="https://www.fcfcoa.gov.au/fl/children/parenting-orders" target="_blank" rel="noreferrer">法院 parenting orders 信息</a> · <a href="https://education.nsw.gov.au/schooling/parents-and-carers/going-to-school/enrolment" target="_blank" rel="noreferrer">NSW 转学信息</a></p></div>
    <div className="answer-block"><strong>4 · 目前无法仅凭描述确定</strong><p>是否可以搬迁、命令对你具体意味着什么、目标学校是否有名额，以及你目前的风险程度，都需要由了解具体情况的专业人员核实。这段回答不能判断你是否“可以”搬走。</p></div>
    <div className="answer-block"><strong>5 · 可以询问的支持</strong><p><b>Legal Aid NSW</b>：询问现有命令及搬迁计划相关法律问题。<br/><b>1800RESPECT · 1800 737 732</b>：讨论家庭暴力支持、安全规划与转介；并非紧急响应服务。<br/><b>目标学校</b>：询问入学流程、空位和学生 wellbeing 支持。</p></div>
    <div className="review-stamp">预设模拟回答 · 未调用 AI · 信息需专业复核</div>
  </div>;
}

function AIPane({ messages, onSend, onTopic }) {
  const [value, setValue] = useState('');
  const submit = (event) => { event.preventDefault(); if (!value.trim()) return; onSend(value.trim()); setValue(''); };
  return <article className="pane pane-active"><div className="pane-head"><div><div className="eyebrow">AI INFORMATION NAVIGATOR</div><h2>梳理一个具体问题</h2></div></div><div className="pane-body"><div className="chat-wrap"><div className="chat-scroll">
    {messages.map((message, index) => message.role === 'user' ? <div className="bubble user" key={index}>{message.text}</div> : message.role === 'answer' ? <AnswerCard key={index} onTopic={onTopic}/> : <div className="bubble assistant" key={index}>{message.text}</div>)}
  </div><form className="chat-input" onSubmit={submit}><input value={value} onChange={(event) => setValue(event.target.value)} placeholder="继续提问…" aria-label="继续提问"/><button aria-label="发送"><SendIcon/></button></form></div></div></article>;
}

function SummaryPane({ summary, setSummary, onToast }) {
  const [mode, setMode] = useState('update');
  const [value, setValue] = useState('');
  const [proposed, setProposed] = useState('');
  const [history, setHistory] = useState(['Version 1 · 初始虚构摘要']);
  const [draft, setDraft] = useState('');
  const [version, setVersion] = useState(1);

  const sendAction = () => {
    const request = value.trim();
    if (!request) { onToast('请先输入一条演示内容。'); return; }
    if (mode === 'update') {
      setProposed(`用户表示：${request}`);
      onToast('已准备待确认的拟议新增内容');
      return;
    }
    const recipient = /学校|校方/.test(request) ? '学校' : /1800|家暴|安全服务/.test(request) ? '家暴支持服务' : 'Legal Aid NSW';
    const focus = recipient === '学校'
      ? '孩子可能需要转学，我想了解入学流程、是否有名额，以及学校可以提供哪些 wellbeing 支持。'
      : recipient === '家暴支持服务'
        ? '我正在考虑孩子和我的安全与生活安排，希望了解可讨论的安全规划和支持选项。'
        : '我正在考虑带 8 岁的女儿搬到其他城市。我们目前的安排和是否存在 parenting orders 还需要核实，我希望了解搬迁计划可能涉及的法律问题。';
    setDraft(`你好，我想咨询与孩子安排有关的问题。\n\n${focus}\n\n我目前最担心的是怎样同时考虑孩子的生活稳定和安全。我想请教：根据我的情况，下一步有哪些事项需要核实？我可以获得哪些适合的支持？\n\n谢谢。`);
    setValue('');
  };

  const confirm = () => {
    if (!proposed) return;
    const next = summary.map(([label, text]) => label === 'Service Contact History'
      ? [label, '用户表示：今天联系了法律咨询机构，对方建议先确认是否有 parenting orders。']
      : label === 'Outstanding Questions'
        ? [label, '搬迁法律问题尚未解决；需要确认是否存在 parenting orders。']
        : [label, text]);
    setSummary(next);
    setVersion(2);
    setHistory((items) => [...items, 'Version 2 · 已确认更新：联系法律咨询机构']);
    setProposed('');
    onToast('更改已确认，生成 Version 2');
  };

  const copy = async () => {
    try { await navigator.clipboard.writeText(draft); onToast('草稿已复制'); }
    catch { onToast('无法访问剪贴板，请手动选择并复制。'); }
  };

  return <article className="pane pane-active"><div className="pane-head"><div><div className="eyebrow">MY CASE SUMMARY</div><h2>我的摘要工作区</h2></div></div><div className="pane-body">
    <div className="summary-banner">隐私提示：以下是虚构资料。本原型不连接 AI、不储存真实个案资料。请勿输入真实个人信息。</div>
    <div className="summary-doc"><div className="doc-head"><div><h3>Master Summary</h3><span className="updated-note">最后更新：演示会话</span></div><span className="version-pill">Version {version}</span></div>
      {summary.map(([label, text]) => <div className="doc-field" key={label}><strong>{label}</strong><p>{text}</p></div>)}
      {proposed && <div className="proposed"><em>Proposed addition · 待确认</em>{proposed}<div className="change-actions"><button className="confirm" onClick={confirm}>确认更改</button><button className="discard" onClick={() => { setProposed(''); onToast('拟议内容已丢弃'); }}>丢弃</button></div></div>}
    </div>
    <details className="summary-history"><summary>History · 查看版本记录</summary>{history.map((item) => <p key={item}>{item}</p>)}</details>
    <div className="article-section"><h3>你想做什么？</h3><div className="mode-switch"><button className={`mode ${mode === 'update' ? 'selected' : ''}`} onClick={() => setMode('update')}>Update Information</button><button className={`mode ${mode === 'prepare' ? 'selected' : ''}`} onClick={() => setMode('prepare')}>Prepare a Message</button></div>
      <div className="chat-input"><input value={value} onChange={(event) => setValue(event.target.value)} placeholder={mode === 'update' ? '例如：今天联系了法律咨询机构，对方建议我先确认是否有 parenting orders…' : '例如：我想给 Legal Aid NSW 咨询孩子搬迁的问题。'} aria-label="摘要操作内容"/><button onClick={sendAction} aria-label="提交">↗</button></div>
      {draft && <div className="message-result"><strong>沟通草稿 · 请自行审阅</strong><div className="draft-text">{draft}</div><div className="included">本次包含：家庭概况、搬迁顾虑、希望获得的专业帮助。草稿由虚构摘要生成，不会自动发送。</div><button className="copy-btn" onClick={copy}>复制草稿</button></div>}
    </div>
  </div></article>;
}

function Workspace({ activePane, setActivePane, layout, setLayout, topic, onTopic, messages, onSend, summary, setSummary, onHome, onToast }) {
  const visible = useMemo(() => {
    if (layout === 'triple') return [activePane, ...['hub', 'ai', 'summary'].filter((id) => id !== activePane)];
    if (layout === 'split') return activePane === 'summary' ? ['summary', 'hub'] : [activePane, activePane === 'hub' ? 'ai' : 'hub'];
    return [activePane];
  }, [activePane, layout]);
  const panes = { hub: <ArticlePane topic={topic} onTopic={onTopic}/>, ai: <AIPane messages={messages} onSend={onSend} onTopic={onTopic}/>, summary: <SummaryPane summary={summary} setSummary={setSummary} onToast={onToast}/> };
  return <section className="workspace">
    <div className="workspace-bar"><div className="workspace-links"><button className="back-btn" onClick={onHome}>← 首页</button>{[['hub', 'Information Hub'], ['ai', 'AI Navigator'], ['summary', 'My Case Summary']].map(([id, label]) => <button key={id} className={`nav-tab ${activePane === id ? 'active' : ''}`} onClick={() => setActivePane(id)}>{label}</button>)}</div>
      <div className="workspace-tools"><button className={`view-btn ${layout === 'single' ? 'active' : ''}`} data-layout-btn="single" onClick={() => setLayout('single')}>单页</button><button className={`view-btn ${layout === 'split' ? 'active' : ''}`} data-layout-btn="split" onClick={() => setLayout('split')}>双栏</button><button className={`view-btn ${layout === 'triple' ? 'active' : ''}`} data-layout-btn="triple" onClick={() => setLayout('triple')}>三栏</button><button className="view-btn" onClick={onHome}>关闭工作区 ×</button></div>
    </div>
    <div className="panes" data-layout={layout}>{['hub', 'ai', 'summary'].map((id) => <div className={`pane-slot pane-${id} ${visible.includes(id) ? '' : 'is-hidden'} ${activePane === id ? 'mobile-active' : ''}`} key={id}>{panes[id]}</div>)}</div>
    <footer className="footer"><span><strong>研究原型 · 仅供课堂演示</strong>　不构成法律、医疗或安全建议</span><span>离开页面后演示输入不会保存。</span></footer>
  </section>;
}

export default function App() {
  const [page, setPage] = useState('home');
  const [activePane, setActivePane] = useState('hub');
  const [layout, setLayout] = useState('single');
  const [topicId, setTopicId] = useState('law');
  const [messages, setMessages] = useState([{ role: 'intro', text: '你好。你可以描述你正在考虑的事情，我会用这个演示中的预设资料帮助拆解问题。请勿输入真实身份信息。' }]);
  const [summary, setSummary] = useState(summaryFields);
  const [toast, setToast] = useState('');
  const topic = topics.find((entry) => entry.id === topicId) || topics[0];

  const showToast = (message) => { setToast(message); window.clearTimeout(showToast.timer); showToast.timer = window.setTimeout(() => setToast(''), 2400); };
  const open = (pane, selectedTopic = null) => { if (selectedTopic) setTopicId(selectedTopic); setActivePane(pane); setLayout('single'); setPage('workspace'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const ask = (question) => { setMessages((items) => [...items, { role: 'user', text: question }, { role: 'answer' }]); open('ai'); };
  const sendChat = (question) => setMessages((items) => [...items, { role: 'user', text: question }, { role: 'answer' }]);
  const chooseTopic = (id) => { setTopicId(id); setActivePane('hub'); if (layout === 'single') setLayout('single'); };
  const home = () => { setPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return <div className="shell" id="app">
    <Header onHome={home} onOpen={open}/>
    {page === 'home' ? <><HomePage onOpen={open} onAsk={ask}/><footer className="footer" id="home-footer"><span><strong>FASS3999 · Research Prototype</strong>　仅用于概念演示，不提供真实服务。</span><span>如有即时危险，请联系当地紧急服务或专业支持机构。</span></footer></> : <Workspace activePane={activePane} setActivePane={setActivePane} layout={layout} setLayout={setLayout} topic={topic} onTopic={chooseTopic} messages={messages} onSend={sendChat} summary={summary} setSummary={setSummary} onHome={home} onToast={showToast}/>}
    <div className={`toast ${toast ? 'show' : ''}`} role="status" aria-live="polite">{toast}</div>
  </div>;
}
