import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="http://wa.me/9879254882?text=I%20want%20to%20make%20custom%20furniture"
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-floating-btn"
      aria-label="Chat on WhatsApp"
      className="whatsapp-float animate-pulse-glow"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
