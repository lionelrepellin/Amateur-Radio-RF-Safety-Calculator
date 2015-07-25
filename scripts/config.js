'use strict';

app.config(function ($routeProvider, $locationProvider, $translateProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		})
		.when('/parameters', {
			templateUrl: 'views/parameters.html',
			controller: 'ParameterCtrl'
		})
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'NavCtrl'
		});
		// .otherwise({
		// 	redirectTo: '/'
		// });

	// add translations here
	$translateProvider.translations('en', english);
	$translateProvider.translations('fr', french);

	// $translateProvider.preferredLanguage(defaultLanguage);
	$translateProvider.useSanitizeValueStrategy('escaped');

	// use the HTML5 History API
	//$locationProvider.html5Mode(true);
});

app.run(function(languageService) {

	// set default language to 'english' if not exists
	var language = languageService.get() || 'en';
	languageService.set(language);
});