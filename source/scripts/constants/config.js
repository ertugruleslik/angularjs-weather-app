'use strict';

/**
 * # CONFIG
 * constant in the weather app
 */

app.constant('config', {
    addressUrl: 'https://api.ipgeolocation.io/ipgeo',
    forecastUrl: 'http://api.openweathermap.org/data/2.5/group',
    weatherUrl: 'http://api.openweathermap.org/data/2.5/weather',
    openWeatherMapAPIKey: '306fe08f984a42954813ce9d05ee0af4',
    ipGeolocationAPIKEY: '099f5c9e000f4b9896790b416e93259f',
    cityList: [
        {
            "id": 745044,
            "name": "Istanbul"
        },
        {
            "id": 323786,
            "name": "Ankara"
        },
        {
            "id": 306571,
            "name": "Konya"
        },
        {
            "id": 2643743,
            "name": "London"
        },
        {
            "id": 304183,
            "name": "Muğla"
        },
        {
            "id": 323777,
            "name": "Antalya"
        },
        {
            "id": 5128581,
            "name": "New York"
        },
        {
            "id": 524901,
            "name": "Moscow"
        },
        {
            "id": 2964574,
            "name": "Dublin"
        },
        {
            "id": 292223,
            "name": "Dubai"
        },
        {
            "id": 2761369,
            "name": "Vienna"
        }
    ],
    codeList: [
        {
            code: '01d',
            iconClass: 'icon icon-sunny',
            backgroundClass: 'day-clear'
        },
        {
            code: '01n',
            iconClass: 'icon icon-night-clear',
            backgroundClass: 'night-clear'
        },
        {
            code: '02d',
            iconClass: 'icon icon-cloudy',
            backgroundClass: 'day-clear'
        },
        {
            code: '02n',
            iconClass: 'icon icon-partly-cloudy',
            backgroundClass: 'night-cloudy'
        },
        {
            code: '03d',
            iconClass: 'icon icon-cloudy',
            backgroundClass: 'cloudy'
        },
        {
            code: '03n',
            iconClass: 'icon icon-cloudy',
            backgroundClass: 'night-cloudy'
        },
        {
            code: '04d',
            iconClass: 'icon icon-cloudy',
            backgroundClass: 'cloudy'
        },
        {
            code: '04n',
            iconClass: 'icon icon-cloudy',
            backgroundClass: 'night-cloudy'
        },
        {
            code: '09d',
            iconClass: 'icon icon-thundery-showers',
            backgroundClass: 'rainy'
        },
        {
            code: '09n',
            iconClass: 'icon icon-thundery-showers',
            backgroundClass: 'rainy'
        },
        {
            code: '10d',
            iconClass: 'icon icon-rainy',
            backgroundClass: 'rainy'
        },
        {
            code: '10n',
            iconClass: 'icon icon-rainy',
            backgroundClass: 'rainy'
        },
        {
            code: '11d',
            iconClass: 'icon icon-thunderstorm',
            backgroundClass: 'thunderstorm'
        },
        {
            code: '11n',
            iconClass: 'icon icon-thunderstorm',
            backgroundClass: 'thunderstorm'
        },
        {
            code: '13d',
            iconClass: 'icon icon-snowy',
            backgroundClass: 'snowy'
        },
        {
            code: '13n',
            iconClass: 'icon icon-snowy',
            backgroundClass: 'snowy'
        },
        {
            code: '50d',
            iconClass: 'icon icon-foggy',
            backgroundClass: 'foggy'
        },
        {
            code: '50n',
            iconClass: 'icon icon-foggy',
            backgroundClass: 'foggy'
        }
    ]
});