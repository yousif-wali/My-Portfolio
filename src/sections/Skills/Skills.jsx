import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './SkillsStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import { FaCode, FaServer, FaTools, FaCodeBranch, FaJava, FaPython, FaPhp, FaNodeJs, FaReact, FaVuejs, FaLaravel, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiAngular, SiNodedotjs, SiTailwindcss, SiDjango, SiRedux, SiWebpack, SiGit, SiJest, SiBootstrap, SiC, SiCplusplus, SiKotlin, SiGo, SiPerl, SiSwift } from 'react-icons/si';

const skillsByCategory = [
  {
    title: 'Frontend',
    icon: <FaCode className={styles.categoryIcon} />,
    skills: [
      { name: 'JavaScript', icon: <SiJavascript className={styles.skillIcon} /> },
      { name: 'TypeScript', icon: <SiTypescript className={styles.skillIcon} /> },
      { name: 'React', icon: <FaReact className={styles.skillIcon} /> },
      { name: 'Angular', icon: <SiAngular className={styles.skillIcon} /> },
      { name: 'Vue.js', icon: <FaVuejs className={styles.skillIcon} /> },
      { name: 'Redux', icon: <SiRedux className={styles.skillIcon} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className={styles.skillIcon} /> },
      { name: 'Bootstrap', icon: <SiBootstrap className={styles.skillIcon} /> },
    ]
  },
  {
    title: 'Backend',
    icon: <FaServer className={styles.categoryIcon} />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className={styles.skillIcon} /> },
      { name: 'Laravel', icon: <FaLaravel className={styles.skillIcon} /> },
      { name: 'Django', icon: <SiDjango className={styles.skillIcon} /> },
      { name: 'C#', icon: <SiCplusplus className={styles.skillIcon} /> },
      { name: 'Java', icon: <FaJava className={styles.skillIcon} /> },
      { name: 'Python', icon: <FaPython className={styles.skillIcon} /> },
    ]
  },
  {
    title: 'Tools & Tech',
    icon: <FaTools className={styles.categoryIcon} />,
    skills: [
      { name: 'Git', icon: <SiGit className={styles.skillIcon} /> },
      { name: 'Webpack', icon: <SiWebpack className={styles.skillIcon} /> },
      { name: 'Jest', icon: <SiJest className={styles.skillIcon} /> },
      { name: 'Docker', icon: <FaDocker className={styles.skillIcon} /> },
      { name: 'Go', icon: <SiGo className={styles.skillIcon} /> },
    ]
  },
  {
    title: 'Languages',
    icon: <FaCodeBranch className={styles.categoryIcon} />,
    skills: [
      { name: 'C', icon: <SiC className={styles.skillIcon} /> },
      { name: 'C++', icon: <SiCplusplus className={styles.skillIcon} /> },
      { name: 'Kotlin', icon: <SiKotlin className={styles.skillIcon} /> },
      { name: 'Perl', icon: <SiPerl className={styles.skillIcon} /> },
      { name: 'Swift', icon: <SiSwift className={styles.skillIcon} /> },
      { name: 'PHP', icon: <FaPhp className={styles.skillIcon} /> },
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 0.5
    }
  },
  hover: {
    y: -8,
    boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
    transition: { duration: 0.3 }
  }
};

function Skills() {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills" className={styles.container}>
      <motion.h1 
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        My Skills
      </motion.h1>
      
      <motion.div 
        className={styles.skillsGrid}
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {skillsByCategory.map((category, index) => (
          <motion.div 
            key={category.title} 
            className={styles.skillCategory}
            variants={item}
            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
          >
            <div className={styles.categoryHeader}>
              <div className={styles.iconWrapper}>
                {category.icon}
              </div>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
            </div>
            <div className={styles.skillsList}>
              {category.skills.map((skill) => (
                <motion.div 
                  key={skill.name} 
                  className={styles.skillItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={styles.skillIconWrapper}>
                    {skill.icon}
                  </div>
                  <span className={styles.skillName}>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
