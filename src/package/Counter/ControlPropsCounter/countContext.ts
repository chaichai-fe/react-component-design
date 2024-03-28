import { createContext } from 'react'

type ContextType = {
  count: number
  onChange: (count: number) => void
}

const CountContext = createContext<ContextType>({
  count: 0,
  onChange: () => {},
})

export { CountContext }
