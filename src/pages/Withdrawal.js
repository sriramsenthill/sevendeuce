import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./Withdrawal.css";

function Withdrawal() {
  const [user, setUser] = useState(null);
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('');
  const [address, setAddress] = useState('');
  const [network, setNetwork] = useState('TRC20');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the withdrawal request to the server here
    setAmount('');
    setMethod('');
    setAddress('');
    setNetwork('');
    setSuccessMessage('Withdrawal request successfully submitted!');
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        {user ? (
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="wallet-card">
                <div className="wallet-heading">Withdrawal</div>
                <div className="wallet-body">
                  {successMessage ? (
                    <div className="alert alert-success" role="alert">
                      {successMessage}
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="amount">Amount (USDT)</label>
                        <input
                          type="text"
                          className="form-control"
                          id="amount"
                          placeholder="Enter amount"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="method">Method (Crypto)</label>
                        <input
                          type="text"
                          className="form-control"
                          id="method"
                          placeholder="Enter method"
                          value={method}
                          onChange={(e) => setMethod(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="address">Receiver's Address</label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="Enter address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="network">Network (TRC20)</label>
                        <input
                          type="text"
                          className="form-control"
                          id="network"
                          placeholder="Enter network"
                          value={network}
                          onChange={(e) => setNetwork(e.target.value)}
                          required
                        />
                      </div>
                      <button type="submit" className="btn">
                        Withdraw Request
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="alert alert-warning" role="alert">
            Please login first to make a withdrawal.
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Withdrawal;
