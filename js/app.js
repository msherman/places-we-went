function initMap(){
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 40.7413549, lng: -73.9980224},
		zoom: 13,
		mapTypeControl: false
	});
}