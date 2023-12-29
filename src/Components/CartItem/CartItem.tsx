import { Trash } from '@phosphor-icons/react'
import { DivInfosItem, SectionCartItem } from './style.ts'
import { formateCurrency } from '../../utils/FormateCurrency.ts'

interface CartProps {
  thumbnail: string
  price: number
  title: string
  id: string
}

function CartItem(props: CartProps) {
  return (
    <SectionCartItem>
      <img src={props.thumbnail} alt="" />
      <DivInfosItem>
        <h3>{props.title}</h3>
        <span>{formateCurrency(props.price)}</span>
        <button type="button">
          <Trash />
        </button>
      </DivInfosItem>
    </SectionCartItem>
  )
}

export default CartItem
