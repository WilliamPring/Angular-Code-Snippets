var app = angular.module('Name of your application',
    [
        'ngRoute',
        'Your Moudle Name......',
        'Or any other angular js library your importerd'
    ]);

//this will be for the routing for the website
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'View Path',
            controller: 'Your controller name'
        })
         .when('/YourPATH', {
             templateUrl: 'View Path',
             controller: 'Your controller name'
         })
        .otherwise({
            redirectTo: '/'
        });

}]).run(function ($rootScope) {
  //Will be shared throughout the projects
    $rootScope.Varible;
});
