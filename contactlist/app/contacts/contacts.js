'use strict';

angular.module('myApp.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  });
}])

.controller('ContactsCtrl', ['$scope', '$firebaseArray', function($scope) {
var ref = new Firebase("https://contactlist18.firebaseio.com/");
  $scope.contacts= $firebaseArray(ref);
 $scope.addContact = function(){
 	console.log('Adding Contact.. ');


 	$scope.contacts.$add({
 		name: $scope.name,
 		email:$scope.email,
 		phone: $scope.phone
 	}).then(function(ref){
 		var id = ref.key();
 		console.log('Added Contact ' +id);
 		$scope.name = '';
 		$scope.email = '';
 		$scope.phone= '';


 	});
 }
}]);