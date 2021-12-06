import './SAITG.scss';
export default function SAITG(){
    return (
        <div className="saitg" id="saitg">
            <div className="content">
                <div className="left">
                    <div className="major">
                        <img src="pics/CTF.png"alt=""></img>
                    </div>
                    <div className="minor">
                        <img src="pics/penetrating.jpg"alt=""></img>
                        <img src="pics/webtop.png"alt=""></img>
                        
                    </div>
                </div>
                <div className="right">
                    <div className="logo">
                        <img src="pics/saitlogo.svg" alt=""></img>

                    </div>
                    <div className="sait-des">
                        <h1> SAIT</h1>
                        <h2>Information System Security |GPA 3.87/4.0</h2>
                    </div>
                    <button type="submit" ><a href="/SAIT" target="_blank"rel="noreferrer" >Learn More</a></button>
                </div>
            </div>

        </div>
    )
}