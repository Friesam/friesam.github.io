// import firebase from 'firebase' 
// const firebase = require("firebase/app");

  var firebaseConfig = {
    apiKey: "AIzaSyBS6J8gD3C8mVQUo_VVQ01v0kzTUhZsWTA",
    authDomain: "tribute-page-38c04.firebaseapp.com",
    databaseURL: "https://tribute-page-38c04.firebaseio.com",
    projectId: "tribute-page-38c04",
    storageBucket: "tribute-page-38c04.appspot.com",
    messagingSenderId: "434447613747",
    appId: "1:434447613747:web:2dd1b7532234575b870846",
    measurementId: "G-S8XTCQB0DP"
};

firebase.initializeApp(firebaseConfig);

var refData = firebase.database()
var messagesRef =refData.ref('tributeMessages');

messagesRef.on("value", gotData, errData)

document.getElementById('tributeForm').addEventListener('submit',
submitForm);
var name = getInputValue('name');
var email = getInputValue('email');
var message = getInputValue('message');



function gotData(data){

    // for (var i=0; i< commentListings.length; i++)
    // {
    //     commentListings[i].remove();
    // }
    var tributeMessages = data.val();
    var keys = Object.keys(tributeMessages)
    for (var i =0; i<keys.length; i++){
        var k = keys[i];
        var email = tributeMessages[k].email;
        var message = tributeMessages[k].message;
        var name = tributeMessages[k].name;

        // var li = document.createElement('li', name + ': ' 
        // + email + ': '
        // +  message)
        // li.className('commentListing')
        // li.$('#commentList').append(parent())
    
        $('<li>').text(message).prependTo('.comments');
        $('<span>').text(name).prependTo('.comments');
    }
}
function pageLoaded(){
    document.getElementById('commentListings').reset();
}
$(document).ready(function(){
    

    $("button").click(function(){
        location.reload(true);
        pageLoaded();

    });
});

function errData(err){
    console.error(err)
}

function submitForm(e){
    e.preventDefault();
    var name = getInputValue('name');
    var email = getInputValue('email');
    var message = getInputValue('message');
    console.log(name + email + message)
    saveMessages(name, email, message);

    // document.querySelector('.alert').style.display = 'block';
    // document.querySelector('.alert').text(name).prependTo('.comments');
    $('<li>').text(name).prependTo('.comments');
    $('<li>').text(message).prependTo('.comments');

//     setTimeout(function(){
//         document.querySelector('.alert').style.display = 'none';
//     },300);

//     document.getElementById('tributeForm').reset(); 
}

// $(document).ready(function() {
// 	$('button').click(function() {
// 		$('<li>').text(name).prependTo('.comments');
// 		$(name).val('');
// 	});
// });
function getInputValue(id){
    return document.getElementById(id).value;
}

function saveMessages(name, email, message){
    var newMessagesRef = messagesRef.push()
    newMessagesRef.set({
        name: name,
        email: email,
        message: message
    });
}



// const express = require('express');
// const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;
// const bodyParser = require('body-parser');

// let app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.listen(3000, () => console.log('Server running on port 3000!'));

// const dbName= "test";
// // const url = 'http://otongroup.com/'
// const dbPath = "mongodb+srv://mfonbaba:mfonb0b0@cluster0-pe9en.mongodb.net/test?retryWrites=true&w=majority"

// const client = new MongoClient(dbPath, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true })

//     console.log("hereeee")

// const db = mongoose.connection;
// // console.log(db.name)
// db.on("error", () => {
//     console.log("> error occurred from the database");
// });
// db.once("open", () => {
//     console.log("> successfully opened the database");
//     // console.log(db.url);
//     console.log(db.name)
// });
// MongoClient.connect(dbPath, { useUnifiedTopology: true })
//   .then(client => {
//     console.log('Connected to Database')
//     const db = client.db('tribute-page')
//     const tributeCollection = db.collection('tributes')
//     // console.log(tributeCollection)

//   app.post('/save', (req, res) => {
//     console.log('inpost request');
//     console.log(req.body)
//     tributeCollection.insertOne({
//         name: req.body.name,
//         email: req.body.email,
//         message: req.body.message
//     },
//     function(err, result){
//         if (err) console.error(err);
//         res.json(result);
//         db.close();
//     })
//     .then(result=>{
//         console.log(req)
//         res.redirect('/');
//     })
//     // client.connect().then((client) =>{
//     //     var dbo = client.db(dbName);
//     //     console.log("retrieving data")
//     //     if (err) return console.error(err);
//     //     console.log("connected to dbase")
//     //     console.log(db.name)

//     //     // var dbo = db.db("cluster0");
//     //     dbo.collection("tribute").insertOne({
//     //         name: req.body.name,
//     //         email: req.body.email,
//     //         message: req.body.message
//     //     }, 
//     //     function(err, result) {
//     //         if (err) throw err;
//     //         res.json(result);
//     //         db.close();
//     //     });
//     // });
// });
// // app.get('/:name', (req, res) => {
// //     tributeCollection.find()({
// //     })
// //     //     if (err) throw err;
// //     //     dbo.collection("tribute").findOne({
// //     //         name: req.params.name,
// //     //         email: req.params.email,
// //     //         message: req.params.message
// //     //     }, 
// //     //     function(err, result) {
// //     //         if (err) throw err;
// //     //         res.json(result);
// //     //         db.close();
// //     //     });
// //     // });
// // });
//   })
//   .catch(error => console.error(error));
