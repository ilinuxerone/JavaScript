angular.module("inputApp", [])
	.directive('ngBlur', function(scope, element, attrs){
		return {
			restrict: 'A',
			transclude:'true',
			replace:'true',
			link:function(scope, element, attrs){
				element.bind('blur', function(event){
					scope.$apply(attrs.ngBlur);
				})
			}
		}
	})
	.controller('inputCtrl', function($scope){
		$scope.checkUserName = function(){
			//send a ajax to check on server
			if ($scope.username === 'zzh'){
				$scope.usernameAlreadyExist = true;
			}
		}
	});