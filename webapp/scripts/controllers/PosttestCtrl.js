angular.module('tutor').controller("PosttestCtrl", function($scope, $location, User) {

    $scope.questions = [
        "Você se sentiu tenso?",
        "Você se sentiu nervoso?",
        "Você se sentiu ansioso?",
        "Você se sentiu deprimido?",
        "Você se sentiu calmo?",
        "Você se sentiu feliz?",
        "Você se sentiu triste?",
        "Você se sentiu com incerteza?",
        "Você se sentiu agitado?",
        "Você se sentiu irritado?",
        "Você se sentiu auto-consciente?",
        "Você se sentiu quieto?",
        "Você se sentiu frustrado?",
        "Você se sentiu contente?",
        "Você se sentiu entusiasmado?"
    ];
    $scope.answers = [];

    $scope.processAnswers = function() {


        if ($scope.answers.length < 15) {

            $scope.msg = "Por favor, responda todas as perguntas!"
        } else {

          

            var ans = $scope.answers;
            console.log(ans);

            //invert positive answers
            // ans[0] = 5 - ans[0];
            // ans[1] = 5 - ans[1];
            // ans[4] = 5 - ans[4];
            // ans[7] = 5 - ans[7];
            // ans[9] = 5 - ans[9];
            // ans[10] = 5 - ans[10];
            // ans[14] = 5 - ans[14];
            // ans[15] = 5 - ans[15];
            // ans[18] = 5 - ans[18];
            // ans[19] = 5 - ans[19];

            var sum = ans.reduce(add, 0);

            function add(a, b) {
                return parseInt(a) + parseInt(b);
            }

            User.setPosttestPoints(sum);
            User.setPost(ans);

            $location.path("/flow");

        };
    }

});
