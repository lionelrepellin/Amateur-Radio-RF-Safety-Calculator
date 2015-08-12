'use strict';

app.controller('MainCtrl', ['$scope', '$rootScope', 'calculatorService', 'languageService',
	function($scope, $rootScope, calculatorService, languageService) {

		$scope.result = null;
		$scope.showResult = false;

		console.log('$scope.showResult', $scope.showResult);

		$rootScope.menu = 'home';

		console.log('MainCtrl');

		// modulation modes
		$scope.modulationModes = calculatorService.getModulationModes();
		var defaultModulationMode = $scope.modulationModes[0];
		$scope.modulationModeSelected = defaultModulationMode;

		// transmission time ratio in a 6min period
		$scope.transmissionTimeRatio = calculatorService.getTransmissionModes();
		var defaultTransmissionTimeRatio = $scope.transmissionTimeRatio[2];
		$scope.transmissionTimeRatioSelected = defaultTransmissionTimeRatio;

		$scope.calculate = function() {
			if($scope.mainForm.$valid) {
				var selectedLanguage = languageService.get();

				$scope.data.modulationModeFactor = $scope.modulationModeSelected.factor;
				$scope.data.transmissionTimeRatio = $scope.transmissionTimeRatioSelected.ratio;

				console.log($scope.data);

				$scope.result = calculatorService.calcul($scope.data, selectedLanguage);
				$scope.showResult = true;
			}
		};

		$scope.reset = function() {
			$scope.data = { };
			$scope.mainForm.$setPristine();
			$scope.showResult = false;

			$scope.modulationModeSelected = defaultModulationMode;
			$scope.transmissionTimeRatioSelected = defaultTransmissionTimeRatio;
		};


}]);