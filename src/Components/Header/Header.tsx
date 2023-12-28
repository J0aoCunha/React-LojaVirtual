import CartButton from '../CartButton/CartButton'
import SearchBar from '../SearchBar/SearchBar'

import { HeaderContainer } from './Style'
import { Container } from '../../Global.ts'

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
