import React from 'react'
import { Route, Routes} from "react-router-dom";
import Home from "../src/pages/Home";
import Deposit from "../src/pages/Deposit";
import Markets from "../src/pages/Markets";
import Wallet from "../src/pages/Wallet";
import Login from "../src/pages/Login";
import Withdrawal from "../src/pages/Withdrawal";



function App() {
  return (
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/Deposit" element={<Deposit/>} />
    <Route exact path="/Markets" element={<Markets/>} />
    <Route exact path="/Wallet" element={<Wallet/>} />
    <Route exact path="/Login" element={<Login/>} />
    <Route exact path="/Withdrawal" element={<Withdrawal/>} />

  </Routes>
  );
}

export default App;
