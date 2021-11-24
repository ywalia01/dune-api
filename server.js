const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
// const CONNECTION_URL = 'mongodb+srv://yashwalia:yashwalia1002@cluster0.4e5gp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const getArticle = require('./loaders/getArticle');

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});
app.get('/:type/:num?', function (req, res) {
    res.status(200).send(getArticle.getRandom(req.params.type, req.params.num || 1));
    console.log(req.params)
});

app.get('/:type/id/:id?', function (req, res) {
    res.status(200).send(getArticle.getArticle(req.params.type ,req.params.id || 1));
});

app.get('/', (req, res) => {
    res.status(200).send("Welcome to the DUNE API")
});

app.listen(PORT, function () {
    console.log('Server running on port', PORT);
});

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//     .catch((error) => console.log(error.message))

// mongoose.set('useFindAndModify', false);