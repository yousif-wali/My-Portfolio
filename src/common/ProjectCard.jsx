import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ src, link, h3, p, usedTechnology }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    hover: {
      y: -10,
      boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const techChips = usedTechnology.split('-').map(tech => tech.trim());

  return (
    <motion.div
      className={styles.projectCard}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
        <div className={styles.imageContainer}>
          <motion.img 
            src={src} 
            alt={`${h3} project`} 
            className={styles.projectImage}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className={styles.overlay}>
            <span className={styles.viewProject}>View Project →</span>
          </div>
        </div>
        
        <div className={styles.cardContent}>
          <h3 className={styles.projectTitle}>{h3}</h3>
          <p className={styles.projectDescription}>{p}</p>
          
          <div className={styles.techStack}>
            {techChips.map((tech, index) => (
              <span key={index} className={styles.techChip}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
