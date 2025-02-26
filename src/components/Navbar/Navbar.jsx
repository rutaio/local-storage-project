import './navbar.css';
import { FaHeart } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">filmelis.lt</h1>
      <div className="favorites-count">
        <FaHeart className='heart-icon' />
        <span className="favorites-number">Megstami filmai:</span>
      </div>
    </nav>
  );
};
