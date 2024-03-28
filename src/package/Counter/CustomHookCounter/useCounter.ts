import { useState } from 'react'

const useHookCounter = (intialeCount: number) => {
  const [count, setCount] = useState(intialeCount)
  const handleIncrement = () => {
    setCount((preCount) => preCount + 1)
  }
  const handleDecrement = () => {
    setCount((preCount) => preCount - 1)
  }
  return {
    count,
    handleDecrement,
    handleIncrement,
  }
}

export { useHookCounter }
