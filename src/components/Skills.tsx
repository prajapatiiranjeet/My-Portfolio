import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Server, Database, Monitor, Wrench, BookOpen } from "lucide-react";
import { skillCategories } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} />,
  Server: <Server size={20} />,
  Database: <Database size={20} />,
  Monitor: <Monitor size={20} />,
  Wrench: <Wrench size={20} />,
  BookOpen: <BookOpen size={20} />,
};

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 px-6 bg-claude-bg-elevated/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-14"
        >
          Technical Skills
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-card rounded-2xl p-6 shadow-claude-sm hover:shadow-claude-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary">{iconMap[cat.icon]}</span>
                <h3 className="font-sans font-semibold text-foreground">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-claude-brand-soft text-accent-foreground text-xs font-mono px-3 py-1.5 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
