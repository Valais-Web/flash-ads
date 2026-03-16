import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const packs = [
  {
    name: "Pack Local",
    desc: "Pour les entreprises qui souhaitent attirer des clients dans leur ville.",
    features: ["Ciblage local", "Campagnes Search et Maps", "Suivi des conversions", "Optimisation continue", "Rapport mensuel"],
    example: "Un restaurant, un artisan ou un cabinet médical qui souhaite attirer des clients dans sa ville.",
    featured: false,
  },
  {
    name: "Pack Régional",
    desc: "Pour les entreprises qui souhaitent toucher plusieurs villes ou un canton.",
    features: ["Segmentation géographique", "Optimisation avancée", "Suivi des conversions", "Rapport mensuel"],
    example: "Une entreprise de services ou un centre de formation qui cible plusieurs villes.",
    featured: true,
  },
  {
    name: "Pack National",
    desc: "Pour les entreprises qui souhaitent une visibilité dans toute la Suisse.",
    features: ["Gestion avancée des campagnes", "Optimisation des enchères", "Analyse des performances", "Rapport vidéo mensuel"],
    example: "Une entreprise e-commerce ou un service national.",
    featured: false,
  },
];

interface PacksSectionProps {
  onCTA: () => void;
}

const PacksSection = ({ onCTA }: PacksSectionProps) => {
  return (
    <section id="packs" className="section-spacing">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-primary mb-4">Offres</p>
          <h2 className="text-3xl md:text-[40px] font-medium leading-[1.2] tracking-[-0.02em] mb-6">
            Des offres adaptées à chaque entreprise
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nos packs sont conçus pour s'adapter à la taille de votre marché et à votre zone géographique.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {packs.map((pack, i) => (
            <motion.div
              key={pack.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-2xl bg-card p-8 glow-card transition-all duration-300 hover:glow-card-hover relative ${pack.featured ? "scale-[1.02] border border-primary/20" : "border border-border/30"}`}
            >
              {pack.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Recommandé
                </span>
              )}
              <h3 className="text-xl font-semibold mb-2">{pack.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{pack.desc}</p>
              <p className="text-2xl font-semibold mb-6 tabular-nums">Sur devis</p>
              <ul className="space-y-3 mb-6">
                {pack.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={1.5} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="gradient-separator mb-6" />
              <p className="text-xs text-muted italic">{pack.example}</p>
              <Button variant={pack.featured ? "hero" : "outline"} className="w-full mt-6" onClick={onCTA}>
                Demander un devis
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PacksSection;
