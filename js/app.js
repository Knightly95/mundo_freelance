var app = angular.module("mundo_freelance", ['ui.router'])

.controller("mainCtrl", ["$scope", function($scope) {
    $("#myCarousel").carousel();
}])
.controller("aboutusCtrl", ['$anchorScroll', '$location', '$scope', function($anchorScroll, $location, $scope) {
    $("#myCarousel").carousel();
    $location.hash("thisabout");

    $scope.gotoAbout = function() {
        if ($location.hash() !== "thisabout") {
            // set the $location.hash to `newHash` and
            // $anchorScroll will automatically scroll to it
            $location.hash("thisabout");
        } else {
            // call $anchorScroll() explicitly,
            // since $location.hash hasn't changed
            $anchorScroll();
        }
    };
}])
.controller("comoCtrl", ['$anchorScroll', '$location', '$scope', function($anchorScroll, $location, $scope) {
    $("#myCarousel").carousel();
    $location.hash("thiscomo");

    $scope.activeInner = 0;
 
    $scope.gotoComo = function() {
        if ($location.hash() !== "thiscomo") {
            // set the $location.hash to `newHash` and
            // $anchorScroll will automatically scroll to it
            $location.hash("thiscomo");
        } else {
            // call $anchorScroll() explicitly,
            // since $location.hash hasn't changed
            $anchorScroll();
        }
    };

    $scope.showInner = function(x){
        $scope.activeInner = x;
    };
}])
.controller("registroCtrl", ["$scope", function($scope) {
    $scope.options1 = [
        { "id": "1", "name": "Ninguno" },
        { "id": "2", "name": "Basico" },
        { "id": "3", "name": "Medio" },
        { "id": "4", "name": "Avanzado" }
    ];
    $scope.options1.unshift({ id: undefined, name: "SELECCIONA UNA OPCION" });
    $scope.options2 = [
        { "id": "1", "name": "Clase A (Alta/Vip)" },
        { "id": "1", "name": "Clase B (Avanzado)" },
        { "id": "1", "name": "Clase C (Medio)" },
        { "id": "1", "name": "Clase D (Baja)" }
    ];
    $scope.options2.unshift({ id: undefined, name: "SELECCIONA UNA OPCION" });
    $scope.paso = 0;
    $scope.como = "";
    $scope.siguiente = function() {
        $scope.paso += 1;
    };
    $scope.anterior = function() {
        $scope.paso -= 1;
    };
    $scope.setComo = function(string) {
        $scope.paso = 1;
        $scope.como = string;
    };
    $scope.reset = function() {
        $scope.paso = 0;
        $scope.como = "";
    };
}]);
