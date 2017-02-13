angular.module("myApp")
    .config(function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider
            .otherwise("/index");
        $stateProvider
            .state("index", {
                url: "/index",
                templateUrl: "./tpl/index.html",
                controller: "indexCtrl"
            })
            .state("home", {
                url: "/home",
                templateUrl: "./tpl/home.html",
                controller:"homeCtrl"
            })
            .state("home.first", {
                url: "/first",
                templateUrl: "./tpl/first.html",
            })
            .state("home.found", {
                url: "/found",
                templateUrl: "./tpl/found.html",
            })
            .state("home.my", {
                url: "/my",
                templateUrl: "./tpl/my.html",
            })
            .state("home.return", {
                url: "/return",
                templateUrl: "./tpl/return.html",
            })
            .state("home.first.firs", {
                url: "/firs",
                templateUrl: "./tpl/firs.html",
                controller:"firsCtrl"
            })
            .state("home.first.second", {
                url: "/second",
                templateUrl: "./tpl/second.html",
            })

    })