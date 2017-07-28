(function() {
	function config($stateProvider, $locationProvider, $urlRouterProvider) {

		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false

		});

		$stateProvider
		.state('home', {
			url: '/home',
			controller: 'homeCtrl as home',
			templateUrl: '/templates/home.html',
			resolve: {
        // controller will not be loaded until $requireSignIn resolves
        // Auth refers to our $firebaseAuth wrapper in the factory below
        "currentAuth": ["authFactory", '$state', function(authFactory, $state) {
          // $requireSignIn returns a promise so the resolve waits for it to complete
          // If the promise is rejected, it will throw a $stateChangeError (see above)

					authFactory.$onAuthStateChanged(function(firebaseUser) {
          	if (!firebaseUser) {
							$state.go('login');
						}

					});
					return authFactory.$requireSignIn();
        }]
      }

		})
		.state('login', {
			url: '/login',
			controller: 'authCtrl as auth',
			templateUrl: '/templates/login.html'
	});

		$urlRouterProvider.otherwise('/home')

	}

	angular
		//change appName here as well to
		//match name on html tag in index.html
		.module('toDoList', ['ui.router', 'firebase'])
		.config(config);


})();
