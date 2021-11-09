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
    res.redirect('/cafes')
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

function createReview(req, res) {
  req.body.addedBy = req.user.profile._id
  Cafe.findById(req.params.id)
  .then((cafe)=> {
    cafe.reviews.push(req.body)
    cafe.save()
    res.redirect(`/cafes/${cafe._id}`)
  })
}

function deleteCafe(req, res) {
  Cafe.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/cafes')
  })
}

function edit(req, res) {
  Cafe.findById(req.params.id)
  .then((cafe) => {
    res.render('cafes/edit', {
      title: 'Edit Cafe Entries',
      user: req.user,
      cafe
    })
  })
}

function update(req, res) {
  Cafe.findByIdAndUpdate(req.params.id, req.body)
  .then((cafe) => {
    res.redirect(`/cafes/${cafe._id}`)
  })
}

export {
  index,
  newCafe as new,
  create,
  show,
  createReview,
  deleteCafe as delete,
  edit,
  update
}




