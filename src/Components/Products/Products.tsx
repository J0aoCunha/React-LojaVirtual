import { useContext, useEffect } from 'react'
import { ContainerSection } from './style.ts'
import { featProducts } from '../../Api/FeacthProducts.ts'
import { Container } from '../../Global.ts'
import { appContext } from '../../context/AppContext.ts'
import ProductCard from '../ProductCard/ProductCard.tsx'
import Loader from '../Loader/Loader.tsx'

function Products() {
  type AppContextType = {
    products: Array<{
      id: string
      title: string
      price: number
      thumbnail: string
    }>
    setProducts: React.Dispatch<React.SetStateAction<[]>>
    load: boolean
    setLoad: React.Dispatch<React.SetStateAction<boolean>>
  }

  const { products, setProducts, load, setLoad } =
    useContext<AppContextType>(appContext)
  useEffect(() => {
    featProducts('iphone').then((response) => {
      setProducts(response)
      setLoad(false)
    })
  }, [setProducts])

  return (
    (load && <Loader />) || (
      <Container>
        <ContainerSection>
          {products.map((product) => (
            <ProductCard
              id={product.id}
              key={product.id}
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
            />
          ))}
        </ContainerSection>
      </Container>
    )
  )
}

export default Products
