import React, { useState } from 'react'
import { appContext } from './AppContext'

interface propsProvider {
  children: React.ReactNode
}
interface Product {
  id: number
  thumbnail: string
  title: string
  price: number
}
function Provider(props: propsProvider) {
  const [products, setProducts] = useState<Product[]>([])
  const [load, setLoad] = useState(true)
  const [cartItens, setCartItens] = useState([])
  const value = {
    products,
    setProducts,
    load,
    setLoad,
    cartItens,
    setCartItens,
  }
  return (
    <appContext.Provider value={value}>{props.children}</appContext.Provider>
  )
}

export default Provider
