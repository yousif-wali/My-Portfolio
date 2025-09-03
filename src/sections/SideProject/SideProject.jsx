import styles from './SideProject.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiC, SiCoursera, SiSololearn } from "react-icons/si";
import { GiGraduateCap } from "react-icons/gi";
import { FaPython, FaJava, FaRust, FaGithub, FaDocker, FaSwift, FaReact, FaAngular, FaHtml5, FaCss3, FaCode, FaPhp } from "react-icons/fa";
import { FaGolang } from 'react-icons/fa6';
import { TbBrandReactNative, TbBrandKotlin, TbBrandCpp, TbBrandCSharp, TbBrandPowershell } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiDjango, SiNestjs, SiRedux} from "react-icons/si";
import IconDesc from '../../common/IconDesc';
import { DiMysql, DiRuby, DiJqueryLogo } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsFiletypeXml } from "react-icons/bs";
import { SiZig, SiSolidity } from "react-icons/si";
// Language icons mapping
const languageIcons = {
  JavaScript: <IoLogoJavascript/>,
  TypeScript: <SiTypescript/>,
  Java: <FaJava/>,
  XML: <BsFiletypeXml/>,
  Zig: <SiZig/>,
  PHP: <FaPhp/>,
  Python: <FaPython/>,
  Solidity: <SiSolidity />,
  Go: <FaGolang/>,
  CS: <TbBrandCSharp/>,
  Cobol: <FaCode/>,
  Shell: <TbBrandPowershell/>,
  Rust: <FaRust/>
};

