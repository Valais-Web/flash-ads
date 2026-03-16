import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const points = [
  "Nos spécialistes sont certifiés par Google",
  "Nos campagnes respectent les meilleures pratiques",
  "Nous optimisons les budgets pour maximiser les résultats",
];

const GooglePartnerSection = () => {
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
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-primary mb-4">Certification</p>
            <h2 className="text-3xl md:text-[40px] font-medium leading-[1.2] tracking-[-0.02em] mb-6">
              Agence certifiée Google Partner
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              La certification Google Partner atteste de notre expertise en gestion de campagnes Google Ads. Elle garantit que :
            </p>
            <ul className="space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-muted-foreground">{p}</span>
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
            <div className="w-48 h-48 rounded-3xl bg-card border border-border/50 glow-card flex items-center justify-center">
              <Award className="w-24 h-24 text-primary" strokeWidth={1} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GooglePartnerSection;
