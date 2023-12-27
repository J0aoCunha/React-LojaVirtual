import CartButton from '../CartButton/CartButton'
import SearchBar from '../SearchBar/SearchBar'

import { Container, HeaderContainer } from './Style'

function Header() {
  return (
    <HeaderContainer>
      <Container>
        <SearchBar />
        <CartButton />
      </Container>
    </HeaderContainer>
  )
}

export default Header
