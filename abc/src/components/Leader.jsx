import React from "react";
import "./Leader.css";

export default function Leader() {
  return (
    <div className="leader-container">
      {/* First Box */}
      <div className="leader-box first-box">
        <h2 className="leader-heading">CEO's Desk</h2>

        <div className="announcement">IMPORTANT ANNOUNCEMENT</div>

        <p className="bold-text">
          Succesful Completion of Amalgamation of ABFL into ABCL
        </p>

        <p className="description">
          Significant Milestone Towards Driving Long-Term Sustainable Growth
          and Enhanced Value Creation for All Stakeholders
        </p>

        <a
          href="https://www.adityabirla.com/media/press-releases/aditya-birla-capital-limited-completes-amalgamation-of-aditya-birla-finance-limited-creates-a-unified-larger-operating-nbfc/"
          target="_blank"
          rel="noopener noreferrer"
          className="read-more"
        >
          Read More
        </a>
      </div>

      {/* Second Box */}
      <div className="leader-box second-box">
        <img
          src="/src/assets/abc_culture.png"
          alt="Im ABC Culture"
          className="culture-logo"
        />
        <a
          href="https://www.adityabirlacapital.com/careers/life-at-abc/culture"
          target="_blank"
          rel="noopener noreferrer"
          className="culture-btn"
        >
          Click Here To Explore
        </a>
      </div>

      {/* Third Box */}
      <div className="leader-box third-box">
        <div className="spotlight-header">
          <h2>In The Spotlight</h2>
          <a
            href="https://www.youtube.com/playlist?list=PLy1ZRfgY6aZfQhUHRsNbQtzd-RKVhQHic"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all"
          >
            View All
          </a>
        </div>

        <div className="spotlight-list">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="spotlight-item">
              <a
                href={`https://www.youtube.com/watch?v=W7RcXZ9EYTU&list=PLy1ZRfgY6aZfQhUHRsNbQtzd-RKVhQHic&index=${num}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`/src/assets/ep${num}.png`}
                  alt={`Im ABC Culture Ep.${num}`}
                  className="youtube-thumbnail"
                />
              </a>
              <p>In the Spotlight | Mutual Funds Drive Market | Ep.{num}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
