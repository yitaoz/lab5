var data = require("../data.json");

exports.addFriend = function(req, res) {    
	console.log(data);
	res.render('add',data);


	var name = req.query.name;
	var description = req.query.description;
	var imageURL = "http://lorempixel.com/400/400/people";
	
	var newFriend = {
		"name": name,
		"description": description,
		"imageURL": imageURL
	}

	console.log(newFriend);
	data["friends"].push(newFriend);
};