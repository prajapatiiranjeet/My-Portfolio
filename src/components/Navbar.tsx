import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";
import profileImg from "@/assets/profile.jpg";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 border-b border-claude-border backdrop-blur-xl bg-claude-bg-base/80"
        >
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="w-10 h-10 rounded-full bg-primary p-0.5">
              <img src={profileImg} alt="Ranjeet Prajapati" className="w-full h-full rounded-full object-cover" />
            </div>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-sm font-medium text-claude-text-secondary hover:text-claude-brand transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo("Contact"); }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium"
              >
                Hire Me
              </motion.a>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
