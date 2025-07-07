"use client"

import { useState } from "react"

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: "1", name: "Apple", price: 5, quantity: 2 },
    { id: "2", name: "Banana", price: 4, quantity: 3 },
    { id: "3", name: "Orange", price: 6, quantity: 4 },
  ])

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items
        .map(item =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      <div className="card p-3">
        {cartItems.length === 0 ? (
          <p className="text-center text-muted">Your cart is empty</p>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.id} className="mb-3 border-bottom pb-2">
                <h5>{item.name}</h5>
                <p>${item.price.toFixed(2)} each</p>
                <div className="d-flex align-items-center">
                  <button className="btn btn-danger btn-sm" onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span className="mx-3">{item.quantity}</span>
                  <button className="btn btn-success btn-sm" onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <p className="mt-2">Total: ${ (item.price * item.quantity).toFixed(2) }</p>
              </div>
            ))}
            <h4 className="text-center mt-3">Cart Total: ${cartTotal.toFixed(2)}</h4>
          </>
        )}
      </div>
    </div>
  )
}

export default ShoppingCart
