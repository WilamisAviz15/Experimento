angular.module('tutor').controller("Pretest2Ctrl", function($scope, $location, User) {

        $scope.questions1 = [
        "Comparado com a maioria das pessoas, você, em geral, consegue o que quer na vida?",
        "Você irritava seus pais com frequência quando era criança ou adolescente?",
        ];
        $scope.questions2 = [
        "Com que frequência você conquistou algo que lhe deixou tão empolgado/a que lhe fez dar mais duro ainda?",
        "Eu sinto que tenho progredido no sentido de ser bem sucedido na vida.",
        "Na sua infância e adolescência, você costumava “passar dos limites” ao fazer coisas que os seus pais não toleravam?",
        "Na sua infância e adolescência, alguma vez você agiu de maneira que seus pais julgassem repreensível?",
        ];
        $scope.answers = [];
        $scope.processAnswers = function() {
    
            if ($scope.answers.length < 6) {
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
    
                User.setPretest2Points(sum);
                User.setPre2(ans);
    
                $location.path("/home");
    
            };
        }
    
    });
    