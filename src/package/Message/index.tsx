import { ComponentProps } from 'react'
import Message from './Message'

type Props = ComponentProps<typeof Message> & {
  singleton?: boolean
}

import { createRoot } from 'react-dom/client'

let container: HTMLDivElement | null

function show(props: Props) {
  const { singleton = true } = props
  if (singleton) {
    container?.remove()
  }
  // 1. create a container
  container = document.createElement('div')

  // 2. append to the body
  document.body.appendChild(container)

  // 3. render Message to the container
  createRoot(container).render(<Message {...props} />)
}

export default { show }
