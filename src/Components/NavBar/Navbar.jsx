import './navbar.css'
const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="menu"><p>Menu</p></div>
            <div className="search">
                <input type="text" />
                <button>Search</button>
            </div>
            <div className="nav">
                <li>Create Account</li>
                <li>Log in</li>
            </div>
        </div>
    )
}
export default NavBar;