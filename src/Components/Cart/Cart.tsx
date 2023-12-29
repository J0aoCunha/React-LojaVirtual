import { useContext } from 'react'
import CartItem from '../CartItem/CartItem.tsx'
import { DivItens, DivResume, SectionCart } from './style.ts'
import { appContext } from '../../context/AppContext.ts'

type AppContextType = {
  cartItens: Array<{
    id: string
    title: string
    price: number
    thumbnail: string
  }>
}
function Cart() {
  const { cartItens } = useContext<AppContextType>(appContext)

  return (
    <SectionCart>
      <DivItens>
        {cartItens.map((cartIten) => (
          <CartItem
            key={cartIten.id}
            id={cartIten.id}
            thumbnail={cartIten.thumbnail}
            price={cartIten.price}
            title={cartIten.title}
          />
        ))}
      </DivItens>
      <DivResume>resumo dos itens</DivResume>
    </SectionCart>
  )
}

export default Cart
