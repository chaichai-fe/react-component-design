import { useContext } from 'react'
import counterStyle from '../style'
import { CountContext } from './countContext'

type Props = {
  onChange: (count: number) => void
  count: number
  children: React.ReactNode
}

const Counter = (props: Props) => {
  const { onChange, children, count } = props
  return (
    <>
      <CountContext.Provider value={{ count, onChange }}>
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
  const { onChange, count } = useContext(CountContext)
  const { min = 0 } = props
  return (
    <button
      className="decrease"
      onClick={() => onChange(count - 1)}
      disabled={min == count}>
      -
    </button>
  )
}

type IncrementProps = {
  max?: number
}

const Increment = (props: IncrementProps) => {
  const { onChange, count } = useContext(CountContext)
  const { max } = props

  return (
    <button
      className="increase"
      onClick={() => onChange(count + 1)}
      disabled={max === count}>
      +
    </button>
  )
}

Counter.Count = Count
Counter.Increment = Increment
Counter.Decrement = Decrement

export default Counter
