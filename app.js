var express = require("express");
var app = express();

// "/" ---> "Hello"
app.get("/", function(req, res){
    res.send("hello");
});

// "/bye" ---> "Goodbye"
app.get("/bye", function(req, res){
   res.send("Goodbye");
});

// "/dog" ---> "Caspian"
app.get("/dog", function(req, res){
   res.send("Caspian");
});

// reddit-esque routing params
app.get("/r/:subredditName", function(req, res){
  var subreddit = req.params.subredditName;
  res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT. . GIMME A HELL YEAH");
});

// reddit-esque routing params contd.
app.get("/r/:subredditName/comments/:id/:title", function(req, res){
  res.send("Welcome to the comments page.");
});

app.get("*", function(req, res){
    res.send("you are a star");
});

// starting the server from the command line
app.listen(3000, function(){
  console.log("the server has started.");
});

// to start the server on cloud 9
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});
