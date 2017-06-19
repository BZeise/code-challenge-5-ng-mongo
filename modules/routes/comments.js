var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


router.use(bodyParser.urlencoded( {extended: true} ) );
router.use(bodyParser.json());

// 27017 is default mongo port
mongoose.connect('localhost:27017/commentsDB');
var commentSchema = new mongoose.Schema({
  "name" : String,
  "comment" : String
});
var commentModel = mongoose.model('comments', commentSchema);

router.get('/', function(req, res) {
  // get and send back all the things
  commentModel.find().then(function(data) {
    console.log('in comments.js, sending back data,', data);
    res.send(data);
  });
});

router.post( '/', function( req, res ){
  console.log( 'comment post route hit:', req.body );
  // req.body property names must match up to Schema
  var newRecord = commentModel( req.body );
  newRecord.save();
  res.send( 200 );
}); //end post

module.exports = router;
