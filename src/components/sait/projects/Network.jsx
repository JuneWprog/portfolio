import "./Network.scss"
import { BsGithub } from 'react-icons/bs';


export default function Network(){
    return (
        <div className="network"id="network">
            {/* Main Project: Facial Recognition  */}
            <div className="project">
                <div className="container">
                    <div className="row ">
                        <div className="capstone">
                            <h2>Network Offensive and Defensive Environment
                            </h2>
                        </div>
                    </div>

                    <div className="des">
                        <div className="description">
                            <h3>Network Security and Threat </h3>
                            <p> Jan 2019 - Apr 2019 </p>
                        </div>
                    </div>

                <div className="project-pic">
                    <div className="pic">
                        <img src="pics/network.jpg" alt=""/>
                    </div>
                </div>
                <div className="proj-des">
                    <div className="text-left">
                        <h3>[OverView]</h3>
                        <p>- Connected and configured Cisco Routers and Switches to build LAN infrastructure. </p>
                        <p>- Tested routing protocols and common network threats and security vulnerabilities. </p>
                        <p>- Deployed and configured security measures in network: firewalls, IDS, IPS and VPN </p>
                        <h3>[Course Goals]</h3>
                        <p>- Oberserving routing protocols behavior and identify common network vulnerabilities </p>
                        <p>- Impliment network attack to test the vulnerabilities. </p>
                        <p>- Configure network security devices and deployment of VPN </p>
                        <h3>[Labs]</h3>
                        <p>- Capture and analyze packets</p>
                        <p>- Test common vulnerabilities: MAC address spoofing, ARP address spoofing, VLAN hopping,DHCP starvation,DHCP server spoofing, STP Spoofing</p>
                        <p>- Test rounting protocols security and vulnerabilities: BGP attack, BGP hardening, OSPF LSA injection </p>
                        <p>- Test security of web proxy Squid and pfsense firewall.  </p>
                        <h3>[project environment]</h3>
                    </div>
                </div>
                <div className="tools ">
                    <div className="tool">
                        <img src="pics/ubuntu.png" alt=""/>
                    </div>
                    <div className="tool">
                        <img src="pics/kali.jfif"alt=""/>
                    </div>
                    <div className="tool">
                        <img src="pics/NetworkMiner.png"alt=""/>
                    </div>
                    <div className="tool">
                        <img src="pics/NetWitness.png"alt=""/>
                    </div>
                    <div className="tool">
                        <img src="pics/pfsense.png"alt=""/>
                    </div>
                    <div className="tool">
                        <img src="pics/burp.png"alt=""/>
                    </div>
                </div>
                <a href= "https://github.com/JuneWprog/Facial-Recognition-Capstone"target="_blank"rel="noreferrer"><button type="submit"><BsGithub/>  Download</button></a>
        </div>
    </div>

    </div>



    )}


