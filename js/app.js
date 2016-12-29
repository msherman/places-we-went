//Location data used for displaying Markers and filtering.
var locationData = [
	{
		city: "Los Angeles",
		state: "California",
		abbr: "CA",
		loc: {lat: 34.0522342, lng: -118.2436849},
		trip: "Cutthroat",
		search: "city"
	},
	{
		city: "Green Bay",
		state: "Wisconsin",
		abbr: "WI",
		loc: {lat: 44.51915899999999, lng: -88.01982599999997},
		trip: "Home",
		search: "full"
	},
	{
		city: "Tampa Bay",
		state: "Florida",
		abbr: "FL",
		loc: {lat: 27.763383, lng: -82.5436722},
		trip: "Thanksgiving",
		search: "city"
	},
	{
		city: "Minneapolis",
		state: "Minnesota",
		abbr: "MN",
		loc: {lat: 44.977753, lng: -93.26501080000003},
		trip: "A Weekend Getaway",
		search: "city"
	},
	{
		city: "Chicago",
		state: "Illinois",
		abbr: "IL",
		loc: {lat: 41.8781136, lng: -87.62979819999998},
		trip: "Engagement",
		search: "city"
	},
	{
		city: "Ocho Rios",
		state: "Jamaica",
		abbr: "JM",
		loc: {lat: 18.4073894, lng: -77.10313450000001},
		trip: "Jamaica",
		search: "city"
	},
	{
		city: "Castries",
		state: "Saint Lucia",
		abbr: "LC",
		loc: {lat: 14.0101094, lng: -60.98746870000002},
		trip: "Honeymoon",
		search: "city"
	},
	{
		city: "Las Vegas",
		state: "Nevada",
		abbr: "NV",
		loc: {lat: 36.1699412, lng: -115.13982959999998},
		trip: "Vegas",
		search: "city"
	},
	{
		city: "Fort Myers",
		state: "Florida",
		abbr: "FL",
		loc: {lat: 26.640628, lng: -81.87230840000001},
		trip: "Visit Suriya",
		search: "full"
	},
	{
		city: "Sarasota",
		state: "Florida",
		abbr: "FL",
		loc: {lat: 27.3364347, lng: -82.53065270000002},
		trip: "Visit Suriya",
		search: "city"
	},
	{
		city: "New Orleans",
		state: "Louisianna",
		abbr: "LA",
		loc: {lat: 29.95106579999999, lng: -90.0715323},
		trip: "A Weekend Getaway",
		search: "city"
	},
	{
		city: "Springdale",
		state: "Utah",
		abbr: "UT",
		loc: {lat: 37.1888713, lng: -112.99855150000002},
		trip: "Vegas",
		search: "full"
	},
	{
		city: "Shippensburg",
		state: "Pennsylvania",
		abbr: "PA",
		loc: {lat: 40.0506453, lng: -77.52026469999998},
		trip: "Work",
		search: "city"
	},
	{
		city: "Fullerton",
		state: "California",
		abbr: "CA",
		loc: {lat: 33.8703596, lng: -117.92429659999999},
		trip: "Work",
		search: "full"
	},
	{
		city: "West Bend",
		state: "Wisconsin",
		abbr: "WI",
		loc: {lat: 43.4252776, lng: -88.18342769999998},
		trip: "Work",
		search: "full"
	},
	{
		city: "Richland Center",
		state: "Wisconsin",
		abbr: "WI",
		loc: {lat: 43.3347053, lng: -90.38679279999997},
		trip: "Work",
		search: "full"
	},
	{
		city: "Logan",
		state: "Utah",
		abbr: "UT",
		loc: {lat: 41.7369803, lng: -111.8338359},
		trip: "Work",
		search: "full"
	},
	{
		city: "Monett",
		state: "Missouri",
		abbr: "MO",
		loc: {lat: 36.9289502, lng: -93.92770710000002},
		trip: "Work",
		search: "city"
	},
	{
		city: "Smithfield",
		state: "Utah",
		abbr: "UT",
		loc: {lat: 41.8382622, lng: -111.83272290000002},
		trip: "Work",
		search: "full"
	},
	{
		city: "Tempe",
		state: "Arizona",
		abbr: "AZ",
		loc: {lat: 33.4255104, lng: -111.94000540000002},
		trip: "Work",
		search: "full"
	},
	{
		city: "Marquette",
		state: "Michigan",
		abbr: "MI",
		loc: {lat: 46.5475825, lng: -87.39559539999999},
		trip: "College",
		search: "full"
	},
	{
		city: "Horse Cave",
		state: "Kentucky",
		abbr: "KY",
		loc: {lat: 37.179496, lng: -85.90691750000002},
		trip: "Road Trip",
		search: "city"
	},
	{
		city: "Nashville",
		state: "Tennessee",
		abbr: "TN",
		loc: {lat: 36.1626638, lng: -86.78160159999999},
		trip: "Road Trip",
		search: "city"
	},
	{
		city: "Gatlinburg",
		state: "Tennessee",
		abbr: "TN",
		loc: {lat: 35.714259, lng: -83.51016379999999},
		trip: "Road Trip",
		search: "city"
	},
	{
		city: "Asheville",
		state: "North Carolina",
		abbr: "NC",
		loc: {lat: 35.5950581, lng: -82.55148689999999},
		trip: "Road Trip",
		search: "city"
	},
	{
		city: "Floyd",
		state: "virginia",
		abbr: "VA",
		loc: {lat: 36.9112443, lng: -80.32005019999997},
		trip: "Road Trip",
		search: "full"
	},
	{
		city: "Clarksburg",
		state: "West Virginia",
		abbr: "WV",
		loc: {lat: 39.2806451, lng: -80.34453409999998},
		trip: "Road Trip",
		search: "full"
	}
];

