(function(){
  function homeCtrl(){
    console.log('I am in homeCrtl');
  }
  angular
    .module('toDoList')
    .controller('homeCtrl', [homeCtrl]);


})();
