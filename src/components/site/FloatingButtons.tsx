import { motion } from "framer-motion";
import { MessageCircle, Instagram } from "lucide-react";

const WHATSAPP = "https://wa.me/917373256444?text=Hi%20Sunshine%20Pre%20School%2C%20I%27d%20like%20to%20know%20more%20about%20admissions";
const INSTA = "https://www.instagram.com/sunshinepreschool26?utm_source=qr&igsh=MWlvNGN6YXZ6cWtmdQ==";

export function FloatingButtons() {
  return (
    <div className="fixed right-4 z-40 flex flex-col gap-3 md:right-6" style={{ bottom: "5rem" }}>
      <motion.a
        href={INSTA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, rotate: 6 }}
        className="grid h-14 w-14 place-items-center rounded-full text-white shadow-pop"
        style={{
          background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
        }}
      >
        <Instagram className="h-7 w-7" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-pink-500/30" />
      </motion.a>

      <motion.a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-pop"
      >
        <MessageCircle className="h-7 w-7" />
      </motion.a>
    </div>
  );
}
