import heroImage from "@/assets/hero-tech.jpg";
import { Button } from "@/components/ui/button";
import { handleSmoothScroll } from "@/lib/smoothScroll";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-gradient-hero"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Transformamos
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {" "}
                ideias{" "}
              </span>
              em soluções tecnológicas inovadoras
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Desenvolvemos produtos digitais que revolucionam mercados e
              conectam empresas ao futuro da tecnologia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projetos"
                className="group"
                onClick={handleSmoothScroll}
              >
                <Button variant="hero" size="lg" asChild>
                  <span className="flex items-center">
                    Conheça Nossos Projetos
                    <ArrowRight className="transition-transform group-hover:translate-x-1 ml-2" />
                  </span>
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Empresas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Entrega</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20 animate-float"></div>
            <img
              src={heroImage}
              alt="Tecnologia Inovadora"
              className="relative rounded-2xl shadow-elegant w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
