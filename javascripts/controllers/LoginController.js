var app = angular.module('passwordCtrl', []);

app.controller('LoginController', function($scope, $http, LoginService, config){
    $scope.passwordStrong = config.shortConfig;
    $scope.classMessagePassword = config.colorBadValue;
    var score = 81;
    $scope.postValidationPassword = function () {
        if (!$scope.passwordModel) {
            $scope.passwordStrong = config.shortConfig;
            $scope.classMessagePassword = config.colorBadValue;
        } else {
            if (score > config.valueVeryWeak && score <= config.valueWeak) {
                $scope.passwordStrong = config.veryWeakConfig;
                $scope.classMessagePassword = config.colorBadValue;
            } else if (score > config.valueWeak && score <= config.valueGood) {
                $scope.passwordStrong = config.weakConfig;
                $scope.classMessagePassword = config.colorBadValue;
            } else if (score > config.valueGood && score <= config.valueStrong) {
                console.log("Boa");
                $scope.classMessagePassword = config.colorMediumValue;
                $scope.passwordStrong = config.goodConfig;
            } else if (score > config.valueStrong && score <= config.valueVeryStrong) {
                console.log("Forte");
                $scope.classMessagePassword = config.colorGoodValue;
                $scope.passwordStrong = config.strongConfig;
            } else {
                console.log("Muito Forte");
                $scope.passwordStrong = config.veryStrongConfig;
                $scope.classMessagePassword = config.colorGoodValue;
            }
        }
        console.log($scope.passwordModel);
        /*var password = $scope.passwordModel;
        LoginServiceService.postValidationPassword(password).success(function (data, status) {
            
        }). error(function (data, status) {
            $scope.codigo = "Erro: "+status;
            $scope.message = "Aconteceu um problema:" + data.message;
        });*/
    };
});