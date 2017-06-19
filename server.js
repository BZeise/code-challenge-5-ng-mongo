var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var index = require( './modules/routes/index' );
var comments = require( './modules/routes/comments' );

app.use( '/', index );
app.use( '/comments', comments );
app.use( bodyParser.json() );
app.use( express.static( 'public' ) );

var port = process.env.PORT || 1212;

app.listen( port, function( ){
  console.log( 'listening on', port );
});
