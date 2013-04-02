'use strict';

angular.module('directiveGuideApp')
    .controller('MainCtrl', function($scope) {
        $scope.sampleDirective = {
            name: 'hell-yeah-son',
            priority: 0,
            template: '<div></div>',
            templateUrl: 'directive.html',
            replace: false,
            require: '^ngModel',
            transclude: false,
            restrict: 'A',
            scope: false,
            compile: function compile(tElement, tAttrs, transclude) {
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {
                    },
                    post: function postLink(scope, iElement, iAttrs, controller) {
                    }
                }
            },
            link: function postLink(scope, iElement, iAttrs) {
            },
            controller: function() { },
            terminal: false
        };

        $scope.activate = function(key) {
            $scope.active = key;
        }
    });
