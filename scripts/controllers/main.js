'use strict';

app.controller('MainCtrl', ['$scope', '$rootScope', 'calculatorService', 'languageService',
	function($scope, $rootScope, calculatorService, languageService) {

		$scope.result = null;
		$scope.showResult = false;

		$rootScope.menu = 'home';

		console.log('MainCtrl');

		$scope.calculate = function() {
			if($scope.mainForm.$valid) {
				var selectedLanguage = languageService.get();
				$scope.result = calculatorService.calcul($scope.data, selectedLanguage);
				$scope.showResult = true;
			}
		};

		$scope.reset = function() {
			$scope.data = { };
			$scope.mainForm.$setPristine();
			$scope.showResult = false;
		};
}]);