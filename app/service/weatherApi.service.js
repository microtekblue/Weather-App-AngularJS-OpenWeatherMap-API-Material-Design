let serviceModule = angular.module('myApp.service', []);

serviceModule.factory('weatherApiSrv', ['$log', '$http', '$q',function($log, $http, $q) {
    let vm   = this;

    let apikey = '85b662ede474264e1aef207ce99d84b2';

    vm.getCurrentWeather = getCurrentWeather;

    vm.getForecastWeather = getForecastWeather;

    /**
     * Function buildWeatherAPIEndpoint
     * @param city: 'Guelph,ca'
     * @param unit: 'imperial' or 'metric'
     * @param apikey: OpenWeatherMap.org API KEY
     * @returns {obj} Today last 3 hour results
     * @private
     */
    function _buildWeatherAPIEndpoint(city, unit, apikey) {

        let temp = '';

        if( typeof city === 'undefined' || city === null ){
            city = ''
        }

        if(unit === "FAHRENHEIT" || typeof unit === "undefined" ||unit === ""){
            temp = 'imperial';
        } else {
            temp = 'metric'
        }

        return '//api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + apikey + '&units=' + temp;
    }

    /**
     * Function buildForecastAPIEndpoint
     * @param city: 'London, UK'
     * @param unit: 'imperial' or 'metric'
     * @param apikey: OpenWeatherMap.org API KEY
     * @returns {obj} 5 day forecast results
     * @private
     */
    function _buildForecastAPIEndpoint(city, unit, apikey) {

        let temp = '';

        if( typeof city === 'undefined' || city === null ){
            city = ''
        }

        if(unit === "FAHRENHEIT" || typeof unit === "undefined" ||unit === ""){
            temp = 'imperial';
        } else {
            temp = 'metric'
        }

        return '//api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=' + apikey + '&units=' + temp;
    }

    /**
     * Function fetchData
     * @param endpoint: API endpoint URL to hit
     * @returns {Q.Promise<array>}
     * @private
     */
    function _fetchData(endpoint){
        let defer = $q.defer();

        let config = {
            method: 'GET',
            url: endpoint
        };

        $http(config).then(function success(response) {
             defer.resolve(response);
        }, function error() {
             defer.reject("error getting data");
        });

       return defer.promise;
    }


    /**
     * Function getCurrentWeather
     * Description: External API to get current weather
     * @param city
     * @param unit
     * @returns {Q.Promise<Array>}
     */
    function getCurrentWeather(city, unit){
            $log.debug('get current weather');

            let endpoint = _buildWeatherAPIEndpoint(city, unit, apikey);

            return   _fetchData(endpoint);
    }


    /**
     * Function getForecastWeather
     * Description: External API to get 5 day forecast weather
     * @param city
     * @param unit
     * @returns {Q.Promise<Array>}
     */
    function getForecastWeather(city, unit){
        $log.debug('get 5 day forecast weather');

        let endpoint = _buildForecastAPIEndpoint(city, unit, apikey);

        return _fetchData(endpoint);
    }


    return {
        getCurrentWeather : getCurrentWeather,

        getForecastWeather: getForecastWeather
    };

}]);