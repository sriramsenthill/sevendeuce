import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from "../components/Navbar" 
import Footer from "../components/Footer" 

function Markets() {
  const [data, setData] = useState(null)
  const url = 'https://api.coingecko.com/api/v3/coins/categories'
      useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
  return (
    <>
      <Navbar/>
        <br></br> 
        <h1>Market Data</h1>
        <br></br> 
        <br></br> 
        <div  style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gridGap: '1rem' }} >
          {data && data.slice(1, 10).map(category => (
              <div key={category.id} 
               style={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)', padding: '20px', transition: 'box-shadow 0.3s ease-in-out' }}>
                <h2>{category.name}</h2>
                {category.top_3_coins.map((coin, index) => (
                  <div key={index}>
                    <img src={coin} alt="coin" />
                  </div>
                ))}
                <h3>Market Cap </h3> <br></br> <p>{category.market_cap}</p>
                <h3>Volume (24h) </h3> <br></br> <p> {category.volume_24h}</p>
                <h3>Description </h3> <br></br> <p> {category.content}</p>
              </div>
            ))}
        </div>
      <Footer/>

      </>
  )
}

export default Markets