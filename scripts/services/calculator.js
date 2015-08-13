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

            // TODO : sortir les 2.15
            var data = angular.copy(dataForm);

            var waveLength = 300 / data.frequency;
            var dBi = data.antenna + 2.15;
            //var par = data.power * Math.pow(10, (data.antenna - data.losses) / 10);
            var pire = data.power * Math.pow(10, (data.antenna - data.losses + 2.15) / 10);
            pire *= data.modulationMode.factor;
            pire *= data.transmissionTimeRatio.ratio;

            var calculatedExpositionLimit = Math.pow((30 * pire), 0.5) / data.distance;

            var E = getExpositionLimit(data.frequency);
            var minimalSafetyDistanceCalculated = 1 / E * Math.sqrt(30 * pire);

            // idem champ E mais en A/m
            var champH = calculatedExpositionLimit / 120 / Math.PI;

            // densité de puissance en W/m²
            var pwrDensity = pire / 4 / Math.PI / Math.pow(data.distance, 2);

            return {
                /* in */
                inputData: data,
                /* out */
                waveLength: waveLength, // longueur d'onde
                totalAntennaGain: dBi, //
                //PAR: par,
                PIRE: pire,
                champElectriqueCalcule: calculatedExpositionLimit,
                champEmaxDexpositionConseille: E,
                minimalSafetyDistance: minimalSafetyDistanceCalculated,
                H: champH,
                powerDensity: pwrDensity,
                isSafetyDistanceOk: function() {
                    return this.champElectriqueCalcule < this.champEmaxDexpositionConseille;
                }
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
