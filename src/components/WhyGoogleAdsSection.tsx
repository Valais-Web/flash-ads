import { motion } from "framer-motion";
import { Target, BarChart3, Zap } from "lucide-react";

const columns = [
  {
    icon: Target,
    title: "Trafic qualifié",
    text: "Vos annonces apparaissent lorsque les internautes recherchent activement vos services. Cela permet d'attirer des visiteurs réellement intéressés.",
  },
  {
    icon: BarChart3,
    title: "Résultats mesurables",
    text: "Grâce au suivi des conversions, il est possible de mesurer les appels, les formulaires, les réservations ou les ventes générées par les campagnes.",
  },
  {
    icon: Zap,
    title: "Résultats rapides",
    text: "Contrairement au SEO qui peut prendre plusieurs mois, Google Ads permet d'obtenir de la visibilité et des clients immédiatement.",
  },
];

const WhyGoogleAdsSection = () => {
  return (
    <section id="why" className="section-spacing">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-primary mb-4">Google Ads</p>
          <h2 className="text-3xl md:text-[40px] font-medium leading-[1.2] tracking-[-0.02em] mb-6">
            Soyez visible au moment où vos clients recherchent vos services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Chaque jour, des millions de recherches sont effectuées sur Google. Google Ads permet d'apparaître exactement au moment où un client potentiel recherche un service ou un produit comme le vôtre.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-card p-8 glow-card transition-all duration-300 hover:glow-card-hover"
            >
              <col.icon className="w-6 h-6 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">{col.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{col.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGoogleAdsSection;
