import './NavBar.css'
export default function NavBar () {
    return (<div>
      <nav>
        <a href="/"  className="site-name">iWINA</a>

        <ul>
            <li><a href='/pricing'>Pricing</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact</a></li>
            <li><a href='account'>My Account</a></li>
        </ul>
      </nav>
      <h1>Project iWINA 2023</h1>
      </div>

    );
}