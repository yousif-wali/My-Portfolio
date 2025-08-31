import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function EducationList({ title, verifyTitle, verify, courses, date, institution }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      className="educationItem"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
      style={{border: "1px solid white", padding: "1rem", borderRadius: "8px", marginTop: "0.5rem", marginBottom: "0.5rem"}}
    >
      <div className="educationHeader">
        <div>
          <h3 className="educationTitle">{title}</h3>
          {institution && <h4 className="educationSubtitle">{institution}</h4>}
        </div>
        {date && <span className="educationDate">{date}</span>}
      </div>
      
      Technologies utilized:
      <ul className="courseList" style={{display: "grid", gridTemplateColumns: "auto auto auto", gap: "1px", marginTop: "0.5rem"}}>
        {courses.map((item, index) => (
          <li key={index} className="courseItem">
            {item}
          </li>
        ))}
      </ul>
      
      {verify && (
        <a 
          href={verify} 
          target="_blank" 
          rel="noopener noreferrer"
          className="verifyLink"
        >
          {verifyTitle || 'Verify Certificate'}
        </a>
      )}
    </motion.div>
  );
}