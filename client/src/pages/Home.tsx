/* Terminal Editorial: narrativa assimétrica, sinais operacionais e tipografia técnica para apresentar a experiência da Roberta. */
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const experience = [
  {
    date: "AGO 2025 — ABR 2026",
    role: "Técnico de Suporte I",
    company: "TIVIT · Cliente White Martins",
    place: "Rio de Janeiro, RJ",
    summary: "Suporte N1/N2 a utilizadores corporativos e ambientes críticos, com escalonamento N3 para incidentes complexos.",
    tags: ["ServiceNow", "SLA", "Hardware & software"],
  },
  {
    date: "JAN 2022 — JUL 2025",
    role: "Analista de Suporte Técnico VIP",
    company: "Stefanini Group · Cliente TV Globo",
    place: "Rio de Janeiro, RJ",
    summary: "Atendimento dedicado N2/N3 à Presidência e Direcção Executiva, gestão de incidentes críticos e suporte a ambientes ao vivo.",
    tags: ["Atendimento VIP", "N2/N3", "Gestão de incidentes"],
  },
  {
    date: "NOV 2020 — DEZ 2021",
    role: "Analista de Suporte Técnico",
    company: "Facillite",
    place: "Rio de Janeiro, RJ",
    summary: "Atendimento remoto e presencial para grandes empresas, cobrindo sistemas de gestão, ferramentas corporativas e infraestrutura.",
    tags: ["Remoto & presencial", "Infraestrutura", "Diagnóstico"],
  },
  {
    date: "ABR 2018 — JUL 2020",
    role: "Suporte Técnico Help Desk",
    company: "Full Tech",
    place: "Rio de Janeiro, RJ",
    summary: "Suporte N1/N2/N3 a automação comercial, implantação de sistemas fiscais, certificados digitais e formação de utilizadores.",
    tags: ["PDV", "Sistemas fiscais", "Formação"],
  },
];

