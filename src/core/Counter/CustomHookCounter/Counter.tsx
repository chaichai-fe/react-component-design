import counterStyle from '../style'

type Props = {
  children: React.ReactNode
}

const Counter = (props: Props) => {
  const { children } = props
  return <span className={counterStyle}>{children}</span>
}

type CountProps = {
  count: number
}

const Count = (props: CountProps) => {
  const { count } = props
  return <span className="count">{count}</span>
}

type DecrementProps = {
  onClick?: () => void
  disabled?: boolean
}
const Decrement = (props: DecrementProps) => {
  const { onClick, disabled } = props
  return (
    <button
      className="decrease"
      onClick={() => onClick?.()}
      disabled={disabled}>
      -
    </button>
  )
}

type IncrementProps = {
  onClick?: () => void
  disabled?: boolean
}

const Increment = (props: IncrementProps) => {
  const { onClick, disabled } = props
  return (
    <button
      className="increase"
      onClick={() => onClick?.()}
      disabled={disabled}>
      +
    </button>
  )
}

Counter.Count = Count
Counter.Increment = Increment
Counter.Decrement = Decrement

export { Counter }
