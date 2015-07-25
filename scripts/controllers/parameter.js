'use strict';

app.controller('ParameterCtrl', ['$scope', '$rootScope', 'languageService',
	function($scope, $rootScope, languageService) {

		$rootScope.menu = 'parameters';

		$scope.selectedLanguage = languageService.get();

		$scope.languages = [
			{ lang: 'en', country: 'England', active: true },
			{ lang: 'fr', country: 'France', active: true },
			{ lang: 'it', country: 'Italia', active: false },
			{ lang: 'es', country: 'España', active: false }];

		$scope.selectLanguage = function(lang) {
			console.log('selected language: ' + lang);
			languageService.set(lang);
		};

		//console.log($rootScope.menu);
		console.log('ParameterCtrl');
}]);