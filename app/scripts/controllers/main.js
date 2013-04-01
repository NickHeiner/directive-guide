'use strict';

angular.module('directiveGuideApp')
    .controller('MainCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.sampleDirective = {
            priority: 0,
            template: '<div></div>',
            templateUrl: 'directive.html',
            replace: false,
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
            }
        };
    });
