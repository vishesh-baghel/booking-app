import "./navBar.css";

function NavBar() {
  return (
    <div className="navBar">
      <div className="navBar-container">
        <span className="navBar-logo">Booking App</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
