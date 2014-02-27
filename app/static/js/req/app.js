
//Configuring paths to libraries
require.config({
	
	//Set baseUrl relative to the index page
	baseUrl: 'static/js/lib',
	
	//Use the path name with "define"; use the export name with functions
	paths:
	{
		
		jquery: 'jquery-2.0.3.min',
		bootstrap: '../../bootstrap3/js/bootstrap.min',
		angular: 'angular.min',
		typeahead: 'typeahead.min'
	
	},
	
	
	shim:
	{
		
		'bootstrap':
		{
			
			deps: ['jquery'],
			exports: 'Bootstrap'
		},
		
		'angular':
		{
			
			exports: 'Angular'
		},
		
		'typeahead':
		{
			
			exports: 'Typeahead'
		}
		
	}	
	
	
});



//Setting up the app
require
([

	'jquery',
	'bootstrap',
	'angular',
	'typeahead'
],

function($, Bootstrap, Angular, Typeahead)
{
	
	
})
