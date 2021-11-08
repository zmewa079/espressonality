import { Cafe } from '../models/cafe.js'


function index(req, res) {
  
}

function newCafe(req, res) {
  res.render('cafes/new', {
    title: 'Add Cafe',
    user: req.user
  })
}

export {
  index,
  newCafe as new
}




