import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Linkedin, Github } from "lucide-react";
import { personalInfo } from "@/lib/data";

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="contact" className="py-24 px-6 bg-background" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl font-bold italic text-foreground mb-4"
        >
          Let's Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-claude-text-secondary font-sans mb-10"
        >
          I'm always open to discussing new opportunities, collaborations, or just talking tech.
        </motion.p>

        <motion.a
          href={`mailto:${personalInfo.email}`}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 text-lg sm:text-xl font-medium text-primary hover:underline underline-offset-4 mb-10"
        >
          <Mail size={20} />
          {personalInfo.email}
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-card border border-claude-border flex items-center justify-center text-claude-text-secondary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-card border border-claude-border flex items-center justify-center text-claude-text-secondary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <Github size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
