import './NavBar.css'
export default function NavBar() {
    return(
        <nav>
            <div className="site-name"><a href="/">iWINA</a></div>

            <ul>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/account">My Account</a></li>
            </ul>
        </nav>
    );
};