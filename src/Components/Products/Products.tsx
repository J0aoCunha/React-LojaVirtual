import { useEffect, useState } from 'react'
import { ContainerSection } from './style.ts'
import { featProducts } from '../../Api/FeacthProducts.ts'
import ProductCard from '../ProductCard/ProductCard.tsx'
import { Container } from '../../Global.ts'
import Loader from '../Loader/Loader.tsx'

interface Product {
  id: number
  thumbnail: string
  title: string
  price: number
}

function Products() {
  const [load, setLoad] = useState(true)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    featProducts('iphone').then((response) => {
      setProducts(response)
      setLoad(false)
    })
  }, [])

  return (
    (load && <Loader />) || (
      <Container>
        <ContainerSection>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              thumbnail={product.thumbnail}
              title={product.title}
              price={product.price}
            />
          ))}
        </ContainerSection>
      </Container>
    )
  )
}

export default Products
