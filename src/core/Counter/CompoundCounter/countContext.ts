import { createContext } from 'react'

type ContextType = {
  count: number
  handleIncrement: () => void
  handleDecrement: () => void
}

const CountContext = createContext<ContextType>({
  count: 0,
  handleDecrement: () => {},
  handleIncrement: () => {},
})

export { CountContext }
