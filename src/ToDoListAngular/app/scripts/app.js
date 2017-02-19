//
// Use the following code for running without authentication.
//
//'use strict';
//angular.module('todoApp', ['ngRoute'])
//.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
//    $routeProvider.when("/Home", {
//        controller: "homeCtrl",
//        templateUrl: "/App/Views/Home.html",
//    }).when("/TodoList", {
//        controller: "todoListCtrl",
//        templateUrl: "/App/Views/TodoList.html",
//    }).when("/UserData", {
//        controller: "userDataCtrl",
//        templateUrl: "/App/Views/UserData.html",
//    }).otherwise({ redirectTo: "/Home" });
//}]);


//
// Use the following code for running with authentication.
//
'use strict';
angular.module('todoApp', ['ngRoute', 'AdalAngular'])
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {

    $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/App/Views/Home.html",
    }).when("/TodoList", {
        controller: "todoListCtrl",
        templateUrl: "/App/Views/TodoList.html",
        requireADLogin: true,
    }).when("/UserData", {
        controller: "userDataCtrl",
        templateUrl: "/App/Views/UserData.html",
    }).otherwise({ redirectTo: "/Home" });

    var endpoints = {
        "https://todolistapi000.azurewebsites.net/": "91072c61-2d00-49b9-81a7-4b00e7f27a66"
    };

    adalProvider.init(
        {
            instance: 'https://login.microsoftonline.com/',
            tenant: '18d9d5f9-9e6c-4530-af7f-c805259f12f1',
            clientId: '91072c61-2d00-49b9-81a7-4b00e7f27a66',
            extraQueryParameter: 'nux=1',
            endpoints: endpoints,
            //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
        },
        $httpProvider
        );

}]);

