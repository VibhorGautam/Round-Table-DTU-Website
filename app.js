const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const {
    urlencoded
} = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.get('/', function (req, res) {
    res.render("index");
});
app.get('/portfolio.ejs', function (req, res) {
    res.render("portfolio");
});
app.get('/HuntCode.ejs', function (req, res) {
    res.render("HuntCode");
});
app.get('/roundhacks.ejs', function (req, res) {
    res.render("roundhacks");
});
app.get('/CaseCipher.ejs', function (req, res) {
    res.render("CaseCipher");
});
app.get('/aurora-conference-1.ejs', function (req, res) {
    res.render("aurora-conference-1");
});
app.get('/aurora-conference-2.ejs', function (req, res) {
    res.render("aurora-conference-2");
});
app.listen(3000, function () {
    console.log("server is running on port 3000");
});