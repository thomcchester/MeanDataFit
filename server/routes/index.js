var express = require("express");
var router = express.Router();
var passport = require("passport");
var path = require("path");

router.post("/", passport.authenticate("local", {
  //We do not have this page built yet. Should send logged in admin to admin page
  successRedirect: "/views/admin.html",
  //TODO success/failure Flash()
  failureRedirect: "/views/index.html"
}));

//catch-all
router.get("/*", function(req,res,next){
  // console.log(req.params[0]);
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "../public", file));
});

module.exports=router
