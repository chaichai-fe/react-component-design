import { useContext, useState } from 'react'
import counterStyle from '../style'
import { CountContext } from './countContext'

type Props = {
  onChange?: (count: number) => void
  initialCount?: number
  children: React.ReactNode
}

const Counter = (props: Props) => {
  const { onChange, children, initialCount = 0 } = props

  const [count, setCount] = useState(initialCount)

  const handleIncrement = () => {
    setCount(count + 1)
    onChange && onChange(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
    onChange && onChange(count - 1)
  }

  return (
    <>
      <CountContext.Provider
        value={{ count, handleIncrement, handleDecrement }}>
        <span className={counterStyle}>{children}</span>
      </CountContext.Provider>
    </>
  )
}

const Count = () => {
  let { count } = useContext(CountContext)
  return <span className="count">{count}</span>
}

type DecrementProps = {
  min?: number
}

const Decrement = (props: DecrementProps) => {
  const { handleDecrement, count } = useContext(CountContext)
  const { min = 0 } = props
  return (
    <button
      className="decrease"
      onClick={handleDecrement}
      disabled={min === count}>
      -
    </button>
  )
}

type IncrementProps = {
  max?: number
}

const Increment = (props: IncrementProps) => {
  const { handleIncrement, count } = useContext(CountContext)
  const { max } = props
  return (
    <button
      className="increase"
      onClick={handleIncrement}
      disabled={count === max}>
      +
    </button>
  )
}

Counter.Count = Count
Counter.Increment = Increment
Counter.Decrement = Decrement

export default Counter
