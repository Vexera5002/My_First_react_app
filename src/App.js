import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [adults, setAdults] = useState('');
  const [youngAdults, setYoungAdults] = useState('');
  const [teens, setTeens] = useState('');
  const [children, setChildren] = useState('');
  const [totalCost, setTotalCost] = useState(null);

  const handleCalculate = () => {
    const cost =
      Number(adults) * 20 +
      Number(youngAdults) * 15 +
      Number(teens) * 10 +
      Number(children) * 5;
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvImZP1ydsbDYeRz3YQWICxFkEXmwt6SIjfmEhifRPBirw3XHK-4YCELMk&s=10"
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
            src="https://irp.cdn-website.com/3d7c9bbc/dms3rep/multi/opt/EOSR2042-640w.jpg"
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgoWJ7dCV-OgGDPl6w1hNNRFAKKEAvRoFXZ7tb6koimGYUxETFgLb3ZlUs&s=10"
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
            src="https://www.poconowhitewater.com/wp-content/uploads/2026/04/gift-card-2023-768x432-1.jpg"
            alt="Gift card and passes"
          />
          <div className="Memberships & Passes">
            <h2>Memberships and annual, monthly, weekly, and family passes:</h2>
            <p>Weekly Pass: $40</p>
            <p>Monthly Pass: $70</p>
            <p>Annual Pass: $130</p>
            <p>Family Pass (One time use only): $190</p>
            <p>Membership (last 5 years): $350</p>
          </div>
        </div>
      )}

      {/* Cost Estimator Page */}
      {currentPage === 'costestimator' && (
        <div>
          <img
            src="https://img.magnific.com/free-psd/money-illustration-isolated_23-2151568514.jpg"
            alt="Cost estimator money illustration"
          />
          <div className="calculator-box">
            <h3>💰 Quick Cost Estimator</h3>

            <div>
              <label htmlFor="adults">Adults (21 &amp; older - $20/person): </label>
              <input
                type="number"
                id="adults"
                min="0"
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                placeholder="0"
              />
            </div>

            <div>
              <label htmlFor="youngAdults">Young Adults (18-21 - $15/person): </label>
              <input
                type="number"
                id="youngAdults"
                min="0"
                value={youngAdults}
                onChange={(e) => setYoungAdults(e.target.value)}
                placeholder="0"
              />
            </div>

            <div>
              <label htmlFor="teens">Teens ($10/person): </label>
              <input
                type="number"
                id="teens"
                min="0"
                value={teens}
                onChange={(e) => setTeens(e.target.value)}
                placeholder="0"
              />
            </div>

            <div>
              <label htmlFor="children">Children (10-12 - $5/person): </label>
              <input
                type="number"
                id="children"
                min="0"
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                placeholder="0"
              />
            </div>

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
