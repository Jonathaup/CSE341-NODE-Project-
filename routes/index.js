const passport = require('passport');
const router = require('express').Router();

router.use('/', require('./swagger'));
router.use('/cars', require('./cars'));
router.use('/restaurants', require('./restaurants'));

router.get('/login', passport.authenticate('github'));

router.get('/logout', function (req, res, next) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
