(function () {
    'use strict';

    var m = angular.module("HomeCtrl", []);

    var homeControllerFunction = function ($location, $rootScope, $routeParams, $scope, $interval) {

        $scope.init = function () {
            $scope.progressStatus = 0;
            $scope.progressFlag = false;
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        };

        $scope.submitUploadedFile = function() {
            if ($scope.filename) {
                $scope.progressFlag = true;
                stop = $interval(function() {
                    if ($scope.progressStatus < 100) {

                        $scope.progressStatus = $scope.progressStatus + 1;
                    } else {
                        $scope.progressFlag = false;
                        $scope.stopUpload();
                    }
                }, 100);
            } else {
                alert("Please select the File!!!");
            }
            
        };
        // $interval(function() {
        //     if ($scope.progressStatus < 100) {
        //       $scope.progressStatus = $scope.progressStatus + 1;
        //     } else {
        //       $scope.stopUpload();
        //     }
        //   }, 100);

        $scope.stopUpload = function() {
          if (angular.isDefined(stop)) {
            $interval.cancel(stop);
            stop = undefined;
          }
        };

        $scope.init();
    };

    m.controller('HomeController', [
        '$location',
        '$rootScope',
        '$routeParams',
        '$scope',
        '$interval',
        homeControllerFunction
    ]);
})();
