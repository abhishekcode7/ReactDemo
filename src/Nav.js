
import {Link} from 'react-router-dom'
function Nav() {
  const navStyle={
    color:'white'
  };
  return (
    <nav>
        <ul className="nav-links">
          <Link style={navStyle} to="/">
            <li>My banks</li>
          </Link>
          <Link to="/transactions" style={navStyle}>
            <li>Transactions</li>
          </Link>
          <Link to="/dashboard" style={navStyle}>
            <li>Dashboard</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Nav;
