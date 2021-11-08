import { Cafe } from '../models/cafe.js'


function index(req, res) {
  
}

function newCafe(req, res) {
  res.render('cafes/new', {
    title: 'Add Cafe',
    user: req.user
  })
}

function create(req, res) {
  Cafe.create(req.body)
  .then(() => {
    res.redirect('/')
  })

}

export {
  index,
  newCafe as new,
  create
}




