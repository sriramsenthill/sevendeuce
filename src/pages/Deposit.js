import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Deposit.css";
import qrcode from "../assets/qrcode.png";
import { auth, signInWithGoogle } from "../Firebase";

function Deposit() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, photoURL } = user;
        localStorage.setItem("name", displayName);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", photoURL);
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
      <div className="deposit-container">
        {user ? (
          <>
            <h2>Deposit via USDT</h2>
            <p>We only accept USDT. Please send USDT to the following address:</p>
            <div className="deposit-info">
              <label htmlFor="network">Network:</label>
              <input type="text" id="network" value="TRC20" readOnly />
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" value="THE1ihAYMsqMXWBvai9WJgv6BBHHD6ggoh" readOnly />
              <button className="btn" onClick={() => navigator.clipboard.writeText('THE1ihAYMsqMXWBvai9WJgv6BBHHD6ggoh')}>Copy</button>

            </div>
            <div className="qrcode">
              <img src={qrcode} alt="qrcode" />
            </div>
          </>
        ) : (
          <div className="login-message">
                       <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>Please login first to Deposit</p>
            <button  className="btn" onClick={signInWithGoogle}>Login with Google</button>
            <br></br>
            <br></br>
            <br></br>
         
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Deposit;
