import "./Capstone.scss"
import { BsGithub } from 'react-icons/bs';


export default function Capstone(){
    return (
        <div className="facial"id="capstone">
            {/* Main Project: Facial Recognition  */}
            <div className="project">
                <div className="container">
                    <div className="row ">
                        <div className="capstone">
                            <h2>Capstone Project</h2>
                        </div>
                    </div>

                    <div className="des">
                        <div className="description">
                            <h3>Facial Recognition system </h3>
                            <p> Jan 2020 - Apr 2020 </p>
                        </div>
                    </div>

                <div className="project-pic">
                    <div className="pic">
                        <img src="pics/facial.png" alt="facial"/>
                    </div>
                </div>
                <div className="proj-des">
                    <div className="text-left">
                        <h3>[OverView]</h3>
                        <p>- Developed a Facial Recognition system using machine learning </p>
                        <p>- Developed a logging system, a log-in system with authentication and an alert system.</p>
                        <p>- Analyzed machine learning modules such as Haar Cascade Face Detector in OpenCV, HoG Face
                            Detector in Dlib , face-recognition and MTCNN </p>
                        <h3>[Project Goals]</h3>
                        <p>- The main goal of the project was to create a facial recognition system that can be impliment in an
                            access restricted room or area. </p>
                        <p>- It should be able to identify at least 5 individuals from certain distance accurately. </p>
                        <p>- Develop a 2 way authentication signup and login function using password based authentication
                            and biological based authentication.</p>
                        <h3>[Main functions of the facial recognition system]</h3>
                        <p>- facial recognition function</p>
                        <p>- logging system</p>
                        <p>- log-in system with MFA using password and facial features.</p>
                        <p>- alert system triggered by an enemy or an unknown individual.</p>
                        <h3>[project environment]</h3>
                    </div>
                </div>
                <div className="tools ">
                    <div className="tool">
                        <img src="pics/ubuntu.png" alt=""/>
                    </div>
                    <div className="tool">
                        <img src="pics/python.png"alt=""/>
                    </div>
                    <div className="tool">
                        <img src="pics/mysql.png"alt=""/>
                    </div>
                    <div className="tool">
                        <img src="pics/opencv.png"alt=""/>
                    </div>
                </div>
                <a href= "https://github.com/JuneWprog/Facial-Recognition-Capstone"target="_blank"rel="noreferrer"><button type="submit"><BsGithub/>  Download</button></a>
                <a href="#iot" target="_blank"rel="noreferrer"><button type="submit">Other Projects</button></a>
        </div>
    </div>

    </div>



    )}


