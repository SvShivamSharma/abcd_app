import React from "react";
import "./Offers.css";

export default function Offers() {
  return (
    <div className="offers-container">
      {/* First Box */}
      <div className="offer-box">
        <img
          src="/src/assets/add.png"
          alt="Ad Banner"
          className="offer-img-full"
        />
        <a
          href="https://www.adityabirlacapital.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="offer-btn offer-btn-wide"
        >
          Explore the Products we Offer
        </a>
      </div>

      {/* Second Box */}
      <div className="offer-box">
        <h2 className="offer-heading">Promotional Offers</h2>
        <img
          src="/src/assets/poffers.png"
          alt="Promotional Offers"
          className="offer-img-medium"
        />
        <a
          href="https://www.grabon.in/aditya-birla-capital-coupons/"
          target="_blank"
          rel="noopener noreferrer"
          className="offer-btn"
        >
          Click Here To Explore
        </a>
      </div>

      {/* Third Box */}
      <div className="offer-box">
        <div className="offer-row">
          <a href="https://abc.giftzone.co.in/" target="_blank" rel="noopener noreferrer">
            <img
              src="/src/assets/abc_store.png"
              alt="ABC Store"
              className="offer-img-store"
            />
          </a>
          <p className="offer-text">ABC Store</p>
        </div>
      </div>
    </div>
  );
}
