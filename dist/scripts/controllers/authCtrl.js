(function(){
  function authCtrl(){
    const auth = this;
    auth.nomes = ['Renato', 'Danilo'];
    console.log(auth);
    auth.myAlert = function(nome){
      alert(nome);
    };
    auth.even = true;
  auth.countClicks = function(){
    if (auth.even) {
      auth.even = false;
    } else {
      auth.even = true;
    }
  };

  auth.value = "Danilo";


  }
  angular
    .module('toDoList')
    .controller('authCtrl', [authCtrl]);


})();
