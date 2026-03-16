import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.png";

const bullets = [
  "Visibilité immédiate sur Google",
  "Campagnes gérées par des experts certifiés",
  "Budget maîtrisé et résultats mesurables",
  "Suivi précis des appels, formulaires et réservations",
];

interface HeroSectionProps {
  onCTA: () => void;
}

const HeroSection = ({ onCTA }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center hero-glow pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-primary mb-6">
              Agence Google Ads pour PME
            </p>
            <h1 className="text-4xl md:text-[56px] font-semibold leading-[1.1] tracking-[-0.04em] mb-6" style={{ textWrap: "balance" } as React.CSSProperties}>
              Google Ads pour PME :{" "}
              <span className="text-gradient">Simple. Transparent. Efficace.</span>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8 max-w-xl" style={{ textWrap: "pretty" } as React.CSSProperties}>
              Nous aidons les entreprises à générer plus de clients grâce à des campagnes Google Ads optimisées. Une solution clé en main pensée pour les PME qui veulent développer leur visibilité et attirer des prospects qualifiés.
            </p>
            <ul className="space-y-3 mb-10">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Button variant="hero" size="xl" onClick={onCTA}>
              Demander un devis
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden glow-card">
              <img src={heroDashboard} alt="Dashboard Google Ads" className="w-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
