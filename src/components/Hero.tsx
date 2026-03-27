import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, ArrowDown } from "lucide-react";
import { personalInfo } from "@/lib/data";
import Typewriter from "typewriter-effect";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
});

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Floating blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-accent/40 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-claude-brand-muted/50 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-claude-brand-soft/30 blur-3xl"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p {...fadeUp(0)} className="text-claude-text-muted font-sans text-lg mb-3">
          Hello, I'm
        </motion.p>
        <motion.h1
          {...fadeUp(0.15)}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-4"
        >
          {personalInfo.name}
        </motion.h1>
        <motion.div {...fadeUp(0.3)} className="text-xl sm:text-2xl font-sans text-primary mb-6 h-10">
          <Typewriter
            options={{
              strings: personalInfo.typewriterStrings,
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
              delay: 50,
            }}
          />
        </motion.div>
        <motion.p {...fadeUp(0.45)} className="text-claude-text-secondary font-sans max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
          Building scalable backend systems with Java & Spring Boot
        </motion.p>
        <motion.div {...fadeUp(0.6)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium text-base flex items-center gap-2"
          >
            View My Work <ArrowDown size={16} />
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/1kLlZSzh1fA7Eh4HmtxB_0cCDHhYfXL1D/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="border-2 border-primary text-primary px-8 py-3 rounded-full font-medium text-base flex items-center gap-2 hover:bg-primary/5 transition-colors"
          >
            Download Resume <Download size={16} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown size={28} className="text-claude-text-muted animate-bounce-slow" />
      </motion.div>
    </section>
  );
};

export default Hero;