var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
	res.json({"message":"This is Admin Page"});
});

router.get("/signup", function(req, res){
	res.render("signup", {data: {}});
});

router.post("/signup", function(req, res){
	var user = req.body;

	if(user.email.trim().length==0){
		res.render("signup", {data: {error:"Email is required"}});
	}

	if(user.passwd != user.repasswd && user.passwd.trim().length != 0){
		res.render("signup",{data: {error:"Password is not match"}});
	}
});

module.exports = router;
