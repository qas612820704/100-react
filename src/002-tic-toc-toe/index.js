import React, { Component } from 'react'
import autobind from 'react-autobind'
import FontIcon from 'react-md/lib/FontIcons'
import Button from 'react-md/lib/Buttons'
import './index.css'

const circle = (<FontIcon className="center circle" iconClassName="fa fa-circle-o" />)
const cross = (<FontIcon className="center cross" iconClassName="fa fa-times" />)

export default class TicTocToe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      winner: null
    }
    this.turn = "circle"
    this.rounds = 0

    autobind(this)
  }

  switchTurn() {
    this.turn = this.turn === "circle" ? "cross" : "circle"
  }

  handleClick(x, y) {
    const { winner, items } = this.state

    if (winner) return
    if (items[x][y]) return

    items[x][y] = this.turn

    this.setState({ items })

    const new_winner = this.getWinner(items)
    if (new_winner) {
      this.gameOver(new_winner)
      return
    }

    this.rounds = this.rounds + 1
    if (this.rounds === 9)
      this.gameOver("draw")

    this.switchTurn()
  }

  handleReset() {
    this.setState({
      items: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      winner: null
    })

    this.turn = "circle"
    this.rounds = 0
  }

  gameOver(winner) {
    this.setState({ winner })
  }

  getIcon(x, y) {
    const { items } = this.state
    const item = items[x][y]

    if (!item) return null

    return item === "circle" ?
      circle : cross
  }

  getWinner(items) {
    // horizontial
    if (items[0][0] && (items[0][0] === items[0][1]) && (items[0][1] === items[0][2]))
      return items[0][0]
    if (items[1][0] && (items[1][0] === items[1][1]) && (items[1][1] === items[1][2]))
      return items[1][0]
    if (items[2][0] && (items[2][0] === items[2][1]) && (items[2][1] === items[2][2]))
      return items[2][0]

    // vertical
    if (items[0][0] && (items[0][0] === items[1][0]) && (items[1][0] === items[2][0]))
      return items[0][0]
    if (items[0][1] && (items[0][1] === items[1][1]) && (items[1][1] === items[2][1]))
      return items[0][1]
    if (items[0][2] && (items[0][2] === items[1][2]) && (items[1][2] === items[2][2]))
      return items[0][2]

    // corss
    if (items[1][1] && (items[0][0] === items[1][1]) && (items[1][1] === items[2][2]))
      return items[1][1]
    if (items[1][1] && (items[0][2] === items[1][1]) && (items[1][1] === items[2][0]))
      return items[1][1]

    return null
  }

  renderDraw() {

  }

  renderWinner(winner) {
    return (
      <span>
        Winner is &nbsp;
        { winner === "circle"
          ? circle : cross
        }
        <br />
      </span>
    )
  }

  render() {
    const { winner } = this.state
    return (
      <div className="center-container">
        <div className="center sharp-container">
          <Item x={0} y={0} handleClick={this.handleClick} getIcon={this.getIcon}/>
          <Item x={0} y={1} handleClick={this.handleClick} getIcon={this.getIcon}/>
          <Item x={0} y={2} handleClick={this.handleClick} getIcon={this.getIcon}/>
          <Item x={1} y={0} handleClick={this.handleClick} getIcon={this.getIcon}/>
          <Item x={1} y={1} handleClick={this.handleClick} getIcon={this.getIcon}/>
          <Item x={1} y={2} handleClick={this.handleClick} getIcon={this.getIcon}/>
          <Item x={2} y={0} handleClick={this.handleClick} getIcon={this.getIcon}/>
          <Item x={2} y={1} handleClick={this.handleClick} getIcon={this.getIcon}/>
          <Item x={2} y={2} handleClick={this.handleClick} getIcon={this.getIcon}/>
        </div>
        { this.state.winner &&
          <div className="game-over-container">
            <div className="game-over">
              Game Over!
              { winner !== "draw" && this.renderWinner(winner)}
              { winner === "draw" && 'No one win!'}
              <p>
                <Button raised
                  label="Reset ?"
                  onClick={this.handleReset}
                />
              </p>
            </div>
          </div>
        }
      </div>
    )
  }
}

const Item = ({
  x, y,
  handleClick,
  getIcon
}) => (
  <div
    className="center-container item"
    onClick={() => handleClick(x, y)}
  >
    { getIcon(x, y) }
  </div>
)
