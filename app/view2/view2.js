'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forecast', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    controllerAs: 'vm'
  });
}])

.controller('View2Ctrl', ['$log', '$timeout', 'weatherApiSrv', function($log, $timeout, weatherApiSrv) {

  let vm = this;

  vm.formDisabled = false;
  vm.isLoading = false;
  vm.cityName = 'London, UK';
  vm.completed = false;
  vm.error = false;

  vm.tempSetting = 'FAHRENHEIT'; // Fahrenheit default
  vm.fahrenheit = 'FAHRENHEIT';
  vm.celsius ="CELSIUS";

  vm.weatherData = [];

  vm.weatherApiSrv = weatherApiSrv;

  vm.changeTemp = changeTemp;
  vm.submit = submit;
  vm.getWeather = getWeather;

  function changeTemp() {
    $log.debug(vm.tempSetting);

    // destroy current data
    vm.weatherData = [];

    vm.formDisabled = true;
    vm.isLoading = true;

    // get new data based on unit
    $timeout(function () {
      vm.getWeather(vm.cityName, vm.tempSetting);
      vm.isLoading = false;
      vm.formDisabled = false;
      vm.completed = true;
    },1500);

  }

  function submit(){
    vm.formDisabled = true;
    vm.isLoading = true;

    $timeout(function () {
      vm.getWeather(vm.cityName, vm.tempSetting);
      vm.isLoading = false;
      vm.formDisabled = false;
      vm.completed = true;
    },1500);
  }

  /**
   * Function getWeather
   * Description: Calls the weather service
   * and sets vm.weatherData for the view
   */
  function getWeather(city, unit){

    vm.weatherApiSrv.getForecastWeather(city, unit).then(function (response) {
      vm.weatherData = response.data;
      $log.debug('data:' + JSON.stringify(vm.weatherData));
      vm.error = false;
    }, function (response) {
      $log.debug('status: ' + response);
      vm.error = true;
    });

  }

}]);