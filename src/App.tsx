import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Main } from './Pages/Main/main'
import { Container } from '@mui/material'
import { PokemonProvider } from './pokemon-context/pokemon-context'
import { pokemonContainer } from './composition-root'

function App() {
  return (
    <Provider store={store}>
      <PokemonProvider container={pokemonContainer}>
        <Container>
          <Main />
        </Container>
      </PokemonProvider>
    </Provider>
  )
}

export default App
