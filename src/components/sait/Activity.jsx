import "./Activity.scss";
export default function Activity(){
    return (
        <div className="activity" id="activity">
            {/* Main activity  */}
            <div className="project">
                <div className="container">
                    <div className="row ">
                        <div className="capstone">
                            <h2>Main Activity </h2>
                        </div>
                    </div>

                    <div className="des">
                        <div className="description">
                            <h3>SAIT CTF [Team:Chimera] </h3>
                            <p> Nov 23 2019</p>
                        </div>
                    </div>

                
                <div className="proj-des">
                    <div className="text-left">
                    <div className="project-pic">
                    <div className="pic">
                        <img src="pics/CTF.png" alt=""  />
                    </div>
                </div>
                                   
                    </div>
                    <div className="img-right">
                        <h3>[OverView]</h3>
                        <p>- 3rd place on the SAIT CTF </p>
                        <p>- Solved Forensics, Reverse Engineering, Programming and Web questions</p>  
                        <img src="pics/CATEGORY.png" alt=""  />
                    </div>
                </div>
        </div>
    </div>

    </div>
    
    )
}