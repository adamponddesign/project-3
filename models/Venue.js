// same as `import mongoose from 'mongoose'`
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')


// https://en.wikipedia.org/wiki/List_of_popular_music_genres#Genres
const genres = ['Jazz', 'Funk', 'Techno', 'House', 'Disco', 'Electronic', 'Rock', 'Blues', 'Metal', 'None']

const venueSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: 'Please enter venue name' },
  pricePoint: { type: String, required: 'Please add how expensive this gaff is', enum: ['Rent overdue', 'Rent due tomorrow', 'Middle of the month', 'Blowout'] },
  website: { type: String },
  tel: { type: String, unique: true, required: 'Please enter venue telephone number' },
  address1: { type: String, required: 'Please enter first line of address' },
  address2: { type: String },
  postCode: { type: String, unique: true, required: 'Please enter venue post code' },
  lat: { type: String, unique: true},
  lng: { type: String, unique: true},
  images: [{}],
  openingTimes: [{
    isOvernight: Boolean,
    start: String,
    end: String,
    day: Number
  }],
  admissionFee: { type: Number },
  description: {type: String, unique: true },
  venueType: { type: String, required: true, enum: ['Bar', 'Boozer', 'Club'] },
  musicStyle: { type: String, enum: genres },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
})

venueSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Venue', venueSchema)
