import './Menu.scss'

export default function Menu({menuOpen, setMenuOpen}){
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/#intro" >Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/#portfolio">Porjects</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/#works">Certification</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/#testimonials">Education</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/SAIT">SAIT</a>
                </li>

            </ul>
        </div>
    )
}