import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";
import profileImg from "@/assets/profile.jpg";

const stats = [
  { label: "8.82 / 10.0 CGPA" },
  { label: "Java and Spring Boot" },
  { label: "Basic High-Level Design (HLD)" },
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
              <div className="swiss-card w-72 flex flex-col items-center justify-center gap-4 py-6">
                <img
                  src={profileImg}
                  alt="Ranjeet Prajapati"
                  className="h-64 w-48 object-cover object-center"
                />
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
                  className="swiss-chip px-0 py-2 border-b border-claude-border text-sm font-medium"
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
