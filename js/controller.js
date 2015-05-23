angular
	.module('GithubApp')
	.controller('MainCtrl', function($scope, $log, MainService) {
		
		$scope.searchText = '';

		$scope.getUserData = function(username){ 
			MainService.getUser(username)
				.then(function(user) {
					$scope.user = user;
				});
		}	
});