import { Button } from "@/components/ui/button";
import { handleSmoothScroll } from "@/lib/smoothScroll";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "Sobre", "Projetos", "Contato"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          {import.meta.env.VITE_COMPANY_NAME}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-foreground hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              onClick={handleSmoothScroll}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            variant="hero"
            size="lg"
            onClick={() =>
              window.open(
                `https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`,
                "_blank"
              )
            }
          >
            Solicitar Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground hover:text-primary transition-colors duration-300 py-2"
                onClick={(e) => {
                  handleSmoothScroll(e);
                  setIsMenuOpen(false);
                }}
              >
                {item}
              </a>
            ))}
            <Button
              variant="hero"
              size="lg"
              className="mt-4"
              onClick={() => {
                window.open(
                  `https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`,
                  "_blank"
                );
                setIsMenuOpen(false);
              }}
            >
              Solicitar Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
