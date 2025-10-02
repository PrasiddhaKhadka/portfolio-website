import { useState } from "react";
import CustomButton from "./Button";
import logo from "../assets/icons/logo.svg"; 
import { motion, AnimatePresence } from "framer-motion";
import MobileHamburger from "./MobileHamburger.jsx";

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7 } }
};

const glowVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 0.5, opacity: 0.9, transition: { duration: 0.95, ease: "easeOut" } }
};

function Navbar({ scrollToAbout }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div 
        className="flex justify-center relative"
        initial="hidden"
        animate="visible"
      >
        {/* Desktop Navbar */}
        <motion.ul className="hidden sm:flex backdrop-blur-md bg-white/10
                   justify-center items-center 
                  space-x-12 p-3 border border-white/20 m-5
                  text-white shadow-lg
                  font-thin            
                  rounded-l-2xl   
                  rounded-r-2xl"
        >
          <motion.div className="relative flex items-center justify-center">
            <motion.div 
              className="absolute w-16 h-16 bg-primary/60 rounded-full blur-2xl"
              variants={glowVariants}
            />
            <motion.img 
              src={logo} 
              alt="logo" 
              className="w-10 h-10 relative" 
              variants={itemVariants} 
            />
          </motion.div>

          <motion.li><button onClick={scrollToAbout}><a href="#">About</a></button></motion.li>
          <motion.li><a href="#">Portfolio</a></motion.li>
          <motion.li><a href="#">Skills</a></motion.li>
          <motion.li><a href="#">Blogs</a></motion.li>
          <motion.li>
            <CustomButton 
              color="bg-[#D9D9D9]" 
              width="w-25"
              height="h-10"
              children={"Contact"}
              textColor="text-secondary"
            />
          </motion.li>
        </motion.ul>

        {/* Mobile Hamburger */}
        <MobileHamburger toggleMenu={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      </motion.div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center text-white space-y-8 z-40"
          >
            <a href="#" onClick={()=>{
                setIsOpen(false);
                scrollToAbout();
            }} className="text-2xl">About</a>
            <a href="#" onClick={() => setIsOpen(false)} className="text-2xl">Portfolio</a>
            <a href="#" onClick={() => setIsOpen(false)} className="text-2xl">Skills</a>
            <a href="#" onClick={() => setIsOpen(false)} className="text-2xl">Blogs</a>
            <CustomButton 
              color="bg-[#D9D9D9]" 
              width="w-32"
              height="h-12"
              children={"Contact"}
              textColor="text-secondary"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;