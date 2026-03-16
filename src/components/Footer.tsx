import { Link } from "react-router-dom";
import logo from "@/assets/flash-ads-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logo} alt="Flash Ads" className="h-6 opacity-70" />
        <div className="flex items-center gap-6">
          <Link to="/cgv" className="text-xs text-muted hover:text-muted-foreground transition-colors">
            CGV & Mentions légales
          </Link>
          <p className="text-sm text-muted">© {new Date().getFullYear()} Flash Ads. Tous droits réservés.</p>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-6 text-center">
        <p className="text-[10px] text-muted/50">
          Bourban Digital — info@flashads.ch
        </p>
      </div>
    </footer>
  );
};

export default Footer;
