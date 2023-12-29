import { ShoppingCart } from '@phosphor-icons/react'
import { ButtonContainer } from './style'
import { useContext } from 'react'
import { appContext } from '../../context/AppContext'

type AppContextType = {
  cartItems: Array<{
    id: string
    title: string
    price: number
    thumbnail: string
  }>
  isCartVisible: boolean
  setIsCartVisible: React.Dispatch<React.SetStateAction<boolean>>
}
function CartButton() {
  const { cartItems, isCartVisible, setIsCartVisible } =
    useContext<AppContextType>(appContext)

  return (
    <ButtonContainer
      onClick={() => {
        setIsCartVisible(!isCartVisible)
      }}
    >
      <ShoppingCart />
      {cartItems.length > 0 && <span>{cartItems.length}</span>}
    </ButtonContainer>
  )
}

export default CartButton
