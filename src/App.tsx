import {
  ArrowRight,
  BrainCircuit,
  ChevronDown,
  Cpu,
  ExternalLink,
  Github,
  Layers3,
  Languages,
  Linkedin,
  Mail,
  Network,
  ServerCog,
  Sparkles,
  TerminalSquare,
  Workflow
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import platformSlide01 from "./assets/nchc-agent-platform-1.png";
import platformSlide02 from "./assets/nchc-agent-platform-2.png";
import platformSlide03 from "./assets/nchc-agent-platform-3.png";
import platformSlide04 from "./assets/nchc-agent-platform-4.png";

const projects = [
  {
    title: "NCHC Agent Backend",
    category: "Agent Infrastructure",
    categoryZh: "Agent 基礎架構",
    description:
      "A disaster-response agent platform foundation combining Graph RAG governance, multimodal task loops, and controlled automation.",
    descriptionZh:
      "面向災害應變的 AI Agent 平台後端，整合 Graph RAG 知識治理、多模態任務迴圈與可控自動化執行。",
    tags: ["Graph RAG", "Agentic Loop", "Automation", "Backend"],
    tagsZh: ["Graph RAG", "Agent 迴圈", "自動化", "後端"],
    action: "toggle-nchc"
  },
  {
    title: "OpenClaw Integration",
    category: "Tooling Layer",
    categoryZh: "工具整合層",
    description:
      "Integration surface for open agent tools, routing flows, and modular assistant capabilities.",
    descriptionZh:
      "為開放式 Agent 工具、路由流程與模組化助理能力建立整合介面。",
    tags: ["OpenClaw", "Tool Routing", "Backend", "Automation"],
    tagsZh: ["OpenClaw", "工具路由", "後端", "自動化"]
  },
  {
    title: "Clinical Note Structuring Tool",
    category: "Applied ML",
    categoryZh: "應用機器學習",
    description:
      "Transforms unstructured clinical notes into structured data for downstream review and ML-assisted workflows.",
    descriptionZh:
      "將非結構化臨床筆記轉換為結構化資料，支援後續審閱與 ML 輔助流程。",
    tags: ["NLP", "RAG", "Healthcare", "Data UX"],
    tagsZh: ["NLP", "RAG", "醫療資料", "Data UX"],
    href: "https://github.com/choyerhuang/clinical-note-structuring-tool"
  },
  {
    title: "OpenWebUI Deployment",
    category: "Self-hosted AI",
    categoryZh: "自架 AI 介面",
    description:
      "Local and cloud-connected AI interface deployment with tunnels, model endpoints, and secure operational patterns.",
    descriptionZh:
      "部署本地與雲端連線的 AI 使用介面，包含 tunnel、模型端點與安全營運模式。",
    tags: ["OpenWebUI", "Cloudflare", "Docker", "LLM Ops"],
    tagsZh: ["OpenWebUI", "Cloudflare", "Docker", "LLM 維運"],
    href: "https://webui.recovian.ai/"
  },
  {
    title: "Nestoria",
    category: "Online RPG Product",
    categoryZh: "線上 RPG 產品",
    description:
      "A 2D / 2.5D mythic online RPG about rebuilding a frontier town on a floating island after the war between the Aesir and Vanir gods.",
    descriptionZh:
      "一款 2D / 2.5D 神話線上 RPG，玩家在 Aesir 與 Vanir 神戰後的浮空島上重建邊境城鎮。",
    tags: ["Golang", "PostgreSQL", "Redis", "React", "Phaser"],
    tagsZh: ["Golang", "PostgreSQL", "Redis", "React", "Phaser"],
    href: "https://nestoria.recovian.ai/world"
  },
  {
    title: "Future Game Lab",
    category: "Interactive Experiments",
    categoryZh: "互動實驗",
    description:
      "A home for playable systems, economy prototypes, narrative interfaces, and AI-assisted game experiments.",
    descriptionZh:
      "放置可遊玩系統、經濟原型、敘事介面與 AI 輔助遊戲實驗的作品區。",
    tags: ["Game Lab", "Prototype", "Systems", "Web Game"],
    tagsZh: ["遊戲實驗室", "原型", "系統", "Web Game"],
    href: "https://choyerhuang.github.io/toMonolopy_GoldMilestone/"
  }
];

const nestoriaCopy = {
  en: {
    label: "Nestoria / Mythic Online RPG",
    title: "A floating island frontier rebuilt after a divine war.",
    body:
      "Nestoria is a 2D / 2.5D online RPG set in a frontier territory torn from the continent and lifted into the sky after the war between the Aesir and Vanir gods. As the descendant of a fallen frontier lord, the player leads survivors, restores production, explores unstable ruins, and uncovers mythological rifts connecting different worlds.",
    future:
      "The project combines persistent progression, town reconstruction, real-time RPG systems, and an expandable content structure for future multiplayer and mythological events.",
    cta: "Enter World"
  },
  zh: {
    label: "Nestoria / 神話線上 RPG",
    title: "一座在神戰後被重建的浮空邊境島嶼。",
    body:
      "Nestoria 是一款 2D / 2.5D 線上 RPG，故事發生在 Aesir 與 Vanir 神戰之後。一片邊境領地被災變撕離大陸並升上天空，玩家作為殞落邊境領主的後裔，必須帶領倖存者、恢復生產、探索不穩定遺跡，並揭開連接不同世界的神話裂隙。",
    future:
      "此專案結合持久化角色成長、城鎮重建、即時 RPG 系統，以及可支援未來多人遊玩與神話事件擴充的內容架構。",
    cta: "進入世界"
  }
};

const nestoriaSystems = [
  "Player progression",
  "Inventory",
  "Combat logic",
  "NPC interaction",
  "Map exploration",
  "Town reconstruction",
  "Online world synchronization"
];

const nestoriaStack = ["React", "Phaser", "TypeScript", "Golang", "PostgreSQL", "Redis"];

const publications = [
  {
    title: "Real-time water-level forecasting using dilated causal convolutional neural networks",
    authors: "JH Wang, GF Lin, MJ Chang, IH Huang, YR Chen",
    venue: "Water Resources Management 33 (11), 3759-3780",
    citations: "80",
    year: "2019",
    href: "https://link.springer.com/article/10.1007/s11269-019-02342-4"
  },
  {
    title: "Gap-filling of surface fluxes using machine learning algorithms in various ecosystems",
    authors: "IH Huang, CI Hsieh",
    venue: "Water 12 (12), 3415",
    citations: "24",
    year: "2020",
    href: "https://www.mdpi.com/2073-4441/12/12/3415"
  },
  {
    title: "Application of hybrid machine learning model for flood hazard zoning assessments",
    authors: "JH Wang, GF Lin, YR Huang, IH Huang, CL Chen",
    venue: "Stochastic Environmental Research and Risk Assessment 37 (1), 395-412",
    citations: "19",
    year: "2023",
    href: "https://link.springer.com/article/10.1007/s00477-022-02301-3"
  },
  {
    title: "An optimal integration of multiple machine learning techniques to real-time reservoir inflow forecasting",
    authors: "IH Huang, MJ Chang, GF Lin",
    venue: "Stochastic Environmental Research and Risk Assessment 36 (6), 1541-1561",
    citations: "18",
    year: "2022",
    href: "https://link.springer.com/article/10.1007/s00477-021-02085-y"
  },
  {
    title: "Long-term flooding maps forecasting system using series machine learning and numerical weather prediction system",
    authors: "MJ Chang, IH Huang, CT Hsu, SJ Wu, JS Lai, GF Lin",
    venue: "Water 14 (20), 3346",
    citations: "9",
    year: "2022",
    href: "https://www.mdpi.com/2073-4441/14/20/3346"
  },
  {
    title: "Estimation of latent heat flux using a non-parametric method",
    authors: "CI Hsieh, CJ Chiu, IH Huang, G Kiely",
    venue: "Water 14 (21), 3474",
    citations: "8",
    year: "2022",
    href: "https://www.mdpi.com/2073-4441/14/21/3474"
  },
  {
    title: "Effects of Street Spatial Structure on Micrometeorological Condition and Air Quality - A Case Study of Taipei City",
    authors: "BS Lin, HC Chang, CW Chen, IH Huang, L Pardthaisong, CI Hsieh",
    venue: "Forests 15 (12), 2221",
    citations: "3",
    year: "2024",
    href: "https://www.mdpi.com/1999-4907/15/12/2221"
  },
  {
    title: "Estimating Ground Heat Flux from Net Radiation",
    authors: "CI Hsieh, CJ Chiu, IH Huang, S Visessri",
    venue: "Atmosphere 14 (12), 1778",
    citations: "2",
    year: "2023",
    href: "https://www.mdpi.com/2073-4433/14/12/1778"
  },
  {
    title: "Estimating canopy resistance using machine learning and analytical approaches",
    authors: "CI Hsieh, IH Huang, CT Lu",
    venue: "Water 15 (21), 3839",
    citations: "1",
    year: "2023",
    href: "https://www.mdpi.com/2073-4441/15/21/3839"
  },
  {
    title: "A novel hybrid machine learning model for flood hazard zoning assessments",
    authors: "JH Wang, GF Lin, YR Huang, IH Huang, CL Chen",
    venue: "Google Scholar listing",
    citations: "-",
    year: "2022",
    href: "https://www.researchsquare.com/article/rs-1480061/v1"
  }
];

const platformModules = [
  {
    index: "00",
    title: "Graph RAG Knowledge Governance",
    titleZh: "Graph RAG 知識治理",
    detail:
      "Scalable knowledge management pipeline for disaster-response AI agents, designed around governed retrieval and reusable domain memory.",
    detailZh:
      "為災害應變 AI Agent 建立可擴充的知識管理管線，支援受控檢索與可重用的領域記憶。"
  },
  {
    index: "01",
    title: "Multimodal Task-Oriented Agents",
    titleZh: "多模態任務型 Agent",
    detail:
      "Agentic loop architecture that moves beyond Q&A into multimodal task execution, routing, and context-aware tool use.",
    detailZh:
      "以 Agentic loop 架構從單純問答推進到多模態任務執行、路由與情境感知工具使用。"
  },
  {
    index: "02",
    title: "Controlled Execution Framework",
    titleZh: "可控執行框架",
    detail:
      "Automation layer for operational workflows, keeping agent actions structured, inspectable, and bounded.",
    detailZh:
      "面向實際作業流程的自動化層，讓 Agent 行為保持結構化、可檢查且有邊界。"
  },
  {
    index: "03",
    title: "Mandarin System Output",
    titleZh: "中文系統輸出",
    detail:
      "Mandarin-first response surface for practical deployment scenarios and human review workflows.",
    detailZh:
      "以中文為優先的回應介面，支援實際部署情境與人工審閱流程。"
  }
];

const platformSlides = [
  { src: platformSlide01, title: "Graph RAG Knowledge Governance Foundation", titleZh: "Graph RAG 知識治理基礎" },
  { src: platformSlide02, title: "Multimodal Task-Oriented Agent Architecture", titleZh: "多模態任務型 Agent 架構" },
  { src: platformSlide03, title: "AI Automation & Controlled Execution Framework", titleZh: "AI 自動化與可控執行框架" },
  { src: platformSlide04, title: "Sample Output of System", titleZh: "系統輸出範例" }
];

const systems = [
  { name: "Planner", icon: Workflow, metric: "multi-step reasoning", metricZh: "多步驟推理" },
  { name: "RAG", icon: Layers3, metric: "retrieval pipelines", metricZh: "檢索增強管線" },
  { name: "VLM", icon: BrainCircuit, metric: "vision-language flows", metricZh: "視覺語言流程" },
  { name: "Tool Routing", icon: Network, metric: "agent actions", metricZh: "Agent 工具動作" },
  { name: "Automation", icon: Cpu, metric: "repeatable workflows", metricZh: "可重複工作流" },
  { name: "Self-hosting", icon: ServerCog, metric: "tunnels and services", metricZh: "Tunnel 與自架服務" }
];

const ui = {
  en: {
    navProjects: "Projects",
    navSystems: "Systems",
    navPublications: "Publications",
    navAbout: "About",
    languageLabel: "繁中",
    heroEyebrow: "Portfolio / AI Lab / Digital Atelier",
    heroSubtitle: "AI Systems / Agentic Tools / Game Experiments",
    viewProjects: "View Projects",
    aboutCta: "About Choyer",
    liveSurface: "Live System Surface",
    buildMode: "Build Mode",
    studioSignal: "Studio Signal",
    projectsTitle: "Featured Projects",
    projectsCode: "01 / Selected Work",
    nchcLabel: "NCHC Agent Platform",
    nchcTitle: "Disaster-response AI agent backend",
    nchcDescription:
      "Portfolio content adapted from the uploaded AI Agent Platform deck, translated into an interactive system map for the Recovian interface.",
    module: "Module",
    systemsTitle: "Lab / Systems",
    systemsCode: "02 / Modular Capability Grid",
    online: "online",
    publicationsCode: "03 / Google Scholar",
    publicationsTitle: "Publications",
    publicationsDescription:
      "Peer-reviewed work across hydrology, environmental sensing, flood modeling, and applied machine learning.",
    citations: "Citations",
    citationValue: "164 total / 153 since 2021",
    hIndex: "h-index",
    hIndexValue: "6 total / 6 since 2021",
    i10Index: "i10-index",
    i10Value: "4 total / 4 since 2021",
    tableTitle: "Title",
    tableVenue: "Venue",
    tableCited: "Cited",
    tableYear: "Year",
    aboutTitle: "About Choyer Huang",
    aboutCode: "04 / Profile",
    aboutHeadline: "Building practical AI systems with an experimental studio edge.",
    education: "Education",
    focus: "Focus",
    focusValue: "AI agents, backend systems, automation, ML applications",
    aboutBody:
      "Recovian is a living portfolio for agent systems, OpenWebUI demos, backend infrastructure, retrieval workflows, and future game experiments. The site is designed as a product surface: quiet, spatial, technical, and ready to expand as new projects ship."
  },
  zh: {
    navProjects: "作品",
    navSystems: "系統",
    navPublications: "發表",
    navAbout: "關於",
    languageLabel: "EN",
    heroEyebrow: "作品集 / AI 實驗室 / 數位工作室",
    heroSubtitle: "AI 系統 / Agent 工具 / 遊戲實驗",
    viewProjects: "查看作品",
    aboutCta: "關於 Choyer",
    liveSurface: "即時系統介面",
    buildMode: "建構模式",
    studioSignal: "工作室訊號",
    projectsTitle: "精選作品",
    projectsCode: "01 / Selected Work",
    nchcLabel: "NCHC Agent Platform",
    nchcTitle: "災害應變 AI Agent 後端",
    nchcDescription:
      "此內容改編自 AI Agent Platform 簡報，整理成符合 Recovian 介面的互動式系統地圖。",
    module: "模組",
    systemsTitle: "Lab / Systems",
    systemsCode: "02 / Modular Capability Grid",
    online: "online",
    publicationsCode: "03 / Google Scholar",
    publicationsTitle: "發表清單",
    publicationsDescription:
      "橫跨水文、環境感測、淹水模擬與應用機器學習的學術發表。",
    citations: "引用數",
    citationValue: "總引用 164 / 2021 起 153",
    hIndex: "h-index",
    hIndexValue: "總計 6 / 2021 起 6",
    i10Index: "i10-index",
    i10Value: "總計 4 / 2021 起 4",
    tableTitle: "題名",
    tableVenue: "期刊 / 出處",
    tableCited: "引用",
    tableYear: "年份",
    aboutTitle: "關於 Choyer Huang",
    aboutCode: "04 / Profile",
    aboutHeadline: "以實驗工作室的視角，建構可落地的 AI 系統。",
    education: "學歷",
    focus: "專注領域",
    focusValue: "AI agents、後端系統、自動化、機器學習應用",
    aboutBody:
      "Recovian 是一個持續更新的作品集，用來展示 Agent 系統、OpenWebUI demo、後端基礎設施、檢索流程，以及未來的遊戲實驗。整體被設計成產品介面：安靜、有空間感、技術導向，並能隨新作品持續擴充。"
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function App() {
  const [isNchcOpen, setIsNchcOpen] = useState(false);
  const [isPublicationsOpen, setIsPublicationsOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "zh">("en");
  const isZh = language === "zh";
  const t = ui[language];
  const nestoria = nestoriaCopy[language];
  const localizedProjects = projects.map((project) => ({
    ...project,
    category: isZh ? project.categoryZh ?? project.category : project.category,
    description: isZh ? project.descriptionZh ?? project.description : project.description,
    tags: isZh ? project.tagsZh ?? project.tags : project.tags
  }));

  return (
    <main className="min-h-screen overflow-hidden bg-rec-black text-rec-bone selection:bg-rec-blue selection:text-rec-black">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(88,166,255,.18),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(141,107,255,.18),transparent_30%),linear-gradient(145deg,#050506_0%,#0b0c10_52%,#050506_100%)]" />
      <div className="fixed inset-0 -z-10 bg-fine-grid bg-[size:72px_72px] opacity-45 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <a className="font-mono text-xs uppercase tracking-[0.34em] text-rec-pearl" href="#top">
          Recovian Labs
        </a>
        <div className="flex items-center gap-4">
        <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.28em] text-rec-steel md:flex">
          <a className="transition hover:text-rec-bone" href="#projects">
            {t.navProjects}
          </a>
          <a className="transition hover:text-rec-bone" href="#systems">
            {t.navSystems}
          </a>
          <a className="transition hover:text-rec-bone" href="#publications">
            {t.navPublications}
          </a>
          <a className="transition hover:text-rec-bone" href="#about">
            {t.navAbout}
          </a>
        </nav>
          <button
            type="button"
            onClick={() => setLanguage((value) => (value === "en" ? "zh" : "en"))}
            className="inline-flex items-center gap-2 border border-white/12 bg-white/[0.035] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-rec-pearl transition hover:border-rec-blue/60 hover:text-white"
            aria-label="Toggle language"
          >
            <Languages className="h-3.5 w-3.5" />
            {t.languageLabel}
          </button>
        </div>
      </header>

      <section id="top" className="relative mx-auto grid min-h-[calc(100vh-84px)] max-w-7xl px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center lg:gap-10 xl:grid-cols-[minmax(0,1fr)_400px]">
        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }}>
          <motion.p variants={fadeUp} className="mb-5 font-mono text-xs uppercase tracking-[0.38em] text-rec-blue">
            {t.heroEyebrow}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="max-w-5xl text-[clamp(4.7rem,12vw,10.8rem)] font-black uppercase leading-[0.76] text-rec-bone"
          >
            Recovian
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-xl leading-relaxed text-rec-pearl sm:text-2xl"
          >
            {t.heroSubtitle}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a className="group inline-flex items-center justify-center gap-3 border border-rec-bone bg-rec-bone px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-rec-black transition hover:bg-white" href="#projects">
              {t.viewProjects}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a className="inline-flex items-center justify-center border border-white/18 bg-white/[0.04] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-rec-bone backdrop-blur-xl transition hover:border-rec-blue/60 hover:text-white" href="#about">
              {t.aboutCta}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          drag
          dragElastic={0.06}
          dragMomentum={false}
          whileTap={{ scale: 0.985 }}
          className="relative mt-14 min-h-[430px] w-full max-w-[420px] cursor-grab touch-none select-none justify-self-center active:cursor-grabbing lg:mt-0 lg:max-w-none"
        >
          <div className="absolute left-8 top-8 h-64 w-64 rounded-full bg-rec-blue/20 blur-3xl" />
          <div className="absolute bottom-12 right-6 h-72 w-72 rounded-full bg-rec-violet/18 blur-3xl" />
          <div className="relative h-full border border-white/14 bg-white/[0.055] p-5 shadow-glass backdrop-blur-2xl">
            <div className="mb-14 flex items-center justify-between border-b border-white/12 pb-4 font-mono text-[10px] uppercase tracking-[0.26em] text-rec-steel">
              <span>{t.liveSurface}</span>
              <span>R-01</span>
            </div>
            <div className="space-y-5">
              {["planner", "rag-index", "vlm-channel", "tool-router"].map((item, index) => (
                <div key={item} className="grid grid-cols-[88px_1fr_42px] items-center gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-rec-steel">
                    {item}
                  </span>
                  <span className="h-px bg-gradient-to-r from-rec-blue/90 via-white/28 to-transparent" />
                  <span className="font-mono text-[10px] text-rec-pearl">
                    0{index + 6}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-16 grid grid-cols-2 gap-3">
              <div className="min-w-0 border border-white/12 bg-black/28 p-4">
                <TerminalSquare className="mb-7 h-5 w-5 text-rec-blue" />
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-rec-steel">
                  {t.buildMode}
                </p>
                <p className="mt-2 text-xl font-semibold leading-tight sm:text-2xl lg:text-xl xl:text-2xl">Agentic</p>
              </div>
              <div className="min-w-0 border border-white/12 bg-black/28 p-4">
                <Sparkles className="mb-7 h-5 w-5 text-rec-violet" />
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-rec-steel">
                  {t.studioSignal}
                </p>
                <p className="mt-2 text-xl font-semibold leading-tight sm:text-2xl lg:text-xl xl:text-2xl">Futures</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionLabel title={t.projectsTitle} code={t.projectsCode} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {localizedProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              isOpen={project.action === "toggle-nchc" && isNchcOpen}
              onClick={project.action === "toggle-nchc" ? () => setIsNchcOpen((value) => !value) : undefined}
              index={index}
            />
          ))}
        </div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 grid overflow-hidden border border-white/12 bg-white/[0.035] backdrop-blur-2xl lg:grid-cols-[1.05fr_.95fr]"
        >
          <div className="p-5 sm:p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-rec-blue">
              {nestoria.label}
            </p>
            <h3 className="mt-5 max-w-4xl text-3xl font-black uppercase leading-none text-white md:text-5xl">
              {nestoria.title}
            </h3>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-rec-pearl md:text-base md:leading-8">
              {nestoria.body}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-rec-steel md:text-base md:leading-8">
              {nestoria.future}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {nestoriaStack.map((item) => (
                <span
                  key={item}
                  className="border border-white/12 bg-black/30 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-rec-pearl"
                >
                  {item}
                </span>
              ))}
            </div>
            <a
              href="https://nestoria.recovian.ai/world"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 border border-rec-bone bg-rec-bone px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-rec-black transition hover:bg-white"
            >
              {nestoria.cta}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="relative min-h-[430px] border-t border-white/10 bg-black/30 p-5 lg:border-l lg:border-t-0">
            <div className="absolute inset-0 bg-fine-grid bg-[size:44px_44px] opacity-30" />
            <div className="absolute left-1/2 top-12 h-48 w-48 -translate-x-1/2 rounded-full bg-rec-violet/20 blur-3xl" />
            <div className="relative flex h-full min-h-[390px] flex-col justify-between">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-rec-steel">
                <span>World Node</span>
                <span>N-01</span>
              </div>
              <div className="mx-auto w-full max-w-md">
                <div className="relative mx-auto h-48 w-72 sm:w-80">
                  <div className="absolute left-8 top-8 h-28 w-56 skew-x-[-14deg] border border-rec-blue/50 bg-[linear-gradient(135deg,rgba(88,166,255,.26),rgba(255,255,255,.06)_42%,rgba(141,107,255,.18))] shadow-glow" />
                  <div className="absolute left-16 top-2 h-16 w-36 border border-white/18 bg-white/[0.08] backdrop-blur-xl" />
                  <div className="absolute left-24 top-16 h-10 w-10 border border-rec-bone/70 bg-rec-bone/80" />
                  <div className="absolute left-48 top-14 h-14 w-16 border border-rec-violet/60 bg-rec-violet/20" />
                  <div className="absolute left-5 top-24 h-16 w-20 border border-rec-blue/50 bg-rec-blue/15" />
                  <div className="absolute bottom-0 left-20 h-16 w-40 skew-x-[18deg] border border-white/12 bg-black/60" />
                  <div className="absolute bottom-[-18px] left-28 h-10 w-28 rounded-full bg-rec-blue/20 blur-xl" />
                </div>
                <div className="mt-8 grid grid-cols-2 gap-2">
                  {nestoriaSystems.map((item) => (
                    <div key={item} className="border border-white/10 bg-black/35 px-3 py-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-rec-pearl">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-rec-steel">
                Floating Island / Persistent State / Mythic Rifts
              </div>
            </div>
          </div>
        </motion.article>

        <AnimatePresence initial={false}>
          {isNchcOpen ? (
            <motion.div
              id="nchc-platform"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28 }}
              className="mt-6 border border-rec-blue/35 bg-white/[0.035] p-5 backdrop-blur-2xl sm:p-7"
            >
              <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-rec-blue">
                    {t.nchcLabel}
                  </p>
                  <h3 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-none text-white md:text-5xl">
                    {t.nchcTitle}
                  </h3>
                </div>
                <p className="max-w-md text-sm leading-7 text-rec-pearl">
                  {t.nchcDescription}
                </p>
              </div>
              <div className="mt-6 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
                {platformModules.map((module) => (
                  <div key={module.title} className="bg-rec-black p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-rec-steel">
                      {t.module} {module.index}
                    </p>
                    <h4 className="mt-8 text-xl font-semibold leading-tight text-white">{isZh ? module.titleZh : module.title}</h4>
                    <p className="mt-4 text-sm leading-7 text-rec-pearl">{isZh ? module.detailZh : module.detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {platformSlides.map((slide) => (
                  <figure key={slide.title} className="overflow-hidden border border-white/12 bg-black/40">
                    <img src={slide.src} alt={isZh ? slide.titleZh : slide.title} className="aspect-[16/10] w-full bg-white object-contain" loading="lazy" />
                    <figcaption className="border-t border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-rec-steel">
                      {isZh ? slide.titleZh : slide.title}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </section>

      <section id="systems" className="border-y border-white/10 bg-white/[0.025] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionLabel title={t.systemsTitle} code={t.systemsCode} />
          <div className="mt-10 grid gap-px overflow-hidden border border-white/12 bg-white/12 md:grid-cols-2 lg:grid-cols-3">
            {systems.map((system) => {
              const Icon = system.icon;
              return (
                <div key={system.name} className="bg-rec-black p-6 transition hover:bg-[#101116]">
                  <div className="flex items-start justify-between">
                    <Icon className="h-6 w-6 text-rec-blue" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-rec-steel">
                      {t.online}
                    </span>
                  </div>
                  <h3 className="mt-14 text-3xl font-semibold">{system.name}</h3>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-rec-steel">
                    {isZh ? system.metricZh : system.metric}
                  </p>
                  <div className="mt-8 h-1 bg-white/10">
                    <div className="h-full w-2/3 bg-gradient-to-r from-rec-blue to-rec-violet" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="publications" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <button
          type="button"
          onClick={() => setIsPublicationsOpen((value) => !value)}
          aria-expanded={isPublicationsOpen}
          aria-controls="publications-panel"
          className="group w-full text-left"
        >
          <div className="flex flex-col gap-6 border border-white/12 bg-white/[0.035] p-5 backdrop-blur-xl transition hover:border-rec-blue/45 hover:bg-white/[0.055] sm:p-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-rec-blue">
                {t.publicationsCode}
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-none text-white md:text-6xl">
                {t.publicationsTitle}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <p className="max-w-md text-sm leading-7 text-rec-pearl">
                {t.publicationsDescription}
              </p>
              <ChevronDown className={`h-5 w-5 shrink-0 text-rec-blue transition ${isPublicationsOpen ? "rotate-180" : ""}`} />
            </div>
          </div>
        </button>
        <AnimatePresence initial={false}>
          {isPublicationsOpen ? (
            <motion.div
              id="publications-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
            >
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <InfoBlock label={t.citations} value={t.citationValue} />
                <InfoBlock label={t.hIndex} value={t.hIndexValue} />
                <InfoBlock label={t.i10Index} value={t.i10Value} />
              </div>
              <div className="mt-6 overflow-hidden border border-white/12 bg-white/[0.035] backdrop-blur-xl">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[900px] border-collapse text-left">
                    <thead>
                      <tr className="border-b border-white/12 font-mono text-[10px] uppercase tracking-[0.24em] text-rec-steel">
                        <th className="px-5 py-4 font-medium">{t.tableTitle}</th>
                        <th className="px-5 py-4 font-medium">{t.tableVenue}</th>
                        <th className="px-5 py-4 text-right font-medium">{t.tableCited}</th>
                        <th className="px-5 py-4 text-right font-medium">{t.tableYear}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {publications.map((publication) => (
                        <tr key={publication.title} className="border-b border-white/8 align-top transition hover:bg-white/[0.045]">
                          <td className="max-w-xl px-5 py-5">
                            <a
                              href={publication.href}
                              target="_blank"
                              rel="noreferrer"
                              className="group/link inline-flex items-start gap-2 text-base font-semibold leading-6 text-white transition hover:text-rec-blue"
                            >
                              {publication.title}
                              <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 text-rec-steel transition group-hover/link:text-rec-blue" />
                            </a>
                            <p className="mt-2 text-sm leading-6 text-rec-steel">{publication.authors}</p>
                          </td>
                          <td className="px-5 py-5 text-sm leading-6 text-rec-pearl">{publication.venue}</td>
                          <td className="px-5 py-5 text-right font-mono text-sm text-rec-blue">{publication.citations}</td>
                          <td className="px-5 py-5 text-right font-mono text-sm text-rec-pearl">{publication.year}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionLabel title={t.aboutTitle} code={t.aboutCode} />
        <div>
          <p className="text-[clamp(2rem,5vw,5.8rem)] font-black uppercase leading-[0.92] text-white">
            {t.aboutHeadline}
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <InfoBlock label={t.education} value="USC MSCS" />
            <InfoBlock label={t.focus} value={t.focusValue} />
          </div>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-rec-pearl">
            {t.aboutBody}
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-rec-steel">
            Recovian Labs / recovian.ai
          </p>
          <div className="flex flex-wrap gap-3">
            <FooterLink icon={Github} label="GitHub" href="https://github.com/choyerhuang" />
            <FooterLink icon={Linkedin} label="LinkedIn" href="https://www.linkedin.com/in/ihanghuang/" />
            <FooterLink icon={Mail} label="Email" href="mailto:choyerhuang@gmail.com" />
            <FooterLink icon={ArrowRight} label="Resume" href="#" />
          </div>
        </div>
      </footer>
    </main>
  );
}

function ProjectCard({
  project,
  index,
  isOpen,
  onClick
}: {
  project: (typeof projects)[number];
  index: number;
  isOpen: boolean;
  onClick?: () => void;
}) {
  const isExternal = project.href?.startsWith("http");
  const Icon = project.action === "toggle-nchc" ? ChevronDown : isExternal ? ExternalLink : ArrowRight;
  const cardClass =
    "group min-h-[340px] border border-white/12 bg-white/[0.045] p-6 text-left backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-rec-blue/45 hover:bg-white/[0.075]";
  const content = (
    <>
      <div className="mb-12 flex items-start justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-rec-blue">
          {project.category}
        </p>
        <Icon
          className={`h-4 w-4 text-rec-steel transition group-hover:text-rec-bone ${
            isOpen ? "rotate-180" : "group-hover:translate-x-1"
          }`}
        />
      </div>
      <h3 className="text-3xl font-semibold leading-tight text-white">{project.title}</h3>
      <p className="mt-5 text-sm leading-7 text-rec-pearl">{project.description}</p>
      <div className="mt-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="border border-white/12 bg-black/30 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-rec-pearl"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  if (onClick) {
    return (
      <motion.button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls="nchc-platform"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: index * 0.06 }}
        className={cardClass}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <motion.a
      href={project.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.06 }}
      className={cardClass}
    >
      {content}
    </motion.a>
  );
}

function SectionLabel({ title, code }: { title: string; code: string }) {
  return (
    <div className="flex flex-col gap-4 border-l border-rec-blue/60 pl-5 md:flex-row md:items-end md:justify-between">
      <h2 className="text-4xl font-black uppercase leading-none text-white md:text-6xl">{title}</h2>
      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-rec-steel">{code}</p>
    </div>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-white/12 bg-white/[0.045] p-5 backdrop-blur-xl">
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-rec-blue">{label}</p>
      <p className="mt-4 text-lg font-semibold leading-7 text-rec-bone">{value}</p>
    </div>
  );
}

function FooterLink({
  icon: Icon,
  label,
  href
}: {
  icon: typeof Github;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 border border-white/12 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-rec-pearl transition hover:border-rec-blue/60 hover:text-white"
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </a>
  );
}

export default App;
