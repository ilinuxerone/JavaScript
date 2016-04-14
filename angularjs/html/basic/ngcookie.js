angular.module('cookieApp',  ['ngCookies'])
		.controller('cookieCtrl', ['$scope', '$cookies','$cookieStore', '$timeout', '$http', function($scope, $cookies,$cookieStore,$timeout,$http){
			// Retrieving a cookie
  			var userHasViewed = $cookies.hasViewed;
  			if (userHasViewed == 'true') {
          debugger;
   				$scope.greeting = "Welcome Back";
  			}
  			else{
          debugger;
    			$scope.greeting = "Its your first time and we are stoked to meet you.";
         $cookies.hasViewed = 'true';
  			}
           userHasViewed = $cookies.hasViewed ;
        if ($cookies.get('myName') == undefined) {
              //设置过期时间为一天
              var expireDate = new Date();
              expireDate.setDate(expireDate.getDate() + 1);
  
              $cookies.put('myName', 'Quber', { expires: expireDate });
          } else {
             console.log($cookies.get('myName'));
         }
  		  console.log(userHasViewed);

         var someSessionObj = { 'innerObj' : 'somesessioncookievalue'};

    $cookies.dotobject = someSessionObj;
    $scope.usingCookies = { 'cookies.dotobject' : $cookies.dotobject, "cookieStore.get" : $cookieStore.get('dotobject') };

    $cookieStore.put('obj', someSessionObj);
    $scope.usingCookieStore = { "cookieStore.get" : $cookieStore.get('obj'), 'cookies.dotobject' : $cookies.obj, };
    console.log($scope.usingCookies);
		}]);