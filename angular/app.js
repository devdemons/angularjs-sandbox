(function () {
    "use strict";

    var app = angular.module("AngularApp", []);



    app.controller("TestController", ["$scope", "$http", "$rootScope", "$timeout", "$location", TestController]);

    function TestController($scope, $http, $rootScope, $timeout, $location) {

        async function Init(){

            // SOURCE OF DATA
            // https://randomuser.me/documentation

            var results = await $http.get("https://randomuser.me/api/?results=15");
            $scope.people = results.data.results;
            $scope.$apply()
        }

        // Run Init() function as soon as the project loads
        Init();

        $scope.AddPerson = async function (){
            var results = await  $http.get("https://randomuser.me/api");
            $scope.people =  $scope.people.concat(results.data.results);
            $scope.$apply()
        }


        $scope.AlertName = function(person){
            person.name.first = "Will"
        }

        $scope.AddYear = function(person){
            person.dob.age +=1
        }

        $scope.ButtonColor = function(person){
            if (person.dob.age > 40){return 'btn-danger'}
        }


        $scope.ViewProfile = function (person){
            alert(person.name.last)
        }

        
    







    }



}())