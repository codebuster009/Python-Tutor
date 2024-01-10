import "./index.css";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const CompanyEducation = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const titleVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="course-parent" ref={ref}>
      <div>
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="course-title"
        >
          {props.Data.courseTitle}
        </motion.div>
        <motion.div
          variants={descriptionVariants}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="course-description"
        >
          {props.Data.courseDescription}
        </motion.div>
      </div>
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.75 }}
        className="img"
      >
        <img src={props.Data.url} width={450} height={350} alt="mentor" />
      </motion.div>
    </div>
  );
};

export default CompanyEducation;
