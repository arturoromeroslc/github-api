angular
	.module('GithubApp')
	.controller('GithubController', function($scope, $log, GithubService) {
		
		$scope.searchText = '';

		$scope.getUserData = function(username){ 
			GithubService.getUser(username)
				.then(function(user) {
					$scope.user = user;
					$scope.isCollapsed = true;
				});
		}	
});