//Location data used for displaying Markers and filtering.
var locationData = [
	{
		name: "Los Angeles, CA",
		loc: {lat: 34.0522342, lng: -118.2436849},
		trip: "Cutthroat"
	},
	{
		name: "Green Bay, WI",
		loc: {lat: 44.51915899999999, lng: -88.01982599999997},
		trip: "Home"
	},
	{
		name: "Tampa Bay, FL",
		loc: {lat: 27.763383, lng: -82.5436722},
		trip: "Thanksgiving"
	},
	{
		name: "Minneapolis, MN",
		loc: {lat: 44.977753, lng: -93.26501080000003},
		trip: "Weekend Getaways"
	},
	{
		name: "Chicago, IL",
		loc: {lat: 41.8781136, lng: -87.62979819999998},
		trip: "Engagement"
	},
	{
		name: "Ocho Rios, JM",
		loc: {lat: 18.4073894, lng: -77.10313450000001},
		trip: "Jamaica"
	},
	{
		name: "Castries, Saint Lucia",
		loc: {lat: 14.0101094, lng: -60.98746870000002},
		trip: "Honeymoon"
	},
	{
		name: "Las Vegas, NV",
		loc: {lat: 36.1699412, lng: -115.13982959999998},
		trip: "Vegas"
	},
	{
		name: "Fort Myer, FL",
		loc: {lat: 26.640628, lng: -81.87230840000001},
		trip: "Visit Suriya"
	},
	{
		name: "Sarasota, FL",
		loc: {lat: 27.3364347, lng: -82.53065270000002},
		trip: "Visit Suriya"
	},
	{
		name: "New Orleans, LA",
		loc: {lat: 29.95106579999999, lng: -90.0715323},
		trip: "Weekend Getaways"
	},
	{
		name: "Springdale, UT",
		loc: {lat: 37.1888713, lng: -112.99855150000002},
		trip: "Vegas"
	},
	{
		name: "Shippensburg, PA",
		loc: {lat: 40.0506453, lng: -77.52026469999998},
		trip: "Work"
	},
	{
		name: "Fullerton, CA",
		loc: {lat: 33.8703596, lng: -117.92429659999999},
		trip: "Work"
	},
	{
		name: "West Bend, WI",
		loc: {lat: 43.4252776, lng: -88.18342769999998},
		trip: "Work"
	},
	{
		name: "Richland Center, WI",
		loc: {lat: 43.3347053, lng: -90.38679279999997},
		trip: "Work"
	},
	{
		name: "Logan, UT",
		loc: {lat: 41.7369803, lng: -111.8338359}, trip:
		"Work"
	},
	{
		name: "Monett, MO",
		loc: {lat: 36.9289502, lng: -93.92770710000002},
		trip: "Work"
	},
	{
		name: "Smithfield, UT",
		loc: {lat: 41.8382622, lng: -111.83272290000002},
		trip: "Work"
	},
	{
		name: "Tempe, AZ",
		loc: {lat: 33.4255104, lng: -111.94000540000002},
		trip: "Work"
	},
	{
		name: "Marquette, MI",
		loc: {lat: 46.5475825, lng: -87.39559539999999},
		trip: "College"
	},
	{
		name: "Horse Cave, KY",
		loc: {lat: 37.179496, lng: -85.90691750000002},
		trip: "Road Trip"
	},
	{
		name: "Nashville, TN",
		loc: {lat: 36.1626638, lng: -86.78160159999999},
		trip: "Road Trip"
	},
	{
		name: "Gatlinburg, TN",
		loc: {lat: 35.714259, lng: -83.51016379999999},
		trip: "Road Trip"
	},
	{
		name: "Asheville, NC",
		loc: {lat: 35.5950581, lng: -82.55148689999999},
		trip: "Road Trip"
	},
	{
		name: "Floyd, VA",
		loc: {lat: 36.9112443, lng: -80.32005019999997},
		trip: "Road Trip"
	},
	{
		name: "Clarksburg, WV",
		loc: {lat: 39.2806451, lng: -80.34453409999998},
		trip: "Road Trip"
	}
];

