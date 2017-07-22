(function(){
  function homeCtrl(homeFactory){
    const home = this;

    homeFactory.initializeApp(home);

    home.addNewItem = function(item) {
      homeFactory.addNewItem(item, home);
    };

    home.removeItem = function(index) {
      homeFactory.removeItem(index, home);
    }

    home.removeAll = function() {
      homeFactory.initializeApp(home);
    };



  }
  angular
    .module('toDoList')
    .controller('homeCtrl', ['homeFactory', homeCtrl]);


})();
