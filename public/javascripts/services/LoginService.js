// Factory responsável pela execução dos serviços das chamadas a API
app.factory("LoginService", function ($http, config){
    var _postValidationPassword = function (password) {
        return $http({
            url: config.baseUrlPostValidationPasswordConfig,
            method: "POST",
            params: {
                password: password
            }
        });
    };

    return {
        postValidationPassword:_postValidationPassword
    };

});
