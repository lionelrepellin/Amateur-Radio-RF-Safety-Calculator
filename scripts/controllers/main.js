'use strict';

app.controller('MainCtrl', ['$scope', '$rootScope', '$translate', 'calculatorService',
	function($scope, $rootScope, $translate, calculatorService) {

		$scope.showResult = false;

		$rootScope.menu = 'home';

		console.log('MainCtrl');

		// i18n
		$scope.changeLanguage = function(key) {
			$translate.use(key);
			localStorage.setItem('lang', key);
		};

		$scope.calculate = function() {
			if($scope.mainForm.$valid) {

				console.log($scope.mainForm.frequence);

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