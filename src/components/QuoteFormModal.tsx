import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuoteFormModalProps {
  open: boolean;
  onClose: () => void;
}

const QuoteFormModal = ({ open, onClose }: QuoteFormModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Push to dataLayer
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "form_submit",
      form_name: "demande-devis",
      ...data,
    });

    // Submit to Netlify
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as Record<string, string>).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true));
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg rounded-2xl bg-card border border-border/50 p-8 glow-card"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <h3 className="text-2xl font-semibold mb-3">Merci !</h3>
                <p className="text-muted-foreground">
                  Votre demande a bien été envoyée. Nous reviendrons vers vous rapidement.
                </p>
                <Button variant="hero" className="mt-6" onClick={handleClose}>
                  Fermer
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold mb-2">Demander un devis</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Remplissez le formulaire et nous vous contacterons rapidement.
                </p>
                <form
                  name="demande-devis"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="demande-devis" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                      Nom complet
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-border/50 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-border/50 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="jean@entreprise.ch"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-lg border border-border/50 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="+41 79 123 45 67"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1.5">
                      Entreprise
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full rounded-lg border border-border/50 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full rounded-lg border border-border/50 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      placeholder="Décrivez brièvement votre projet..."
                    />
                  </div>
                  <Button type="submit" variant="hero" size="xl" className="w-full">
                    Envoyer ma demande
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteFormModal;
