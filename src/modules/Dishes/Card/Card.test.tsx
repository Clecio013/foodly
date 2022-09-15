import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('should render the component', () => {
    const props = {
      id: '123',
      title: 'Good Food',
      description: 'John due description',
      imageUrl: 'http://localhost:3000/image.jpg'
    }

    render(<Card {...props} />)
  })
})
