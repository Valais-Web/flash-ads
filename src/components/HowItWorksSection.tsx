import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Audit et stratégie", text: "Nous analysons votre activité, votre marché et les mots clés recherchés par vos clients." },
  { num: "02", title: "Création des campagnes", text: "Nous créons vos campagnes Google Ads et configurons le suivi des conversions." },
  { num: "03", title: "Lancement", text: "Vos annonces apparaissent immédiatement dans les résultats de recherche Google." },
  { num: "04", title: "Optimisation continue", text: "Nous optimisons les campagnes chaque mois pour améliorer les résultats." },
];

const HowItWorksSection = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-primary mb-4">Processus</p>
          <h2 className="text-3xl md:text-[40px] font-medium leading-[1.2] tracking-[-0.02em] mb-6">
            Comment ça fonctionne
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Notre processus est simple et structuré pour garantir les meilleurs résultats.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <span className="text-5xl font-bold text-gradient opacity-30 mb-4 block">{step.num}</span>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
