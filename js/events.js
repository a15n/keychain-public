'use strict';

angular.module('teamLock.controllers')
  .controller('EventsCtrl', ['$scope', 'moment',
    function($scope, moment) {

      $scope.current = 'date';
      $scope.reverse = true;
      $scope.predicate = 'time';

      $scope.changeCurrent = function(current) {
        if ($scope.current === current) {
          $scope.reverse = !$scope.reverse;
        }
        $scope.current = current;
        if (current === 'name') {
          $scope.predicate = 'user.name';
        }
        else if (current === 'door') {
          $scope.predicate = 'lock.name';
        } else {
          $scope.predicate = 'time';
        }
      };

      $scope.matchField = function(query) {
        return function(event) {
          var valid = false;
          var iQuery = query ? new RegExp(query, 'i') : ''; // ignore case
          var dateString = moment(event.time).format('lll') + ' (' + moment(event.time).fromNow() + ')';

          if(event.user.name.match(iQuery) || event.lock.name.match(iQuery) || dateString.match(iQuery)) {
            valid = true;
          }
          return valid;
        };
      };
    }
  ]);
