import { motion } from "framer-motion";
import logo from "@/assets/flash-ads-logo.png";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <img src={logo} alt="Flash Ads" className="h-8" />
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#why" className="hover:text-foreground transition-colors">Pourquoi Google Ads</a>
          <a href="#benefits" className="hover:text-foreground transition-colors">Avantages</a>
          <a href="#packs" className="hover:text-foreground transition-colors">Nos offres</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </div>
        <a href="#contact" className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:shadow-[0_0_20px_rgba(124,92,255,0.4)] transition-all duration-300">
          Recevoir une proposition
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
