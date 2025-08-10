import { motion } from 'framer-motion';
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import daimshop from '../../assets/daimshop.jpeg';
import Caffee from '../../assets/caffee-logo.jpg';
import Cashier from "../../assets/cashier.jpg";
import VideoTranscript from "../../assets/video-transcript.webp";
import GreenHouseSouth from "../../assets/greenhousesouth.png";
import NewsSpotlight from "../../assets/newsspotlight.jpg";
import KurdishCalendar from "../../assets/kurdish-calendar.webp";
import DebtCollector from "../../assets/debt-collector.webp";
import TradingBot from "../../assets/crypto-bot.webp";
import ProjectCard from '../../common/ProjectCard';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

function Projects() {
  const projects = [
    {
      id: 1,
      src: VideoTranscript,
      link: "https://transcript.yousifwali.tech",
      title: "Video Transcript",
      description: "AI-powered video transcription system with high accuracy and support for multiple languages.",
      technologies: "Golang - Python - Whisper AI - React - Node.js"
    },
    {
      id: 2,
      src: viberr,
      link: "https://asmc.yousifwali.tech",
      title: "ASMC",
      description: "Comprehensive administration system for managing student records, courses, and academic processes.",
      technologies: "PHP - MySQL - JavaScript - Bootstrap"
    },
    {
      id: 3,
      src: freshBurger,
      link: "https://newrozkebab.website",
      title: "Newroz Kebab",
      description: "Online platform for a cultural cuisine restaurant showcasing menu, location, and online ordering.",
      technologies: "PHP - JavaScript - CSS - HTML"
    },
    {
      id: 4,
      src: daimshop,
      link: "https://play.google.com/store/apps/details?id=com.bastory.daimshop&pcampaignid=web_share",
      title: "Daimshop",
      description: "E-commerce mobile application with product catalog, cart, and secure payment integration.",
      technologies: "Kotlin - React - Node.js - MongoDB"
    },
    {
      id: 5,
      src: Caffee,
      link: "https://github.com/yousif-wali/Caffee-System",
      title: "Caffee System",
      description: "Point of Sale system for cafes with order management, inventory, and sales reporting.",
      technologies: "Java - JavaFX - MySQL"
    },
    {
      id: 6,
      src: Cashier,
      link: "https://github.com/yousif-wali/Cashier-Registry",
      title: "Cashier App",
      description: "Desktop application for managing sales, inventory, and generating receipts for retail businesses.",
      technologies: "C# - .NET - SQLite"
    },
    {
      id: 7,
      src: GreenHouseSouth,
      link: "https://www.greenhousesouth.com",
      title: "Green House South",
      description: "Company website showcasing services, portfolio, and contact information for a workforce solutions provider.",
      technologies: "React.js - CSS Modules - Vercel"
    },
    {
      id: 8,
      src: NewsSpotlight,
      link: "https://newsspotlight.yousifwali.tech",
      title: "News Spotlight",
      description: "News aggregation web application with real-time updates and personalized content recommendations.",
      technologies: "React - Express - Node.js - MongoDB"
    },
    {
      id: 9,
      src: KurdishCalendar,
      link: "https://github.com/yousif-wali/Kurdish-calendar",
      title: "Kurdish Calendar",
      description: "Mobile application featuring Kurdish calendar with events, holidays, and date conversion.",
      technologies: "Kotlin - Android SDK - Room Database"
    },
    {
      id: 10,
      src: DebtCollector,
      link: "https://github.com/yousif-wali/Kurdish-calendar",
      title: "Debt Collector",
      description: "Windows application for tracking customer debts, payments, and generating reports.",
      technologies: "C# - Windows Forms - SQLite"
    },
    {
      id: 11,
      src: TradingBot,
      link: "https://github.com/yousif-wali/CCTX-Trading-Crypto",
      title: "Crypto Trading Bot",
      description: "Automated trading bot for cryptocurrency markets with customizable strategies and real-time analysis.",
      technologies: "Python - CCXT - Pandas - NumPy"
    }
  ];

  return (
    <section id="projects" className={styles.container}>
      <motion.h1 
        className="sectionTitle"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      <motion.div 
        className={styles.projectsContainer}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            variants={item}
            className={styles.projectWrapper}
          >
            <ProjectCard
              src={project.src}
              link={project.link}
              h3={project.title}
              p={project.description}
              usedTechnology={project.technologies}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
