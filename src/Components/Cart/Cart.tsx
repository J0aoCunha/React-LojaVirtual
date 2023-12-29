import { useContext } from 'react'
import uuid from 'react-uuid'
import CartItem from '../CartItem/CartItem.tsx'
import { DivItens, DivResume } from './style.ts'
import { appContext } from '../../context/AppContext.ts'
import { formateCurrency } from '../../utils/FormateCurrency.ts'

import './Cart.css'

type AppContextType = {
  cartItems: Array<{
    id: number
    title: string
    price: number
    thumbnail: string
  }>
  isCartVisible: boolean
}
function Cart() {
  const { cartItems, isCartVisible } = useContext<AppContextType>(appContext)

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc
  }, 0)

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <DivItens>
        {cartItems.map((cartItem) => (
          <CartItem
            id={cartItem.id}
            key={uuid()}
            thumbnail={cartItem.thumbnail}
            price={cartItem.price}
            title={cartItem.title}
          />
        ))}
      </DivItens>
      <DivResume>{formateCurrency(totalPrice)}</DivResume>
    </section>
  )
}

export default Cart
