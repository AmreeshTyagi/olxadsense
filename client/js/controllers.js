angular.module('olxadsense.controllers', [])

.controller('AppCtrl', function ($scope, $state, $rootScope) {


    })
    .controller('HomeCtrl', function ($scope, $state) {

    })

.controller('MapCtrl', function ($scope, $state, $rootScope) {

    var cities = $rootScope.cities;

    $scope.model = {
        cities: $rootScope.cities,
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
                Name: 'Mobile ad1',
                CategoryId: 1,
                AdIconUrl: '',
                AdThumbUrl: '',
                AdDetails: ''
                },
            {
                Id: 2,
                Name: 'Mobile ad2',
                CategoryId: 1,
                AdIconUrl: '',
                AdThumbUrl: '',
                AdDetails: ''
                },
            {
                Id: 3,
                Name: 'Car ad1',
                CategoryId: 2,
                AdIconUrl: '',
                AdThumbUrl: '',
                AdDetails: ''
                },
            {
                Id: 4,
                CategoryId: 1,
                Name: 'Pat ad1',
                AdIconUrl: '',
                AdThumbUrl: '',
                AdDetails: ''
                }]
    };

    $scope.radius = 50;
    $scope.selectedIndex = 0;



    var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(28.7040592, 77.1024902),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();

    var createMarker = function (info) {

        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">Your are previewing ad' + info.adname + '</div>';

        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);

    }
    $scope.openInfoWindow = function (e, selectedMarker) {
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }
    
     $scope.onCityClick=function(){
          $scope.markers=[];
     }

    $scope.onCategoryClick = function ($index, cat) {
      $scope.markers = [];
        $scope.selectedIndex = $index;
        var addata = [];
        for (var i = 0; i < $scope.model.ads.length; i++) {
            if ($scope.model.ads[i].CategoryId == cat.Id) {
                addata.push($scope.model.ads[i]);
            }
        }

        for (var i = 0; i < addata.length; i++) {
            var infodata = [];
            for (var j = 0; j < cities.length; j++) {
                if (cities[j].id == addata[i].CategoryId) {
                    cities[j].adname = addata[i].Name;
                    infodata.push(cities[j]);
                }
            }
            createMarker(cities[i]);
        }

    }

});