//Place object that will hold the Knockout variables
var place = function(data){
	this.city = ko.observable(data.city);
	this.name = ko.observable(data.city+", "+data.abbr);
	this.fullName = ko.observable(data.city+", "+data.state);
	this.loc = ko.observable(data.loc);
	this.trip = ko.observable(data.trip);
	this.enabled = ko.observable(true);
	this.search = ko.observable(data.search);
};

//View model contains the main driver of the work.
var viewModel = function(){
	var self = this;
	this.locationTypes = ko.observableArray([]);
	this.locations = ko.observableArray([]);
	
	//Add a new place to the locations array I put this in a knockout array, but you could get away with not.
	locationData.forEach(function(placeData){
		self.locations.push(new place(placeData));
	});
	//adding a custom sort array to sort by city name
	self.locations.sort(function(left, right){
		if (left.city() == right.city()){
			return 0;
		}else if (left.city() < right.city()){
			return -1;
		}
		return 1;
	});
	self.locTypeField = ko.observable();
	
	//Add a function when the DDL changes to update the visible markers both in the list and in google maps.
	self.locTypeField.subscribe(function(newValue){
		for (var i = 0; i < self.locations().length; i++){
			if (newValue == "All"){
				self.locations()[i].enabled(true);
			}else if (self.locations()[i].trip() == newValue){
				self.locations()[i].enabled(true);
			}else{
				self.locations()[i].enabled(false);
			}
		}
		updateMapMarkers();
	});
	
	//This builds the array needed for the drop down list.
	function addNavTypes(){
		var locDetails;
		for (var i = 0; i < self.locations().length; i++){
			locDetails = self.locations()[i];
			if (self.locationTypes.indexOf(locDetails.trip()) == -1){
				self.locationTypes.push(locDetails.trip());
			}
		}
		self.locationTypes.sort();
		//this command puts it at the beginning. Yay built-ins!
		self.locationTypes.unshift("All");
	}

	
	/*****************/
	/* map functions */
	/*****************/
	var map;
	var markers = [];
	var markerMap = new Map();
	var infoWindow = new google.maps.InfoWindow({
		maxWidth: 200
	});
	//Initialize the starting map, add markers, and center the map.
	function initMap(){
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: 13,
			mapTypeControl: false
		});
		for (var i = 0; i < self.locations().length; i++){
			if (self.locations()[i].loc() !== ""){
				addMarker(self.locations()[i], i);
			}
		}
		centerMap(map);
		
	}

	//First create a new marker and push it to the marker array
	//Second create a map of loc:{lat: , lng:} and Index position to make it easier in a future function to update the marker
	function addMarker(location, placeID){
		var marker = new google.maps.Marker({
			map: map,
			title: location.city(),
			position: location.loc(),
			animation: google.maps.Animation.DROP,
			id: placeID,
			data: location
		});
		markers.push(marker);
		//I don't want to have to iterate over the marker array multiple times in the updateMapMarkers call as this would be inefficient. Creating a map to store the lat/lng and index  combination
		markerMap.set(location.loc(), markers.indexOf(marker));
		marker.addListener('click', function(){
			map.setCenter(marker.getPosition());
			showInfo(marker, infoWindow, null);
		});

	}
	
	//This function will clear any bouncing markers, validate that the place data was sent in and if not go get it
	//Then it calls wikpedia API via another function passing in a success and failure function. Based on the results it calls the appropriate function
	function showInfo(marker, infowindow, data){
				map.setCenter(marker.getPosition());
				console.log(marker.getPosition());
				console.log("fuck you too");
		clearBounce();
		var locData = data;
		if (locData === null){
			locData = marker.data;
		}
		if (infowindow.marker != marker){
			infowindow.marker = marker;
			// add a title
			var content = "<div class=\"title\"><h2>"+locData.name()+"</h2></div><br />";
			// add the trip (filter);
			content += "<div><strong>Trip: </strong>"+locData.trip()+"</div><br />";
			getWikiInfo(locData,
				//Success function
				function(x){
					//add the wiki details
					content += "<divclass=\"details\"><h3>Details</h3><em>"+x[2][0]+"</em></div><br />";
					//add the attribution
					content += "<div><strong>Source: <a href="+x[3][0]+" target=\"_blank\">Wikipedia</a></strong></div>";
					infowindow.setContent(content);
					infowindow.open(map, marker);
				},
				//failure function
				function(x){
					content += "<divclass=\"details\"><h3>Details</h3><em>Failed to load Wikipedia data</em></div><br />";
					infowindow.setContent(content);
					infowindow.open(map, marker);
				}
			);
			marker.setAnimation(google.maps.Animation.BOUNCE);
			//bounce twice then stop. A bounce is roughly 700ms. eyeballed it.
			window.setTimeout(function(){
				marker.setAnimation(null);
			}, 1400);
			infowindow.addListener('closeclick', function(){
				infowindow.marker = null;
				marker.setAnimation(null);
				centerMap(false);
			});
		}
	}
	
	//this function loops through all markers and turns off their animation
	function clearBounce(){
		for (var i = 0; i < markers.length; i++){
			if (markers[i].getAnimation() !== null){
				markers[i].setAnimation(null);
			}
		}
	}
	
	//This checks the  locations array to see if it is enabled and if it exists on the map. If it is enabled and not on the map it will be added to the map. If it isn't enabled and on the map it removes it.
	function updateMapMarkers(){
		infoWindow.marker = null;
		var markerPositionInArray;
		for (var i = 0; i < self.locations().length; i++){
			markerPositionInArray = markerMap.get(self.locations()[i].loc());
			if (self.locations()[i].enabled() && markers[markerPositionInArray].getMap() === null){
				markers[markerPositionInArray].setMap(map);
			}else if (!self.locations()[i].enabled() && markers[markerPositionInArray].getMap() === map){
				markers[markerPositionInArray].setMap(null);
			}
		}
		centerMap(map);
	}
	
	//centers the map
	function centerMap(reDrop){
		var activeMarkerCount = 0;
		var bounds = new google.maps.LatLngBounds();
		for (var i = 0; i < markers.length; i++){
			if (markers[i].map === map){
				bounds.extend(markers[i].position);
				activeMarkerCount +=1;
			}
			if (reDrop){
				markers[i].setAnimation(google.maps.Animation.DROP);
			}
		}
		map.fitBounds(bounds);
		if (activeMarkerCount < markers.length){
			map.setZoom(5);
		}
	}
	
	//function to show the window if the list item is clicked.
	self.showWindow = function (data){
		//gets the associated marker with the list item that was clicked
		var clickedMarker = markers[markerMap.get(data.loc())];
		showInfo(clickedMarker, infoWindow, data);
	};
	
	//Gets the wiki info passing in a callback for both done and failure.
	function getWikiInfo(data, cb, failure){
		var searchCriteria;
		if (data.search() == "full"){
			searchCriteria = data.fullName();
		}else{
			searchCriteria = data.city();
		}
		var info;
		$.ajax({
			url: 'http://en.wikipedia.org/w/api.php',
			timeout: 1500,
			data: { action: 'opensearch', search: searchCriteria, format: 'json'},
			dataType: 'jsonp'
		}).done(cb).fail(failure);
	}
};
	
	initMap();
	addNavTypes();

//initial app call to create the KO bindings and load the map.
function loadApp(){
	ko.applyBindings(new viewModel());
}


//This only handles the hamburger menu
$(".menuControl").click(function(){
	$(".places-gone").toggleClass("show");
	$(this).toggleClass("menuControlPushed");
});
