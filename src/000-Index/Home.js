import React from 'react'
import { Link } from 'react-router-dom'
import Paper from 'react-md/lib/Papers'
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
    </List>
  </div>
)
export default Home
