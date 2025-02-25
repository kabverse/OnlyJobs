import "./Work.css";

const Work = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description:
        "Sign up and build your professional profile or company page. Our AI-powered system will help you highlight your best qualities.",
    },
    {
      number: "02",
      title: "Connect and Engage",
      description:
        "Browse through tailored opportunities or candidates. Use our real-time chat to start meaningful conversations.",
    },
    {
      number: "03",
      title: "Seal the Deal",
      description:
        "Schedule interviews, make offers, and close deals all within the platform. Your next success story begins here.",
    },
  ];

  return (
    <section className="how-it-works">
      <div className="section-title">
        <h2>How It Works</h2>
        <p>Your journey to success starts here</p>
      </div>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-number">{step.number}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;