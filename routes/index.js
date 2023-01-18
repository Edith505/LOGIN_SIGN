var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get("/sign", (req, res) =>{
  res.render("sign", { title: 'Sign In' })
})

//recuperation des données du formulaires pour le sign
router.post("/login", async (req, res) =>{
  const data={
    email: req.body.email,
    password: req.body.password
  }
  await collection.instertMany([data])
  res.render("index")
})


module.exports = router;
