import { ShoppingCart } from '@phosphor-icons/react'
import { ButtonContainer } from './style'

function CartButton() {
  return (
    <ButtonContainer>
      <ShoppingCart />
      <span>1</span>
    </ButtonContainer>
  )
}

export default CartButton
