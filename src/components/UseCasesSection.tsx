import { motion } from "framer-motion";
import { UtensilsCrossed, Wrench, GraduationCap } from "lucide-react";

const cases = [
  { icon: UtensilsCrossed, title: "Restaurant", text: "Attirer plus de clients locaux via Google Maps." },
  { icon: Wrench, title: "Artisan", text: "Générer des demandes de devis qualifiées." },
  { icon: GraduationCap, title: "Centre de formation", text: "Remplir les sessions de formation." },
];

const UseCasesSection = () => {
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
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-primary mb-4">Cas d'usage</p>
          <h2 className="text-3xl md:text-[40px] font-medium leading-[1.2] tracking-[-0.02em] mb-6">
            Exemples d'entreprises qui utilisent Google Ads
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-card p-8 glow-card transition-all duration-300 hover:glow-card-hover text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <c.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
              <p className="text-muted-foreground">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
