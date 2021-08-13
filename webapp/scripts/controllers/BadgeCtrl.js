angular.module('tutor').controller("BadgeCtrl", function($scope, configService) {
    $scope.getImage = function() {
        return "assets/default/images/badge.png";
    };
});
