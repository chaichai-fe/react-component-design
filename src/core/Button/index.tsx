import { ComponentProps } from 'react'
import { ButtonStyle } from './style'
import classNames from 'classnames'

type ButtonBaseType = ComponentProps<'button'>

type CustomProps = {
  block?: boolean
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  size?: 'mini' | 'small' | 'middle' | 'large'
  disabled?: boolean
  shape?: 'default' | 'rounded' | 'rectangular'
  type?: 'submit' | 'reset' | 'button'
  fill?: 'solid' | 'outline' | 'none'
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

type ButtonProps = ButtonBaseType & CustomProps

const Button = (props: ButtonProps) => {
  const {
    block = false,
    color = 'default',
    size = 'middle',
    disabled = false,
    shape = 'default',
    type = 'button',
    fill = 'solid',
    className,
    children,
    onClick,
    ...restProps
  } = props

  const classList = classNames(
    'adm-button',
    [
      `adm-button-${color}`,
      `adm-button-${size}`,
      `adm-button-shape-${shape}`,
      `adm-button-fill-${fill}`,
    ],
    {
      'adm-button-disabled': disabled,
      'adm-button-block': block,
    },
    className
  )

  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    !disabled && onClick?.(e)
  }

  return (
    <div className={ButtonStyle}>
      <button
        onClick={clickHandler}
        className={classList}
        disabled={disabled}
        type={type}
        {...restProps}>
        {children}
      </button>
    </div>
  )
}

export default Button
