(function() {
	function config($stateProvider, $locationProvider) {
		
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			
		});
		
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/templates/home.html'
		});
		
	}
	
	angular
		//change appName here as well to
		//match name on html tag in index.html
		.module('appName', ['firebase', 'ui.router'])
		.config(config);
	
	
})();