import { Router } from 'express'
import * as cafesCtrl from '../controllers/cafes.js'

const router = Router()

router.get('/', isLoggedIn, cafesCtrl.index)
router.get('/new', isLoggedIn, cafesCtrl.new)
router.post('/', isLoggedIn, cafesCtrl.create)
router.get('/:id', isLoggedIn, cafesCtrl.show)
router.post('/:id/reviews', cafesCtrl.createReview)



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export {
  router
}