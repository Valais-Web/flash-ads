import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Combien faut-il investir ?", a: "Le budget dépend du secteur, de la région et de la concurrence. Nous adaptons la stratégie pour maximiser les résultats." },
  { q: "Quand peut-on voir les résultats ?", a: "Les campagnes Google Ads peuvent générer du trafic et des clients dès leur lancement." },
  { q: "Dois-je gérer quelque chose ?", a: "Non, nous gérons toute la configuration et l'optimisation." },
  { q: "Comment mesurez-vous les résultats ?", a: "Nous configurons un suivi des conversions permettant de mesurer les appels, formulaires ou réservations générés." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-spacing">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-primary mb-4">FAQ</p>
          <h2 className="text-3xl md:text-[40px] font-medium leading-[1.2] tracking-[-0.02em]">
            Questions fréquentes
          </h2>
        </motion.div>
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="text-lg font-medium group-hover:text-primary transition-colors">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  strokeWidth={1.5}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground pb-6 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="gradient-separator" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
