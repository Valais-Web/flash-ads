import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import WhyGoogleAdsSection from "@/components/WhyGoogleAdsSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PacksSection from "@/components/PacksSection";
import GooglePartnerSection from "@/components/GooglePartnerSection";
import UseCasesSection from "@/components/UseCasesSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import QuoteFormModal from "@/components/QuoteFormModal";

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);
  const openForm = () => setFormOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onCTA={openForm} />
      <HeroSection onCTA={openForm} />
      <TrustSection />
      <WhyGoogleAdsSection />
      <BenefitsSection />
      <HowItWorksSection />
      <PacksSection onCTA={openForm} />
      <GooglePartnerSection />
      <UseCasesSection />
      <FAQSection />
      <FinalCTASection onCTA={openForm} />
      <Footer />
      <QuoteFormModal open={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
};

export default Index;
