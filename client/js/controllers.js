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

        function initMap() {
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: -34.397,
                    lng: 150.644
                },
                zoom: 6
            });
            var infoWindow = new google.maps.InfoWindow({
                map: map
            });

            // Try HTML5 geolocation.
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    infoWindow.setPosition(pos);
                    infoWindow.setContent('Location found.');
                    map.setCenter(pos);
                }, function () {
                    handleLocationError(true, infoWindow, map.getCenter());
                });
            } else {
                // Browser doesn't support Geolocation
                handleLocationError(false, infoWindow, map.getCenter());
            }
        }

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                'Error: The Geolocation service failed.' :
                'Error: Your browser doesn\'t support geolocation.');
        }

        initMap();

    })
    .controller('HomeCtrl', function ($scope, $state) {

    });

