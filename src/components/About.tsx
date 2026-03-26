import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";
import profileImg from "@/assets/profile.jpg";

const stats = [
  { label: "2+ Projects Built" },
  { label: "8.79 CGPA" },
  { label: "Java Expert" },
];

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-24 px-6 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Avatar card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-72 rounded-3xl bg-card shadow-claude-md flex flex-col items-center justify-center gap-4">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-claude-brand-hover p-1">
                  <img src={profileImg} alt="Ranjeet Prajapati" className="w-full h-full rounded-full object-cover" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{personalInfo.name}</h3>
                <div className="flex items-center gap-1.5 text-claude-text-muted text-sm">
                  <MapPin size={14} />
                  {personalInfo.location}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold italic text-foreground mb-6">
              About Me
            </h2>
            <p className="text-claude-text-secondary font-sans leading-relaxed mb-8">
              {personalInfo.summary}
            </p>
            <div className="flex flex-wrap gap-3">
              {stats.map((stat) => (
                <span
                  key={stat.label}
                  className="bg-claude-brand-soft text-accent-foreground px-4 py-2 rounded-full text-sm font-medium"
                >
                  {stat.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
