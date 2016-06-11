(function() {
  'use strict';

  angular
    .module('claimAdvisor')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
