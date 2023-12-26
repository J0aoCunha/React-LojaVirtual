import SearchBar from '../SearchBar/SearchBar'
import { Container, HeaderContainer } from './Style'

function Header() {
  return (
    <HeaderContainer>
      <Container>
        <SearchBar />
        <button>cart</button>
      </Container>
    </HeaderContainer>
  )
}

export default Header
