import { Counter, useCounter } from '../index'

function App() {
  const { count, handleDecrement, handleIncrement } = useCounter(0)

  return (
    <div>
      <Counter value={count}>
        <Counter.Decrement onClick={handleDecrement} />
        <Counter.Count />
        <Counter.Increment onClick={handleIncrement} />
      </Counter>
    </div>
  )
}

export default App
