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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <WhyGoogleAdsSection />
      <BenefitsSection />
      <HowItWorksSection />
      <PacksSection />
      <GooglePartnerSection />
      <UseCasesSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
