export default function EducationList(props){
    return(
        <section>
                <h3>{props.title}</h3>
                <ul>
                    {props.courses.map((item, index)=>{
                        return (
                            <li key={index}>{item}</li>
                        )
                    })}
                </ul>
                <p>Verify: <a target="_blank" href={props.verify}>{props.verifyTitle}</a></p>
            </section>
    )
}