import React from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
  'pk_test_51HyqlhCv6ZCzwt6pNdRi9G4J943HZ1ZGrElD923srufSLRthdk77F21Fmt2pZy907el3Fb9Ax5CIL7P0753JRpGf00AKQi4e2C'
)

const Cart = () => {
  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise

    // Call your backend to create the Checkout Session
    const response = await fetch('/create-checkout-session', { method: 'POST' })

    const session = await response.json()

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    })

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  }

  return (
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
  )
}

export default Cart
