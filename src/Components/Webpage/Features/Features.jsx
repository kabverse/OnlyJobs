import "./Features.css";

const Features = () => {
    return (
        <section id="features" className="section">
            <div className="section-title">
                <h2>Features</h2>
                <p>Everything you need to succeed in your hiring journey</p>
            </div>

            <div className="features-grid">
                <div className="feature-card">
                    <h3>For Job Seekers</h3>
                    <ul>
                        <li>AI-powered job matching</li>
                        <li>One-click applications</li>
                        <li>Real-time chat with employers</li>
                        <li>Professional profile builder</li>
                        <li>Interview scheduling</li>
                    </ul>
                </div>

                <div className="feature-card">
                    <h3>For Employers</h3>
                    <ul>
                        <li>Advanced candidate filtering</li>
                        <li>Automated screening</li>
                        <li>Team collaboration tools</li>
                        <li>Analytics dashboard</li>
                        <li>Branded company page</li>
                    </ul>
                </div>

                <div className="feature-card">
                    <h3>Platform Benefits</h3>
                    <ul>
                        <li>24/7 Support</li>
                        <li>Secure data handling</li>
                        <li>Mobile app access</li>
                        <li>Regular updates</li>
                        <li>Integration capabilities</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Features;
