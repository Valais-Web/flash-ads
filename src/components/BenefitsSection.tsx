import { motion } from "framer-motion";
import { Settings, UserCheck, PhoneCall, RefreshCw, Eye, FileText } from "lucide-react";

const benefits = [
  { icon: Settings, title: "Service clé en main", text: "Nous gérons toute la stratégie, la configuration et l'optimisation de vos campagnes." },
  { icon: UserCheck, title: "Experts certifiés", text: "Vos campagnes sont gérées par des spécialistes Google Ads certifiés." },
  { icon: PhoneCall, title: "Suivi des conversions", text: "Nous mesurons précisément les appels, demandes de devis et réservations générés." },
  { icon: RefreshCw, title: "Optimisation continue", text: "Nous analysons les performances et améliorons constamment les campagnes." },
  { icon: Eye, title: "Transparence totale", text: "Vous savez exactement comment votre budget est utilisé." },
  { icon: FileText, title: "Rapports clairs", text: "Vous recevez un rapport mensuel simple et compréhensible." },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-spacing">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-primary mb-4">Avantages</p>
          <h2 className="text-3xl md:text-[40px] font-medium leading-[1.2] tracking-[-0.02em] mb-6">
            Pourquoi choisir Flash Ads
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nous avons conçu une solution simple et efficace spécialement adaptée aux PME. Notre objectif est de vous aider à générer des prospects qualifiés tout en maîtrisant votre budget publicitaire.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-card p-8 glow-card transition-all duration-300 hover:glow-card-hover"
            >
              <b.icon className="w-6 h-6 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
