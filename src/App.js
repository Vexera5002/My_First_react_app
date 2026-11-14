import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [guests, setGuests] = useState('');
  const [totalCost, setTotalCost] = useState(null);

  const handleCalculate = () => {
    const cost = Number(guests) * 65;
    setTotalCost(cost);
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <div className="navBar">
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('prices')}>Prices</button>
        <button onClick={() => setCurrentPage('gear')}>Gear</button>
        <button onClick={() => setCurrentPage('memberships')}>Memberships</button>
        <button onClick={() => setCurrentPage('costestimator')}>Cost Estimator</button>
      </div>

      {/* Home Page */}
      {currentPage === 'home' && (
        <div>
          <div className="home">
            <h1>Premium Whitewater Rafting</h1>
            <h3>Fun all across the whitewater tides</h3>
            <img
              src="https://gstatic.com"
              alt="Whitewater rafting"
            />
            <p>
              We offer some of the best experiences with whitewater rafting! You can go by yourself,
              with one other person, or with a whole family! The choice is yours! We offer premium
              quality rafts for rent, or you can buy a membership/monthly pass/yearly pass and get
              the rafts and oars for free! We hope you enjoy your experience with our whitewater
              rafting! Register now for quality discounts and daily benefits!
            </p>
          </div>
          <p>We hope you enjoy the experience you have here at Premium Whitewater Rafting!</p>
        </div>
      )}

      {/* Prices Page */}
      {currentPage === 'prices' && (
        <div className="Prices">
          <img
            src="https://cdn-website.com"
            alt="Rafting group"
          />
          <h2>Prices:</h2>
          <p>Adults (21 &amp; older): $20 per person</p>
          <p>Young Adults (18-21): $15 per person</p>
          <p>Teens: $10 per person</p>
          <p>Children (10-12): $5 per person</p>
          <p>
            NO CHILDREN UNDER THE AGE OF 10 MAY GO WHITEWATER RAFTING, DUE TO SAFETY CONCERNS!
            Rushing whitewater rivers can cause children to fly off rafts! We would like to prevent
            someone in your family getting seriously injured. Your safety is our number one concern.
          </p>
        </div>
      )}

      {/* Gear Page */}
      {currentPage === 'gear' && (
        <div className="Gear">
          <img
            src="https://gstatic.com"
            alt="Rafting safety gear"
          />
          <h2>Required safety equipment:</h2>
          <ol>
            <li>Helmet</li>
            <li>Lifejacket</li>
            <li>Safety Hook (For hooking onto the raft)</li>
            <li>Waterproof Clothing (not provided)</li>
            <li>Waterproof Jacket</li>
          </ol>
        </div>
      )}

      {/* Memberships Page */}
      {currentPage === 'memberships' && (
        <div>
          <img
            src="https://poconowhitewater.com"
            alt="Gift card and passes"
          />
          <div className="Memberships & Passes">
            <h2>Memberships and annual, monthly, weekly, and family passes:</h2>
            <p>Weekly Pass: $40</p>
            <p>Monthly Pass: $60</p>
            <p>Annual Pass: $90</p>
            <p>Family Pass (One time use only): $30</p>
            <p>Membership (last 5 years): $270</p>
          </div>
        </div>
      )}

      {/* Cost Estimator Page */}
      {currentPage === 'costestimator' && (
        <div>
          <img
            src="https://magnific.com"
            alt="Cost estimator money illustration"
          />
          <div className="calculator-box">
            <h3>💰 Quick Cost Estimator</h3>
            <label htmlFor="guests">Number of Rafters ($65/person): </label>
            <input
              type="number"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              placeholder="Enter number of guests"
            />
            <button onClick={handleCalculate}>Calculate</button>

            {totalCost !== null && (
              <p>Total Estimated Cost: ${totalCost}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
