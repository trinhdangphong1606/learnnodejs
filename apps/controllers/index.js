var express = require("express");

var router = express.Router();

router.use("/admin", require(__dirname + "/admin"));
router.use("/blog", require(__dirname + "/blog"));

router.get("/", function(reg, res){
	//res.json({"message":"This is Home Page"});
	res.render("test");
});

module.exports = router;
