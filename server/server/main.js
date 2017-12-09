import { Mongo } from 'meteor/mongo'

import { Items } from '../imports/items.js'

Items.remove({})

let count = 0
Meteor.setInterval(() => {
  Items.insert({ count: count++ })
}, 1000)
