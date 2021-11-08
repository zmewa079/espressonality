import { Cafe } from '../models/cafe.js'


function index(req, res) {
  Cafe.find({})
  .then(cafes => {
    res.render('cafes/index', {
      user: req.user,
      title: 'My Favorite Cafes',
      cafes
    })
  })
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

function show(req, res) {
  Cafe.findById(req.params.id)
    .then((cafe) => {
      res.render('cafes/show', {
        title: 'Cafe Detail',
        user: req.user,
        cafe
      })
    })
}

export {
  index,
  newCafe as new,
  create,
  show
}




