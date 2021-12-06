import './Works.scss'
import{useState} from 'react';

export default function Works(){
    const[currentSlide, setCurrentSlide]=useState(0)
    const data=[
        
        {            
            id:2,
            icon:"pics/cisco-logo.png",
            title:"CCNA",
            desc:"Cisco Certified Network Associate Routing and Switching (CCNA)",
            img:"pics/ccna.jpg",
            link:"pics/cert/CCNA.pdf",
            of:"https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna-routing-switching.html",

        },
        {
            id:1,
            icon:"/pics/splunk-logo-dark.svg",
            title:"Splunk",
            desc:"A Splunk Core Certified User is able to search, use fields, create alerts, use look-ups, and create basic statistical reports and dashboards in either the Splunk Enterprise or Splunk Cloud platforms. ",
            img:"pics/splunk.png",
            link:"pics/cert/Splunk.pdf",
            of:"https://www.splunk.com/en_us/training/certification-track/splunk-core-certified-user.html",

        },
        {            
            id:3,
            icon:"pics/CompTIA_Logo_Pantone.jpg",
            title:"CySA+",
            desc:"CompTIA CySA+ ce Certification",
            img:"pics/Comptia_CySA_2Bce.png",
            link:"pics/cert/CompTIA CySA+ ce certificate.pdf",
            of:"https://www.comptia.org/certifications/cybersecurity-analyst",
           

        },
        {            
            id:4,
            icon:"pics/CompTIA_Logo_Pantone.jpg",
            title:"Security+",
            desc:"CompTIA Security+ ce Certification",
            img:"pics/CompTIA_Security_2Bce.png",
            link:"pics/cert/CompTIA Security+ ce certificate.pdf",
            of:"https://www.comptia.org/certifications/security",

        },
        {            
            id:5,
            icon:"pics/CompTIA_Logo_Pantone.jpg",
            title:"CSAP",
            desc:"CompTIA Security Analytics Professional",
            img:"pics/CompTIA_CSAP.png",
            link:"pics/cert/CompTIA Security Analytics Professional – CSAP.pdf",
            of:"https://www.comptia.org/certifications/which-certification/stackable-certifications#cybersecurity",

        },
    ];
    const handleClick=(way)=>{
        way ==="left"?setCurrentSlide(currentSlide > 0 ? currentSlide - 1:4):
        setCurrentSlide(currentSlide < data.length- 1 ? currentSlide + 1:0);
    }
    return (
        
        <div className="works"id="works">
                        
            <div className="slider"
             
            style={{transform:`translateX(-${currentSlide * 100}vw)`}}>

            {data.map(d=>( 
                <div className="container">
                
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt=""></img>
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <a href={d.of}target="_blank"rel="noreferrer" >Details</a>
                            </div>
                        </div>
                        <div className="right">
                        <a href={d.link}target="_blank"rel="noreferrer" ><img src={d.img} alt=""/></a>
                        </div>
                    </div>
                </div>))}
            </div>
            <img className="arrow left" src="pics/arrow.png" alt="" 
            onClick = {()=>handleClick("left")}/>
            <img className="arrow right" src="pics/arrow.png" alt=""
            onClick = {()=>handleClick("right")}
            />
        </div>
        
    )
}