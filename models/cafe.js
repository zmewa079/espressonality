import mongoose from 'mongoose'
const Schema = mongoose.Schema

const cafeSchema = new Schema({
  name: String,
  address: String,
  website: String,
  addedBy: {type: Schema.Types.ObjectId, ref: 'Profile'}
})

const Cafe = mongoose.model("Cafe", cafeSchema)

export {
  Cafe
}