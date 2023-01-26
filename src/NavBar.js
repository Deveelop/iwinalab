import {Link} from "react-router-dom";
import './NavBar.css'
export default function NavBar() {
    return(
        <nav>
            <div className="site-name"><Link to="/">iWINA</Link></div>

            <ul>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/account">My Account</Link></li>
            </ul>
        </nav>
    );
};