export default function SideProject() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    // Sample side projects data - replace with your actual GitHub repos
    const sideProjects = [
        {
            id: 1,
            title: "Soccer Match Predictor",
            description: "The Match Predictor codebase contains an app with several predictors for football results.",
            language: "TypeScript",
            category: "Web Application",
            githubUrl: "https://github.com/yousif-wali/match-predictor.git",
            technologies: ["Python", "Javascript", "HTML", "CSS"]
        },
        {
            id: 2,
            title: "Simple Student List",
            description: "This is a simple program to store student name while the program is running",
            language: "Java",
            category: "Desktop Application",
            githubUrl: "https://github.com/yousif-wali/Simple-Student-List-Java.git",
            technologies: ["Java"]
        },
        {
            id: 3,
            title: "Student List Webpage",
            description: "This project demonstrates how to use XML and XSLT to generate a well-structured and styled web page displaying a list of students. The XML file stores the student data, while the XSLT file transforms it into an HTML page with a table layout.",
            language: "XML",
            category: "Website",
            githubUrl: "https://github.com/yousif-wali/Student-list-webpage-xml.git",
            technologies: ["XML", "XSLT"]
        },
        {
            id: 4,
            title: "YouTube Video Downloader",
            description: "This is a YouTube Video Downloader written in Zig that uses Python's yt-dlp package to download videos.",
            language: "Zig",
            category: "Desktop Application",
            githubUrl: "https://github.com/yousif-wali/youtube-video-downloadable.git",
            technologies: ["Zig", "Python", "yt-dlp"]
        },
        {
            id: 5,
            title: "ASMC WEB",
            description: "A side project that focuses on creating an admin system for web developers.",
            language: "PHP",
            category: "Web Application",
            githubUrl: "https://github.com/yousif-wali/ASMC-WEB.git",
            technologies: ["HTML", "CSS", "Javascript"]
        },
        {
            id: 6,
            title: "Basic Reactive Behavior",
            description: "This project programs an E-Puck robot to navigate its environment by detecting obstacles and adjusting its movement accordingly. The robot follows a predefined behavior.",
            language: "Python",
            category: "Robotics",
            githubUrl: "https://github.com/yousif-wali/Basic-Reactive-Behavior.git",
            technologies: ["Webot"]
        },
        {
            id: 7,
            title: "Robot Motion Control",
            description: "This project is a simple robot motion control program written for the Webots simulation environment. The robot's motors are controlled using an array of proximity sensors (ps0 to ps7). The sensor values are used to adjust the speed of the left and right motors to guide the robot.",
            language: "Python",
            category: "Robotics",
            githubUrl: "https://github.com/yousif-wali/Robot-Motion-Control.git",
            technologies: ["Webot"]
        },
        {
            id: 8,
            title: "Voting System",
            description: "This repository contains a Solidity smart contract for a decentralized voting system. It allows users to vote for candidates in a secure, transparent, and tamper-proof manner. The system ensures that each voter can cast only one vote, and the results are publicly verifiable.",
            language: "Solidity",
            category: "Blockchain",
            githubUrl: "https://github.com/yousif-wali/voting-system-solidity.git",
            technologies: ["Cryptocurrency"]
        },
        {
            id: 9,
            title: "Strategic Pattern",
            description: "This is a Java-based mini-project demonstrating the Strategy Design Pattern. The project uses a HandlingStrategy interface to define different car handling behaviors dynamically.",
            language: "Java",
            category: "Desktop Application",
            githubUrl: "https://github.com/yousif-wali/strategic-pattern-java.git",
            technologies: ["Design Pattern"]
        },
        {
            id: 10,
            title: "Face Recognition",
            description: "A Deep Learning app that recognizes faces",
            language: "Python",
            category: "AI/ML",
            githubUrl: "https://github.com/yousif-wali/Person-Recognition.git",
            technologies: ["Deep Learning", "Tensorflow"]
        },
        {
            id: 11,
            title: "Six Little Word",
            description: "Six Little Puzzle is a fun and interactive puzzle game. The project involves creating a puzzle that asks the user to guess six words, each with an associated clue. These words are transformed into tokens, which are randomized and printed for the user. The puzzle also includes an answer key that provides the correct answers.",
            language: "Java",
            category: "Desktop Application",
            githubUrl: "https://github.com/yousif-wali/Six-Little-Words.git",
            technologies: ["Design Pattern"]
        },
        {
            id: 12,
            title: "Database Connection",
            description: "A Simple and Secure Database Connection using PHP with OOP structure",
            language: "PHP",
            category: "Server",
            githubUrl: "https://github.com/yousif-wali/Database-Connection-PHP.git",
            technologies: ["Mysql"]
        },
        {
            id: 13,
            title: "Static Blockchain",
            description: "This is an example of simple static blockchain using zig language",
            language: "Zig",
            category: "Blockchain",
            githubUrl: "https://github.com/yousif-wali/static-blockchain-zig.git",
            technologies: ["Cryptocurrency"]
        },
        {
            id: 14,
            title: "Video Transcript",
            description: "This project focuses on video transcription into text, and then translate it into a desired language",
            language: "Go",
            category: "AI/ML",
            githubUrl: "https://github.com/yousif-wali/Video-Transcript.git",
            technologies: ["Python"]
        },
        {
            id: 15,
            title: "Kurdish Date",
            description: "A library to convert Gregorian dates to Kurdish dates.",
            language: "CS",
            category: "Library",
            githubUrl: "https://github.com/yousif-wali/KurdishDate-cs.git",
            technologies: ["Algorithm"]
        },
        {
            id: 16,
            title: "Network Sniffer",
            description: "This project is a simple network port scanner written in Zig. It allows you to scan open ports on a specified IP address using command-line arguments.",
            language: "Zig",
            category: "Security Tool",
            githubUrl: "https://github.com/yousif-wali/network-sniffer.git",
            technologies: ["Algorithm", "IT", "Network"]
        },
        {
            id: 17,
            title: "Packet Sniffer",
            description: "This project is a simple network packet sniffer written in Zig using libpcap. It captures packets from a specified network interface, displays the timestamp, source/destination MAC addresses, IP addresses, and the protocol type.",
            language: "Zig",
            category: "Security Tool",
            githubUrl: "https://github.com/yousif-wali/packet-sniffer-zig.git",
            technologies: ["Algorithm", "IT", "Network"]
        },
        {
            id: 18,
            title: "File Organizer",
            description: "A simple to use application to organize your directory",
            language: "Zig",
            category: "Desktop Application",
            githubUrl: "https://github.com/yousif-wali/File-Organizer.git",
            technologies: ["Algorithm"]
        },
        {
            id: 19,
            title: "Data Visualization",
            description: "This Code Makes SVG file and plots based on X and Y values",
            language: "Zig",
            category: "Data Science",
            githubUrl: "https://github.com/yousif-wali/Data-Visualization-zig.git",
            technologies: ["Algorithm"]
        },
        {
            id: 20,
            title: "Linear Regression Zig",
            description: "A simple implementation of linear regression in Zig, demonstrating how to perform gradient descent to train a model and make predictions.",
            language: "Zig",
            category: "AI/ML",
            githubUrl: "https://github.com/yousif-wali/Linear-Regression-zig.git",
            technologies: ["Algorithm"]
        },
        {
            id: 21,
            title: "Linear Regression Zig",
            description: "A simple implementation of linear regression in Zig, demonstrating how to perform gradient descent to train a model and make predictions.",
            language: "Zig",
            category: "AI/ML",
            githubUrl: "https://github.com/yousif-wali/Linear-Regression-zig.git",
            technologies: ["Algorithm", "Artificial Inteligence"]
        },
        {
            id: 22,
            title: "ATM Banking",
            description: "A simple and functional ATM Banking System developed in COBOL. This program simulates basic ATM functionalities such as user login, balance inquiry, deposits, withdrawals, and transaction history.",
            language: "Cobol",
            category: "Desktop Application",
            githubUrl: "https://github.com/yousif-wali/ATM-Banking.git",
            technologies: ["Algorithm", "Banking"]
        },
        {
            id: 23,
            title: "Linux Networking BGP",
            description: "Creating Network using Linux",
            language: "Shell",
            category: "Network",
            githubUrl: "https://github.com/yousif-wali/Linux-Networking-BGP.git",
            technologies: ["Linux", "Network"]
        },
        {
            id: 24,
            title: "File Compressor",
            description: "A file compression utility built with Rust for efficient data compression",
            language: "Rust",
            category: "Desktop Application",
            githubUrl: "https://github.com/yousif-wali/File-Compressor.git",
            technologies: ["Algorithm"]
        },
        {
            id: 25,
            title: "Generative Adversarial Network",
            description: "This notebook utilizes a CycleGAN architecture to add Monet-style to photos. For this tutorial, we will be using the TFRecord dataset. Import the following packages and change the accelerator to TPU.",
            language: "Python",
            category: "AI/ML",
            githubUrl: "https://github.com/yousif-wali/Generative-Adversarial-Networks.git",
            technologies: ["Deep Learning", "TensorFlow", "Keras"]
        },
    ];

    // Category color mapping
    const getCategoryColor = (category) => {
        const colors = {
            'Web Application': '#3b82f6',
            'Desktop Application': '#10b981',
            'Website': '#8b5cf6',
            'Robotics': '#f59e0b',
            'Blockchain': '#ef4444',
            'AI/ML': '#06b6d4',
            'Server': '#84cc16',
            'Library': '#6366f1',
            'Security Tool': '#dc2626',
            'Data Science': '#0ea5e9',
            'Network': '#f97316'
        };
        return colors[category] || '#6b7280';
    };

    // Calculate category counts
    const categoryCounts = sideProjects.reduce((acc, project) => {
        acc[project.category] = (acc[project.category] || 0) + 1;
        return acc;
    }, {});

    const sortedCategories = Object.entries(categoryCounts)
        .sort(([,a], [,b]) => b - a);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut'
            }
        },
        hover: {
            y: -5,
            transition: {
                duration: 0.2,
                ease: 'easeInOut'
            }
        }
    };

    return (
        <section className={styles.container}>
            <motion.h1 
                className={styles.sectionTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                ref={ref}
            >
                Side Projects
            </motion.h1>

            <motion.div 
                className={styles.categoryStats}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className={styles.statsHeader}>
                    <span className={styles.totalProjects}>Total: {sideProjects.length} Projects</span>
                </div>
                <div className={styles.categoryList}>
                    {sortedCategories.map(([category, count]) => (
                        <div 
                            key={category} 
                            className={styles.categoryItem}
                            style={{ borderColor: getCategoryColor(category) }}
                        >
                            <span 
                                className={styles.categoryDot}
                                style={{ backgroundColor: getCategoryColor(category) }}
                            ></span>
                            <span className={styles.categoryName}>{category}</span>
                            <span className={styles.categoryCount}>{count}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div 
                className={styles.projectsGrid}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {sideProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        className={styles.projectCard}
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <div className={styles.cardHeader}>
                            <div className={styles.languageIcon}>
                                {languageIcons[project.language] || '📁'}
                            </div>
                            <div className={styles.titleSection}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <span 
                                    className={styles.categoryBadge}
                                    style={{ backgroundColor: getCategoryColor(project.category) }}
                                >
                                    {project.category}
                                </span>
                            </div>
                        </div>
                        
                        <p className={styles.projectDescription}>
                            {project.description}
                        </p>
                        
                        <div className={styles.techStack}>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className={styles.techChip}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        <div className={styles.cardFooter}>
                            <span className={styles.primaryLanguage}>
                                {languageIcons[project.language]} {project.language}
                            </span>
                            <a 
                                href={project.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.githubLink}
                            >
                                View on GitHub →
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}