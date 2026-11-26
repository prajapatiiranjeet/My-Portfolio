import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { projects, type Project } from "@/lib/data";

const filters = ["All projects", "AI & Data", "Backend & Tools", "Learning"] as const;
type ProjectFilter = (typeof filters)[number];

function ProjectLink({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title} repository on GitHub in a new tab`}
      className={
        featured
          ? "swiss-button group/link inline-flex min-h-12 items-center gap-3 rounded-none border border-primary bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground focus-visible:outline-none"
          : "swiss-button group/link inline-flex min-h-11 items-center gap-2 rounded-none border border-foreground px-4 py-2.5 text-sm font-semibold text-foreground focus-visible:outline-none"
      }
    >
      <span>Explore repository</span>
      <ExternalLink size={15} aria-hidden="true" />
    </a>
  );
}

function FeaturedProject({ project, reducedMotion }: { project: Project; reducedMotion: boolean }) {
  return (
    <motion.article
      layout
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
      transition={{ duration: reducedMotion ? 0 : 0.32, ease: "easeOut" }}
      className="swiss-card group relative isolate overflow-hidden rounded-none bg-transparent"
    >
      <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:p-11">
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 border-b border-primary px-0 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              <Sparkles size={14} aria-hidden="true" /> Main project
            </span>
            <span className="border-b border-claude-border px-0 py-1.5 text-xs font-medium text-claude-text-muted">In progress</span>
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-claude-text-muted">01 / {project.category}</p>
          <h3 className="max-w-xl font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {project.title}
          </h3>
          <p className="mt-5 max-w-xl text-base leading-7 text-claude-text-secondary sm:text-lg">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {project.tech.map((technology) => (
              <span key={technology} className="swiss-chip border-b border-claude-border px-0 py-1.5 font-mono text-xs text-claude-text-secondary">
                {technology}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <ProjectLink project={project} featured />
          </div>
        </div>

        <div aria-hidden="true" className="relative mx-auto flex min-h-[250px] w-full max-w-[420px] items-center justify-center overflow-hidden border-t-2 border-foreground bg-transparent p-5 sm:min-h-[300px]">
          <div className="relative z-10 w-full max-w-[300px]">
            <div className="mb-5 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-claude-text-muted">
              <span>Academic workspace</span><span>01</span>
            </div>
            <div className="border-t border-claude-border bg-transparent p-4">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="font-mono text-xs font-semibold text-foreground">AI-POWERED ERP</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-medium text-claude-text-secondary">
                {["Admin", "Faculty", "Student"].map((role) => (
                  <span key={role} className="border-b border-claude-border px-2 py-2.5">{role}</span>
                ))}
              </div>
              <div className="my-3 h-px bg-claude-border" />
              <div className="flex items-center justify-between border-b border-claude-border px-3 py-2.5">
                <span className="font-mono text-[10px] text-claude-text-secondary">SHERPAL · RAG assistant</span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </div>
            </div>
            <div className="mx-auto mt-4 h-8 w-px bg-claude-border" />
            <div className="mx-auto w-fit border-t border-claude-border px-4 py-2 font-mono text-[10px] text-claude-text-muted">PostgreSQL + PGVector</div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project, index, reducedMotion }: { project: Project; index: number; reducedMotion: boolean }) {
  return (
    <motion.article
      layout
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      transition={{ duration: reducedMotion ? 0 : 0.26, delay: reducedMotion ? 0 : Math.min(index * 0.035, 0.2), ease: "easeOut" }}
      className="swiss-card group relative flex h-full flex-col overflow-hidden rounded-none bg-transparent p-6 sm:p-7"
    >
      <div className="relative flex flex-1 flex-col">
        <div className="mb-6 flex items-center justify-between gap-3">
          <span className="font-mono text-xs font-medium tracking-[0.16em] text-claude-text-muted">{String(projects.indexOf(project) + 1).padStart(2, "0")} / 09</span>
          <span className="swiss-chip border-b border-claude-border px-0 py-1.5 text-xs font-semibold text-claude-text-secondary">{project.category}</span>
        </div>
        <h3 className="font-display text-2xl font-bold leading-tight text-foreground">{project.title}</h3>
        <p className="mt-4 flex-1 text-sm leading-6 text-claude-text-secondary">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tech.map((technology) => (
            <span key={technology} className="swiss-chip border-b border-claude-border px-0 py-1.5 mr-2 font-mono text-[11px] text-claude-text-muted">
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3 border-t border-claude-border/70 pt-5">
          <ProjectLink project={project} />
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live demo in a new tab`}
              className="swiss-button inline-flex min-h-11 items-center gap-2 rounded-none border border-claude-border px-4 py-2.5 text-sm font-semibold text-foreground focus-visible:outline-none"
            >
              <span>Live demo</span>
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All projects");
  const reducedMotion = useReducedMotion() ?? false;
  const visibleProjects = projects.filter((project) => activeFilter === "All projects" || project.category === activeFilter);
  const featuredProject = visibleProjects.find((project) => project.featured);
  const regularProjects = visibleProjects.filter((project) => !project.featured);

  return (
    <section id="projects" className="swiss-band relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="projects-heading">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">Selected work / 09 repositories</p>
            <h2 id="projects-heading" className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Built to explore <span className="text-gradient-brand">what’s possible.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-claude-text-secondary">
              From backend systems and AI retrieval to interactive learning tools—projects shaped by curiosity and hands-on engineering.
            </p>
          </div>
          <p className="text-sm font-medium text-claude-text-muted" aria-live="polite">
            Showing <span className="font-semibold text-foreground">{visibleProjects.length}</span> of {projects.length} projects
          </p>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter projects">
          {filters.map((filter) => {
            const selected = activeFilter === filter;
            return (
              <motion.button
                key={filter}
                type="button"
                aria-pressed={selected}
                onClick={() => setActiveFilter(filter)}
                className={`swiss-button min-h-11 shrink-0 rounded-none border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none ${
                  selected
                    ? "border-foreground bg-foreground text-background"
                    : "border-claude-border bg-transparent text-claude-text-secondary hover:text-foreground"
                }`}
              >
                {filter}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="popLayout" initial={false}>
          {featuredProject && <FeaturedProject key={featuredProject.title} project={featuredProject} reducedMotion={reducedMotion} />}
        </AnimatePresence>

        <motion.div layout className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {regularProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} reducedMotion={reducedMotion} />
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleProjects.length === 0 && (
          <div className="rounded-3xl border border-dashed border-claude-border p-10 text-center text-claude-text-secondary">
            No projects match this filter.
          </div>
        )}
        <a
          href="https://github.com/prajapatiiranjeet?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="swiss-button mx-auto mt-10 flex min-h-11 w-fit items-center justify-center gap-2 rounded-none px-4 text-sm font-medium text-claude-text-muted focus-visible:outline-none"
        >
          <span>More experiments on GitHub</span>
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
