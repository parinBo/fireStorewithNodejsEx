var express = require('express');
var router = express.Router();
const admin = require('firebase-admin');
const serviceAccount = require('./fund-662cf-firebase-adminsdk-myvrb-6b8553112d.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/regis', function(req, res, next) {
    res.render('regis', { title: "Login", style: "<link rel=stylesheet href=/>" });
});



router.get('/login', function(req, res, next) {
    res.render('login', { title: "Login", style: "" });
});
router.post('/auth/login', function(req, res, next) {
    const { username, password } = req.body
    const users = db.collection('users');
    const snapshot = users.where('username', '==', username).get();
    snapshot.then((e) => {
        e.forEach(element => {
            console.log(element.data())
        });
    })
    res.render('login', { title: "username or password wrong!", style: "<link rel=stylesheet href=/stylesheets/normal.css>" });
});
module.exports = router;