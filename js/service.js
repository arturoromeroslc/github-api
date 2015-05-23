angular
	.module('GithubApp')
	.service('MainService', function($http, $log, $q) {
	var id = "e5d2fb1162c2f949f42b";
  var sec = "bc1cbeff0cc8c12b878ba534abb2b21fd0f9d630";
  var param = "?e5d2fb1162c2f949f42b=" + id + "&bc1cbeff0cc8c12b878ba534abb2b21fd0f9d630=" + sec;

  this.getUser = function(username) {
  	//COMMENTS REPRESENT HOW IT COULD OF BEEN DONE WITH $q.

  	// var deferred = $q.defer();

  	return $http.get('https://api.github.com/users/' + username)
  		.then(function(response) {
  			var user = response.data;
  			$log.log('from Service Call', user);
  			// deferred.resolve(user);
  			return user
  		});

  	// return deferred.promise;	
  }
  // this.getUser('arturoromerotcs');
});