//Place object that will hold the Knockout variables
var place = function(data){
	this.name = ko.observable(data.name);
	this.loc = ko.observable(data.loc);
	this.trip = ko.observable(data.trip);
	this.enabled = ko.observable(true);
}

//View model contains the main driver of the work.
var viewModel = function(){
	var self = this;
	this.locationTypes = ko.observableArray([]);
	this.locations = ko.observableArray([]);
	
	//Add a new place to the locations array I put this in a knockout array, but you could get away with not.
	locationData.forEach(function(placeData){
		self.locations.push(new place(placeData));
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
		self.locationTypes.push("All");
		for (var i = 0; i < self.locations().length; i++){
			locDetails = self.locations()[i];
			if (self.locationTypes.indexOf(locDetails.trip()) == -1){
				self.locationTypes.push(locDetails.trip());
			}
		}
		self.locationTypes.sort();
	}

	addNavTypes();
	
	/*****************/
	/* map functions */
	/*****************/
	var map;
	var markers = [];
	var markerMap = new Map();
	var infoWindow = new google.maps.InfoWindow();
	//Initialize the starting map, add markers, and center the map.
	function initMap(){
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: 13,
			mapTypeControl: false
		});
		for (var i = 0; i < self.locations().length; i++){
			if (self.locations()[i].loc() != ""){
				addMarker(self.locations()[i]);
/*			}else{
				getGeoCodeLoc(map); */
			}
		}
		centerMap(map);
		
	};

	//First create a new marker and push it to the marker array
	//Second create a map of loc:{lat: , lng:} and Index position to make it easier in a future function to update the marker
	function addMarker(location){
		var marker = new google.maps.Marker({
			map: map,
			title: location.name(),
			position: location.loc(),
			animation: google.maps.Animation.DROP
		});
		markers.push(marker)
		//I don't want to have to iterate over the marker array multiple times in the updateMapMarkers call as this would be inefficient. Creating a map to store the lat/lng and index location combination
		markerMap.set(location.loc(), markers.indexOf(marker));
		marker.addListener('click', function(){
			showInfo(marker, infoWindow);
		});

	};
	
	function showInfo(marker, infowindow){
		if (infowindow.marker != marker){
			infowindow.marker = marker;
			infowindow.setContent('<div>'+marker.title+'</div>');
			infowindow.open(map, marker);
			infowindow.addListener('closeclick', function(){
				infowindow.marker = null;
			});
		}
	}
	
	//This checks the  locations array to see if it is enabled and if it exists on the map. If it is enabled and not on the map it will be added to the map. If it isn't enabled and on the map it removes it.
	function updateMapMarkers(){
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

	/* Helper function to find geo locations as needed */
	function getGeoCodeLoc(){
		var geocoder = new google.maps.Geocoder();
		for (var i = 0; i < locations().length; i++){
			if (locations()[i].loc == ""){
				geocoder.geocode({'address':locations()[i].name}, function(results, status){
					if (status === 'OK'){
						console.log(results[0].formatted_address+",loc: {lat: "+results[0].geometry.location.lat()+", lng: "+results[0].geometry.location.lng()+"}");
						addMarker(results[0].geometry.location);
					}
				});
			}	
		}
	};
	
	//centers the map
	function centerMap(){
		var activeMarkerCount = 0;
		var bounds = new google.maps.LatLngBounds();
		for (var i = 0; i < markers.length; i++){
			if (markers[i].map === map){
				bounds.extend(markers[i].position);
				activeMarkerCount +=1;
			}
			markers[i].setAnimation(google.maps.Animation.DROP);
		};
		map.fitBounds(bounds);
		if (activeMarkerCount < markers.length){
			map.setZoom(5);
		}
	};
	self.showWindow = function (data){
		showInfo(markers[markerMap.get(data.loc())], infoWindow);
	}
	
	initMap();
}

//initial app call to create the KO bindings and load the map.
function loadApp(){
	ko.applyBindings(new viewModel());
}
