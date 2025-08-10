import { motion } from 'framer-motion';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/avatar.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import sololearn from "../../assets/sololearn.webp"
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  },
};

const imageAnimation = {
  hidden: { scale: 0.9, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  },
};

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const socialLinks = [
    { url: "https://www.sololearn.com/en/profile/22828032", icon: sololearn, alt: "SoloLearn" },
    { url: "https://github.com/yousif-wali", icon: theme === 'light' ? githubLight : githubDark, alt: "GitHub" },
    { url: "https://www.linkedin.com/in/yousif-wali-a784a61b8/", icon: theme === 'light' ? linkedinDark : linkedinLight, alt: "LinkedIn" }
  ];

  return (
    <motion.section 
      id="hero" 
      className={styles.container}
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.div 
        className={styles.colorModeContainer}
        variants={item}
      >
        <motion.img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Yousif Wali"
          variants={imageAnimation}
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        <motion.button
          className={styles.themeToggle}
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={themeIcon} alt="Toggle theme" />
        </motion.button>
      </motion.div>
      
      <motion.div className={styles.info} variants={container}>
        <motion.h1 variants={item}>
          Yousif
          <br />
          <motion.span 
            variants={item}
            style={{ display: 'inline-block' }}
          >
            Wali
          </motion.span>
        </motion.h1>
        
        <motion.h2 variants={item}>Software Engineer</motion.h2>
        
        <motion.div 
          className={styles.socialLinks}
          variants={item}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={item}
            >
              <img src={link.icon} alt={link.alt} />
            </motion.a>
          ))}
        </motion.div>
        
        <motion.p 
          className={styles.description}
          variants={item}
        >
          Driven by a passion for advancing the field of software engineering and creating innovative solutions for commercial businesses.
        </motion.p>
        
        <motion.div variants={item}>
          <motion.a 
            href={CV} 
            download
            className={styles.resumeButton}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
