'use strict';

module.exports = function () {
  return {
    bindToController: true,
    controllerAs: 'vm',
    //@ngInject
    controller: function (settings) {
      this.serviceUrl = settings.serviceUrl;
    },
    restrict: 'E',
    scope: {
      /**
       * An object representing the current authentication status.
       */
      auth: '<',
      /**
       * Called when the user clicks on the "About this version" text.
       */
      onShowHelpPanel: '&',
      /**
       * Called when the user clicks on the "Log in" text.
       */
      onLogin: '&',
      /**
       * Called when the user clicks on the "Log out" text.
       */
      onLogout: '&',
      /**
       * Whether or not to use the new design for the control.
       *
       * FIXME: should be removed when the old design is deprecated.
       */
      newStyle: '<',
    },
    template: require('../../../templates/client/signin_control.html'),
  };
};
