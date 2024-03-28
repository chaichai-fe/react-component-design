import { useState } from 'react'
import counterStyle from '../style'

type Props = {
  initailCount?: number
  onChange?: (count: number) => void
  max?: number
  min?: number
}

const BaseCounter = (props: Props) => {
  const { initailCount = 0, onChange, max, min = 0 } = props

  const [count, setCount] = useState(initailCount)

  const decrease = () => {
    if (count === min) return
    setCount((count) => {
      onChange && onChange(count - 1)
      return count - 1
    })
  }

  const increase = () => {
    if (max && count === max) return
    setCount((count) => {
      onChange && onChange(count + 1)
      return count + 1
    })
  }

  return (
    <>
      <span className={counterStyle}>
        {/* 减操作 */}
        <button className="decrease" onClick={decrease}>
          -
        </button>
        {/* count */}
        <span className="count">{count}</span>
        {/* 增操作 */}
        <button className="increase" onClick={increase}>
          +
        </button>
      </span>
    </>
  )
}

export default BaseCounter
