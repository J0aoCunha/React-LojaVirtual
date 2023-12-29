import { Trash } from '@phosphor-icons/react'
import { DivInfosItem, SectionCartItem } from './style.ts'
import { formateCurrency } from '../../utils/FormateCurrency.ts'
import { useContext } from 'react'
import { appContext } from '../../context/AppContext.ts'

interface CartItemProps {
  id: number
  thumbnail: string
  price: number
  title: string
}

type AppContextType = {
  cartItems: Array<{
    id: number
    title: string
    price: number
    thumbnail: string
  }>
  setCartItems: React.Dispatch<
    React.SetStateAction<
      Array<{
        id: number
        title: string
        price: number
        thumbnail: string
      }>
    >
  >
}

function CartItem(props: CartItemProps) {
  const { thumbnail, price, title, id } = props
  const { cartItems, setCartItems } = useContext<AppContextType>(appContext)
  return (
    <SectionCartItem>
      <img src={thumbnail} alt={title} />
      <DivInfosItem>
        <h3>{title}</h3>
        <span>{formateCurrency(price)}</span>
        <button
          type="button"
          onClick={() => {
            const updatedItems = cartItems.filter((item) => item.id !== id)
            setCartItems(updatedItems)
          }}
        >
          <Trash />
        </button>
      </DivInfosItem>
    </SectionCartItem>
  )
}

export default CartItem
