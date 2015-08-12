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
            return 28;
        };

        this.calcul = function(dataForm, lang) {
            console.log('calcul in progress...');

            var data = angular.copy(dataForm);
            var waveLength = 300 / data.frequency;
            var dBi = data.antenna + 2.15;
            var par = data.power * Math.pow(10, (data.antenna - data.losses) / 10);
            var pire = data.power * Math.pow(10, (data.antenna - data.losses + 2.15) / 10);
            var E = getExpositionLimit(data.frequency);
            var distance = 1 / E * Math.sqrt(30 * pire);
            var champElectrique = 1 / data.distance * Math.sqrt(30 * pire);

            // convert meters to feet
            // if(lang === 'en') {
            //     // ft = m * 3.2808
            //     waveLength *= 3.2808;
            //     distance *= 3.2808;
            // }

            return {
                /* data from form */
                /*
                frequency: data.frequency,
                powerTransceiver: data.power,
                antennaGain: data.antenna,
                losses: data.losses,
                distanceFromAntenna: data.distance,
                */
                /* result */
                waveLength: waveLength,
                totalAntennaGain: dBi,
                PAR: par,
                minimalSafetyDistance: distance,
                PIRE: pire,
                champElectriqueCalculé: champElectrique,
                champEmaxDexposition: E
            };
        };

        this.getModulationModes = function() {
            return [{
                mode: 'SSB',
                factor: 0.2
            },
            {
                mode: 'SSB with compressor',
                factor: 0.5
            },
            {
                mode: 'AM (50% modulation)',
                factor: 0.5
            },
            {
                mode: 'AM (100% modulation)',
                factor: 0.3
            },
            {
                mode: 'CW',
                factor: 0.4
            },
            {
                mode: 'ATV',
                factor: 0.6
            },
            {
                mode: 'FM',
                factor: 1
            },
            {
                mode: 'Digital (FSK, RTTY, SSTV)',
                factor: 1
            },
            {
                mode: 'Tune',
                factor: 1
            },
            {
                mode: 'JT65',
                factor: 0.77
            }];
        };

        this.getTransmissionModes = function() {
            return [{
                mode: 'Broadcast',
                ratio: 1
            },
            {
                mode: 'Casual / Mobile',
                ratio: 0.3
            },
            {
                mode: 'Contest',
                ratio: 0.5
            },
            {
                mode: 'Packet',
                ratio: 0.5
            },
            {
                mode: 'Repeaters / Beacon',
                ratio: 1
            }];
        };

});
