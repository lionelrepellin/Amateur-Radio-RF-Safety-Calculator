'use strict'

app.service('calculatorService',
    function() {

        var getExpositionLimit = function(frequency) {
            if(frequency >= 0.003 && frequency < 1) {
                return 87;
            }
            else if(frequency >= 1 && frequency < 10) {
                return 87 / Math.sqrt(frequency);
            }
            else if(frequency >= 10 && frequency < 400) {
                return 28;
            }
            else if(frequency >= 400 && frequency < 2000) {
                return 1.375 * Math.sqrt(frequency);
            }
            else if(frequency >= 2000 && frequency < 300000) {
                return 61;
            }
            else {
                return 28;
            }
        };


        this.calcul = function(data, lang) {
            var waveLength = 300 / data.frequency;
            var dBi = data.antenna + 2.15;
            var par = data.power * Math.pow(10, (data.antenna - data.losses) / 10);
            var pire = data.power * Math.pow(10, (data.antenna - data.losses + 2.15) / 10);
            var E = getExpositionLimit(data.frequency);
            var distance = 1 / E * Math.sqrt(30 * pire);
            var champElectrique = 1 / data.distance * Math.sqrt(30 * pire);

            // convert meters to feet
            if(lang === 'en') {
                // ft = m * 3.2808
                waveLength *= 3.2808;
                distance *= 3.2808;
            }

            return {
                longueurDonde: waveLength,
                totalAntGain: dBi,
                PAR: par,
                distanceMini: distance,
                PIRE: pire,
                champElectriqueCalculé: champElectrique,
                champEmaxDexposition: E
            };
        };
});