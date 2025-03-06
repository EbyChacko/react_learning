import { motion } from 'framer-motion';

const Day11 = () => {
  return (
    <div className='wrapper'>
    <div className="day11Container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Portfolio
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I'm a Full-Stack Developer specializing in React and Django.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Click Me
      </motion.button>
    </div>
    </div>
  );
};

export default Day11;