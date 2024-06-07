
// const app = require('express')();
// const http = require('http').Server(app);
// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://chopratushar941:Alpha1828@nzwebsite.yhhi6co.mongodb.net/?retryWrites=true&w=majority&appName=Nzwebsite");
// const User2 = require('./models/userModel');

// http.listen(3000, function (){
//     console.log('Server is running');
// });

// var express = require("express")
// var bodyParser = require("body-parser")
// var mongoose = require("mongoose")
// const { collection } = require("./models/userModel")

// const app = express()
// app.use(bodyParser.json())
// app.use(express.static('./'))
// app.use(bodyParser.urlencoded({
//     extended: true
// }))
// mongoose.connect('mongodb+srv://chopratushar941:Alpha1828@nzwebsite.yhhi6co.mongodb.net/?retryWrites=true&w=majority&appName=Nzwebsite')
// var db=mongoose.connection
// db.on('error',()=>console.log("Error in Connecting Database"))
// db.once('open',()=>console.log("Connected to database"))

// app.post("/",(req,res)=> {
//     var name=req.body.capturename
//     var number=req.body.capturenumber
//     var email=req.body.captureemail
//     var address=req.body.captureaddress
//     var product=req.body.captureproduct
//     var quantity=req.body.capturequantity
//     // var a = document.getElementById("capturename").value;
//     // var b = document.getElementById("capturenumber").value;
//     // var c = document.getElementById("captureemail").value;
//     // var d = document.getElementById("captureaddress").value;
//     // var e = document.getElementById("captureproduct").value;
//     // var f = document.getElementById("capturequantity").value;

//     var data={
//         "name": name,
//         "phone": number,
//         "email": email,
//         "address": address,
//         "product": product,
//         "quantity": quantity
//         // "name": a,
//         // "phone": b,
//         // "email": c,
//         // "address": d,
//         // "product": e,
//         // "quantity": f
//     }
//     alert(a,b,c,d,e,f,"Registration successful")
//     db.collection('detailsadd').insertOne(data,(err,collection) => {
//         if(err){
        
//             throw err;
//         }
//         console.log("Record Inserted Successfully")
//     })
//     return res.redirect('index.html')

// })


// app.get("/",(req,res) => {
//     res.set({
//         "Allow-access-Allow-Origin":"*"
//     })
//     return res.redirect('index.html')
// }).listen(3000);

// console.log("Listening on port 3000")