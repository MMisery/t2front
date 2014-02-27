

//One module to hold several controllers taking data from API endpoints
var t2Controllers = angular.module('t2Controllers', []);


/*Possible endpoints: Volunteers, Events, EventLocations, Sessions,
Persons of Interest*/


/*Using the t2Controllers module, creating controller VolCtrl and linking
a json file returned by the T2 API*/
t2Controllers.controller('VolCtrl', ['$scope', '$http',
	function ($scope, $http)
	{
		$http.get('volunteer-objects-uri.format').success(function(data)
		{
			//Defining the name to be used in the template, in this case "vols"
			$scope.vols=data;
		});

		
	}]); 



/*Using the t2Controllers module, creating controller VolCtrl and linking
a json file returned by the T2 API*/
t2Controllers.controller('EventCtrl', ['$scope', '$http',
	function ($scope, $http)
	{
		$http.get('event-objects-uri.format').success(function(data)
		{
			//Defining the name to be used in the template, in this case "vols"
			$scope.events=data;
		});

		
	}]); 
