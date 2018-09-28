app.controller('Landing', ['$scope', '$http', function ($scope, $http) {
    

    /*EJEMPLO GET CON PARAMETRO
    var data = [];
    data['Userid'] = 'Andres';
    data['Password'] = '12345';
    $http.get("/api-php/data/login", {
        params: data ,
      }).success(function (data) {
        console.log(data);
      });
    */

    /*GET SIN PARAMETRO
    $http.get("/api-php/data/usuarios").success(function (data) {
        console.log(data);
      });
    */
    
    /*POST 
    var data = {'Userid':'Test' , 'Password': '54321'};
    console.log(data);
    $http.post("/api-php/data/crearusuario", {
    body: data
    }).success(function (data) {
        console.log(data);
    });
    */


}]);

app.controller('Home', ['$scope', '$http', function ($scope, $http) {
        
}]);
