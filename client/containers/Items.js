import React, { Component } from 'react'
import { withTracker } from 'react-meteor-data-with-tracker'

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

export default withTracker(() => {
  return {
    items: Items.find({}).fetch()
  };
})(App);