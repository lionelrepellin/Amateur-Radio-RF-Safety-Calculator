'use strict'

app.service('languageService',
    function($translate) {
        this.set = function(lang) {
        	$translate.use(lang);
            localStorage.setItem('lang', lang);
        };

        this.get = function() {
            return localStorage.getItem('lang');
        };
});