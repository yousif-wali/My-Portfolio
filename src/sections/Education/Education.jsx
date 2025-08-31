import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EducationList from "../../common/EducationList";
import styles from './Education.module.css';
import { SiC, SiCoursera, SiSololearn } from "react-icons/si";
import { GiGraduateCap } from "react-icons/gi";
import { FaPython, FaJava, FaGithub, FaDocker, FaSwift, FaReact, FaAngular, FaHtml5, FaCss3, FaCode, FaPhp } from "react-icons/fa";
import { FaGolang } from 'react-icons/fa6';
import { TbBrandReactNative, TbBrandKotlin, TbBrandCpp, TbBrandCSharp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiDjango, SiNestjs, SiRedux} from "react-icons/si";
import IconDesc from '../../common/IconDesc';
import { DiMysql, DiRuby, DiJqueryLogo } from "react-icons/di";
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
      <section className={styles.headerList}><GiGraduateCap/> <span>University of Colorado Boulder</span></section>
      <motion.div 
        className={styles.educationGrid}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <EducationList 
          title="Master's of Computer Science" 
          courses={[
            <IconDesc icon={<FaPython className={styles.icon}/>} text="Python"/>,
            <IconDesc icon={<FaJava className={styles.icon}/>} text="Java"/>,
            <IconDesc icon={<FaGithub className={styles.icon}/>} text="Github"/>,
            <IconDesc icon={<FaDocker className={styles.icon}/>} text="Docker"/>,
          ]}
          date="2025"
          verify="https://authenticate.paradigm-corp.com/Authenticated?InstitutionName=University%20of%20Colorado&Recipient=Yousif%20Wali&IssueDate=05%2F08%2F2025&PdID=BYPN-025-F6N9&InstitutionLogoUrl=https%3A%2F%2Fcedimages.azureedge.net%2Fpublicimages%2FContent%2FImages%2FClientsLogos%2FColorado-Boulder-Logo.jpg&IsDiploma=True&OrgNotificationId=733052723765654f4d30533754465f57347451556d77&AccessedTime=08%2F30%2F2025%2015%3A41%3A25&IsReorderClient=True&Authenticated=True&SuccessHeaderReorder=This%20credential%20has%20been%20authenticated.&SuccessHeaderNonReorder=Your%20credential%20has%20been%20authenticated.&SuccessSubReorder=CeCredential%20Trust%20is%20attesting%20to%20the%20publication%20of%20this%20credential%20to%20provide%20a%20greater%20level%20of%20confidence%20in%20its%20authenticity.&SuccessSubNonReorder=CeCredential%20Trust%20is%20attesting%20to%20the%20publication%20of%20this%20credential%20to%20provide%20a%20greater%20level%20of%20confidence%20in%20its%20authenticity.%20Authenticated%20via%20SURETYLock."
          verifyTitle={"View Degree"}
        />
        <EducationList 
          title="Graduate Certificate in Artificial Intelligence" 
          courses={[
            <IconDesc icon={<FaPython className={styles.icon}/>} text="Python"/>,
            <IconDesc icon={<FaGithub className={styles.icon}/>} text="Github"/>,
            
          ]}
          date="2025"
          verify="https://authenticate.paradigm-corp.com/Authenticated?InstitutionName=University%20of%20Colorado&Recipient=Yousif%20Wali&IssueDate=05%2F08%2F2025&PdID=GTKC-025-MBA8&InstitutionLogoUrl=https%3A%2F%2Fcedimages.azureedge.net%2Fpublicimages%2FContent%2FImages%2FClientsLogos%2FColorado-Boulder-Logo.jpg&IsDiploma=True&OrgNotificationId=733052723765654f4d30533754465f57347451556d77&AccessedTime=08%2F30%2F2025%2015%3A44%3A39&IsReorderClient=True&Authenticated=True&SuccessHeaderReorder=This%20credential%20has%20been%20authenticated.&SuccessHeaderNonReorder=Your%20credential%20has%20been%20authenticated.&SuccessSubReorder=CeCredential%20Trust%20is%20attesting%20to%20the%20publication%20of%20this%20credential%20to%20provide%20a%20greater%20level%20of%20confidence%20in%20its%20authenticity.&SuccessSubNonReorder=CeCredential%20Trust%20is%20attesting%20to%20the%20publication%20of%20this%20credential%20to%20provide%20a%20greater%20level%20of%20confidence%20in%20its%20authenticity.%20Authenticated%20via%20SURETYLock."
          verifyTitle={"View Certificate"}
        />
      </motion.div>
      <section className={styles.headerList}><SiCoursera/> <span>Coursera</span></section>
      <motion.div 
        className={styles.educationGrid}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <EducationList 
          title="iOS Developer" 
          verifyTitle="View Certificate" 
          verify="https://coursera.org/verify/professional-cert/WBKERLH3896Q" 
          courses={[
            <IconDesc icon={<FaSwift className={styles.icon}/>} text="Swift"/>,
            <IconDesc icon={<FaReact className={styles.icon}/>} text="React"/>,
            <IconDesc icon={<FaGithub className={styles.icon}/>} text="Github"/>,
            <IconDesc icon={<TbBrandReactNative className={styles.icon}/>} text="React Native"/>,
          ]}
          date="2023"
          logo={<SiCoursera className={styles.icon}/>}
          institution="Meta"
        />
        
        <EducationList 
          title="Android Developer" 
          verifyTitle="View Certificate" 
          verify="https://coursera.org/verify/professional-cert/KNTZ6AWEG2XD" 
          courses={[
            <IconDesc icon={<TbBrandKotlin className={styles.icon}/>} text="Kotlin"/>,
            <IconDesc icon={<FaGithub className={styles.icon}/>} text="Github"/>,
            <IconDesc icon={<IoLogoJavascript className={styles.icon}/>} text="Javascript"/>,
            <IconDesc icon={<FaReact className={styles.icon}/>} text="React"/>,
            <IconDesc icon={<TbBrandReactNative className={styles.icon}/>} text="React Native"/>,
          ]}
          date="2023"
          institution="Meta"
        />
        
        <EducationList 
          title="Front-End Developer" 
          verifyTitle="View Certificate" 
          verify="https://coursera.org/verify/professional-cert/VDCAYYVGXLAA" 
          courses={[
            <IconDesc icon={<FaReact className={styles.icon}/>} text="React"/>,
            <IconDesc icon={<IoLogoJavascript className={styles.icon}/>} text="Javascript"/>,
            <IconDesc icon={<FaGithub className={styles.icon}/>} text="Github"/>,
          ]}
          date="2023"
          institution="Meta"
        />
        
        <EducationList 
          title="Back-End Developer" 
          verifyTitle="View Certificate" 
          verify="https://coursera.org/verify/professional-cert/P9C2QA5U5UF7" 
          courses={[
            <IconDesc icon={<FaPython className={styles.icon}/>} text="Python"/>,
            <IconDesc icon={<SiDjango className={styles.icon}/>} text="Django"/>,
            <IconDesc icon={<FaGithub className={styles.icon}/>} text="Github"/>,
          ]}
          date="2023"
          institution="Meta"
        />

        <EducationList 
          title="Full-Stack Developer" 
          verifyTitle="View Certificate" 
          verify="https://coursera.org/share/7818ca7bc3520b9222bc18029925e88b" 
          courses={[
            <IconDesc icon={<FaReact className={styles.icon}/>} text="React"/>,
            <IconDesc icon={<IoLogoJavascript className={styles.icon}/>} text="Javascript"/>,
            <IconDesc icon={<FaGithub className={styles.icon}/>} text="Github"/>,
            <IconDesc icon={<FaPython className={styles.icon}/>} text="Python"/>,
            <IconDesc icon={<SiDjango className={styles.icon}/>} text="Django"/>,
          ]}
          date="2025"
          institution="Meta"
        />

        <EducationList 
          title="Getting Started with Go" 
          verifyTitle="View Certificate" 
          verify="https://coursera.org/share/888b8f35de5dd976bf9a86e938a8c4a8" 
          courses={[
            <IconDesc icon={<FaGolang className={styles.icon}/>} text="Golang"/>,
            <IconDesc icon={<FaGithub className={styles.icon}/>} text="Github"/>,
          ]}
          date="2023"
          institution="University of California, Irvine"
        />

        <EducationList 
          title="Introduction to Artificial Intelligence (AI)" 
          verifyTitle="View Certificate" 
          verify="https://coursera.org/share/6832dde126ee79e621bbe1f854fa7142" 
          courses={[
            <IconDesc icon={<FaPython className={styles.icon}/>} text="Python"/>,
          ]}
          date="2023"
          institution="IBM"
        />

      </motion.div>
        <section className={styles.headerList}><SiSololearn/> <span>Sololearn</span></section>
        <motion.div 
        className={styles.educationGrid}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <EducationList 
          title="Angular + Nestjs" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-ADXMOLLR" 
          courses={[
            <IconDesc icon={<FaAngular className={styles.icon}/>} text="Angular"/>,
            <IconDesc icon={<SiNestjs className={styles.icon}/>} text="Nestjs"/>,
          ]}
          date="2023"
          institution="Sololearn"
        />
         <EducationList 
          title="Introduction to C" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CC-F1O5FIXZ" 
          courses={[
            <IconDesc icon={<SiC className={styles.icon}/>} text="C"/>,
          ]}
          date="2023"
          institution="Sololearn"
        />
        <EducationList 
          title="C" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-4I8IAMKH" 
          courses={[
            <IconDesc icon={<SiC className={styles.icon}/>} text="C"/>,
          ]}
          date="2023"
          institution="Sololearn"
        />
         <EducationList 
          title="Game Development with Js" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-KHFXRHIO" 
          courses={[
            <IconDesc icon={<IoLogoJavascript className={styles.icon}/>} text="Javascript"/>,
          ]}
          date="2023"
          institution="Sololearn"
        />
         <EducationList 
          title="SQL Intermediate" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CC-YTRDGEE3" 
          courses={[
            <IconDesc icon={<DiMysql className={styles.icon}/>} text="MySQL"/>,
          ]}
          date="2023"
          institution="Sololearn"
        />
         <EducationList 
          title="Python for Finance" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-VJBGAI9S" 
          courses={[
            <IconDesc icon={<FaPython className={styles.icon}/>} text="Python"/>,
          ]}
          date="2023"
          institution="Sololearn"
        />
        <EducationList 
            title="Javascript Intermediate" 
            verifyTitle="View Certificate" 
            verify="https://www.sololearn.com/certificates/CC-PY7B3O5H" 
            courses={[
              <IconDesc icon={<IoLogoJavascript className={styles.icon}/>} text="Javascript"/>,
            ]}
            date="2023"
            institution="Sololearn"
          />
         <EducationList 
          title="Intermediate to C#" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CC-GSPHEMGN" 
          courses={[
            <IconDesc icon={<SiC className={styles.icon}/>} text="C#"/>,
          ]}
          date="2023"
          institution="Sololearn"
        />
        <EducationList 
          title="HTML" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-F07MNGS1" 
          courses={[
            <IconDesc icon={<FaHtml5 className={styles.icon}/>} text="HTML"/>,
          ]}
          date="2023"
          institution="Sololearn"
        />
        <EducationList 
          title="Responsive Web Design" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-VHYJP7NK" 
          courses={[
            <IconDesc icon={<FaHtml5 className={styles.icon}/>} text="HTML"/>,
            <IconDesc icon={<FaCss3 className={styles.icon}/>} text="CSS"/>,
            <IconDesc icon={<IoLogoJavascript className={styles.icon}/>} text="Javascript"/>,
          ]}
          date="2023"
          institution="Sololearn"
        />
        <EducationList 
          title="Introduction to Javascript" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CC-MKFWHHVO" 
          courses={[
            <IconDesc icon={<IoLogoJavascript className={styles.icon}/>} text="Javascript"/>,
          ]}
          date="2023"
          institution="Sololearn"
        />
        <EducationList 
          title="Kotlin" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-CJB7XV28" 
          courses={[
            <IconDesc icon={<TbBrandKotlin className={styles.icon}/>} text="Kotlin"/>,
          ]}
          date="2023"
          institution="Sololearn"
        />
        <EducationList 
          title="R" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-DC8YLL6N" 
          courses={[
            <IconDesc icon={<FaCode className={styles.icon}/>} text="R"/>,
          ]}
          date="2023"
          institution="Sololearn"
        />

        <EducationList 
          title="Tech for Everyone" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CC-4VZYZWQ7" 
          courses={[
            <IconDesc icon={<FaCode className={styles.icon}/>} text="Tech Basics"/>,
          ]}
          date="2023"
          institution="Sololearn"
        />

        <EducationList 
          title="Swift 4" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-KYR7YY3P" 
          courses={[
            <IconDesc icon={<FaSwift className={styles.icon}/>} text="Swift"/>,
          ]}
          date="2023"
          institution="Sololearn"
        />
        <EducationList 
          title="Web Development Fundamentals" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-BKFRX0PX" 
          courses={[
            <IconDesc icon={<FaHtml5 className={styles.icon}/>} text="HTML"/>,
            <IconDesc icon={<FaCss3 className={styles.icon}/>} text="CSS"/>,
            <IconDesc icon={<IoLogoJavascript className={styles.icon}/>} text="Javascript"/>,
          ]}
          date="2023"
          institution="Sololearn"
        />

        <EducationList 
          title="C++" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-Y0WYTYKY" 
          courses={[
            <IconDesc icon={<TbBrandCpp className={styles.icon}/>} text="C++"/>,
          ]}
          date="2023"
          institution="Sololearn"
        />
        <EducationList 
          title="PHP" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-YIV1WQK3" 
          courses={[
            <IconDesc icon={<FaPhp className={styles.icon}/>} text="PHP"/>,
          ]}
          date="2023"
          institution="Sololearn"
        />
        <EducationList 
          title="C# Intermediate" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CC-MZKCNZT6" 
          courses={[
            <IconDesc icon={<TbBrandCSharp className={styles.icon}/>} text="C#"/>,
          ]}
          date="2023"
          institution="Sololearn"
        />
        <EducationList 
          title="Ruby" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-7NFT5COV" 
          courses={[
            <IconDesc icon={<DiRuby className={styles.icon}/>} text="Ruby"/>,
          ]}
          date="2023"
          institution="Sololearn"
        />
        <EducationList 
          title="Java" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-JJHEKHHU" 
          courses={[
            <IconDesc icon={<FaJava className={styles.icon}/>} text="Java"/>,
          ]}
          date="2023"
          institution="Sololearn"
        />
        <EducationList 
          title="Python Data Structures" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-QTMOWH5N" 
          courses={[
            <IconDesc icon={<FaPython className={styles.icon}/>} text="Python"/>,
          ]}
          date="2023"
          institution="Sololearn"
        />
        <EducationList 
          title="JQuery" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-FCPNFXS9" 
          courses={[
            <IconDesc icon={<DiJqueryLogo className={styles.icon}/>} text="JQuery"/>,
          ]}
          date="2021"
          institution="Sololearn"
        />
        <EducationList 
          title="Python for Beginners" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-U5ZOQVTK" 
          courses={[
            <IconDesc icon={<FaPython className={styles.icon}/>} text="Python"/>,
          ]}
          date="2021"
          institution="Sololearn"
        />
        <EducationList 
          title="SQL" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-KBFAP7BC" 
          courses={[
            <IconDesc icon={<DiMysql className={styles.icon}/>} text="MySQL"/>,
          ]}
          date="2021"
          institution="Sololearn"
        />
        <EducationList 
          title="Coding for Marketers" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-APCRUMM2" 
          courses={[
            <IconDesc icon={<FaCode className={styles.icon}/>} text="Coding Basics"/>,
          ]}
          date="2021"
          institution="Sololearn"
        />
        <EducationList 
          title="React + Redux" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-PXX5SMWQ" 
          courses={[
            <IconDesc icon={<FaReact className={styles.icon}/>} text="React"/>,
            <IconDesc icon={<SiRedux className={styles.icon}/>} text="Redux"/>,
          ]}
          date="2021"
          institution="Sololearn"
        />
        <EducationList 
          title="CSS" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-KBFMSLDQ" 
          courses={[
            <IconDesc icon={<FaCss3 className={styles.icon}/>} text="CSS"/>,
          ]}
          date="2021"
          institution="Sololearn"
        />
        <EducationList 
          title="Javascript" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-2FKT7OF1" 
          courses={[
            <IconDesc icon={<IoLogoJavascript className={styles.icon}/>} text="Javascript"/>,
          ]}
          date="2021"
          institution="Sololearn"
        />
        <EducationList 
          title="C#" 
          verifyTitle="View Certificate" 
          verify="https://www.sololearn.com/certificates/CT-GA2TZHFC" 
          courses={[
            <IconDesc icon={<TbBrandCSharp className={styles.icon}/>} text="C#"/>,
          ]}
          date="2021"
          institution="Sololearn"
        />
      </motion.div>
    </section>
  );
}