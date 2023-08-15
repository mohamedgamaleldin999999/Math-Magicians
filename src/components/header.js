import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1>Math Magitians</h1>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>|</li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li>|</li>
          <li><Link to="/quotes">Quotes</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
