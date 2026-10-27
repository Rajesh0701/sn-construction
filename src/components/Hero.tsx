export default function Hero(){
    return (
        <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">Madurai • Tamil Nadu</div>
          <h1>SN Construction &amp; Traders</h1>
          <p className="tagline">Building homes with experience and care.</p>
          <p className="lead">From ready-built residences to turnkey civil construction on your own plot, we translate blueprints into enduring spaces crafted for South Indian climate and longevity.</p>
          <div className="hero-ctas">
            <a href="#properties" className="btn btn-primary">Explore Homes &rarr;</a>
            <a href="tel:+917373661994" className="btn btn-soft">Call Direct</a>
          </div>
          <div style={{marginTop:'24px'}}>
            <a href="https://wa.me/917373661994" className="btn btn-outline" style={{padding:'10px 16px'}}>WhatsApp Us for a quick reply</a>
          </div>
        </div>

        <div className="hero-visual-wrap">
          <div className="hero-visual">
            <div className="spec-overlay">
              <div>
                <div className="label">Featured Build</div>
                <div className="value">Two-storey residence, Madurai</div>
              </div>
              <span className="glass">Handed Over</span>
            </div>
          </div>
          <div className="seal-card">
            <div className="seal-icon">&#10003;</div>
            <div>
              <div className="small">Engineered for</div>
              <div className="big">Long-lasting, vastu-aligned homes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}