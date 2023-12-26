import { MagnifyingGlass } from '@phosphor-icons/react'
import { FormContainer } from './style.ts'
import { useState } from 'react'

function SearchBar() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <FormContainer>
      <input
        type="search"
        value={searchValue}
        name="Search"
        onChange={({ target }) => {
          setSearchValue(target.value)
        }}
        placeholder="Buscar itens..."
        required
      />
      <button type="submit">
        <MagnifyingGlass />
      </button>
    </FormContainer>
  )
}

export default SearchBar
