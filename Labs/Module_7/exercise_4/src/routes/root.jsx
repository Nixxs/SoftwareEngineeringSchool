import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <div className="header">
        <nav className="NavBar" style={{ color: "#000000" }}>
          <ul className="menu">
            <li>
              <Link to={"Home"}>Home</Link>
            </li>
            <li>
              <Link to={"login"}>Login</Link>
            </li>
            <li>
              <Link to={"bitcoin"}>Bitcoin Rates</Link>
            </li>
            <li>
              <Link to={"emoji"}>Emoji</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content-container">
        <div className="content">
            <Outlet />
        </div>
      </div>
      <div className="footer">
        <p>the footer</p>
      </div>
    </div>
  );
}
