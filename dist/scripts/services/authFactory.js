(function() {
  function authFactory($firebaseAuth) {
    return $firebaseAuth();
  }
  angular
    .module('toDoList')
    .factory('authFactory', ['$firebaseAuth', authFactory])
})();
