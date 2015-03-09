var mongoose = require("mongoose");
var http = require("http");
mongoose.connect("mongodb://127.0.0.1:27017/appdb");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function (calback) {
	console.log("connected!");
});

var kittySchema = mongoose.Schema({
	name: String,
	colour: String
});

kittySchema.methods.speak =  function() {
	var greeting = this.name
	? "Meow name is " + this.name
	: "I don't have a name"
	console.log(greeting);
}

var Kitten = mongoose.model("Kitten", kittySchema);

var fluffy = new Kitten({ name : "Fluffy", colour : "Black & White" })

fluffy.save(function (err, fluffy) {
	if (err) return console.error(err);
	fluffy.speak();
});

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.end("Connection made");
}).listen(4000);
console.log("Server running at 4000")



