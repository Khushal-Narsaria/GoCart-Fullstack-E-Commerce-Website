'use client'
import { useEffect, useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '../lib/store'
import { setCart } from '../lib/features/cart/cartSlice'

const CART_KEY = 'gocart-cart'

export default function StoreProvider({ children }) {
  const storeRef = useRef(undefined)
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  // Restore the cart after mount (so pre-rendered HTML still matches), then persist changes.
  useEffect(() => {
    const store = storeRef.current
    try {
      const saved = JSON.parse(localStorage.getItem(CART_KEY))
      if (saved && saved.cartItems) store.dispatch(setCart(saved))
    } catch (e) {}
    return store.subscribe(() => {
      try { localStorage.setItem(CART_KEY, JSON.stringify(store.getState().cart)) } catch (e) {}
    })
  }, [])

  return <Provider store={storeRef.current}>{children}</Provider>
}
