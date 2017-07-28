(function(){
  function authCtrl($firebaseAuth, $state){
    const auth = this;
    auth.firebaseAuth = $firebaseAuth();

    auth.login = function(email, password) {
      auth.firebaseAuth.$signInWithEmailAndPassword(email, password).then(function(firebaseUser) {
        alert("Signed in as:" + firebaseUser.email);
        $state.go("home");
      }).catch(function(error) {
        alert("Authentication failed:" + error);
      });
    };

    auth.createUser = function(email, password) {
      auth.firebaseAuth.$createUserWithEmailAndPassword(email, password).then(function(firebaseUser) {
        alert("User"+ firebaseUser.email + " created successfully!");
        $state.go("home");
      }).catch(function(error) {
        alert(error);
      });
    };

    auth.signOut = function() {
      auth.firebaseAuth.$signOut().then(function() {
        alert("You are logged out");
      });

    }
  }

  angular
    .module('toDoList')
    .controller('authCtrl', ['$firebaseAuth', '$state', authCtrl]);


})();
