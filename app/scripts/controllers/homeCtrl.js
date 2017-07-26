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

    home.log = function(input) {
      console.log(input);
    };

    home.changePriority = function(index) {
      homeFactory.changePriority(index, home);
    };

    home.editDescription = function(index) {
      homeFactory.editDescription(index, home);
    };

    home.saveDescription = function(index) {
      homeFactory.saveDescription(index, home);
    };

    home.increaseSize = function(index) {
      const allP = document.getElementsByClassName('pEdit');
      allP[index].style.color = "blue";
      allP[index].style.textDecoration = "underline";
    };

    home.decreaseSize = function(index) {
      const allP = document.getElementsByClassName('pEdit');
      allP[index].style.color = "black";
      allP[index].style.textDecoration = "none";
    };


  }
  angular
    .module('toDoList')
    .controller('homeCtrl', ['homeFactory', homeCtrl]);


})();


// start here the flickerAPI
    // home.flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    // home.addTag = function() {
    //   home.flickrOptions = {tags:"",format: "json"};
    //   home.flickrOptions.tags = home.newTagItem;
    //   home.getJson = getJson(flickerAPI, flickrOptions);
    //   console.log(home.flickrOptions);
    //   home.newTagItem = "";
    // }
