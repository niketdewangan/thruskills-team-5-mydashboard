var express = require('express');
var router = express.Router();

let admins = [
  { email: 'niket.dewangan11@gmail.com', password: 'niket123!@#', name: 'Niket' }
]


// <-------------------- admin section------------------------------------------>

router.get('/', function (req, res) {
  res.render('admin', { title: 'admin', layout: 'adminlayout' })
});

router.post('/', function (req, res) {
  let { email, password } = req.body;
  console.log(email);
  console.log(password);
  if (email != undefined && email !== '' && password != undefined && password !== '') {
    
    admins.forEach((u) => {
      console.log(u)
      if (u.email === email && u.password === password) {
        req.session.isLoggedIn = true;
        req.session.user = u;
        res.redirect('/adminpanel');
      }
     else {
    res.render('admin', { title: 'admin', layout: 'adminlayout' })
     }
  } )
}
});

module.exports = router;