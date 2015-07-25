'use strict';

app.controller('NavCtrl', ['$scope', '$rootScope',
	function($scope, $rootScope) {

  		$rootScope.menu = 'about';

  		console.log('NavCtrl');
}]);