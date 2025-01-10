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

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Yousif Wali"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Yousif
          <br />
          Wali
        </h1>
        <h2>Software Engineer</h2>
        <span>
          <a href="https://www.sololearn.com/en/profile/22828032" target="_blank">
            <img src={sololearn} alt="Twitter icon" style={{width:"60px"}}/>
          </a>
          <a href="https://github.com/yousif-wali" target="_blank">
            <img src={githubIcon} alt="Github icon" style={{width:"60px"}}/>
          </a>
          <a href="https://www.linkedin.com/in/yousif-wali-a784a61b8/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" style={{width:"60px"}} />
          </a>
        </span>
        <p className={styles.description}>
        Driven by a passion for advancing the field of software engineering and creating innovative solutions for commercial businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
