import { toast } from "@/hooks/use-toast";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = ["Home", "Sobre", "Projetos", "Contato"];

  const socialLinks = [
    {
      icon: Github,
      href: import.meta.env.VITE_GITHUB_URL,
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: import.meta.env.VITE_LINKEDIN_URL,
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: import.meta.env.VITE_TWITTER_URL,
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: import.meta.env.VITE_INSTAGRAM_URL,
      label: "Instagram",
    },
  ];

  const handleSocialClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    social: (typeof socialLinks)[0]
  ) => {
    if (!social.href || social.href === "") {
      e.preventDefault();
      toast({
        title: "Link não configurado",
        description: `O link para ${social.label} ainda não foi implementado.`,
      });
    }
  };

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {import.meta.env.VITE_COMPANY_NAME}
            </div>
            <p className="text-muted-foreground">
              Transformando ideias em soluções tecnológicas inovadoras para um
              futuro melhor.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href || "#"}
                  target={social.href ? "_blank" : "_self"}
                  rel={social.href ? "noopener noreferrer" : undefined}
                  onClick={(e) => handleSocialClick(e, social)}
                  className="bg-gradient-card p-2 rounded-lg border border-border hover:shadow-card transition-all duration-300 hover:scale-110 group cursor-pointer"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Links Rápidos
            </h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Serviços</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Desenvolvimento Web
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Aplicativos Mobile
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Inteligência Artificial
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Consultoria Tech
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contato</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>{import.meta.env.VITE_EMAIL}</p>
              <p>
                +55 ({import.meta.env.VITE_PHONE_NUMBER?.slice(2, 4)}){" "}
                {import.meta.env.VITE_PHONE_NUMBER?.slice(4, 9)}-
                {import.meta.env.VITE_PHONE_NUMBER?.slice(9)}
              </p>
              <p>{import.meta.env.VITE_ADDRESS}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 {import.meta.env.VITE_COMPANY_NAME}. Todos os direitos
            reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
