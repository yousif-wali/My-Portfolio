export default function IconDesc ({icon, text}){
    return (
        <>
        <section style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        {icon}
        {text}
        </section>
        </>
    )
}