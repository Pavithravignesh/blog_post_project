const express = require('express');
const router = express.Router();

// via app which is express() you've got to receive a request(get) then, do the thing placed in between parentheses, as it happend for eventListener parentheses?
router.get('', (req, res) => {
    const locals = {
        title: "Home | Node JS Blog",
        description: "Simple blog using nodeJS, Express & MongoDb."
    }
    res.render('index', { locals });
});

router.get('/about', (req, res) => {
    const locals = {
        title: "About | Node JS Blog",
        description: "Simple blog using nodeJS, Express & MongoDb."
    }
    res.render('about', { locals });
});

router.get('/contact', (req, res) => {
    const locals = {
        title: "Contact | Node JS Blog",
        description: "Simple blog using nodeJS, Express & MongoDb."
    }
    res.render('contact', { locals });
});

module.exports = router;