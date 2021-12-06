import './Intro.scss'
import { init } from 'ityped'
import { useEffect,useRef } from 'react'


export default function Intro(){
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
             showCursor: true, 
             backDelay:1500,
             backSpeed:60,
             strings: [" Front-End Developer"] 
    });
},[]);
        
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="pics/jun.png"alt=""></img>
                    
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    
                    <h1>Jun Wang</h1>
                    <h4> - Hornored Graduate in Information System Security</h4>
                    <h4> - Certification:
                    CCNA| Splunk | CySA+ | Security+  </h4>
                    <h3> Security Analyst <span ref={textRef}></span></h3>
                    

                </div>

                <a href="#portfolio">
                    <img src="pics/down.png" alt=""></img>
                </a>
            </div>           
        </div>
    )
}
// npm install ityped
//https://www.npmjs.com/package/ityped