import "./Numbers.css";
import { useEffect, useState } from "react";

const Numbers = () => {
  const stats = [
    { target: 5000, text: "Companies" },
    { target: 25000, text: "Active Jobs" },
    { target: 100000, text: "Candidates" },
    { target: 15000, text: "Successful Placements" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) => {
          if (count < stats[index].target) {
            return Math.min(
              count + Math.ceil(stats[index].target / 100),
              stats[index].target
            );
          }
          return count;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="stats-section">
      <h2>OnlyJobs in Numbers</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div
              className="stat-number"
              data-target={stat.target}
              data-prefix=""
            >
              {counts[index]}
            </div>
            <p>{stat.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Numbers;
