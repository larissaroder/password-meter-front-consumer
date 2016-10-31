var app = angular.module("passwordValidation",['passwordCtrl']);

//Interpolação do Angular alterada para não haver conflito com a interpolação do template usado (handlesbar)
app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});
