(function() {
  'use strict';

  angular
    .module('claimAdvisor')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('pricing', {
        url: '/pricing',
        templateUrl: 'app/pricing/pricing.html',
        controller: 'PricingController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
