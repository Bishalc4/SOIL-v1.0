import "./Header.css"
import logo from "../../../assets/SOIL-logo.svg";
import Profile from "../../../Pages/Profile/Profile.jsx";
import Cart from "../../../Pages/Cart/Cart.jsx";
import Search from "../../../Pages/Search/Search.jsx";

function Header() {
    return(
        <>
            <header className="header">
                <img src={logo} alt="SOIL_Logo" className="logo"/>

                <Search />

                <div className="site-buttons">
                    <Profile />
                    <Cart />
                </div>
            </header>
            <hr></hr>
        </>
    );
}

export default Header;