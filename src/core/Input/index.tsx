import { ComponentProps } from 'react'
import { InputStyle } from './style'
import classNames from 'classnames'

// value直接可用
// onChange需要我们自定义
type Props = Omit<ComponentProps<'input'>, 'onChange'> & {
  onChange?: (value: string) => void
  password?: boolean
}

const Input = (props: Props) => {
  const { onChange, password, disabled, ...rest } = props
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange && onChange(e.target.value)
  }

  const classList = classNames('adm-input', {
    'adm-input-disabled': disabled,
  })

  return (
    <div className={InputStyle}>
      <input
        role="text-input"
        className={classList}
        disabled
        onChange={onChangeHandler}
        {...rest}
        type={password ? 'password' : 'text'}
      />
    </div>
  )
}

export default Input
