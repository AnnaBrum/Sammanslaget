import React from 'react';
import { motion } from 'framer-motion';

const JumpingArrow = () => {
  const jumpVariants = {
    initial: { y: 0 },
    jump: { y: [-10, 10, -10] },
    repeat: Infinity
  };

  return (
    <div className="flex h-screen items-center justify-center mb-2">
      <motion.svg
    
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        variants={jumpVariants}
        
        animate="jump"
        transition={{
            repeat: Infinity,
            duration: 1,
          }}
      >
        <path d="M50 80L30 60H70L50 80Z" fill="white" />
      </motion.svg>
    </div>
  );
};

export default JumpingArrow;
