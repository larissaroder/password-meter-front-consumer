var app = angular.module('passwordCtrl', []);

app.controller('LoginController', function($scope, $http, LoginService, config){
    $scope.passwordStrong = config.shortConfig;
    $scope.classMessagePassword = config.colorBadValue;
    $scope.score = config.valueVeryWeak;
    $scope.status = "";
    $scope.message = "";

    $scope.postValidationPassword = function () {
        var password = $scope.passwordModel;
        LoginService.postValidationPassword(password).success(function (data, status) {
            $scope.status = "";
            $scope.message = "";
            executeRules(data.score, data.message);
        }). error(function (data, status) {
            $scope.status = "Erro: "+status;
            $scope.message = data.message;
        });
    };

    function executeRules (score, message) {
        if (!$scope.passwordModel) {
            $scope.passwordStrong = config.shortConfig;
            $scope.classMessagePassword = config.colorBadValue;
            $scope.score = config.valueVeryWeak;
        } else {
            $scope.passwordStrong = message;
            $scope.score = score;
            if (score > config.valueVeryWeak && score <= config.valueWeak) {
                $scope.classMessagePassword = config.colorBadValue;
            } else if (score > config.valueWeak && score <= config.valueGood) {
                $scope.classMessagePassword = config.colorBadValue;
            } else if (score > config.valueGood && score <= config.valueStrong) {
                $scope.classMessagePassword = config.colorMediumValue;
            } else if (score > config.valueStrong && score <= config.valueVeryStrong) {
                $scope.classMessagePassword = config.colorGoodValue;
            } else {
                $scope.classMessagePassword = config.colorGoodValue;
            }
        }
    }
});