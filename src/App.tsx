import Cart from './Components/Cart/Cart'
import Header from './Components/Header/Header'
import Products from './Components/Products/Products'
import { Container } from './app'

import Provider from './context/Provider'

function App() {
  return (
    <Provider>
      <Container>
        <Header />
        <Products />
        <Cart />
      </Container>
    </Provider>
  )
}

export default App
