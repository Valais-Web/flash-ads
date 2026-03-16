import logo from "@/assets/flash-ads-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logo} alt="Flash Ads" className="h-6 opacity-70" />
        <p className="text-sm text-muted">© {new Date().getFullYear()} Flash Ads. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
