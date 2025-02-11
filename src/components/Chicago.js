import '../styles/Chicago.css';
import React from 'react';
function Chicago() {
  return (
    <section className="chicago">
      <div className="container chicago-content">
        <div className="chicago-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist. The restaurant was founded in 1995
            by two Italian brothers, Adrian and Mario.
          </p>
        </div>
        <div className="chicago-images">
          {/* Restaurant görüntüleri */}
        </div>
      </div>
    </section>
  );
}

export default Chicago;