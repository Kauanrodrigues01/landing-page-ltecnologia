const WhatsAppFloatingButton = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 transition-all duration-300 hover:scale-110 group bg-transparent border-none p-0"
      aria-label="Falar no WhatsApp"
      style={{
        animation: "slow-bounce 3s ease-in-out infinite",
      }}
    >
      <img
        src="/whatsapp-icon.png"
        alt="WhatsApp"
        className="w-16 h-16 drop-shadow-2xl rounded-full"
        style={{
          filter: "drop-shadow(0 10px 25px rgba(0, 0, 0, 0.3))",
        }}
      />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco no WhatsApp
      </span>

      <style>{`
        @keyframes slow-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </button>
  );
};

export default WhatsAppFloatingButton;
