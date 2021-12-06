import './Testimonials.scss'

export default function Testimonials(){
    const data=[
        {
            id:"1",
            logo:"pics/saitlogo.svg",
            degree:"Diploma",
            major:"Information System Security",
            link:"/SAIT",
            featured:"true",

        },
       
        {
            id:"2",
            logo:"pics/logo1.png",
            degree:"Master of Arts",
            major:"English Literature",
            link:"https://english.sdnu.edu.cn/"
        },
       
        // {
        //     id:"3",
        //     logo:"pics/Shandong_University.jpg",
        //     degree:"Becheloar of Arts",
        //     major:"English Literature",
        //     link:"https://en.sdu.edu.cn/"
        // },
    ];
    return (
        <div className="testimonials" id="testimonials">
            <h2>Education</h2>

            <div className="container">
            {data.map((d)=>(
                <div className={d.featured ? "card featured":"card"}>
                    <div className="top">
                        <img className="logo" src={d.logo} alt=""></img>
                    </div>
                    <div className="center">

                        <h2>{d.degree}</h2>
                        <h3>{d.major}</h3>
                    </div>
                    <div className="bottom">
                        <button type="submit" ><a href={d.link} target="_blank"rel="noreferrer" >Learn More</a></button>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    )
}