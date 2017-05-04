var app = angular.module("mundo_freelance",[])

.controller("main", ["$scope",function($scope){
	$scope.aboutus = true;

	$scope.showAboutUs = function(){
		$scope.aboutus = true;
	};

}]);