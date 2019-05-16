// same as `import mongoose from 'mongoose'`
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')


// https://en.wikipedia.org/wiki/List_of_popular_music_genres#Genres

const venueSchema = new mongoose.Schema({
  name: { type: String, required: 'Please enter venue name' },
  pricePoint: { type: String, required: 'Please add how expensive this gaff is', enum: ['Rent overdue', 'Rent due tomorrow', 'Middle of the month', 'Blowout'] },
  website: { type: String },
  tel: { type: String, unique: true, required: 'Please enter venue telephone number' },
  address1: { type: String, required: 'Please enter first line of address' },
  address2: { type: String },
  postCode: { type: String, unique: true, required: 'Please enter venue post code' },
  lat: { type: String },
  lng: { type: String },
  coverImage: { type: String},
  images: [{ type: String }],
  openingTimes: {
    type: [{
      isOvernight: Boolean,
      start: String,
      end: String,
      day: String
    }],
    validate: {
      validator: (value) => {
        //This returns an array of boolean values based on the isOvernight value
        return value.some(time => time.isOvernight)
      },
      message: 'Please enter opening times that are running overnight'
    }
  },
  admissionFee: { type: Number },
  description: {type: String, required: true },
  venueType: { type: String, required: true, enum: ['Bar', 'Boozer', 'Club'] },
  musicStyles: [{ type: String }],
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
})

venueSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Venue', venueSchema)
