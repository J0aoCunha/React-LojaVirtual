import { useEffect, useState } from 'react'
import { ContainerSection } from './style.ts'
import { featProducts } from '../../Api/FeacthProducts.ts'
import ProductCard from '../ProductCard/ProductCard.tsx'

interface Product {
  id: number
  thumbnail: string
  title: string
  price: number
}

function Products() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    featProducts('iphone').then((response) => {
      setProducts(response)
    })
  }, [])

  return (
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
  )
}

export default Products
