import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./wallet.css";

function Wallet() {
  const [user, setUser] = useState(null);

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

  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center h-100">
        {user ? (
          <div className="wallet-card">
            <h2 className="wallet-heading">USDT Balance</h2>
            <div className="wallet-body">
              <h1 className="wallet-balance">0 USDT</h1>
              <a href="/Withdrawal" className="wallet-button">Withdraw</a>
            </div>
          </div>
        ) : (
          <div className="alert alert-warning mt-3 " role="alert">
            Please login first to see your wallet.
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Wallet;
