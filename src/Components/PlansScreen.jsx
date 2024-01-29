import React from 'react'
import '../Style/PlansScreen.css'
import { loadStripe } from '@stripe/stripe-js';



function PlansScreen() {
  const itemName = "standard"
  const itemPrice = 500
  const quantity = 1


  const checkout = async () => {
    const stripe = await loadStripe("pk_test_51OcyHsSGjiM5B4uog3RIVZJdvpd2KMgljvFFoZRoftfxZ0LqgWF9h2nUxANtLFIPcQOGn5Hm7fbQss8pUOqvwgz400lIzn6cjm")

    try {

      const res = await fetch("http://localhost:3000/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify({
          items: [
            {
              id: 1,
              quantity: quantity,
              price: itemPrice,
              name: itemName
            },
          ]
        })

      });
      const data = await res.json();
      window.location = data.url;
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='PlansScreen'>
      <div className="plansScreen_info">
        <h3>{itemName}</h3>

        <button onClick={checkout} >Subscribe</button>
      </div>
    </div>
  )
}

export default PlansScreen