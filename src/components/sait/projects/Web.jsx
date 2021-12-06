import "./Web.scss"
import { BsGithub } from 'react-icons/bs';


export default function Capstone(){
    return (
        <div className="web"id="web">
            {/* Main Project:web exploitation  */}
            <div className="project">
                <div className="container">
                    <div className="row ">
                        <div className="capstone">
                            <h2>Web Application Security</h2>
                        </div>
                    </div>

                    <div className="des">
                        <div className="description">
                            <h3>Web Application Finding and Exploit Security Flaws </h3>
                            <p> Sep 2019- Dec 2019 </p>
                        </div>
                    </div>

                <div className="project-pic">
                    <div className="pic">
                        <img src="pics/webattacktop.png" alt="web"/>
                    </div>
                </div>
                <div className="proj-des">
                    <div className="text-left">
                        <h3>[OverView]</h3>
                        <p>- Fingerprint web application to determine components and common vulnerabilities. </p>
                        <p>- Common web applications and technologies.</p>
                        <p>- Web application hardening and exploitation</p>
                        <h3>[Project Goals]</h3>
                        <p>- The main goal of the project was to fingerprint web application and exploit vulnerabilities </p>
                        <p>- Securely collect and handle user sensitive data.</p>
                        <p>- Analyze authentication and session management.</p>
                        <p>- Analyze web server technologies and vulnerabilites</p>
                        <p>- Evaluate attacks including: XSS, SQL injection, spoofing, session hijacking and bypass Access Control </p>
                       
                        <h3>[project environment]</h3>
                    </div>
                </div>
                <div className="tools ">
                    <div className="tool">
                        <img src="pics/vmware.png" alt=""/>
                    </div>
                    <div className="tool">
                        <img src="pics/webgoat.png"alt=""/>
                    </div>
                    <div className="tool">
                        <img src="pics/owasp.jfif"alt=""/>
                    </div>
                    <div className="tool">
                        <img src="pics/kali.jfif"alt=""/>
                    </div>
                    <div className="tool">
                        <img src="pics/burp.png"alt=""/>
                    </div>
                    <div className="tool">
                        <img src="pics/zap.png"alt=""/>
                    </div>
                </div>
                <a href= "https://github.com/JuneWprog/WebGoat"target="_blank"rel="noreferrer"><button type="submit"><BsGithub/>  Download</button></a>
        </div>
    </div>

    </div>



    )}


