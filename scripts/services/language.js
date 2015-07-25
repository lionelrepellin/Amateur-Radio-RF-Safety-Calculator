'use strict'

app.service('languageService',
    function() {
        this.set = function(lang) {
            localStorage.setItem('lang', lang);
        };

        this.get = function() {
            return localStorage.getItem('lang');
        };
});