const skills = [
  { label: "Suporte multilível", value: "N1 · N2 · N3", icon: Network },
  { label: "Ambientes", value: "Windows · Linux", icon: ShieldCheck },
  { label: "Ferramentas", value: "SAP · ServiceNow", icon: Sparkles },
  { label: "Especialidade", value: "PDV · Fiscal", icon: Check },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    ["sobre", "Sobre"],
    ["experiencia", "Experiência"],
    ["competencias", "Competências"],
    ["contacto", "Contacto"],
  ];

  const handleNav = (id: string) => {
    scrollToId(id);
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-paper text-ink">
      <aside className="site-rail">
        <a className="brand-mark" href="#top" aria-label="Ir para o início">
          <img src="/manus-storage/roberta-rr-monogram_ab96d48c.png" alt="" />
          <span>RR<span className="brand-dot">.</span></span>
        </a>
        <div className="rail-rule" />
        <nav className="rail-index" aria-label="Índice do portefólio">
          {[["01", "sobre"], ["02", "experiencia"], ["03", "competencias"], ["04", "contacto"]].map(([number, id]) => <button key={id} onClick={() => handleNav(id)} aria-label={`Ir para ${id}`}><span>{number}</span><i /></button>)}
        </nav>
        <span className="rail-label">PORTFÓLIO / 2026</span>
        <span className="rail-location">AC · BRASIL</span>
      </aside>

      <div className="site-shell" id="top">
        <header className="topbar">
          <div className="topbar-status"><span className="status-dot" /> Disponível para novas oportunidades</div>
          <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav className={menuOpen ? "topnav is-open" : "topnav"} aria-label="Navegação principal">
            {navItems.map(([id, label]) => <button key={id} onClick={() => handleNav(id)}>{label}</button>)}
            <a className="nav-contact" href="mailto:robertarsantos89@gmail.com">Falar comigo <ArrowUpRight size={15} /></a>
          </nav>
        </header>

        <section className="hero-section section-pad" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span>01</span> PROFISSIONAL DE TI / SUPORTE TÉCNICO <b className="coordinate">RB-AC / 00.03</b></p>
            <h1 id="hero-title">Sistemas estáveis.<br /><em>Pessoas</em> bem<br />acompanhadas<span className="punctuation">.</span></h1>
            <p className="hero-intro">Sou Roberta Ribeiro, profissional de Tecnologia da Informação especializada em suporte técnico, ambientes críticos e atendimento que resolve.</p>
            <div className="hero-actions">
              <button className="button-primary" onClick={() => scrollToId("experiencia")}>Ver percurso <ArrowUpRight size={17} /></button>
              <a className="button-text" href="mailto:robertarsantos89@gmail.com">Entrar em contacto <span>↗</span></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-frame">
              <img src="/manus-storage/roberta-hero-network_41f4e45b.png" alt="Composição editorial abstracta de uma rede técnica" />
              <div className="visual-caption"><span>FIG. 01</span><span>NETWORK / SUPPORT / CARE</span></div>
            </div>
            <div className="hero-note"><span className="mono">STATUS: ONLINE</span><br />Diagnóstico claro<br />do primeiro contacto<br />à solução.<span className="note-seal">RR</span></div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Resumo profissional">
          <div className="signal-item"><span className="signal-number">08</span><span>Anos de experiência<br /><small>em suporte técnico</small></span></div>
          <div className="signal-item"><span className="signal-number">N1 → N3</span><span>Escala de suporte<br /><small>do utilizador ao crítico</small></span></div>
          <div className="signal-item"><span className="signal-number">24/7</span><span>Ritmo operacional<br /><small>com foco em continuidade</small></span></div>
          <div className="strip-arrow"><ChevronDown size={22} /></div>
        </section>

        <section className="about-section section-pad" id="sobre" aria-labelledby="about-title">
          <div className="section-index"><span>02</span><span>CONTEXTO</span><b>FIELD NOTE / 02</b></div>
          <div className="about-grid">
            <div><p className="eyebrow">O que trago para a equipa</p><h2 id="about-title">Tecnologia é<br /><span>confiança</span> em<br />movimento.</h2></div>
            <div className="about-text"><p>Ao longo da minha experiência, aprendi que um bom suporte não é apenas resolver um chamado. É ouvir com atenção, diagnosticar com método e devolver tranquilidade a quem precisa de continuar a trabalhar.</p><p>Actuo entre pessoas, ferramentas e processos: conecto o problema real à solução certa, sem perder de vista o contexto de negócio e a experiência do utilizador.</p><div className="about-signature"><span>RR</span><span>SUPORTE COM<br />CLAREZA E PRESENÇA</span></div></div>
          </div>
        </section>

        <section className="experience-section section-pad" id="experiencia" aria-labelledby="experience-title">
          <div className="section-heading"><div className="section-index"><span>03</span><span>TRAJECTÓRIA</span><b>LOG / EXPERIENCE</b></div><h2 id="experience-title">Experiência que<br /><em>mantém tudo a funcionar.</em></h2><p>Uma carreira construída em ambientes onde continuidade, precisão e resposta humana fazem diferença.</p></div>
          <div className="timeline">{experience.map((item, index) => <article className="timeline-item" key={item.role}><div className="timeline-marker">0{index + 1}</div><div className="timeline-date">{item.date}</div><div className="timeline-content"><h3>{item.role}</h3><p className="company">{item.company} <span>·</span> {item.place}</p><p>{item.summary}</p><div className="tag-row">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
        </section>

        <section className="skills-section section-pad" id="competencias" aria-labelledby="skills-title">
          <div className="skills-art"><img src="/manus-storage/roberta-systems-grid_72d4c4a1.png" alt="Mapa abstracto de sistemas e conexões" /><span className="art-label">FIG. 02 / SYSTEMS MAP</span></div>
          <div className="skills-content"><div className="section-index"><span>04</span><span>CAPACIDADES</span><b>TOOLKIT / ACTIVE</b></div><h2 id="skills-title">Ferramentas para<br /><em>descomplicar.</em></h2><p className="skills-lead">Da primeira análise à estabilização do ambiente, trabalho com uma visão prática, estruturada e orientada para a continuidade.</p><div className="skill-list">{skills.map(({ label, value, icon: Icon }) => <div className="skill-row" key={label}><Icon size={19} /><span>{label}</span><strong>{value}</strong><ArrowUpRight size={16} /></div>)}</div><div className="certifications"><span className="mono">CERTIFICAÇÕES</span><div><span>ITIL</span><span>CIBERSEGURANÇA</span></div></div></div>
        </section>

        <section className="continuity-section section-pad"><div className="continuity-bg"><img src="/manus-storage/roberta-incident-path_27ce0b71.png" alt="Percurso abstracto de resposta a incidentes" /></div><div className="continuity-content"><p className="eyebrow light"><span>05</span> PRINCÍPIO DE TRABALHO</p><h2>Todo incidente<br />tem um caminho<br /><em>até à calma.</em></h2><p>Diagnóstico, comunicação e acompanhamento: três pontos que transformam suporte técnico numa experiência de confiança.</p></div><div className="continuity-stamp"><Clock3 size={18} /><span>FOCO EM<br />CONTINUIDADE</span></div></section>

        <section className="contact-section section-pad" id="contacto" aria-labelledby="contact-title"><div className="section-index"><span>06</span><span>PRÓXIMO PASSO</span><b>CHANNEL / OPEN</b></div><div className="contact-layout"><div><h2 id="contact-title">Vamos resolver<br /><em>o próximo desafio?</em></h2><p>Se procura uma profissional de suporte técnico com método, presença e visão operacional, estou disponível para conversar.</p></div><div className="contact-links"><a href="mailto:robertarsantos89@gmail.com"><span><Mail size={19} /> E-mail</span><strong>robertarsantos89@gmail.com</strong><ArrowUpRight /></a><a href="tel:689971-0210"><span><Phone size={19} /> Telefone</span><strong>689971-0210</strong><ArrowUpRight /></a><div className="contact-meta"><MapPin size={17} /> Rio Branco, AC — Brasil</div></div></div></section>

        <footer className="footer"><div><span className="footer-mark">RR<span>.</span></span><span>ROBERTA RIBEIRO / PORTFÓLIO DE TI</span></div><div><span>© 2026</span><a href="#top">Voltar ao topo <ArrowUpRight size={14} /></a></div></footer>
      </div>
    </main>
  );
}
