import React from 'react';
import { motion } from 'framer-motion';

const LetterAnimation = ({ text }) => {
  return (
    <>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }} // Adjust the delay as needed
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
};

export default LetterAnimation;
