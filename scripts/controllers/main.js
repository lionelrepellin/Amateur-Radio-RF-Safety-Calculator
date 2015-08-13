'use strict';

app.controller('MainCtrl', ['$scope', '$rootScope', 'calculatorService', 'languageService',
	function($scope, $rootScope, calculatorService, languageService) {

		$scope.result = null;
		$scope.showResult = false;

		$scope.data = { };

		console.log('$scope.showResult', $scope.showResult);

		$rootScope.menu = 'home';

		console.log('MainCtrl');

		// modulation modes
		$scope.modulationModes = calculatorService.getModulationModes();
		var defaultModulationMode = $scope.modulationModes[0];
		$scope.data.modulationMode = defaultModulationMode;

		// transmission time ratio in a 6min period
		$scope.transmissionTimeRatio = calculatorService.getTransmissionModes();
		var defaultTransmissionTimeRatio = $scope.transmissionTimeRatio[2];
		$scope.data.transmissionTimeRatio = defaultTransmissionTimeRatio;

		$scope.calculate = function() {
			if($scope.mainForm.$valid) {
				var selectedLanguage = languageService.get();

				console.log($scope.data);

				$scope.result = calculatorService.calcul($scope.data, selectedLanguage);
				$scope.showResult = true;
			}
		};

		$scope.reset = function() {
			$scope.data = { };
			$scope.mainForm.$setPristine();
			$scope.showResult = false;

			// set default values
			$scope.data.modulationMode = defaultModulationMode;
			$scope.data.transmissionTimeRatio = defaultTransmissionTimeRatio;
		};


}]);