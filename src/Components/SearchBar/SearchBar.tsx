import { MagnifyingGlass } from '@phosphor-icons/react'
import { FormContainer } from './style.ts'
import { FormEvent, useContext, useState } from 'react'
import { featProducts } from '../../Api/FeacthProducts.ts'
import { appContext } from '../../context/AppContext.ts'

type AppContextType = {
  setProducts: React.Dispatch<React.SetStateAction<[]>>
  setLoad: React.Dispatch<React.SetStateAction<boolean>>
}

function SearchBar() {
  const [searchValue, setSearchValue] = useState('')
  const { setProducts, setLoad } = useContext<AppContextType>(appContext)

  return (
    <FormContainer
      onSubmit={async (event: FormEvent) => {
        event.preventDefault()
        setLoad(true)
        const products = await featProducts(searchValue)
        setSearchValue('')
        setProducts(products)
        setLoad(false)
      }}
    >
      <input
        type="search"
        value={searchValue}
        name="Search"
        onChange={({ target }) => {
          setSearchValue(target.value)
        }}
        placeholder="Buscar itens..."
        required
      />{' '}
      <button type="submit">
        <MagnifyingGlass />
      </button>
    </FormContainer>
  )
}

export default SearchBar
