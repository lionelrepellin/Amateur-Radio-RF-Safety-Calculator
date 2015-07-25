'use strict';

app.controller('NavCtrl', ['$scope', '$rootScope',
	function($scope, $rootScope) {
  		$rootScope.menu = 'about';
  		//console.log($rootScope.menu);
  		console.log('NavCtrl');


		/* remove this ! */
		$scope.myServer = "";

		$scope.configurations = [
			{ product: 'accessoire', serverId: 3, colorPerfect: 'non' },
			{ product: 'tirages', serverId: 1, colorPerfect: 'oui' }
		];

		$scope.servers = [
			{ id: 1, name: 'apercu-1.photoweb.fr'},
			{ id: 2, name: 'apercu-2.photoweb.fr'},
			{ id: 3, name: 'apercu-spr-1.photoweb.fr'}
		];
}]);


app.controller('ParameterCtrl', ['$scope', '$rootScope', 'languageService',
	function($scope, $rootScope, languageService) {

  		$rootScope.menu = 'parameters';

  		$scope.selectedLanguage = languageService.get();

  		$scope.languages = [
  			{ lang: 'en', country: 'England' },
  			{ lang: 'fr', country: 'France' }];

  		$scope.selectLanguage = function(lang) {
  			languageService.set(lang);
  		};

  		//console.log($rootScope.menu);
  		console.log('ParameterCtrl');
}]);