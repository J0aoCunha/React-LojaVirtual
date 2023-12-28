import { ShoppingCart } from '@phosphor-icons/react'
import { DivInfos, SectionProduct } from './style.ts'
import { formateCurrency } from '../../utils/FormateCurrency.ts'

interface ProductCardProps {
  price: number
  title: string
  thumbnail: string
}

function ProductCard(props: ProductCardProps) {
  return (
    <SectionProduct>
      <img src={props.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="" />
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
