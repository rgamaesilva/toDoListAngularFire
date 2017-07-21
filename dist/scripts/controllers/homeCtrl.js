(function(){
  function homeCtrl(){
    const home = this;
    home.title = "Doing it all over again";
    home.toDoList = [];
    home.newToDoItem = "";
    home.addNewItem = function(item) {
      if(home.newToDoItem !== "") {
        home.toDoList.push(item);
        home.newToDoItem = "";
      }
    };
    home.removeItem = function(index) {
      home.toDoList.splice(index, 1);
    }
  }
  angular
    .module('toDoList')
    .controller('homeCtrl', [homeCtrl]);


})();
