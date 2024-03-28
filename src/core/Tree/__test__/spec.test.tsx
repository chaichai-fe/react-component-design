import { screen, render, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom'
import Tree from '../index'

const mockData = [
  {
    id: '1',
    title: 'Node 1',
    children: [
      {
        id: '1-1',
        title: 'Node 1-1',
      },
      {
        id: '1-2',
        title: 'Node 1-2',
      },
    ],
  },
  {
    id: '2',
    title: 'Node 2',
  },
]

describe('Tree component', () => {
  it('renders tree component', () => {
    render(<Tree data={mockData} />)
    // 确认是否成功渲染
    expect(screen.getByText('Node 1')).toBeInTheDocument()
    expect(screen.getByText('Node 2')).toBeInTheDocument()
  })

  test('expands and collapses the tree', () => {
    render(<Tree data={mockData} />)

    // 点击展开按钮
    fireEvent.click(screen.getByText('+'))

    // 确认子节点是否显示
    expect(screen.getByText('Node 1-1')).toBeInTheDocument()
    expect(screen.getByText('Node 1-2')).toBeInTheDocument()

    // 点击折叠按钮
    fireEvent.click(screen.getByText('-'))

    // 确认子节点是否隐藏
    expect(screen.queryByText('Node 1-1')).not.toBeInTheDocument()
    expect(screen.queryByText('Node 1-2')).not.toBeInTheDocument()
  })
})
