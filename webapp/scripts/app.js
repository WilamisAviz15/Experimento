angular.module("tutor", ["ngRoute", "ngResource", "ngAnimate", "ngMaterial", "ngCanvasGauge","tutor.services"]).config(function($routeProvider) {

    $routeProvider.
    when("/pretest", {
        templateUrl: "views/pretest.html",
        controller: "PretestCtrl"
    }).
    when("/pretest2", {
        templateUrl: "views/pretest2.html",
        controller: "Pretest2Ctrl"
    }).
    when("/home", {
        templateUrl: "views/home.html",
        controller: "HomeCtrl"
    }).
    when("/posttest", {
        templateUrl: "views/posttest.html",
        controller: "PosttestCtrl"
    }).
    when("/questionary", {
        templateUrl: "views/questionary.html",
        controller: "QuestionaryCtrl"
    }).  
    when("/finish", {
        templateUrl: "views/finish.html",
        controller: "FinishCtrl"
    }).
    when("/flow", {
        templateUrl: "views/flow.html",
        controller: "FlowCtrl"
    }).
    otherwise({
        redirectTo: "/pretest"
    });

}).config(function($mdThemingProvider) {

    $mdThemingProvider.alwaysWatchTheme(true);

    // Neutral Theme
    $mdThemingProvider.theme("default")
        .primaryPalette("grey")
        .accentPalette("grey")
        .warnPalette("grey");

    // // ST-W 
    // $mdThemingProvider.theme("stWhite")
    //     .primaryPalette("grey")
    //     .accentPalette("grey")
    //     .warnPalette("grey");

    // // ST-B 
    // $mdThemingProvider.theme("stBlack")
    //     .primaryPalette("grey")
    //     .accentPalette("grey")
    //     .warnPalette("grey");

});

//GLOBAL - FACEBOOK API
window.fbAsyncInit = function() {
    FB.init({
        appId: '259201801144935',
        xfbml: true,
        version: 'v2.8'
    });
};
