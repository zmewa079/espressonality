import { Cafe } from '../models/cafe.js'


function index(req, res) {
  Cafe.find({})
  .then(cafes => {
    res.render('cafes/index', {
      user: req.user,
      title: 'Cafe Catalog',
      cafes
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
}

function newCafe(req, res) {
  res.render('cafes/new', {
    title: 'Add Cafe',
    user: req.user
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res) {
  Cafe.create(req.body)
  .then(() => {
    res.redirect('/cafes')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Cafe.findById(req.params.id)
  .populate('reviews.addedBy')
    .then((cafe) => {
      res.render('cafes/show', {
        title: 'Cafe Detail',
        user: req.user,
        cafe
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
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
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function deleteReview(req, res) {
  Cafe.findById(req.params.cafeId)
  .then(cafe => {
    cafe.reviews.remove({_id: req.params.reviewId})
    cafe.save()
    .then(() => {
    res.redirect(`/cafes/${cafe._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
}

function deleteCafe(req, res) {
  Cafe.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/cafes')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
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
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
}

function update(req, res) {
  Cafe.findByIdAndUpdate(req.params.id, req.body)
  .then((cafe) => {
    res.redirect(`/cafes/${cafe._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
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
  update,
  deleteReview
}




