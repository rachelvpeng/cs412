let express = require('express');
let router = express.Router();

router.route('/')
.get((req, res, next) => {
  res.render('renderString', { string: "This is a fixed string." });
})
.post((req, res, next) => {
  res.render('renderString', { string: req.body.string, length: req.body.string.length })
})

module.exports = router;