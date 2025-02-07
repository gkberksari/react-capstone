import '../styles/Header.css';
import logo from '../icons_assets/Logo .svg';
function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <img src={logo} alt="Little Lemon" className="logo" />
      </div>
    </header>
  );
}

export default Header;