import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { education } from "@/lib/data";
import gfgCert from "@/assets/gfg-certificate.png";

const Education = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="education" className="py-24 px-6 bg-claude-bg-elevated/50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-14"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative pl-8 border-l-2 border-primary"
        >
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />

          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-claude-sm">
            <div className="flex items-start gap-3 mb-4">
              <GraduationCap size={24} className="text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {education.institution}
                </h3>
                <p className="text-claude-text-secondary text-sm mt-1">{education.degree}</p>
                <p className="text-claude-text-muted text-sm">{education.duration}</p>
              </div>
            </div>

            <div className="mb-5">
              <span className="text-sm text-claude-text-secondary">CGPA: </span>
              <span className="font-semibold text-primary">{education.cgpa}</span>
            </div>

            <div>
              <p className="text-xs text-claude-text-muted uppercase tracking-wider mb-2">Coursework</p>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <span
                    key={c}
                    className="bg-claude-brand-muted text-accent-foreground text-xs font-mono px-3 py-1.5 rounded-lg"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certificate Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8 flex items-center justify-center gap-2">
            <Award size={24} className="text-primary" />
            Certifications
          </h3>

          <a
            href="https://media.geeksforgeeks.org/courses/certificates/90907ad8910628c698649c63d2f81733.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="bg-card rounded-2xl overflow-hidden shadow-claude-sm border border-claude-border hover:border-primary transition-colors">
              <div className="relative">
                <img
                  src={gfgCert}
                  alt="GeeksforGeeks Java Backend Development Bootcamp Certificate"
                  className="w-full object-contain"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    View Certificate <ExternalLink size={14} />
                  </span>
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="font-display font-semibold text-foreground">Java Backend Development Bootcamp</p>
                <p className="text-claude-text-muted text-sm">GeeksforGeeks</p>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
