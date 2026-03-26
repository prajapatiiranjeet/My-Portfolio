import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2, Github } from "lucide-react";
import { projects } from "@/lib/data";

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-24 px-6 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-14"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-popover rounded-3xl border border-claude-border overflow-hidden hover:border-primary hover:shadow-claude-lg transition-all"
            >
              {/* Header strip */}
              <div className="bg-gradient-to-r from-claude-brand-soft to-claude-brand-muted p-6">
                <h3 className="font-display text-xl font-bold text-foreground">{project.title}</h3>
                <p className="text-claude-text-secondary text-sm mt-1">{project.subtitle}</p>
              </div>

              <div className="p-6">
                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-claude-brand-soft text-accent-foreground text-xs font-mono px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Points */}
                <ul className="space-y-2.5 mb-6">
                  {project.points.map((point, j) => (
                    <li key={j} className="flex gap-2.5 text-sm text-claude-text-secondary">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* GitHub link */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-card hover:bg-claude-bg-overlay text-foreground px-5 py-2.5 rounded-full text-sm font-medium transition-colors border border-claude-border"
                >
                  <Github size={16} />
                  View on GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
