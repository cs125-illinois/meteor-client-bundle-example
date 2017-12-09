import React, { Component } from 'react'
import { createContainer } from 'react-meteor-data'

import { Items } from '../../server/imports/items.js'

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>{ this.props.items.length } Items</h1>
        </header>
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    items: Items.find({}).fetch()
  }
}, App)
