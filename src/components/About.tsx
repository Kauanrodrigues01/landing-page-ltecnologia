import { Code, Rocket, Shield, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Desenvolvimento Ágil",
      description:
        "Utilizamos metodologias ágeis para entregar soluções eficientes e de qualidade",
    },
    {
      icon: Rocket,
      title: "Inovação",
      description: "Sempre à frente das tendências tecnológicas do mercado",
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Máxima proteção de dados com criptografia avançada",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização extrema para máxima velocidade e eficiência",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre a
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}
              {import.meta.env.VITE_COMPANY_NAME}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos uma startup dedicada a transformar o futuro através da
            tecnologia. Nossa missão é desenvolver soluções inovadoras que
            conectem empresas às possibilidades infinitas do mundo digital,
            sempre focando na excelência, segurança e experiência do usuário.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-card border border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-primary rounded-xl p-3 w-fit mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {value.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="mt-20 text-center bg-gradient-hero rounded-3xl p-12 border border-border">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Nossa Visão
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nosso compromisso é entregar produtos de alta qualidade que resolvam
            os problemas reais dos nossos clientes. Acreditamos que a tecnologia
            deve ser uma ferramenta para simplificar processos, aumentar a
            produtividade e trazer resultados concretos para cada negócio que
            atendemos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
