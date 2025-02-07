import '../styles/Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <button className="mobile-menu-btn">Menu</button>
        <ul className="nav-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;