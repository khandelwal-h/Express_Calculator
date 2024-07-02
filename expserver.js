const express = require('express')
const bodyParser=require("body-parser")
const app = express()

const port = 3000
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/about', (req, res) => {
  res.send("<h1>welcome!'</h1>")
})

app.get('/contact', (req, res) => {
  res.send('welcome to contact page')
})

app.get('/calculator', (req, res) => {
  //console.log(__dirname);
  res.sendFile(__dirname+'/index.html')
})

app.post('/calculator', (req, res) => {
  
  console.log(req.body)
  let n1=Number(req.body.v1)
  let n2=Number(req.body.v2)
  let sum=n1+n2;
  res.send("The sum of the two number is :"+sum)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*const express = require ("express");
const app = express();

app.get("/",functon(req,res){
res.send("Welcome to my channel :)")
});

app.listen(3000, functon(req,res)
{
	console.log("Server is running at port no.3000");


	});*/