(function () {
    "use strict";

    var app = angular.module("AngularApp", []);



    app.controller("TestController", ["$scope", "$http", "$rootScope", "$timeout", "$location", TestController]);

    function TestController($scope, $http, $rootScope, $timeout, $location) {


        $scope.form = {
            name: '',
            age: null
        }

        $scope.name = "William Hailey"
        $scope.nameArray = [
            {name: "Will", age: 32},
            {name: "Amanda", age: 24},
        ]

        $scope.AddPerson = function (){
            // $.nameArray.push({name: "Ryan", age: 44})
            $scope.nameArray.push($scope.form);
            $scope.form = {
                name: '',
                age: null
            }

        }


        $scope.ChangeButtonColor = function (){
            if ($scope.nameArray.length % 2 === 0){
                return 'btn-primary'
            }
            else return 'btn-danger'
        }
        $scope.DeletePerson = function (person){
            var index = $scope.nameArray.findIndex((a => a.name === person.name));
             $scope.nameArray.splice(index,1);
            console.log($scope.nameArray);

        }


        $scope.ngStyleExample = function (person){
            if (person && person.name.length % 2 === 0){
                return {'color': 'red'}
            }
            else return {'color': 'blue'}
        }








    }



}())