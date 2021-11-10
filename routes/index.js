import { Router } from 'express'


const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Home Page', user: req.user ? req.user : null })
})

router.get('/edit', function(req, res) {
  res.render('/edit', {
    user: req.user
  })
})

export {
  router
}