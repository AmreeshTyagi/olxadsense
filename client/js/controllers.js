angular.module('olxadsense.controllers', [])

.controller('AppCtrl', function ($scope, $state) {
        $scope.model = {
            cities: [
                {
                    Id: 1,
                    Name: 'Delhi'
                },
                {
                    Id: 2,
                    Name: 'Banglore'
                },
                {
                    Id: 3,
                    Name: 'Noida'
                },
                {
                    Id: 4,
                    Name: 'Mumbai'
                }
    ],
            categories: [
                {
                    Id: 1,
                    Name: 'Mobile',
                    Details: 'Mobile & Electronics',
                    ImageUrl: 'img/default.png'
                },
                {
                    Id: 1,
                    Name: 'Car',
                    Details: 'Cars & Vehicle',
                    ImageUrl: 'img/default.png'
                },
                {
                    Id: 1,
                    Name: 'Animals',
                    Details: 'Pets & Animals',
                    ImageUrl: 'img/default.png'
                },
                {
                    Id: 1,
                    Name: 'Fashion & Beauty',
                    Details: 'Fashion, beauty',
                    ImageUrl: 'img/default.png'
                }
            ],

            ads: [{
                    Id: 1,
                    CategoryId: 1,
                    AdIconUrl: '',
                    AdThumbUrl: '',
                    AdDetails: ''
                },
                {
                    Id: 2,
                    CategoryId: 1,
                    AdIconUrl: '',
                    AdThumbUrl: '',
                    AdDetails: ''
                },
                {
                    Id: 3,
                    CategoryId: 2,
                    AdIconUrl: '',
                    AdThumbUrl: '',
                    AdDetails: ''
                },
                {
                    Id: 4,
                    CategoryId: 1,
                    AdIconUrl: '',
                    AdThumbUrl: '',
                    AdDetails: ''
                }]
        };

        $scope.radius = 50;



    })
    .controller('HomeCtrl', function ($scope, $state) {

    })

.controller('MapCtrl', function ($scope, $state) {
  
  var cities = [
    {
        city : 'Noida',
        desc : 'Noida city!',
        lat : 28.5355161,
        long : 77.3910265
    },
    {
        city : 'Delhi',
        desc : 'Capital of India',
        lat : 28.7040592,
        long : 77.1024902
    },
    {
        city : 'Mumbai',
        desc : 'Mumbai..!',
        lat : 19.0759837,
        long : 72.8776559
    },
      {
        city : 'Bangalore',
        desc : 'Bangalore..!',
        lat : 12.9715987,
        long :77.5945627
    }
];
    
  var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(40.0000, -98.0000),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);
        
    }  
    
    for (i = 0; i < cities.length; i++){
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }

});