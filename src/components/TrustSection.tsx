import { motion } from "framer-motion";
import { ShieldCheck, Globe, Award, TrendingUp } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "Agence certifiée Google Partner" },
  { icon: Globe, text: "Campagnes gérées dans toute la Suisse" },
  { icon: Award, text: "Expertise Google Ads reconnue" },
  { icon: TrendingUp, text: "Méthodologie basée sur la performance" },
];

const TrustSection = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-primary mb-4">Confiance</p>
            <h2 className="text-3xl md:text-[40px] font-medium leading-[1.2] tracking-[-0.02em] mb-6">
              Une expertise reconnue
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Flash Ads est une agence spécialisée dans la gestion de campagnes Google Ads pour les PME. Nous accompagnons les entreprises dans toute la Suisse pour améliorer leur visibilité en ligne et générer plus de clients.
            </p>
            <ul className="space-y-4">
              {items.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-muted-foreground">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <div className="rounded-2xl bg-card border border-border/50 p-12 backdrop-blur-sm glow-card flex flex-col items-center gap-6">
              <a href="https://www.google.com/partners/agency?id=9907170973" target="_blank" rel="noopener noreferrer">
                <img src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg" alt="Google Partner" className="h-28" />
              </a>
              <div className="text-center">
                <p className="text-2xl font-semibold mb-2">Google Partner</p>
                <p className="text-muted-foreground text-sm">Agence certifiée</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
