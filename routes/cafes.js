import { Router } from 'express'
import * as cafesCtrl from '../controllers/cafes.js'

const router = Router()

// router.get('/cafes', isLoggedIn, cafesCtrl.index)
router.get('/new', isLoggedIn, cafesCtrl.new)
router.post('/', isLoggedIn, cafesCtrl.create)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export {
  router
}