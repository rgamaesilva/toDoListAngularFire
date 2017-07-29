(function(){
  function homeCtrl(homeFactory, $firebaseArray, $timeout, currentAuth, $firebaseAuth, $state){
    const home = this;

    const userTaskRef = firebase.database().ref().child('users/' + currentAuth.uid + '/tasks');
    // const messageRef = firebase.database().ref().child('users/' + currentAuth.uid + '/messages');
    home.toDoListFirebase = $firebaseArray(userTaskRef);
    home.userEmail = currentAuth.email;
    home.firebaseAuth = $firebaseAuth();

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
      if (home.newToDoItem !== ""){
        home.toDoListFirebase.$add({
          description: description,
          priority: "",
          status: ""
        }).then(function(results) {
          home.newToDoItem = "";
          console.log("ADDED");
        });
      }
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

    home.signOut = function() {
      home.firebaseAuth.$signOut().then(function(){
        $state.go('login');
      });
    }

  }
  angular
    .module('toDoList')
    .controller('homeCtrl', ['homeFactory','$firebaseArray', '$timeout', 'currentAuth', '$firebaseAuth', '$state', homeCtrl]);

})();
