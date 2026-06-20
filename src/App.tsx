import {
  ArrowRight,
  BrainCircuit,
  ChevronDown,
  Cpu,
  ExternalLink,
  Github,
  Layers3,
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
    description:
      "A disaster-response agent platform foundation combining Graph RAG governance, multimodal task loops, and controlled automation.",
    tags: ["Graph RAG", "Agentic Loop", "Automation", "Backend"],
    action: "toggle-nchc"
  },
  {
    title: "OpenClaw Integration",
    category: "Tooling Layer",
    description:
      "Integration surface for open agent tools, routing flows, and modular assistant capabilities.",
    tags: ["OpenClaw", "Tool Routing", "Backend", "Automation"]
  },
  {
    title: "Clinical Note Structuring Tool",
    category: "Applied ML",
    description:
      "Transforms unstructured clinical notes into structured data for downstream review and ML-assisted workflows.",
    tags: ["NLP", "RAG", "Healthcare", "Data UX"],
    href: "https://github.com/choyerhuang/clinical-note-structuring-tool"
  },
  {
    title: "OpenWebUI Deployment",
    category: "Self-hosted AI",
    description:
      "Local and cloud-connected AI interface deployment with tunnels, model endpoints, and secure operational patterns.",
    tags: ["OpenWebUI", "Cloudflare", "Docker", "LLM Ops"],
    href: "https://webui.recovian.ai/"
  },
  {
    title: "Future Game Lab",
    category: "Interactive Experiments",
    description:
      "A home for playable systems, economy prototypes, narrative interfaces, and AI-assisted game experiments.",
    tags: ["Game Lab", "Prototype", "Systems", "Web Game"],
    href: "https://choyerhuang.github.io/toMonolopy_GoldMilestone/"
  }
];

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
    detail:
      "Scalable knowledge management pipeline for disaster-response AI agents, designed around governed retrieval and reusable domain memory."
  },
  {
    index: "01",
    title: "Multimodal Task-Oriented Agents",
    detail:
      "Agentic loop architecture that moves beyond Q&A into multimodal task execution, routing, and context-aware tool use."
  },
  {
    index: "02",
    title: "Controlled Execution Framework",
    detail:
      "Automation layer for operational workflows, keeping agent actions structured, inspectable, and bounded."
  },
  {
    index: "03",
    title: "Mandarin System Output",
    detail:
      "Mandarin-first response surface for practical deployment scenarios and human review workflows."
  }
];

const platformSlides = [
  { src: platformSlide01, title: "Graph RAG Knowledge Governance Foundation" },
  { src: platformSlide02, title: "Multimodal Task-Oriented Agent Architecture" },
  { src: platformSlide03, title: "AI Automation & Controlled Execution Framework" },
  { src: platformSlide04, title: "Sample Output of System" }
];

