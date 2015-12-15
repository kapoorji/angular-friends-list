var app = angular.module("routerApp",['ui.router']);

app.config(function($stateProvider, $urlRouterProvider)
{
 $urlRouterProvider.otherwise('/home');
 
 $stateProvider
.state('home',{
url:'/home',
templateUrl:'view/partial-home.html'
})
.state('home.list',{
url:'/list',
templateUrl:'view/partial-home-list.html',
controllerAs : 'appview',
controller:'viewContact'
})

.state('home.addContact',{
url:'/addContact',
templateUrl:'view/partial-add-contact.html',
controllerAs: 'appview',
controller:'viewContact'
})
});