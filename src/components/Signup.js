import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom' // import Link from React Router

import Crypto from '../assets/trade.png'

const Signup = () => {
    return (
        <div className='signup'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Crypto} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Start your crypto journey</h2>
                    <p>Seven Deuce makes it easy to get started. Sign up
                       today to buy and sell 200+ cryptocurrencies.</p>
                    <div className='input-container'>
        
                        <Link to='/login' className='btn'>Login to trade</Link> {/* Link to SignupPage */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup
