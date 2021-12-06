import './Topbar.scss'
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { GrLinkedin} from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';
import { SiLeetcode } from "react-icons/si";



export default function Topbar({menuOpen, setMenuOpen}){
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="/"className="logo"><img src="pics/junlogo3.png" alt=""></img></a>
                    <div className="itemContainer">
                        
                        <span><BsFillPersonFill/>(587)336-5267</span>
                        <a className="email" href="mailto:carolinejunw@gmail.com"rel="noreferrer" ><p><MdEmail/></p><span>carolinejunw@gmail.com</span></a>
                        <div className="social">
                            <a className="links link1"href="https://www.linkedin.com/in/jun-wang-7377471a1/"target="_blank"rel="noreferrer" ><GrLinkedin/></a>
                            <a className="links"href="https://github.com/JuneWprog"target="_blank"rel="noreferrer" ><BsGithub/></a>
                            <a className="links"href="https://leetcode.com/JunW_22/"target="_blank"rel="noreferrer" ><SiLeetcode/></a>
                        </div>
                        
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"> </span>
                        <span className="line2"> </span>
                        <span className="line3"> </span>

                    </div>
                    
                </div>
            </div>

        </div>
    )
}