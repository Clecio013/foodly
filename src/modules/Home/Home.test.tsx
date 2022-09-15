import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Home from './Home'

describe('Home', () => {
  it('should render the component', () => {
    render(<Home />)
  })

  it('should have ui attributes', () => {
    render(<Home />)

    const title = screen.getByText('Foodly')
    const description = screen.getByText('Escolha a comida que irá comer no dia de visitar seus amigos')
    const button = screen.getByRole('button')

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(button).toHaveTextContent('Entrar com Google')
  })
})
