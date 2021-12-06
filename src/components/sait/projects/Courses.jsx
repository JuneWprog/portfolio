import "./Courses.scss"


export default function Courses(){
    const data=[
       

        {
            id:"3",
            title:"(ITSC-309) Social Engineering",
            content:"- Evaluated organizational vulnerabilities",
            link:"/SAIT#pentest",
        },
        {
            id:"4",
            title:"(ITSC-302) Web Application Security",
            content:"- Found vulnerabilities on the website and tried to attack via burp in kali linux.",
            link:"/SAIT#web",
        },
        {
            id:"5",
            title:"(ITSC-303) Malware Analysis",
            content:"- Learned analysis tools such as SPEiD, Ghidra, IDA, Procmon, Regshot, Wireshark.",
            link:"/SAIT#malware",
        },
        {
            id:"6",
            title:"(ITSC-305) Reverse Engineering of IoT Systems",
            content:"- Learned I2C, SPI and PRU with BeagleBone Black",
            link:"/SAIT#iot",
        },
        
        {
            id:"8",
            title:"(ITSC-206) Advanced Networking for Offensive and Defensive Environments",
            content:"- Studied concept with vulnerabilities of RIP, BGP, OSPF, STP, DTP.",
            content2:"- Used tools: Wire Shark(analyze network packet)",
            link:"/SAIT#network",
        },
        {
            id:"7",
            title:"(ITSC-200) Network Protocols and Security",
            content:"- Configured networks with Cisco routers and switches.",
            content2:"- Configured a virtual network for Apache2, DNS, pfsense.",
            link:"",
        },
        {
            id:"9",
            title:"(ITSC-205) Operating Systems Internals",
            content:"- Built program to analyze Unix/Windows file system and process.",
            content2:"- Explored OS vulnerabilities (CVE, CWE) and exploited OS with Rootkit, Bootkit",
            link:"",
        },
        {
            id:"10",
            title:"(ITSC-203) Offensive and Defensive Tool Construction",
            content:"- Programming in Python and C and shellcode to exploit software and network.",
            link:"https://github.com/JuneWprog/Grey-hat-Python-Black-hat-Python",
        },
        {
            id:"1",
            title:"(ITSC-308) Security Policies and Operations",
            content:"- Learned basic concepts of Governance and Compliance framework such as SOX, PCI and NIST.",
            content2:"- Learned how to perform an internal security audit to assess a security control system.",
            link:"",
        },
        {
            id:"2",
            title:"(ITSC-307) Payment Card Industry Compliance and Encryption",
            content:"- Learned PCI DSS Standard and gap analysis",
            link:"",

        },
    ];


    return (       
        <div>
            <div className="courses"id="courses">
                <div className="container">
                    <div className="row ">
                        <div className="topic">
                            <h2>Main Courses</h2>
                        </div>
                    </div>
                    <br />
                    {data.map((d)=>(
                        <div className="row ">
                            <div className="course">

                            <a href={d.link} alt=""><h3>{d.title}</h3></a> 
                                <p>{d.content}</p>
                                {d.content2? <p>{d.content2}</p>: <br/>}
                            </div>
                        </div>
                    ))}
               
    
            </div>
    
    
        </div>
    </div>
  
)}