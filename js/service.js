angular
	.module('GithubApp')
	.service('GithubService', function($http, $log, $q) {
	
	/*
	DELETE BLOCK ONCE SITE IS LIVE
	*/
	var id = "e5d2fb1162c2f949f42b";
  var sec = "bc1cbeff0cc8c12b878ba534abb2b21fd0f9d630";
  var param = "?client_id=e5d2fb1162c2f949f42b&client_secret=bc1cbeff0cc8c12b878ba534abb2b21fd0f9d630";
  

  this.getUser = function(username) {
  	//COMMENTS REPRESENT HOW IT COULD OF BEEN DONE WITH $q.

  	// var deferred = $q.defer();

  	return $http.get('https://api.github.com/users/' + username + param)
  	//https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy
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


	// curl -i 'https://api.github.com/users/arturoromerotcs?client_id=e5d2fb1162c2f949f42b&client_secret=bc1cbeff0cc8c12b878ba534abb2b21fd0f9d630'