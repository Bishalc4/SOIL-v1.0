import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import "./Header.css"
import logo from "../../../assets/SOIL-logo.svg"
import ProfileButton from "../../../Pages/ProfileButton/ProfileButton.jsx"
import CartButton from "../../../Pages/CartButton/CartButton.jsx"
import Search from "../../../Pages/Search/Search.jsx"

function Header(props) {
    const isLoggedIn = props.isLoggedIn;

    return(
        <>
            <header className="site-header">
                <Link to="/">
                    <img src={logo} alt="SOIL_Logo" className="logo"/>
                </Link>

                <Search />

                <div className="site-buttons">
                    {isLoggedIn ? (
                        <Link to="/profile">
                            <ProfileButton loggedIn={isLoggedIn}/>
                        </Link>
                    ): (
                        <Link to="/login">
                            <ProfileButton loggedIn={isLoggedIn}/>
                        </Link>
                    )}
                    <Link to="/cart">
                        <CartButton className="cart-button"/>
                    </Link>
                </div>
            </header>
        </>
    );
}
Header.propTypes = {
    isLoggedIn: PropTypes.bool,
}

export default Header;