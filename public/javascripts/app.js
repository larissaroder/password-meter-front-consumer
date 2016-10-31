var app = angular.module("passwordValidation",['passwordCtrl']);

app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});