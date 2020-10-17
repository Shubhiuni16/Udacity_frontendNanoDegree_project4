const dotenv = require('dotenv');
dotenv.config();

const mockAPIResponse = require('./mockAPI.js')
//API
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
const API_KEY = process.env.API_KEY;
const projectData={};

console.log(`Your API Key is ${API_KEY}`);

const fetch = require("node-fetch");
var path = require('path');
const express = require('express')
const app = express()
app.use(express.static('dist'))
const bodyParser = require("body-parser");
app.use(bodyParser.text());
const cors = require("cors");
app.use(cors());

console.log(__dirname)

app.get("/", (req, res) => {
  res.sendFile("dist/index.html");
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

const getDataAPI = async function (baseUrl,API_KEY, input) {
	const apiData = await fetch(baseUrl+API_KEY+input);
	try {
		const res = await apiData.json();
		console.log('API data received from MeaningCloud');
		return res;
	}
	catch(error) {
		console.log("Error");
		console.log(error);
	}
}

app.get('/api/test', function (req, res) {
	const input = `&of=json&txt=${projectData.name}&lang=en`;
	getDataAPI(baseUrl, API_KEY, input).then(function(data) {
		console.log(data);
		res.send(data);
	});
})

app.post('/api/add', function (req, res) {
	console.log(req.body);
	projectData.name = req.body.name;
	console.log(projectData.name);
})
