(function() {
  function homeFactory(){
    homeFactory.initializeApp = function(home) {
      home.toDoList = [];
      home.newToDoItem = "";
      home.editButton = [];
      home.hEdit = [];
      home.saveButton = [];
      home.inputEdit = [];
    };

    homeFactory.removeItem = function(index, home) {
      home.toDoList.splice(index, 1);
    };

    homeFactory.addNewItem = function(item, home) {
      const index = home.toDoList.length;
      if(item !== "") {
        home.toDoList.push({
          id: index,
          description: item,
          priority:"",
          status:""
        });
        home.newToDoItem = "";
        home.editButton[index] = true;
        home.hEdit[index] = true;
      }
    };

    homeFactory.changePriority = function(index, home) {
      if (home.toDoList[index].priority === "high"){
        const allRows = document.getElementsByClassName('tableRow');
        allRows[index].style.backgroundColor = "red";
      } else if (home.toDoList[index].priority === "medium"){
        const allRows = document.getElementsByClassName('tableRow');
        allRows[index].style.backgroundColor = "green";
      } else if (home.toDoList[index].priority === "low"){
        const allRows = document.getElementsByClassName('tableRow');
        allRows[index].style.backgroundColor = "lightblue";
      }
    };

    homeFactory.editDescription = function(index, home) {
      home.editButton[index] = false;
      home.hEdit[index] = false;
      home.saveButton[index] = true;
      home.inputEdit[index] = true;
    };

    homeFactory.saveDescription = function(index, home) {
      home.editButton[index] = true;
      home.hEdit[index] = true;
      home.saveButton[index] = false;
      home.inputEdit[index] = false;
    };

    return homeFactory;
  }

  angular
    .module('toDoList')
    .factory('homeFactory', [homeFactory])
})();
