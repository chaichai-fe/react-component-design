import { render, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import '@testing-library/jest-dom'

import Input from '../index'

describe('Input component', () => {
  it('renders the input field', () => {
    const { getByRole } = render(<Input />)
    const inputElement = getByRole('text-input')
    expect(inputElement).toBeInTheDocument()
  })

  it('calls the onChange handler when the input value is changed', () => {
    const onChangeMock = vi.fn()
    const { getByRole } = render(<Input onChange={onChangeMock} />)
    const inputElement = getByRole('text-input')
    fireEvent.change(inputElement, { target: { value: 'new value' } })
    expect(onChangeMock).toHaveBeenCalledWith('new value')
  })

  it('renders the input field with all other props', () => {
    const { getByRole } = render(<Input id="test" data-testid="input-test" />)
    const inputElement = getByRole('text-input')
    expect(inputElement).toHaveAttribute('id', 'test')
    expect(inputElement).toHaveAttribute('data-testid', 'input-test')
  })

  it('renders the input field in a disabled state when disabled prop is set', () => {
    const { getByRole } = render(<Input disabled />)
    const inputElement = getByRole('text-input') as HTMLInputElement
    expect(inputElement.disabled).toBe(true)
  })

  it('renders the input field with password type when password prop is set', () => {
    const { getByRole } = render(<Input password />)
    const inputElement = getByRole('text-input') as HTMLInputElement
    expect(inputElement.type).toBe('password')
  })
})
