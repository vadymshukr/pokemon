import { createContext, FC, ReactNode } from 'react'
import { PokemonContainerType } from '../composition-root'

export const PokemonContext = createContext<PokemonContainerType | null>(null)

type Props = {
  children: ReactNode
  container: PokemonContainerType
}

export const PokemonProvider: FC<Props> = ({ children, container }) => {
  return <PokemonContext.Provider value={container}>{children}</PokemonContext.Provider>
}
