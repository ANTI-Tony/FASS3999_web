import { useMemo, useState } from 'react';
import { icons, summaryFields, topics } from './data.jsx';

const topicByTitle = Object.fromEntries(topics.map((topic) => [topic.title, topic]));

function Icon({ name, className = '' }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>;
}

function ExitButton() {
  return <button className="exit" onClick={() => window.location.replace('about:blank')}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"/></svg>Quick Exit</button>;
}

function Header({ onHome, onOpen }) {
  return <header className="topbar">
    <a href="#home" className="brand" aria-label="Beyond Stay or Leave home" onClick={(event) => { event.preventDefault(); onHome(); }}>
      <span className="brand-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 20s-7-4.3-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 19 10c0 5.7-7 10-7 10Z"/><path d="M8 12h2l1.2-2.2 2 4.4 1.1-2.2H16"/></svg></span>
      <span><span className="brand-name">Beyond Stay or Leave</span><span className="brand-sub">Information · Understanding · Support</span></span>
    </a>
    <nav className="top-actions" aria-label="Main navigation"><button className="toplink" onClick={() => onOpen('hub')}>Information Hub</button><button className="toplink" onClick={() => onOpen('ai')}>AI Navigator</button><button className="toplink" onClick={() => onOpen('summary')}>My Case Summary</button><ExitButton /></nav>
  </header>;
}

function HomePage({ onOpen, onAsk }) {
  const [question, setQuestion] = useState('');
  const ask = (event) => { event.preventDefault(); onAsk(question.trim() || 'I am considering moving to another city with my 8-year-old daughter because my husband knows where we live. She would need to change schools, and he says I cannot take her without permission.'); };
  const fill = (value) => setQuestion(value);
  return <main id="home">
    <section className="intro"><div><div className="eyebrow">A place to find your next clear step</div><h1>Understand the changes your child may face.<br/>Then decide what to do next.</h1><p>Find information, understand complex questions and organise support notes in one place.</p></div><div className="demo-note"><span className="demo-dot"/>Research prototype · fictional scenarios · no real data collected</div></section>
    <section className="section" aria-labelledby="hub-heading"><div className="section-head"><div><div className="eyebrow">01 · Verified Information Hub</div><h2 id="hub-heading">I want to understand what changes my child may face</h2><p className="section-sub">Start with one topic and explore how it connects to others.</p></div><span className="count">6 topics</span></div>
      <div className="hub-grid">{topics.map((topic) => <button className="hub-card" key={topic.id} onClick={() => onOpen('hub', topic.id)}><span className="card-top"><span className="icon"><Icon name={topic.id}/></span><span className="arrow">↗</span></span><strong>{topic.title}</strong><small>{topic.short}</small></button>)}</div>
    </section>
    <section className="section navigator" aria-labelledby="ai-heading"><div className="section-head"><div className="nav-title"><span className="icon"><Icon name="navigator"/></span><div><div className="eyebrow">02 · AI Information Navigator</div><h2 id="ai-heading">I have a specific question</h2><p className="section-sub">Break down questions, connect reviewed information and find relevant support.</p></div></div></div>
      <div className="suggestions"><button className="chip" onClick={() => fill('我想带 8 岁的女儿搬去别的城市，可能需要转学，也担心现在的 parenting orders。')}>Moving with a child and changing schools</button><button className="chip" onClick={() => fill('My child’s emotions have changed a lot lately. Where can I find support?')}>Children’s emotions and support</button><button className="chip" onClick={() => fill('我需要暂时离开现在的住处，但不知道可以联系哪些Housing服务。')}>临时Housing与安全</button></div>
      <form className="askbox" onSubmit={ask}><textarea rows="1" placeholder="Enter your question…" aria-label="Enter your question" value={question} onChange={(event) => setQuestion(event.target.value)}/><button className="send" aria-label="Send question"><SendIcon/></button></form>
    </section>
    <section className="section" aria-labelledby="case-heading"><div className="section-head"><div><div className="eyebrow">03 · My Case Summary</div><h2 id="case-heading">I have started contacting services and want to organise my information</h2><p className="section-sub">Keep a summary you have confirmed, then prepare tailored drafts when needed.</p></div></div>
      <div className="case-card"><div className="case-copy"><span className="icon"><Icon name="document"/></span><div><h3>My Case Summary</h3><p>The demo workspace uses fictional information; you confirm any changes.</p></div></div><div className="case-buttons"><button className="primary" onClick={() => onOpen('summary')}>Open Workspace <span aria-hidden="true">→</span></button></div></div>
      <details className="privacy"><summary>How my information is handled</summary><div className="privacy-content"><p>This is a research prototype. The demo uses fictional scenarios in this browser only; it does not connect to an AI service, send input to an organisation, or provide secure storage, encryption or deletion for real cases. Do not enter real names, addresses, schools or family violence experiences.</p><p>AI Navigator and My Case Summary do not share records. Summary changes apply only after you choose “Confirm changes”. Message drafts can be reviewed, edited and copied, and are never sent automatically. Demo input is not saved after you leave the page.</p><p><strong>Quick Exit</strong>leaves this page but cannot clear browser history or prevent device monitoring.</p></div></details>
    </section>
  </main>;
}

function SendIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m4 12 16-8-5 16-3-7-8-1Z"/><path d="m12 13 4-4"/></svg>;
}

function ArticlePane({ topic, onTopic }) {
  return <article className="pane pane-active"><div className="pane-head"><div><div className="eyebrow">VERIFIED INFORMATION HUB</div><h2>{topic.title}</h2></div></div><div className="pane-body">
    <div className="article-kicker">{topic.en}</div><h1 className="article-title">{topic.title}</h1><p className="article-lede">{topic.lede}</p>
    <div className="article-section"><h3>What is this about?</h3><p>{topic.what}</p></div><div className="article-section"><h3>What can I check?</h3><p>{topic.options}</p></div>
    <div className="article-section"><h3>Related topics</h3><div className="related">{topic.links.map((label) => <button key={label} onClick={() => onTopic(topicByTitle[label].id)}>{label} →</button>)}</div></div>
    <div className="article-section"><h3>Official and specialist sources</h3><div className="source-list">{topic.sources.map(([label, url]) => <a href={url} target="_blank" rel="noreferrer" key={url}>{label} ↗</a>)}</div></div>
    <span className="review-stamp">Source links are illustrative · Content requires professional review · October 2026</span>
  </div></article>;
}

function AnswerCard({ onTopic }) {
  return <div className="bubble assistant">
    <div className="answer-title">Let’s separate the related questions</div>
    <div className="answer-block"><strong>1 · You may be considering</strong><p>现有 parenting orders 或其他安排、孩子转学与生活连续性，以及你和孩子的安全与支持需求。</p></div>
    <div className="answer-block"><strong>2 · Start with these topics</strong><p><button className="text-link" onClick={() => onTopic('law')}>Family Law & Parenting →</button>　<button className="text-link" onClick={() => onTopic('education')}>Education & Care →</button>　<button className="text-link" onClick={() => onTopic('safety')}>Child Safety →</button></p></div>
    <div className="answer-block"><strong>3 · How these issues connect</strong><p>If parenting orders are in place, a move may relate to existing arrangements. Moving can also affect school, transport and daily care. Checking the orders and asking legal services, the school and a specialist safety service can help clarify how these issues connect.<a href="https://www.fcfcoa.gov.au/fl/children/parenting-orders" target="_blank" rel="noreferrer">Court information about parenting orders</a> · <a href="https://education.nsw.gov.au/schooling/parents-and-carers/going-to-school/enrolment" target="_blank" rel="noreferrer">NSW school enrolment information</a></p></div>
    <div className="answer-block"><strong>4 · What cannot be determined from this description</strong><p>Whether a move is permitted, what an order means in your situation, whether a school has places and your current risk level all need to be checked by professionals who understand the circumstances. This response cannot determine whether you can move.</p></div>
    <div className="answer-block"><strong>5 · Services you can ask for support</strong><p><b>Legal Aid NSW</b>：Ask about existing orders and legal issues related to a relocation plan.<br/><b>1800RESPECT · 1800 737 732</b>：Discuss family violence support, safety planning and referrals; this is not an emergency response service.<br/><b>The prospective school</b>：Ask about enrolment, available places and student wellbeing support.</p></div>
    <div className="review-stamp">Scripted demo response · No AI used · Information needs professional review</div>
  </div>;
}

