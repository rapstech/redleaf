const express = require('express');
const app = express();
const mysql = require('mysql');


const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database : "redleaf"
});



app.get('/mysql',(req,res)=> {
	let finalresult;
	console.log('fetching data from table');
	con.connect((err) => {
			if (err) console.log(err);
			console.log('Connection Successfull');
			
	});
	con.query("SELECT * FROM user", (err, result, fields) => {
		if (err) console.log(err);
		res.json(result);
		console.log(result)
	});
});
app.get('/',(req,res)=> {
	console.log('It is working fine');
	res.send('Hello world');
});

app.get('/table',(req,res)=> {
	console.log('It is working fine');
	res.send('Welcome to table');
});

app.listen(3000,()=>{
	console.log('Application is running on port 3000....')
});