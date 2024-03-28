import { render, screen } from '@testing-library/react'
// 拓展一些dom测试方法 比如toBeInTheDocument
import '@testing-library/jest-dom'
// 拓展用户事件
import userEvent from '@testing-library/user-event'
// test basic runner
import { describe, it, expect, vi } from 'vitest'

import Button from '..'

const classPrefix = 'adm-button'

describe('test button', () => {
  it('Button children it', () => {
    render(<Button>click me</Button>)
    expect(screen.getByText('click me')).toBeInTheDocument()
  })

  it('render Button with different colors', () => {
    render(
      <>
        <Button color="primary">Primary</Button>
        <Button color="success">Success</Button>
        <Button color="danger">Danger</Button>
        <Button color="warning">Warning</Button>
      </>
    )
    expect(screen.getByText('Primary').closest('button')).toHaveClass(
      `${classPrefix}-primary`
    )
    expect(screen.getByText('Success').closest('button')).toHaveClass(
      `${classPrefix}-success`
    )
    expect(screen.getByText('Danger').closest('button')).toHaveClass(
      `${classPrefix}-danger`
    )
    expect(screen.getByText('Warning').closest('button')).toHaveClass(
      `${classPrefix}-warning`
    )
  })

  it('render with fill', () => {
    const { getByText } = render(
      <>
        <Button fill="solid">solid</Button>
        <Button fill="outline">outline</Button>
        <Button fill="none">none</Button>
      </>
    )
    expect(getByText('outline').closest('button')).toHaveClass(
      `${classPrefix}-fill-outline`
    )
    expect(getByText('none').closest('button')).toHaveClass(
      `${classPrefix}-fill-none`
    )
    expect(getByText('solid').closest('button')).toHaveClass(
      `${classPrefix}-fill-solid`
    )
  })

  it('render with disabled', () => {
    render(<Button disabled>disabled</Button>)
    expect(screen.getByText('disabled')).toBeDisabled()
  })

  it('render with click', async () => {
    const cb = vi.fn()
    render(<Button onClick={cb}>click me</Button>)
    await userEvent.click(screen.getByText('click me'))
    expect(cb).toBeCalledTimes(1)
  })

  it('render with click and disable', async () => {
    const cb = vi.fn()
    render(
      <Button onClick={cb} disabled>
        click me
      </Button>
    )
    await userEvent.click(screen.getByText('click me'))
    expect(cb).toBeCalledTimes(0)
  })
})
