(function() {
  function homeFactory(){
    homeFactory.initializeApp = function(home) {
      home.toDoList = [];
      home.newToDoItem = "";
    };

    homeFactory.removeItem = function(index, home) {
      home.toDoList.splice(index, 1);
    };

    homeFactory.addNewItem = function(item, home) {
      if(item !== "") {
        home.toDoList.push(item);
        home.newToDoItem = "";
      }
    };




    return homeFactory;
  }

  angular
    .module('toDoList')
    .factory('homeFactory', [homeFactory])
})();
