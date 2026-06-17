import {
  ArrowRight,
  BrainCircuit,
  Cpu,
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
import { motion } from "framer-motion";

const projects = [
  {
    title: "NCHC Agent Backend",
    category: "Agent Infrastructure",
    description:
      "A backend architecture for planner-driven AI agents, service orchestration, and production-minded tool execution.",
    tags: ["Django", "Python", "Agents", "APIs"]
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
    tags: ["NLP", "RAG", "Healthcare", "Data UX"]
  },
  {
    title: "OpenWebUI Deployment",
    category: "Self-hosted AI",
    description:
      "Local and cloud-connected AI interface deployment with tunnels, model endpoints, and secure operational patterns.",
    tags: ["OpenWebUI", "Cloudflare", "Docker", "LLM Ops"]
  },
  {
    title: "Future Game Lab",
    category: "Interactive Experiments",
    description:
      "A future shelf for playable systems, narrative prototypes, world interfaces, and AI-assisted game mechanics.",
    tags: ["Game Lab", "Prototype", "Systems", "Unity"]
  }
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
  return (
    <main className="min-h-screen overflow-hidden bg-rec-black text-rec-bone selection:bg-rec-blue selection:text-rec-black">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(88,166,255,.18),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(141,107,255,.18),transparent_30%),linear-gradient(145deg,#050506_0%,#0b0c10_52%,#050506_100%)]" />
      <div className="fixed inset-0 -z-10 bg-fine-grid bg-[size:72px_72px] opacity-45 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <a className="font-mono text-xs uppercase tracking-[0.34em] text-rec-pearl" href="#top">
          recovian.ai
        </a>
        <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.28em] text-rec-steel md:flex">
          <a className="transition hover:text-rec-bone" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-rec-bone" href="#systems">
            Systems
          </a>
          <a className="transition hover:text-rec-bone" href="#about">
            About
          </a>
        </nav>
      </header>

      <section id="top" className="relative mx-auto grid min-h-[calc(100vh-84px)] max-w-7xl px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-12">
        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }}>
          <motion.p variants={fadeUp} className="mb-5 font-mono text-xs uppercase tracking-[0.38em] text-rec-blue">
            Portfolio / AI Lab / Digital Atelier
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="max-w-5xl text-[clamp(4.7rem,16vw,13rem)] font-black uppercase leading-[0.76] text-rec-bone"
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
          className="relative mt-14 min-h-[430px] lg:mt-0"
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
              <div className="border border-white/12 bg-black/28 p-4">
                <TerminalSquare className="mb-8 h-5 w-5 text-rec-blue" />
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-rec-steel">
                  Build Mode
                </p>
                <p className="mt-2 text-2xl font-semibold">Agentic</p>
              </div>
              <div className="border border-white/12 bg-black/28 p-4">
                <Sparkles className="mb-8 h-5 w-5 text-rec-violet" />
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-rec-steel">
                  Studio Signal
                </p>
                <p className="mt-2 text-2xl font-semibold">Futures</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionLabel title="Featured Projects" code="01 / Selected Work" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.06 }}
              className="group min-h-[340px] border border-white/12 bg-white/[0.045] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-rec-blue/45 hover:bg-white/[0.075]"
            >
              <div className="mb-12 flex items-start justify-between gap-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-rec-blue">
                  {project.category}
                </p>
                <ArrowRight className="h-4 w-4 text-rec-steel transition group-hover:translate-x-1 group-hover:text-rec-bone" />
              </div>
              <h3 className="text-3xl font-semibold leading-tight text-white">{project.title}</h3>
              <p className="mt-5 text-sm leading-7 text-rec-pearl">{project.description}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="border border-white/12 bg-black/30 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-rec-pearl">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
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

      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionLabel title="About Choyer Huang" code="03 / Profile" />
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
            Recovian / recovian.ai
          </p>
          <div className="flex flex-wrap gap-3">
            <FooterLink icon={Github} label="GitHub" href="https://github.com/your-handle" />
            <FooterLink icon={Linkedin} label="LinkedIn" href="https://linkedin.com/in/your-handle" />
            <FooterLink icon={Mail} label="Email" href="mailto:hello@recovian.ai" />
            <FooterLink icon={ArrowRight} label="Resume" href="#" />
          </div>
        </div>
      </footer>
    </main>
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
