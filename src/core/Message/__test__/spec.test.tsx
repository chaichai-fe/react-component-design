import { screen, act, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom'

import Message from '../index'

const classPrefix = 'adm-message'

describe('Message component', () => {
  it('render Message', async () => {
    act(() => {
      Message.show({
        children: 'hello message',
      })
    })

    waitFor(
      () => {
        expect(screen.getByText('hello message')).toBeInTheDocument()
      },
      {
        timeout: 1000,
      }
    )

    waitFor(
      () => {
        expect(screen.queryByText('hello message')).not.toBeInTheDocument()
      },
      {
        timeout: 1600,
      }
    )
  })

  it('render Message by type', async () => {
    act(() => {
      Message.show({
        children: 'hello message',
        type: 'success',
      })
    })

    waitFor(
      () => {
        expect(screen.queryByText('hello message')).toHaveClass(
          `${classPrefix}-success`
        )
      },
      {
        timeout: 500,
      }
    )
  })
})
