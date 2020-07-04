require('dotenv/config');
const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const app = express();

app.use(bodyParser.json());


app.get('/',(req,res) => {
	res.send(process.env.PORT);

});

app.post('/countries',(req,res) => {
	fetch('https://restcountries.eu/rest/v2/name/'+req.body.name)
		.then(res => res.json())
		.then(data => res.send(data))
});

app.listen(process.env.PORT);