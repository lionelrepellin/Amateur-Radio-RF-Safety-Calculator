'use strict';

app.controller('MainCtrl', ['$scope', '$rootScope', 'calculatorService',
	function($scope, $rootScope, calculatorService) {

		$scope.showResult = false;

		$rootScope.menu = 'home';

		console.log('MainCtrl');

		$scope.calculate = function() {
			if($scope.mainForm.$valid) {

				//console.log($scope.mainForm.frequency);

				var selectedLang = localStorage.getItem('lang')
				var result = calculatorService.calcul($scope.data, selectedLang);
				console.log(result);
				$scope.showResult = true;
			}
		};

		$scope.reset = function() {
			$scope.data = { };
			$scope.mainForm.$setPristine();
			$scope.showResult = false;
		};
}]);