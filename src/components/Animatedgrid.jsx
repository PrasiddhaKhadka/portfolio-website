// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// export default function AnimatedGrid() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
  
//   const gridItems = Array.from({ length: 120 });

//   return (
//     <div className="absolute bottom-6 left-0 grid grid-cols-10 gap-0 opacity-10">
//       {gridItems.map((_, i) => {
//         const row = Math.floor(i / 10);
//         const col = i % 10;
//         const isHorizontalLine = row % 3 === 0;
//         const isVerticalLine = col % 3 === 0;
        
//         return (
//           <motion.div
//             key={i}
//             className="w-8 h-8 sm:w-12 sm:h-12 border border-white/10 relative"
//             onHoverStart={() => setHoveredIndex(i)}
//             onHoverEnd={() => setHoveredIndex(null)}
//             animate={{
//               borderColor: hoveredIndex === i ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.1)',
//             }}
//             transition={{ duration: 0.3 }}
//           >
//             {/* Horizontal moving line */}
//             {isHorizontalLine && (
//               <motion.div
//                 className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
//                 initial={{ x: '-100%' }}
//                 animate={{ x: '200%' }}
//                 transition={{
//                   duration: 3 + (row * 0.5),
//                   repeat: Infinity,
//                   ease: 'linear',
//                   delay: col * 0.1,
//                 }}
//               />
//             )}
            
//             {/* Vertical moving line */}
//             {isVerticalLine && (
//               <motion.div
//                 className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-primary to-transparent"
//                 initial={{ y: '-100%' }}
//                 animate={{ y: '200%' }}
//                 transition={{
//                   duration: 4 + (col * 0.3),
//                   repeat: Infinity,
//                   ease: 'linear',
//                   delay: row * 0.15,
//                 }}
//               />
//             )}
            
//             {/* Subtle glow on hover */}
//             {hoveredIndex === i && (
//               <motion.div
//                 className="absolute inset-0 bg-white/5 rounded"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}          
//                 transition={{ duration: 0.2 }}
//               />
//             )}
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// }