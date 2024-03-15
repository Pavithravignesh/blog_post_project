require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
const PORT = 5000 || process.env.PORT;
// process.env.PORT; while deloping in the server their port number will be there in the PORT?

app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// routes respectives
app.use('/', require('./server/routes/main'))

// app which is express object will have a listen a PORT do what it has in the callBack? 
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

// what's the genuine relation between app.get and app.listen?
// app.get pass request to the web? which req.send()?
// where app.listen look out for to progress further?