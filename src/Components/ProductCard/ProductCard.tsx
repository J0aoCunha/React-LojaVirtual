import { ShoppingCart } from '@phosphor-icons/react'
import { DivInfos, SectionProduct } from './style.ts'
import { formateCurrency } from '../../utils/FormateCurrency.ts'
import ReplaceLetter from '../../utils/ReplaceLetter.ts'
import { useContext } from 'react'
import { appContext } from '../../context/AppContext.ts'

interface ProductCardProps {
  price: number
  title: string
  thumbnail: string
  id: string
}
type AppContextType = {
  cartItens: Array<{
    id: string
    title: string
    price: number
    thumbnail: string
  }>
  setCartItens: React.Dispatch<React.SetStateAction<[]>>
}
function ProductCard(props: ProductCardProps) {
  const { price, title, thumbnail } = props

  const { cartItens, setCartItens } = useContext<AppContextType>(appContext)
  const newItem = {
    title,
    price,
    thumbnail,
  }
  return (
    <SectionProduct>
      <img src={ReplaceLetter(thumbnail)} alt={props.title} />
      <DivInfos>
        <h2>{formateCurrency(price)}</h2>
        <h3>{title}</h3>
      </DivInfos>
      <button
        type="button"
        onClick={() => {
          setCartItens([...cartItens, newItem])
        }}
      >
        <ShoppingCart />
      </button>
    </SectionProduct>
  )
}

export default ProductCard
