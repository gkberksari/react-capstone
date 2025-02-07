import '../styles/Specials.css';
import greekSalad from '../icons_assets/greek salad.jpg';
function Specials() {
  return (
    <section className="specials">
      <div className="container">
        <div className="specials-header">
          <h2>This weeks specials!</h2>
          <button className="button">Online Menu</button>
        </div>
        <div className="specials-grid">
          <div className="special-card">
            <img src={greekSalad} alt="Greek salad" />
            <div className="special-content">
              <div className="special-header">
                <h3>Greek salad</h3>
                <span className="price">$12.99</span>
              </div>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <button className="link-button">Order a delivery</button>
            </div>
          </div>
          {/* Diğer kartlar benzer şekilde */}
        </div>
      </div>
    </section>
  );
}

export default Specials;