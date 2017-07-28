(function(){
  function homeCtrl(homeFactory, $firebaseArray, $timeout){
    const home = this;
    const ref = firebase.database().ref();
    home.toDoListFirebase = $firebaseArray(ref);

    home.changeFirebasePriorityColor = function(index) {
      $timeout(function(){
        const elements = document.getElementsByClassName('tableRow');
        if (home.toDoListFirebase[index].priority === "high"){
          elements[index].style.backgroundColor = "red";
        } else if (home.toDoListFirebase[index].priority === "medium"){
          elements[index].style.backgroundColor = "green";
        } else if (home.toDoListFirebase[index].priority === "low"){
          elements[index].style.backgroundColor = "lightblue";
        }
      })};

    home.initializeApp = function(elements) {
      home.newToDoItem = "";
      home.changePriority = [];
      home.changeStatus = [];
      home.toDoListFirebase.$loaded().then(function(){
        for(let i=0 ; i < home.toDoListFirebase.length ; i++){
          home.changePriority[i] = home.toDoListFirebase[i].priority;
          home.changeStatus[i] = home.toDoListFirebase[i].status;
          home.changeFirebasePriorityColor(i);
        }});
      console.log("INITIALIZED");
    };

    home.initializeApp();

    home.addRecordToFirebase = function(description) {
      home.toDoListFirebase.$add({
        description: description,
        priority: "",
        status: ""
      }).then(function(results) {
        home.newToDoItem = "";
        console.log("ADDED");
      });
    };

    home.removeFirebaseItem = function(index) {
      home.toDoListFirebase.$remove(index);
    };

    home.updateFirebasePriority = function(priority, index) {
      home.toDoListFirebase[index].priority = priority;
      home.toDoListFirebase.$save(index);
      console.log("PRIORITY UPDATED");
    };

    home.updateFirebaseStatus = function(status, index) {
      home.toDoListFirebase[index].status = status;
      home.toDoListFirebase.$save(index);
      console.log("STATUS UPDATED");
    };

    home.updateFirebaseDescription = function(description, index) {
      home.toDoListFirebase[index].description = description;
      home.toDoListFirebase.$save(index).then(function() {
        home.editingTask = false;
      });
      console.log("DESCRIPTION UPDATED");
    };

    home.removeAll = function() {
      for (let i=0 ; i < home.toDoListFirebase.length ; i++){
        home.toDoListFirebase.$remove(i);
      }
    }; 

  }
  angular
    .module('toDoList')
    .controller('homeCtrl', ['homeFactory','$firebaseArray', '$timeout', homeCtrl]);

})();
