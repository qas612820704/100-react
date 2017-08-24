import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Button from 'react-md/lib/Buttons/Button'
import autobind from 'react-autobind'

import './index.css'

const MAX_CNT = 20

export default class Clicking extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }

    autobind(this)
  }

  handleClick(e) {
    let { count } = this.state
    if (this.checkMax()) {
      return
    }

    this.shakeit()
    this.coloring()
    this.bgColoring()
    count = count + 1
    this.setState({ count })

  }

  shakeit() {
    this.display.classList.add('shake')
    setTimeout(()=> {
      this.display.classList.remove('shake')
    }, 100)
  }

  coloring() {
    this.display.style.color = this.randomColor()
  }

  bgColoring() {
    this.container.style.backgroundColor = this.randomColor()
  }

  randomColor() {
    return `#${Math.random().toString(16).slice(2,8)}`
  }

  checkMax() {
    return this.state.count >= MAX_CNT
  }

  handleReset(e) {
    this.display.style.color = ''
    this.container.style.backgroundColor = ''
    this.setState({ count: 0 })
  }

  render() {
    const { count } = this.state
    return (
      <div
        ref={(r) => {this.container = r}}
        className="center-container"
        onClick={this.handleClick}
      >
        <div className="center">
          <p ref={(r) => { this.display = r }}>{ count }</p>
          { this.checkMax() &&
            <Button raised
              label="Reset"
              onClick={this.handleReset}
            />
          }
        </div>
      </div>
    )
  }
}
