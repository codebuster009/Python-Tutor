import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './App.css';
import CompanyEducation from './CompanyEducation/Index';
import courseData from './assets/courseData';

function App() {
  const controls = useAnimation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrollingDown = currentScrollPos > prevScrollPos;

    if (isScrollingDown) {
      controls.start({ opacity: 1, y: 0 });
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      controls.stop(); 
    };
  }, []);

  return (
    <div className="parent">
      <div className="title">Our Python tutoring features</div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {courseData.map((data, index) => (
          <motion.div key={new Date().getTime() + index} custom={index}>
            <CompanyEducation Data={data} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default App;
