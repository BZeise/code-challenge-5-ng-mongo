// console.log( 'commentsApp loaded!' );

// declare myApp
var myApp = angular.module('myApp', []);

// declare controller
myApp.controller('CommentController', function( CommentService ) {
  var vm = this;

  vm.showComments = function() {
    CommentService.getComments().then( function() {
      // console.log('in commentsApp, vm.showComments, there is no response arg');
      // console.log('CommentService.objToSend is: ', CommentService.objToSend);
      vm.arrayToShow = CommentService.objToSend.data;
    });
  }; // end showComments

  vm.addComment = function() {
    var commentToAdd = {
      name:  vm.nameIn,
      comment: vm.commentIn
    }; // end commentToAdd
    // console.log('in vm.addComment, commentToAdd is: ', commentToAdd);
    CommentService.addComment(commentToAdd);
    vm.showComments();
  }; // end addComment

});
