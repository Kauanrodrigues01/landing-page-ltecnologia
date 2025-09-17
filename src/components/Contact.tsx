import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: import.meta.env.VITE_EMAIL,
      link: `mailto:${import.meta.env.VITE_EMAIL}`,
    },
    {
      icon: Phone,
      title: "Telefone",
      detail: `+55 (${import.meta.env.VITE_PHONE_NUMBER?.slice(
        2,
        4
      )}) ${import.meta.env.VITE_PHONE_NUMBER?.slice(
        4,
        9
      )}-${import.meta.env.VITE_PHONE_NUMBER?.slice(9)}`,
      link: `tel:+${import.meta.env.VITE_PHONE_NUMBER}`,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      detail: `+55 (${import.meta.env.VITE_PHONE_NUMBER?.slice(
        2,
        4
      )}) ${import.meta.env.VITE_PHONE_NUMBER?.slice(
        4,
        9
      )}-${import.meta.env.VITE_PHONE_NUMBER?.slice(9)}`,
      link: `https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`,
    },
    {
      icon: MapPin,
      title: "Localização",
      detail: import.meta.env.VITE_ADDRESS,
      link: "#",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}
              Contato
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronto para transformar sua ideia em realidade? Vamos conversar
            sobre seu próximo projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h3 className="text-2xl font-bold mb-4">Solicitar Proposta</h3>
              <p className="text-muted-foreground">
                Preencha o formulário e nossa equipe entrará em contato em até
                24 horas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Nome Completo
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Conte-nos sobre seu projeto..."
                  rows={5}
                  required
                  className="w-full resize-none"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Informações de Contato
              </h3>
              <p className="text-muted-foreground">
                Estamos sempre disponíveis para atender você da melhor forma.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-card border border-border hover:shadow-card transition-all duration-300 group"
                >
                  <div className="bg-gradient-primary rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {info.title}
                    </div>
                    <div className="text-muted-foreground">{info.detail}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
