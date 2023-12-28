import { ShoppingCart } from '@phosphor-icons/react'
import { DivInfos, SectionProduct } from './style.ts'
import { formateCurrency } from '../../utils/FormateCurrency.ts'
import ReplaceLetter from '../../utils/ReplaceLetter.ts'

interface ProductCardProps {
  price: number
  title: string
  thumbnail: string
}

function ProductCard(props: ProductCardProps) {
  return (
    <SectionProduct>
      <img src={ReplaceLetter(props.thumbnail)} alt={props.title} />
      <DivInfos>
        <h2>{formateCurrency(props.price)}</h2>
        <h3>{props.title}</h3>
      </DivInfos>
      <button type="button">
        <ShoppingCart />
      </button>
    </SectionProduct>
  )
}

export default ProductCard
