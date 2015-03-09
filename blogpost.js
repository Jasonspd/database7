var mongoose = require("mongoose");
var http = require("http");

mongoose.connect("mongodb://127.0.0.1:27017/blogposts");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function (callback) {
	console.log("connection made");
})
var blogSchema = mongoose.Schema({
	author : String,
	title  : String,
	text   : String,
	date   : Object,
	image  : String
});

blogSchema.methods.announce = function() {
	var author = this.author ? "Another blog post by " + this.author : "Anonymous blog post";
	console.log(author);
};

var blogPost = mongoose.model("blogpost", blogSchema);

var testPost = new blogPost({ author : "rory sedgwick",
							   title : "read these words", 
							   	text : "this is some informatioon about an interesting topic of my choice",
							    date : "new data object",
							   image : "img src ='www.google.com/images/pineapple"
							});

testPost.save(function(err, testPost){
	if (err) return console.error(err);
	testPost.announce();
});

http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.end("Connection made");
}).listen(4000);

console.log("Server running at 4000");




