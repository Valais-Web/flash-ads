import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section id="contact" className="section-spacing relative">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-[40px] font-medium leading-[1.2] tracking-[-0.02em] mb-6">
            Prêt à attirer plus de clients ?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Discutons de votre projet et voyons comment Google Ads peut développer votre activité.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl">Recevoir une proposition</Button>
            <Button variant="hero-outline" size="xl">Planifier un appel</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
