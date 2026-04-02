import logo from "./images/Logo Vector (1).png";
import iconHeader from "./images/Favorites.png";
import iconHeader2 from "./images/Cart1.png";
import iconHeader3 from "./images/Vector.png";
export default function MainHeader(){
    return (
        <header className="p-3 border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
            <img src={logo} alt="" />
            <div className="inpu d-flex justify-content-center align-items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16"><path fill="currentColor" d="M11.02 11.727a5.5 5.5 0 1 1 .707-.707l3.127 3.126a.5.5 0 0 1-.708.708zM12 7.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0"/></svg>
            <input className="" placeholder="Search" type="text" />
            </div>
            <nav className="d-none d-md-none d-lg-flex gap-4">
                <a className="text-decoration-none text-dark fw-bold"  href="">Home</a>
                <a className="na2 text-decoration-none fw-bold"  href="">About</a>
                <a className="na2 text-decoration-none fw-bold"  href="">Contact Us</a>
                <a className="na2 text-decoration-none fw-bold" href="">Blog</a>
            </nav>
            <div className="d-none d-md-none d-lg-flex gap-4">
                <img src={iconHeader} alt="" />
                <img src={iconHeader2} alt="" />
                <img src={iconHeader3} alt="" />
            </div>
        </div>
        </header>
    )
}