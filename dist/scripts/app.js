(function() {
	function config($stateProvider, $locationProvider) {

		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false

		});

		$stateProvider
		.state('home', {
			url: '/home',
			controller: 'homeCtrl as home',
			templateUrl: '/templates/home.html'
		})
		.state('login', {
			url: '/login',
			controller: 'authCtrl as auth',
			templateUrl: '/templates/login.html'
	});

	}

	angular
		//change appName here as well to
		//match name on html tag in index.html
		.module('toDoList', ['ui.router', 'firebase'])
		.config(config);


})();
