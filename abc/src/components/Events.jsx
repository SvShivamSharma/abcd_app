import React from "react";
import "./Events.css";

export default function Events() {
  return (
    <div className="events-container">
      {/* First Box */}
      <div className="events-box first-box">
        <div className="events-header-row">
          <h2 className="events-title">Upcoming ABC Events</h2>
          <a
            href="https://www.adityabirlacapital.com/investor-relations/announcements-and-updates"
            target="_blank"
            rel="noopener noreferrer"
            className="events-link"
          >
            View All
          </a>
        </div>
        <div className="events-img-row">
          <img src="/src/assets/event1.png" alt="event1" className="event-img" />
        </div>
        <div className="events-img-row">
          <a
            href="https://economictimes.indiatimes.com/wealth/invest/these-buyers-of-physical-shares-are-at-legal-and-financial-risk-if-they-dont-do-this-within-a-six-month-window/articleshow/122638429.cms"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/src/assets/event2.png" alt="event2" className="event-img" />
          </a>
        </div>
      </div>

      {/* Second Box */}
      <div className="events-box">
        <div className="events-header-row">
          <h2 className="events-title">Important Announcements</h2>
        </div>
        <div className="events-img-row">
          <a
            href="https://economictimes.indiatimes.com/wealth/invest/these-buyers-of-physical-shares-are-at-legal-and-financial-risk-if-they-dont-do-this-within-a-six-month-window/articleshow/122638429.cms"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/src/assets/annoucements.png" alt="announcements" className="announcement-img" />
          </a>
        </div>
      </div>

      {/* Third Box */}
      <div className="events-box">
        <div className="events-header-row">
          <h2 className="events-title">ABC In News</h2>
          <a
            href="https://www.adityabirlacapital.com/press-and-media/news-coverage-print"
            target="_blank"
            rel="noopener noreferrer"
            className="events-link"
          >
            View All
          </a>
        </div>
        <div className="events-img-row">
          <a
            href="https://www.cnbctv18.com/personal-finance/aditya-birla-sun-life-insurance-launches-super-term-plan-with-life-health-and-income-protection-features-19622524.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/src/assets/new1.png" alt="news 1" className="event-img-small" />
          </a>
        </div>
        <div className="events-img-row">
          <a
            href="https://www.ptinews.com/story/business/Aditya-Birla-Capital-raises-Rs-1-301-cr-in-debt-from-AIIB-to-advance-sustainable-infra-financing/2687754"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/src/assets/new2.png" alt="news 2" className="event-img-small" />
          </a>
        </div>
      </div>
    </div>
  );
}
