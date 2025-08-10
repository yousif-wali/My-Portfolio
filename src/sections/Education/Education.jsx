import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EducationList from "../../common/EducationList";
import styles from './Education.module.css';

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="education" className={styles.container}>
      <motion.h1 
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        Education & Certifications
      </motion.h1>
      
      <motion.div 
        className={styles.educationGrid}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <EducationList 
          title="Meta iOS Developer" 
          verifyTitle="View Certificate" 
          verify="https://coursera.org/verify/professional-cert/WBKERLH3896Q" 
          courses={[
            'Version Control', 
            'Programming Fundamentals in Swift', 
            'Principles of Ux/Ui Design', 
            'Working With Data in iOS', 
            'iOS App Capstone'
          ]}
          date="2023"
        />
        
        <EducationList 
          title="Meta Android Developer" 
          verifyTitle="View Certificate" 
          verify="https://coursera.org/verify/professional-cert/KNTZ6AWEG2XD" 
          courses={[
            'Version Control', 
            'Programming Fundamentals in Kotlin', 
            'Advanced Programming in Kotlin', 
            'Working With Data in Android', 
            'Mobile Development and JavaScript', 
            'React Native', 
            'Android App Capstone'
          ]}
          date="2023"
        />
        
        <EducationList 
          title="Meta Front-End Developer" 
          verifyTitle="View Certificate" 
          verify="https://coursera.org/verify/professional-cert/VDCAYYVGXLAA" 
          courses={[
            'Version Control', 
            'Programming with JavaScript', 
            'HTML and CSS in Depth', 
            'React Basics', 
            'Advanced React', 
            'Front-End Developer Capstone'
          ]}
          date="2023"
        />
        
        <EducationList 
          title="Meta Back-End Developer" 
          verifyTitle="View Certificate" 
          verify="https://coursera.org/verify/professional-cert/P9C2QA5U5UF7" 
          courses={[
            'Programming in Python', 
            'Version Control', 
            'Introduction to Database for Back-End Development', 
            'Django Web Framework', 
            'APIs', 
            'The Full Stack', 
            'Back-End Developer Capstone'
          ]}
          date="2023"
        />
        
        <EducationList 
          title="Master's of Computer Science" 
          institution="University of Colorado Boulder"
          courses={[
            'Software Architecture for Big Data',
            'Linear Programming',
            'Machine Learning/Deep Learning',
            'Foundations of Autonomous Systems',
            'Computing, Ethics, and Society',
            'Network Systems',
            'Data Mining'
          ]}
          date="Jun 2025"
        />
      </motion.div>
    </section>
  );
}