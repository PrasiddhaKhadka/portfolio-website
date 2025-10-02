import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileHamburger({ toggleMenu, isOpen }) {
  console.log("isOpen:", isOpen);
  console.log("toggleMenu:", toggleMenu);
  
  return (
    <div className="fixed top-0 right-0 mt-10 mr-10 z-50 sm:hidden">
      <div className="relative flex justify-center items-center">
        {/* Glow Outline */}
        <motion.div
          className="absolute w-12 h-12 rounded-full border border-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1.2 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.2,
            ease: "easeInOut",
          }}
        />

        {/* Hamburger / Close Icon */}
        <motion.button
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
          className="relative z-10 cursor-pointer p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X size={28} color="white" strokeWidth={2} />
          ) : (
            <Menu size={28} color="white" strokeWidth={2} />
          )}
        </motion.button>
      </div>
    </div>
  );
}