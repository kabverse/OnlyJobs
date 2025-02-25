import "./Pricing.css";

const Pricing = () => {
  return (
    <section id="pricing" className="section">
      <div className="section-title">
        <h2>Pricing</h2>
        <p>Flexible plans for every need</p>
      </div>

      <div className="pricing-grid">
        <div className="price-card">
          <h3>Job Seekers</h3>
          <div className="price">Free</div>
          <p>Everything you need to find your next role</p>
          <ul className="price-features">
            <li>Create professional profile</li>
            <li>Apply to unlimited jobs</li>
            <li>Basic job matching</li>
            <li>Chat with employers</li>
          </ul>
          <a href="#" className="button button-dark">
            Get Started
          </a>
        </div>

        <div className="price-card">
          <h3>Employers Basic</h3>
          <div className="price">
            $299<span>/mo</span>
          </div>
          <p>Perfect for small businesses</p>
          <ul className="price-features">
            <li>Up to 5 active job posts</li>
            <li>Basic candidate filtering</li>
            <li>Team inbox</li>
            <li>Basic analytics</li>
          </ul>
          <a href="#" className="button button-success">
            Start Hiring
          </a>
        </div>

        <div className="price-card">
          <h3>Employers Pro</h3>
          <div className="price">
            $899<span>/mo</span>
          </div>
          <p>For growing companies</p>
          <ul className="price-features">
            <li>Unlimited job posts</li>
            <li>Advanced AI matching</li>
            <li>Priority support</li>
            <li>Full analytics suite</li>
          </ul>
          <a href="#" className="button button-success">
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;