const mongoose = require('mongoose')
const ParkSchema = require('./park')
const RideSchema = require('./ride')
const PackageSchema = require('./package')
const CommentSchema = require('./comment')

const Park = mongoose.model('parks', ParkSchema)
const Ride = mongoose.model('rides', RideSchema)
const Package = mongoose.model('packages', PackageSchema)
const Comment = mongoose.model('comment', CommentSchema)

module.exports = {
  Park,
  Ride,
  Package,
  Comment
}