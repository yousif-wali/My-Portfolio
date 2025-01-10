import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import daimshop from '../../assets/daimshop.jpeg';
import Caffee from '../../assets/caffee-logo.jpg';
import Cashier from "../../assets/cashier.jpg";
import VideoTranscript from "../../assets/video-transcript.webp"
import GreenHouseSouth from "../../assets/greenhousesouth.png";
import NewsSpotlight from "../../assets/newsspotlight.jpg";
import KurdishCalendar from "../../assets/kurdish-calendar.webp";
import DebtCollector from "../../assets/debt-collector.webp";
import TradingBot from "../../assets/crypto-bot.webp";
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div id="projectContainer" className={styles.projectsContainer}>
      <ProjectCard
          src={VideoTranscript}
          link="https://transcript.yousifwali.tech"
          h3="Video Transcript"
          p="AI System"
          usedTechnology="Golang-Python"
        />
        <ProjectCard
          src={viberr}
          link="https://asmc.yousifwali.tech"
          h3="ASMC"
          p="Administration Project"
          usedTechnology="PHP"
        />
        <ProjectCard
          src={freshBurger}
          link="https://newrozkebab.website"
          h3="Newroz Kebab "
          p="Cultural Cuisine"
          usedTechnology="PHP"
        />
        <ProjectCard
          src={daimshop}
          link="https://play.google.com/store/apps/details?id=com.bastory.daimshop&pcampaignid=web_share"
          h3="Daimshop (Android App)"
          p="E-commerce ecosystem"
          usedTechnology="Kotlin-React"
        />
        <ProjectCard
          src={Caffee}
          link="https://github.com/yousif-wali/Caffee-System"
          h3="Caffee"
          p="Cashier APP"
          usedTechnology="Java"
        />
        <ProjectCard
          src={Cashier}
          link="https://github.com/yousif-wali/Cashier-Registry"
          h3="Cashier App"
          p="RESTFulAPI"
          usedTechnology="C#"
          />
          <ProjectCard
          src={GreenHouseSouth}
          link="https://www.greenhousesouth.com"
          h3="Green House South"
          p="Workforce site"
          usedTechnology="Reactjs"
          />
          <ProjectCard
          src={NewsSpotlight}
          link="https://newsspotlight.yousifwali.tech"
          h3="News Spotlight"
          p="News WebApp"
          usedTechnology="Reactjs-Express"
          />
          <ProjectCard
          src={KurdishCalendar}
          link="https://github.com/yousif-wali/Kurdish-calendar"
          h3="Kurdish Calendar"
          p="Calendar App"
          usedTechnology="Kotlin"
          />
          <ProjectCard
          src={DebtCollector}
          link="https://github.com/yousif-wali/Kurdish-calendar"
          h3="Debt Collector"
          p="Windows Form App"
          usedTechnology="C#-Sqlite3"
          />
          <ProjectCard
          src={TradingBot}
          link="https://github.com/yousif-wali/CCTX-Trading-Crypto"
          h3="Crypto Trading Bot"
          p="Bot App"
          usedTechnology="Python"
          />
      </div>
    </section>
  );
}

export default Projects;