function AIPane({ messages, onSend, onTopic }) {
  const [value, setValue] = useState('');
  const submit = (event) => { event.preventDefault(); if (!value.trim()) return; onSend(value.trim()); setValue(''); };
  return <article className="pane pane-active"><div className="pane-head"><div><div className="eyebrow">AI INFORMATION NAVIGATOR</div><h2>Work through a specific question</h2></div></div><div className="pane-body"><div className="chat-wrap"><div className="chat-scroll">
    {messages.map((message, index) => message.role === 'user' ? <div className="bubble user" key={index}>{message.text}</div> : message.role === 'answer' ? <AnswerCard key={index} onTopic={onTopic}/> : <div className="bubble assistant" key={index}>{message.text}</div>)}
  </div><form className="chat-input" onSubmit={submit}><input value={value} onChange={(event) => setValue(event.target.value)} placeholder="Ask a follow-up…" aria-label="Ask a follow-up"/><button aria-label="发送"><SendIcon/></button></form></div></div></article>;
}

function SummaryPane({ summary, setSummary, onToast }) {
  const [mode, setMode] = useState('update');
  const [value, setValue] = useState('');
  const [proposed, setProposed] = useState('');
  const [history, setHistory] = useState(['Version 1 · Initial fictional summary']);
  const [draft, setDraft] = useState('');
  const [version, setVersion] = useState(1);

  const sendAction = () => {
    const request = value.trim();
    if (!request) { onToast('Enter a demo note first.'); return; }
    if (mode === 'update') {
      setProposed(`User reports: ${request}`);
      onToast('Proposed addition is ready for review');
      return;
    }
    const recipient = /school|school staff/.test(request) ? 'School' : /1800|family violence|safety service/.test(request) ? 'family violence support service' : 'Legal Aid NSW';
    const focus = recipient === 'School'
      ? '孩子可能需要转学，我想了解入学流程、是否有名额，以及School可以提供哪些 wellbeing 支持。'
      : recipient === 'family violence support service'
        ? 'I am thinking about safety and living arrangements for my child and me. I would like to discuss safety planning and support options.'
        : 'I am considering moving to another city with my 8-year-old daughter. We need to check our current arrangements and whether parenting orders exist. I would like to understand the legal issues that may relate to a move.';
    setDraft(`Hello, I would like advice about arrangements for my child.\n\n${focus}\n\nMy main concern is how to consider my child’s stability and safety together. What should I check next in my circumstances, and what support may be available?\n\nThank you.`);
    setValue('');
  };

  const confirm = () => {
    if (!proposed) return;
    const next = summary.map(([label, text]) => label === 'Service Contact History'
      ? [label, 'User reports: 今天联系了法律咨询机构，对方建议先确认是否有 parenting orders。']
      : label === 'Outstanding Questions'
        ? [label, 'Relocation legal questions remain unresolved; check whether parenting orders exist.']
        : [label, text]);
    setSummary(next);
    setVersion(2);
    setHistory((items) => [...items, 'Version 2 · Confirmed update: contacted a legal advice service']);
    setProposed('');
    onToast('Changes confirmed; Version 2 created');
  };

  const copy = async () => {
    try { await navigator.clipboard.writeText(draft); onToast('Draft copied'); }
    catch { onToast('Clipboard unavailable. Select and copy the draft manually.'); }
  };

  return <article className="pane pane-active"><div className="pane-head"><div><div className="eyebrow">MY CASE SUMMARY</div><h2>My Summary Workspace</h2></div></div><div className="pane-body">
    <div className="summary-banner">Privacy note: The information below is fictional. This prototype does not connect to AI or store real case information. Do not enter personal details.</div>
    <div className="summary-doc"><div className="doc-head"><div><h3>Master Summary</h3><span className="updated-note">Last updated: demo session</span></div><span className="version-pill">Version {version}</span></div>
      {summary.map(([label, text]) => <div className="doc-field" key={label}><strong>{label}</strong><p>{text}</p></div>)}
      {proposed && <div className="proposed"><em>Proposed addition · Awaiting confirmation</em>{proposed}<div className="change-actions"><button className="confirm" onClick={confirm}>Confirm changes</button><button className="discard" onClick={() => { setProposed(''); onToast('拟议内容已Discard'); }}>Discard</button></div></div>}
    </div>
    <details className="summary-history"><summary>History · View version history</summary>{history.map((item) => <p key={item}>{item}</p>)}</details>
    <div className="article-section"><h3>What would you like to do?</h3><div className="mode-switch"><button className={`mode ${mode === 'update' ? 'selected' : ''}`} onClick={() => setMode('update')}>Update Information</button><button className={`mode ${mode === 'prepare' ? 'selected' : ''}`} onClick={() => setMode('prepare')}>Prepare a Message</button></div>
      <div className="chat-input"><input value={value} onChange={(event) => setValue(event.target.value)} placeholder={mode === 'update' ? 'For example: I contacted a legal advice service today. They suggested checking whether parenting orders exist…' : 'For example: I would like to ask Legal Aid NSW about moving with my child.'} aria-label="Summary action"/><button onClick={sendAction} aria-label="Submit">↗</button></div>
      {draft && <div className="message-result"><strong>Message draft · Please review</strong><div className="draft-text">{draft}</div><div className="included">Includes: family situation, relocation concerns and requested professional help. This draft uses fictional summary details and will not be sent automatically.</div><button className="copy-btn" onClick={copy}>Copy draft</button></div>}
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
    <div className="workspace-bar"><div className="workspace-links"><button className="back-btn" onClick={onHome}>← Home</button>{[['hub', 'Information Hub'], ['ai', 'AI Navigator'], ['summary', 'My Case Summary']].map(([id, label]) => <button key={id} className={`nav-tab ${activePane === id ? 'active' : ''}`} onClick={() => setActivePane(id)}>{label}</button>)}</div>
      <div className="workspace-tools"><button className={`view-btn ${layout === 'single' ? 'active' : ''}`} data-layout-btn="single" onClick={() => setLayout('single')}>Single view</button><button className={`view-btn ${layout === 'split' ? 'active' : ''}`} data-layout-btn="split" onClick={() => setLayout('split')}>Two panels</button><button className={`view-btn ${layout === 'triple' ? 'active' : ''}`} data-layout-btn="triple" onClick={() => setLayout('triple')}>Three panels</button><button className="view-btn" onClick={onHome}>Close workspace ×</button></div>
    </div>
    <div className="panes" data-layout={layout}>{['hub', 'ai', 'summary'].map((id) => <div className={`pane-slot pane-${id} ${visible.includes(id) ? '' : 'is-hidden'} ${activePane === id ? 'mobile-active' : ''}`} key={id}>{panes[id]}</div>)}</div>
    <footer className="footer"><span><strong>Research prototype · Classroom demo only</strong>　Not legal, medical or safety advice</span><span>Demo input is not saved after you leave this page.</span></footer>
  </section>;
}

export default function App() {
  const [page, setPage] = useState('home');
  const [activePane, setActivePane] = useState('hub');
  const [layout, setLayout] = useState('single');
  const [topicId, setTopicId] = useState('law');
  const [messages, setMessages] = useState([{ role: 'intro', text: 'Hello. Describe what you are considering and I will use this demo’s scripted information to help break down the question. Do not enter real identifying information.' }]);
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
    {page === 'home' ? <><HomePage onOpen={open} onAsk={ask}/><footer className="footer" id="home-footer"><span><strong>FASS3999 · Research Prototype</strong>　For concept demonstration only; no real services are provided.</span><span>If you are in immediate danger, contact local emergency services or a specialist support service.</span></footer></> : <Workspace activePane={activePane} setActivePane={setActivePane} layout={layout} setLayout={setLayout} topic={topic} onTopic={chooseTopic} messages={messages} onSend={sendChat} summary={summary} setSummary={setSummary} onHome={home} onToast={showToast}/>}
    <div className={`toast ${toast ? 'show' : ''}`} role="status" aria-live="polite">{toast}</div>
  </div>;
}
