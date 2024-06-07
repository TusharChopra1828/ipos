var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const { collection } = require("./models/userModel")
const app = express()
app.use(bodyParser.json())
app.use(express.static('./'))
app.use(bodyParser.urlencoded({
    extended: true
}))
mongoose.connect('mongodb+srv://chopratushar941:Alpha1828@nzwebsite.yhhi6co.mongodb.net/?retryWrites=true&w=majority&appName=Nzwebsite')
var db=mongoose.connection
db.on('error',()=>console.log("Error in Connecting Database"))
db.once('open',()=>console.log("Connected to database"))

app.post("/",(req,res)=> {
    var name=req.body.capturename
    var contact=req.body.capturenumber
    var email=req.body.captureemail
    var address=req.body.captureaddress
    var product=req.body.captureproduct
    var quantity=req.body.capturequantity
    // var a = document.getElementById("capturename").value;
    // var b = document.getElementById("capturenumber").value;
    // var c = document.getElementById("captureemail").value;
    // var d = document.getElementById("captureaddress").value;
    // var e = document.getElementById("captureproduct").value;
    // var f = document.getElementById("capturequantity").value;

    var data={
        "name": name,
        "contact": contact,
        "email": email,
        "address": address,
        "product": product,
        "quantity": quantity
    }
    alert(name,contact,email,address,product,quantity,"Registration successful")
    db.collection('infocapt').insertOne(data,(err,collection) => {
        if(err){
        
            throw err;
        }
        console.log("Record Inserted Successfully")
    })
    return res.redirect('index.html')

})


app.get("/",(req,res) => {
    res.set({
        "Allow-access-Allow-Origin":"*"
    })
    return res.redirect('index.html')
}).listen(3000);

console.log("Listening on port 3000")