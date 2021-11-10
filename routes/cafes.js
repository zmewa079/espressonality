import { Router } from 'express'
import * as cafesCtrl from '../controllers/cafes.js'

const router = Router()

router.get('/', isLoggedIn, cafesCtrl.index)
router.get('/new', isLoggedIn, cafesCtrl.new)
router.post('/', isLoggedIn, cafesCtrl.create)
router.get('/:id', isLoggedIn, cafesCtrl.show)
router.post('/:id/reviews', isLoggedIn, cafesCtrl.createReview)
router.delete("/:cafeId/reviews/:reviewId", isLoggedIn, cafesCtrl.deleteReview)
router.delete('/:id', isLoggedIn, cafesCtrl.delete)
router.get('/:id/edit', isLoggedIn, cafesCtrl.edit)
router.put('/:id', isLoggedIn, cafesCtrl.update)



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export {
  router
}