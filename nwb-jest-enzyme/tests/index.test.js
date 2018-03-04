import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import Component from '../src/'

describe('Component', () => {
  it('displays a welcome message', () => {
    render(<Component/>, node, () => {
      expect(node.innerHTML).toContain('Welcome to React components')
    })
  })
})
