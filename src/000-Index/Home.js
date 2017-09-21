import React from 'react'
import { Link } from 'react-router-dom'
import List from 'react-md/lib/Lists/List'
import ListItem from 'react-md/lib/Lists/ListItem'

const Home = () => (
  <div className="md-grid md-cell--middle md-cell--6">
    <List className="md-cell md-cell--12 md-paper md-paper--1">
      <ListItem
        primaryText={
          <Link to={`/001/`}>001 Clicking</Link>
        }
      />
      <ListItem
        primaryText={
          <Link to={`/002/`}>002 Tic Toc Toe</Link>
        }
      />

    </List>
  </div>
)
export default Home
