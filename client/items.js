import './meteor-client.js'

import { Meteor } from 'meteor/meteor'
import React from 'react'
import { render } from 'react-dom'

import App from './containers/Items.js'

Meteor.startup(() => {
	render(<App />, document.getElementById('items'))
});