const systems = [
  { name: "Planner", icon: Workflow, metric: "multi-step reasoning" },
  { name: "RAG", icon: Layers3, metric: "retrieval pipelines" },
  { name: "VLM", icon: BrainCircuit, metric: "vision-language flows" },
  { name: "Tool Routing", icon: Network, metric: "agent actions" },
  { name: "Automation", icon: Cpu, metric: "repeatable workflows" },
  { name: "Self-hosting", icon: ServerCog, metric: "tunnels and services" }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function App() {
  const [isNchcOpen, setIsNchcOpen] = useState(false);
  const [isPublicationsOpen, setIsPublicationsOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-rec-black text-rec-bone selection:bg-rec-blue selection:text-rec-black">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(88,166,255,.18),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(141,107,255,.18),transparent_30%),linear-gradient(145deg,#050506_0%,#0b0c10_52%,#050506_100%)]" />
      <div className="fixed inset-0 -z-10 bg-fine-grid bg-[size:72px_72px] opacity-45 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <a className="font-mono text-xs uppercase tracking-[0.34em] text-rec-pearl" href="#top">
          Recovian Labs
        </a>
        <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.28em] text-rec-steel md:flex">
          <a className="transition hover:text-rec-bone" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-rec-bone" href="#systems">
            Systems
          </a>
          <a className="transition hover:text-rec-bone" href="#publications">
            Publications
          </a>
          <a className="transition hover:text-rec-bone" href="#about">
            About
          </a>
        </nav>
      </header>

      <section id="top" className="relative mx-auto grid min-h-[calc(100vh-84px)] max-w-7xl px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center lg:gap-10 xl:grid-cols-[minmax(0,1fr)_400px]">
        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }}>
          <motion.p variants={fadeUp} className="mb-5 font-mono text-xs uppercase tracking-[0.38em] text-rec-blue">
            Portfolio / AI Lab / Digital Atelier
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
            AI Systems / Agentic Tools / Game Experiments
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a className="group inline-flex items-center justify-center gap-3 border border-rec-bone bg-rec-bone px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-rec-black transition hover:bg-white" href="#projects">
              View Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a className="inline-flex items-center justify-center border border-white/18 bg-white/[0.04] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-rec-bone backdrop-blur-xl transition hover:border-rec-blue/60 hover:text-white" href="#about">
              About Choyer
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
              <span>Live System Surface</span>
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
                  Build Mode
                </p>
                <p className="mt-2 text-xl font-semibold leading-tight sm:text-2xl lg:text-xl xl:text-2xl">Agentic</p>
              </div>
              <div className="min-w-0 border border-white/12 bg-black/28 p-4">
                <Sparkles className="mb-7 h-5 w-5 text-rec-violet" />
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-rec-steel">
                  Studio Signal
                </p>
                <p className="mt-2 text-xl font-semibold leading-tight sm:text-2xl lg:text-xl xl:text-2xl">Futures</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionLabel title="Featured Projects" code="01 / Selected Work" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              isOpen={project.action === "toggle-nchc" && isNchcOpen}
              onClick={project.action === "toggle-nchc" ? () => setIsNchcOpen((value) => !value) : undefined}
              index={index}
            />
          ))}
        </div>

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
                    NCHC Agent Platform
                  </p>
                  <h3 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-none text-white md:text-5xl">
                    Disaster-response AI agent backend
                  </h3>
                </div>
                <p className="max-w-md text-sm leading-7 text-rec-pearl">
                  Portfolio content adapted from the uploaded AI Agent Platform deck, translated into an interactive system map for the Recovian interface.
                </p>
              </div>
              <div className="mt-6 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
                {platformModules.map((module) => (
                  <div key={module.title} className="bg-rec-black p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-rec-steel">
                      Module {module.index}
                    </p>
                    <h4 className="mt-8 text-xl font-semibold leading-tight text-white">{module.title}</h4>
                    <p className="mt-4 text-sm leading-7 text-rec-pearl">{module.detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {platformSlides.map((slide) => (
                  <figure key={slide.title} className="overflow-hidden border border-white/12 bg-black/40">
                    <img src={slide.src} alt={slide.title} className="aspect-[16/10] w-full bg-white object-contain" loading="lazy" />
                    <figcaption className="border-t border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-rec-steel">
                      {slide.title}
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
          <SectionLabel title="Lab / Systems" code="02 / Modular Capability Grid" />
          <div className="mt-10 grid gap-px overflow-hidden border border-white/12 bg-white/12 md:grid-cols-2 lg:grid-cols-3">
            {systems.map((system) => {
              const Icon = system.icon;
              return (
                <div key={system.name} className="bg-rec-black p-6 transition hover:bg-[#101116]">
                  <div className="flex items-start justify-between">
                    <Icon className="h-6 w-6 text-rec-blue" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-rec-steel">
                      online
                    </span>
                  </div>
                  <h3 className="mt-14 text-3xl font-semibold">{system.name}</h3>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-rec-steel">
                    {system.metric}
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
                03 / Google Scholar
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-none text-white md:text-6xl">
                Publications
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <p className="max-w-md text-sm leading-7 text-rec-pearl">
                Peer-reviewed work across hydrology, environmental sensing, flood modeling, and applied machine learning.
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
                <InfoBlock label="Citations" value="164 total / 153 since 2021" />
                <InfoBlock label="h-index" value="6 total / 6 since 2021" />
                <InfoBlock label="i10-index" value="4 total / 4 since 2021" />
              </div>
              <div className="mt-6 overflow-hidden border border-white/12 bg-white/[0.035] backdrop-blur-xl">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[900px] border-collapse text-left">
                    <thead>
                      <tr className="border-b border-white/12 font-mono text-[10px] uppercase tracking-[0.24em] text-rec-steel">
                        <th className="px-5 py-4 font-medium">Title</th>
                        <th className="px-5 py-4 font-medium">Venue</th>
                        <th className="px-5 py-4 text-right font-medium">Cited</th>
                        <th className="px-5 py-4 text-right font-medium">Year</th>
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
        <SectionLabel title="About Choyer Huang" code="04 / Profile" />
        <div>
          <p className="text-[clamp(2rem,5vw,5.8rem)] font-black uppercase leading-[0.92] text-white">
            Building practical AI systems with an experimental studio edge.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <InfoBlock label="Education" value="USC MSCS" />
            <InfoBlock label="Focus" value="AI agents, backend systems, automation, ML applications" />
          </div>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-rec-pearl">
            Recovian is a living portfolio for agent systems, OpenWebUI demos, backend infrastructure,
            retrieval workflows, and future game experiments. The site is designed as a product surface:
            quiet, spatial, technical, and ready to expand as new projects ship.
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
