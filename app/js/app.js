angular.module('DemoApp', ["ui.router"]).
        config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
                //
                // For any unmatched url, redirect to /state1
                $urlRouterProvider.otherwise("/person");

                $stateProvider
                        .state('person', {
                            title: "Home",
                            url: "/person",
                            templateUrl: "person.html",
                            controller: "personController"
                        })
                        .state('person.details', {
                            title: "details",
                            url: "/person/:id",
                            templateUrl: "persondetail.html",
                            controller: "personController"
                        })
                        .state('newperson', {
                            title: "New Person",
                            url: "/newperson",
                            templateUrl: "newperson.html",
                            controller: "personController"
                        });
            }]);

var personaray = [
            {id: 1, name: "Jens", age: 18}
            , {id: 2, name: "Peter", age: 23}
            , {id: 3, name: "Hanne", age: 23}
        ];

angular.module("DemoApp").controller('personController', ['$scope','$stateParams', function ($scope,$stateParams) {
        $scope.persons = personaray;

        $scope.selectedPerson = personaray[$stateParams.id - 1];
        
        $scope.addPerson = function(){
            $scope.selectedPerson.id = personaray.length + 1;
            personaray.push($scope.selectedPerson);
            $scope.selectedPerson = {};
            alert("Person created");
        };
    }]);