import { render, screen } from '@testing-library/react'
// 拓展一些dom测试方法 比如toBeInTheDocument
import '@testing-library/jest-dom'

import { describe, expect, it } from 'vitest'

import Card from '..'

describe('Card', () => {
  it('renders the Card with correct text', () => {
    render(<Card />)
    expect(screen.getByText('Default title')).toBeInTheDocument()
    expect(screen.getByText('Default main content')).toBeInTheDocument()
  })

  it('renders with custom title and content', () => {
    render(<Card title="My Custom Title">My Custom Content</Card>)
    expect(screen.getByText('My Custom Title')).toBeInTheDocument()
    expect(screen.getByText('My Custom Content')).toBeInTheDocument()
  })

  it('does not render title when showTitle is false', () => {
    const { queryByText } = render(<Card showTitle={false} />)
    expect(queryByText('Default title')).toBeNull()
  })

  it('renders with custom style', () => {
    const style = { color: 'rgb(255,255,255)' }
    render(<Card style={style} />)
    expect(screen.getByText('Default title')).toHaveStyle(
      'color: rgb(255,255,255)'
    )
  })

  it('renders with extra', () => {
    render(<Card extra={'this is extra'} />)
    expect(screen.getByText('this is extra')).toBeInTheDocument()
  })
})
