// console.log( 'comments.service.js loaded!' );

myApp.service( 'CommentService', function( $http ) {
  var sv = this;

  sv.getComments = function () {
    return $http.get ('/comments' ).then( function( response ){
      console.log('back from $http.get in sv.getComments with response:', response);
      sv.objToSend = response;
    });
  }; // end getComments

  sv.addComment = function(newComment) {
    // console.log('in sv.addComment, newComment is:', newComment);
    return $http.post('/comments', newComment);
  }; // end addComment

});
