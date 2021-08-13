angular.module('tutor').controller("HomeCtrl", function ($scope, $location, $mdDialog, configService, User) {
    var answers = ['B', 'E', 'E', 'E', 'A', 'B', 'D', 'E', 'B', 'B', 'E', 'B', 'C', 'E', 'A', 'C', 'B', 'D', 'B', 'A'];
    var userAnswer = null;
    var totalPoints = 0;
    var currentQuestion = 0;
    var showSet1 = true;
    var totalPoints = 0;
    var userAvatar = "assets/" + configService.getTheme() + "/images/avatar1.png";
    var level = 0;

    var inc = false;
    var dec = false;

    var bgColor = "white";

    var currentMessage = "Correto!"
    var flagMessage = false;

    var levelFiveFlag = true;
    var levelTenFlag = true;





    var users = [{
        name: "Alan",
        points: 79, //19,
        avatar: "assets/" + configService.getTheme() + "/images/ranking1.png"
    }, {
        name: "Valentine",
        points: 75, //15,
        avatar: "assets/" + configService.getTheme() + "/images/ranking2.png"
    }, {
        name: "Francis",
        points: 63,//13,
        avatar: "assets/" + configService.getTheme() + "/images/ranking3.png"
    }, {
        name: "Danni",
        points: 27,//7,
        avatar: "assets/" + configService.getTheme() + "/images/ranking4.png"
    }, {
        name: "Gil",
        points: totalPoints,
        avatar: userAvatar
    }];

    $scope.badges = [];
    $scope.items = ['A', 'B', 'C', 'D', 'E'];
    $scope.progress = 0;

    $scope.number = 6;

    $scope.increment = false;
    $scope.decrement = false;

    $scope.showNews = true;

    $scope.showAvatar = false;

    $scope.showQuestions = false;

    var opts = [{
        title: 'Brancos são maioria em empregos de elite e negros ocupam vagas sem qualificação',
        url: 'https://g1.globo.com/economia/noticia/brancos-sao-maioria-em-empregos-de-elite-e-negros-ocupam-vagas-sem-qualificacao.ghtml',
        img: 'assets/default/images/test2.png',
        abstract: 'Mãe e filha são negras, o grupo populacional no Brasil que ocupa a maioria das vagas em serviços braçais ou que exigem pouco preparo, como operador de telemarketing, vigilante e cortador de cana-de-açúcar.'
    }, {
        title: 'Como a ausência de negros trabalhando em tecnologia impacta os produtos criados para facilitar nosso dia a dia',
        url: 'https://gauchazh.clicrbs.com.br/tecnologia/noticia/2019/04/como-a-ausencia-de-negros-trabalhando-em-tecnologia-impacta-os-produtos-criados-para-facilitar-nosso-dia-a-dia-cju32g40e00x001nvv1495xmq.html',
        img: 'assets/default/images/test3.png',
        abstract: 'Depois que vídeo de uma saboneteira cujo sensor só reconhecia peles claras viralizou, questão passou a ser debatida. E soluções para o problema começam a aparecer em iniciativas diversas.'
    }, {
        title: 'Negros ocupam cargos com menor remuneração no mercado de trabalho',
        url: 'https://www.correiobraziliense.com.br/app/noticia/eu-estudante/trabalho-e-formacao/2019/11/17/interna-trabalhoeformacao-2019,807077/negros-ocupam-cargos-com-menor-remuneracao-no-mercado-de-trabalho.shtml',
        img: 'assets/default/images/test4.png',
        abstract: 'No mês em que se comemora o Dia Nacional da Consciência Negra, IBGE revela que mercado de trabalho ainda coloca obstáculos para a população negra.'
    }, {
        title: 'Mulheres e pessoas negras são apenas 1/3 dos profissionais de tecnologia e inovação, aponta pesquisa',
        url: 'https://www.generonumero.media/mulheres-e-pessoas-negras-sao-apenas-13-dos-profissionais-de-tecnologia-e-inovacao-aponta-pesquisa/',
        img: 'assets/default/images/test5.png',
        abstract: 'Estudo #QuemCodaBr mostra que não há nenhuma pessoa negra em 32,7%  das equipes que trabalham com tecnologia no país; mapeamento do PretaLab reúne os perfis de profissionais negras que atuam no setor'
    }];

    var random = Math.floor((Math.random() * 123457)) % 4;
    $scope.currentNew = opts[random];
    //console.log(currentNew.img)

    $scope.getUserColor = function (name) {
        if (name == "Alex")
            return "#e0e0e0";
        return "white";
    };
    $scope.getBgColor = function () {
        return bgColor;
    };

    $scope.hideNews = function () {
        $scope.showNews = false;
        $scope.showAvatar = true;
    };

    $scope.hideAvatar = function () {
        $scope.showAvatar = false;
        $scope.showQuestions = true;
        updatePoints(0);
    };

    $scope.getUsers = function () {
        return users;
    };

    $scope.getImage = function (value) {
        return "assets/" + configService.getTheme() + "/images/avatar" + value + ".png";
    };

    $scope.setAvatar = function (value) {
        userAvatar = value;
        users[4].avatar = value;
    };

    $scope.getNumber = function (num) {
        var array = new Array(num);
        for (var i = 0; i < num; i++) {
            array.push(i);
        };

        return array;
    };

    $scope.getBar = function () {
        return "assets/default/images/bar.png";

    };

    $scope.checkSet1 = function () {
        return showSet1;
    };


    $scope.checkAvatar = function () {
        return !$scope.showAvatar;
    };

    $scope.setSet1 = function (value) {
        showSet1 = value;
    };

    $scope.showNext = function () {
        return configService.getNext();
    };

    $scope.showPosttest = function () {
        $location.path("/posttest");
    };

    $scope.getStars = function () {

        if (configService.nextOn) {
            return "star";
        }

        return "star_border";
    };

    $scope.getRanking = function (value) {
        return users[value].avatar;

    };

    var checkBadge = function (index) {

        return configService.getBadges()[index];
    };


    $scope.getBadge = function (name) {

        var id = 0;

        switch (name) {
            case "badge5":
                id = 0;
                break;
            case "badge10":
                id = 1;
                break;
            case "badge":
                id = 2;
                break;
            default:
                console.log("invalid badge name");
        }


        var flag = checkBadge(id) ? name : "noBadge";

        //  console.log("flag: " + flag + " check: " + checkBadge(id));

        return "assets/" + configService.getTheme() + "/images/" + flag + ".png";
    };

    $scope.getAvatar = function () {
        return userAvatar;
    };

    $scope.getLevel = function () {
        return level;
    };

    $scope.chooseAvatar = function () {
        $scope.showAvatar = false;
    };

    $scope.getPoints = function () {

        return totalPoints;
    };

    $scope.question = function () {
        return "assets/" + configService.getTheme() + "/images/q-0.png";
    };

    $scope.dynamicTheme = function () {
        return configService.getTheme();
    };
    var setCurrent = function setCurrent(index) {
        userAnswer = $scope.items[index];
    };

    $scope.getCurrent = function () {
        return Math.trunc(totalPoints / 10);
    };

    $scope.getQuestion = function () {
        return currentQuestion + 1;
    };

    $scope.getUserName = function (index) {
        return users[index].name;
    };

    $scope.getUserPoints = function (index) {

        return users[index].points;
    };

    var setMsgType = function (type) {

        if (type == "red") {
            currentMessage = "Resposta Errada!"
        } else {
            currentMessage = "Resposta Certa!"
        };
    };

    var playAnimation = function (type) {

        console.log("playing animation: " + type);


        bgColor = type;
        flagMessage = true;

        setMsgType(type);

        setTimeout(function () {
            $scope.$apply(function () {
                bgColor = "white";
                flagMessage = false;
            });
        }, 2000);
    };

    var updatePoints = function (value) {

        if (value < 0 && (totalPoints + value) >= 0) {
            totalPoints += value;
            // dec = true;
            decrement = true;
            new Audio('assets/default/audio/wrong.mp3').play();
        };

        if (value > 0) {
            console.log("right answer");
            totalPoints += value;
            level++;
            increment = true;
            new Audio('assets/default/audio/right.mp3').play();
        };

        //updates ranking
        users = [{
            name: "Alan",
            points: 79, //19,
            avatar: "assets/" + configService.getTheme() + "/images/ranking1.png"
        }, {
            name: "Valentine",
            points: 75, //15,
            avatar: "assets/" + configService.getTheme() + "/images/ranking2.png"
        }, {
            name: "Francis",
            points: 63, //13,
            avatar: "assets/" + configService.getTheme() + "/images/ranking3.png"
        }, {
            name: "Danni",
            points: 27, //7,
            avatar: "assets/" + configService.getTheme() + "/images/ranking4.png"
        }, {
            name: "Gil",
            points: totalPoints,
            avatar: userAvatar
        }];

        var sortedList = users.slice(0);
        sortedList.sort(function (a, b) {
            return a.points - b.points;
        });

        users = sortedList.reverse();

        setTimeout(function () {
            $scope.decrement = false;
            $scope.increment = false;
        }, 1000);


    };

    $scope.getMessage = function () {
        return currentMessage;
    };

    $scope.showMessage = function () {
        return flagMessage;
    }

    $scope.processAnswer = function (value) {
        setCurrent(value);
        var dialogType = null;

        //right answer
        if (userAnswer == answers[currentQuestion]) {

            updatePoints(10);
            playAnimation("green");

            //badge level 5

            if (totalPoints == 50 && levelFiveFlag) {
                levelFiveFlag = false;

                $mdDialog.show({
                    controller: 'Badge5Ctrl',
                    templateUrl: 'views/badge5.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                });

                configService.addBadge(0);

                setTimeout(function () {
                    $mdDialog.hide();
                }, 2000);



            } else if (totalPoints == 100 && levelTenFlag) {
                levelTenFlag = false;
                $mdDialog.show({
                    controller: 'Badge10Ctrl',
                    templateUrl: 'views/badge10.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                });

                configService.addBadge(1);

                setTimeout(function () {
                    $mdDialog.hide();
                }, 2500);


            } else if (currentQuestion == 19) {
                $mdDialog.show({
                    controller: 'BadgeCtrl',
                    templateUrl: 'views/badge.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                });

                configService.addBadge(2);

                setTimeout(function () {
                    $mdDialog.hide();
                }, 2500);
            };



        } else if (currentQuestion == 19) {

            playAnimation("red");
            $mdDialog.show({
                controller: 'BadgeCtrl',
                templateUrl: 'views/badge.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            });

            configService.addBadge(2);

            showSet1 = false;
            setTimeout(function () {
                $mdDialog.hide();
            }, 2500);
        } else {
            playAnimation("red");
            updatePoints(0)

        };

        currentQuestion++;
        $scope.progress = 100 * (currentQuestion + 1) / 20;
        $scope.question = function () {
            return "assets/" + configService.getTheme() + "/images/q-" + currentQuestion + ".png";
        };

        if (currentQuestion >= 20) {
            configService.addBadge(2);

            //  configService.setNext(true);
            User.setActivityPoints(totalPoints);

            console.log(User.getResponse());
            console.log(userAnswer);//vamos ver
            //  $location.path("/home");
            showSet1 = false;

            $scope.showQuestions = false;
        };

    };
});