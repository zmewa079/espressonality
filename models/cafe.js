import mongoose from 'mongoose'
const Schema = mongoose.Schema

const reviewSchema = new Schema({
  recommendation: String,
  ambience: {type: String, enum: ['calm', 'moderate', 'busy', 'noisy']},
  avgprice: {type: Number, enum: [1, 2, 3, 4, 5]},
  rating: {type: Number, enum: [1, 2, 3, 4, 5]},
  comments: String
})

const cafeSchema = new Schema({
  name: String,
  address: String,
  website: String,
  reviews: [reviewSchema],
  addedBy: {type: Schema.Types.ObjectId, ref: 'Profile'}
})

const Cafe = mongoose.model("Cafe", cafeSchema)

export {
  Cafe
}