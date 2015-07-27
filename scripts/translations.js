'use strict';

var english = {
	TITLE: 'Security Distance Controller',
	FREQ: {
		LABEL: 'Frequency',
		PLACEHOLDER: 'Frequency in MHz'
	},
	POWER: {
		LABEL: 'Output power from transceiver',
		PLACEHOLDER: 'Output power in Watts'
	},
	LOSSES: {
		LABEL: 'Losses',
		PLACEHOLDER: 'Losses from coaxial cable and connectors'
	},
	ANTENNA: {
		LABEL: 'Antenna gain',
		PLACEHOLDER: 'Antenne gain in dBd'
	},
	DISTANCE: {
		LABEL: 'Distance from antenna',
		PLACEHOLDER: 'Distance between the antenna and you'
	},
	UNIT_MEASURE_FOR_DISTANCE: 'ft',
	CALCULATE: 'Calculate',
	BUTTON_LANG_EN: 'English',
	BUTTON_LANG_FR: 'French',
	ERRORS: {
		FREQUENCY: 'Frequence should be between 3 Khz and 300 Ghz',
		POWER: 'Output power should be between 10 mW and 1 kW',
		LOSSES: 'Losses should be between 0.1 and 50 dB',
		ANTENNA: 'Antenna gain between 1 and 50 dBd',
		DISTANCE: 'Distance to antenna from 0.1 to 500 feet' // donnée en m à convertir en feet
	}
};

var french = {
	TITLE: 'Contrôle de Distance de Sécurité',
	FREQ: {
		LABEL: 'Fréquence',
		PLACEHOLDER: 'Fréquence en MHz'
	},
	POWER: {
		LABEL: 'Puissance en sortie d\'émetteur',
		PLACEHOLDER: 'Puissance de sortie en Watts'
	},
	LOSSES: {
		LABEL: 'Pertes',
		PLACEHOLDER: 'Pertes dans le câble coaxial et les connecteurs'
	},
	ANTENNA: {
		LABEL: 'Gain de l\'antenne',
		PLACEHOLDER: 'Gain de l\'antenne en dBd'
	},
	DISTANCE: {
		LABEL: 'Distance de l\'antenne',
		PLACEHOLDER: 'Distance entre l\'antenne et vous'
	},
	UNIT_MEASURE_FOR_DISTANCE: 'm',
	CALCULATE: 'Calculer',
	BUTTON_LANG_EN: 'Anglais',
	BUTTON_LANG_FR: 'Français',
	ERRORS: {
		FREQUENCY: 'La fréquence doit être comprise entre 3 Khz et 300 Ghz',
		POWER: 'Puissance comprise entre 10 mW et 1 kW',
		LOSSES: 'Les pertes sont comprises entre 0.1 et 50 dB',
		ANTENNA: 'Gain de l\'antenne compris en 1 et 50 dBd',
		DISTANCE: 'Distance à l\'antenne entre 0.1 et 500m'
	}
};

// to be continued...