import "./Iot.scss"
import { BsGithub } from 'react-icons/bs';


export default function IOT(){
    return (
        <div className="iot"id="iot">
            {/* Main Project: internet of thing */}
            <div className="project">
                <div className="container">
                    <div className="row ">
                        <div className="capstone">
                            <h2>Internet of Thing </h2>
                        </div>
                    </div>

                    <div className="des">
                        <div className="description">
                            <h3>Display Air Quality Indexes on 14 Segment Display </h3>
                            <p> Nov 2019 - Dec 2019 </p>
                        </div>
                    </div>

                <div className="project-pic">
                    <div className="pic">
                        <img src="pics/Picture1.png" alt=""  />
                    </div>
                </div>
                <div className="proj-des">
                    <div className="text-left">
                        <h3>[OverView]</h3>
                        <p>- Connected the SGP30 gas sensor, Adafruit 14 segment display and Beaglebone Black board on an I2C bus network </p>
                        <p>- Developed python program run in linux OS on BB board.</p>
                        <p>- The Python script enables Beaglebone Black  to read indexes from SGP30 and send data to 14 segment display </p>
                        <h3>[Project Goals]</h3>
                        <p>- The main goal of the project was to connect chips on a I2C bus network. </p>
                        <p>- Read 2 Air Quality Indexs: Total Volatile Organic Compounds (TVOCs) and Carbon dioxide (CO2) in real time.</p>
                        <p>- Display indexes on 14 segment Display accurately.</p>
                        <p>- Switch displaying index on CLI</p>
                        
                        <h3>[project environment]</h3>
                    </div>
                </div>
                <div className="tools ">
                    <div className="tool">
                        <img src="pics/ubuntu.png" alt=""  />
                    </div>
                    <div className="tool">
                        <img  src="pics/python.png"alt=""  />
                    </div>
                    <div className="tool">
                        <img  src="pics/beagle_logo_326x60.png"alt=""  />
                    </div>

                </div>
                <a href= "https://github.com/JuneWprog/IOTAirQuality"target="_blank"rel="noreferrer"><button type="submit"><BsGithub/>  Download</button></a>

        </div>
    </div>

    </div>



    )}


