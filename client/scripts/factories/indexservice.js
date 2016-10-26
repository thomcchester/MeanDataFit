fitApp.factory("IndexService", ["$http", function($http){
  var index = {};

  var getDefaults = function(){
        $http.get("/defaults").then(function(response){
            client.defaults = response.data[0];
        });
    };


  return {
    index: index,
    getDefaults: getDefaults
  }
}]);
