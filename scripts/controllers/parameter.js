'use strict';

app.controller('ParameterCtrl', ['$scope', '$rootScope', 'languageService',
	function($scope, $rootScope, languageService) {

		$rootScope.menu = 'parameters';

		console.log('ParameterCtrl');

		$scope.selectedLanguage = languageService.get();

		$scope.languages = [
			{
				lang: 'en',
				language: 'English',
				country: 'England',
				active: true
			},
			{ 	lang: 'fr',
				language: 'Français',
				country: 'France',
				active: true
			},
			{
				lang: 'it',
				language: 'Italiano',
				country: 'Italia',
				active: false
			},
			{
				lang: 'es',
				language: 'Español',
				country: 'España',
				active: false
			}
		];

		$scope.selectLanguage = function(lang) {
			console.log('selected language: ' + lang);
			languageService.set(lang);
		};
}]);