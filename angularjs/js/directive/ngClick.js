angular.module("ngclickapp", [])
	.directive('ngClick', function(){
		return {
			restrict: 'AE',
			replace: true,
			template:'<p style="background-color:{{colorName}}">Click Function Directive</p>',
			link: function(scope, element, attribute){
				element.bind('click', function(){
					element.css('background-color', 'white');
					scope.$apply(function(){
						scope.color="white";
					});
				});
				element.bind('mouseover', function(){
					element.css('cursor', 'pointer');
				})
			}
		}
	})
	.controller('ngClickCtrl', function($scope){

	});