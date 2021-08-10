angular.module('tutor').controller("FinishCtrl", function($scope, User) {

    $scope.populationAnxiety = 40.1 * 100 / 80;
    $scope.userAnxiety = User.getMotivation() * 100 / 80;

    $scope.share = function() {
        FB.ui({
            method: 'share',
            display: 'popup',

            href: 'https://weblab.nees.com.br/wilamis/',
            title: 'Estudo sobre o Desânimo',
            description: 'Participe deste estudo sobre Desânimo e descubra!',
            picture: 'https://st.depositphotos.com/1000765/1542/i/600/depositphotos_15421857-stock-photo-3d-small-sorrow.jpg',
            layout: 'button'
        }, function (response) { });
      
    };
    
});
