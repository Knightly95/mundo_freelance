var app = angular.module("mundo_freelance",['ui.router'])

.controller("mainCtrl", ["$scope",function($scope){
	$scope.aboutus = true;

	$scope.showAboutUs = function(){
		$scope.aboutus = true;
	};
}])
.controller("navbarCtrl", ["$scope",function($scope){
	$scope.aboutus = true;

	$scope.showAboutUs = function(){
		$scope.aboutus = true;
	};
}])
.controller("registroCtrl", ["$scope",function($scope){
	$scope.options1 = [
	{"id":"1", "name":"Ninguno"},
	{"id":"2", "name":"Basico"},
	{"id":"3", "name":"Medio"},
	{"id":"4", "name":"Avanzado"}
	];
	$scope.options2 = [
	{"id":"1", "name":"Clase A (Alta/Vip)"},
	{"id":"1", "name":"Clase B (Avanzado)"},
	{"id":"1", "name":"Clase C (Medio)"},
	{"id":"1", "name":"Clase D (Baja)"}
	];
  $scope.paso = 0;
  $scope.como = "";
  $scope.siguiente =function (){
    $scope.paso += 1;
  };
  $scope.anterior =function (){
    $scope.paso -= 1;
  };
  $scope.setComo = function(string){
    $scope.paso = 1;
    $scope.como = string;
  };
}])
.config(["$stateProvider","$urlRouterProvider",
	function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when("/", "/home");
  $urlRouterProvider.when("", "/home");
  $urlRouterProvider.otherwise("/home");

  // Now set up the states
  $stateProvider
    .state("base",{
      abstract: true,
      views:{
        "":{
          templateUrl: "partials/base.html",
        },
        "navbar@base": {
          templateUrl : "partials/navbar.html",
          controller: "navbarCtrl",
        }
      },
    })
    .state('base.home', {
      url: "/home",
      views : {
        "page@base":{
          templateUrl : "partials/home.html",
          controller: "mainCtrl",
        }
      }
    })
    .state('base.ingreso', {
      url: "/ingreso",
      views : {
        "page@base":{
          templateUrl : "partials/ingreso.html"
        }
      }
    })
    .state('base.registro', {
      url: "/registro",
      views : {
        "page@base":{
          templateUrl : "partials/registro.html",
          controller: "registroCtrl"
        }
      }
    });
}]);