import { Button } from "@/components/ui/button";
import projectsData from "@/data/projects.json";
import { ExternalLink, X, ZoomIn } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Usar diretamente o campo image do JSON
  const projects = projectsData;

  const openVideoModal = (project) => {
    if (project.videoUrl) {
      setSelectedProject(project);
    }
  };

  const openImageModal = (project) => {
    console.log('Opening image modal for:', project.name);
    setSelectedImage({
      src: project.image,
      name: project.name,
      description: project.description
    });
  };

  const closeModals = () => {
    setSelectedProject(null);
    setSelectedImage(null);
  };

  // Function to check if video URL is valid (supports various formats)
  const isValidVideoUrl = (url) => {
    if (!url) return false;
    
    // Check for common video file extensions
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.wmv'];
    const hasVideoExtension = videoExtensions.some(ext => 
      url.toLowerCase().includes(ext)
    );
    
    // Check for video hosting platforms
    const videoHosts = ['youtube.com', 'youtu.be', 'vimeo.com', 'dailymotion.com'];
    const isVideoHost = videoHosts.some(host => url.includes(host));
    
    return hasVideoExtension || isVideoHost || url.startsWith('blob:') || url.startsWith('data:video');
  };

  // Function to get video element based on URL type
  const getVideoElement = (videoUrl) => {
    // YouTube URLs
    if (videoUrl.includes('youtube.com/watch') || videoUrl.includes('youtu.be/')) {
      let videoId;
      if (videoUrl.includes('youtube.com/watch')) {
        videoId = videoUrl.split('v=')[1]?.split('&')[0];
      } else {
        videoId = videoUrl.split('youtu.be/')[1]?.split('?')[0];
      }
      
      if (videoId) {
        return (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        );
      }
    }
    
    // Vimeo URLs
    if (videoUrl.includes('vimeo.com/')) {
      const videoId = videoUrl.split('vimeo.com/')[1]?.split('?')[0];
      if (videoId) {
        return (
          <iframe
            width="100%"
            height="100%"
            src={`https://player.vimeo.com/video/${videoId}`}
            title="Vimeo video player"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        );
      }
    }
    
    // Default HTML5 video for direct video files
    return (
      <video
        width="100%"
        height="100%"
        controls
        className="rounded-lg"
      >
        <source src={videoUrl} type="video/mp4" />
        <source src={videoUrl} type="video/webm" />
        <source src={videoUrl} type="video/ogg" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    );
  };

  return (
    <section id="projetos" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}
              Projetos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça algumas das soluções inovadoras que desenvolvemos para
            transformar negócios e criar valor no mercado.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-4 animate-fade-in border border-border w-full max-w-md"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image - Increased size */}
              <div className="relative overflow-hidden cursor-pointer" onClick={() => openImageModal(project)}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Zoom icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-black/50 rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.name}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {project.videoUrl && isValidVideoUrl(project.videoUrl) && (
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1"
                      onClick={() => openVideoModal(project)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Projeto
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Imagem */}
        {selectedImage && (
          <div className="fixed inset-0 z-50">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeModals}
            ></div>
            
            {/* Modal Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
              <div 
                className="bg-background rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <div className="absolute top-4 right-4 z-20">
                  <button
                    onClick={closeModals}
                    className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Image */}
                <div className="relative">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.name}
                    className="w-full h-auto max-h-[60vh] object-contain"
                    style={{ minHeight: '300px' }}
                  />
                </div>
                
                {/* Image info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Vídeo */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            onClick={closeModals}
          >
            <div 
              className="bg-background rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">{selectedProject.name}</h3>
                  <button
                    onClick={closeModals}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 p-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="aspect-video mb-6 bg-black rounded-lg overflow-hidden">
                  {getVideoElement(selectedProject.videoUrl)}
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;