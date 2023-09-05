const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

//// API midelwares

app.use(express.json()); 
app.use(express.urlencoded());
app.use(express.static('public'));


//// API ROUTES
app.get('/', (req, res)=>{

    res.sendFile(__dirname + '/publc/index.html');
    
});


//app. post request

app.post('/', (req, res)=>{
    console.log(req.body);

  res.sendFile(__dirname+ '/final.html');
});




// app.post("/", function(req, res){
//     let newNote = new Note({
//         title: req.body.title,
//         content: req.body.content
//     });
//     newNote.save()
// })
app.listen(port, ()=>{
    console.log(`Serer at http://localhost:${port}`)
});
// app.listen(3000, function(){
//     console.log("server running");
// })






































// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

//app.use(bodyParser.urlencoded({extend: true}));

//mongoose.connect("mongodb+srv://Admin:Malina01@cluster0.fxdjvh3.mongodb.net/mamaDB", {userNewUrlParser: true}, {userUnifiedTopology: true} )

// //create a data schema
// const notesSchema = {
//     title: String,
//     content: String
// }

// // mongoose modal
// const Notes = mongoose.model("Notes", notesSchema)

//// API ROUTES

// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/index.html");
// })