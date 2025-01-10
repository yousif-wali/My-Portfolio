import EducationList from "../../common/EducationList";
import "./Education.css";
export default function Education(){
    return(
        <section className="education">
            <h1 className="sectionTitle Education" style={{textAlign: "center"}}>Education</h1>
            <EducationList title="Meta iOS Developer" verifyTitle="iOS Certificate" verify="https://coursera.org/verify/professional-cert/WBKERLH3896Q" courses={['Version Control', 'Programming Fundamentals in Swift', 'Principles of Ux/Ui Design', 'Working With Data in iOS', 'iOS App Capstone']}/>
            <EducationList title="Meta Android Developer" verifyTitle="Andoird Certificate" verify="https://coursera.org/verify/professional-cert/KNTZ6AWEG2XD" courses={['Version Control', 'Programming Fundamentals in Kotlin', 'Advanced Programming in Kotlin', "Working With Data in Andorid", "Mobile Development and Javascript", "React Native", "Android App Capstone"]}/>
            <EducationList title="Meta Front-End Developer" verifyTitle="FrontEnd Certificate" verify="https://coursera.org/verify/professional-cert/VDCAYYVGXLAA" courses={["Version Control", "Programming with Javascript", "HTML and CSS in depth", "React Basics", "Advanced React", "Front-End Developer Capstone"]}/>
            <EducationList title="Meta Back-End Developer" verifyTitle="BackEnd Certificate" verify="https://coursera.org/verify/professional-cert/P9C2QA5U5UF7" courses={['Programming in Python', "Version Control", "Introduction to Database for Back-End Development", "Django Web Framework", "APIs", "The Full Stack", "Back-End Developer Capstone"]}/>
            <hr/>
            <section>
                <h3>Master's of Computer Science</h3>
                <h4 style={{marginTop:"0"}}><u>@ Boulder University of Colorado</u></h4>
                <ul>
                    <li>Software Architecture for Big Data</li>
                    <li>Linear Programming</li>
                    <li>Machine Learning/Deep Learning</li>
                    <li>Foundations of Autonomous Systems</li>
                    <li>Computing, Ethics, and Society</li>
                    <li>Network Systems</li>
                    <li>Data Mining</li>
                </ul>
                <p>Graduation Expectation: Dec, 2025</p>
            </section>
        </section>
    )
}