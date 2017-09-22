'use strict';

angular.module('app.network', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/network', {
            templateUrl: 'views/network/network.html',
            controller: 'NetworkCtrl'
        });
    }])

    .controller('NetworkCtrl', function($scope, $http, $routeParams) {
        $scope.data = [];
        $scope.nodes = [];
        $scope.edges = [];
        var nodes, edges, container;
        var options = {
            layout: {
                improvedLayout: false
            },
            interaction: {
                hover: true
            },
            physics: {
                stabilization: false,
                //enabled: false
            }
        };


        $scope.showMap = function() {
            var nodes = $scope.nodes;
            var edges = $scope.edges;

            var container = document.getElementById('mynetwork');
            var data = {
                nodes: nodes,
                edges: edges
            };
            var network = new vis.Network(container, data, options);
            network.on("click", function(params) {
                params.event = "[original event]";
                //$scope.selectedNode = JSON.stringify(params, null, 4);
                $scope.selectedNode = params;
                console.log($scope.selectedNode);
                console.log($scope.selectedNode.nodes);
                var options = {
                    // position: {x:positionx,y:positiony}, // this is not relevant when focusing on nodes
                    scale: 1,
                    offset: {
                        x: 0,
                        y: 0
                    },
                    animation: {
                        duration: 500,
                        easingFunction: "easeInOutQuad"
                    }
                };
                network.focus($scope.selectedNode.nodes[0], options);
            });
        };

        $http.get(urlapi + 'admin/network')
            .then(function(data, status, headers, config) {
                console.log('data success');
                console.log(data);

                $scope.nodes = data.data.nodes;
                $scope.edges = data.data.edges;
                $scope.showMap();
            }, function(data, status, headers, config) {
                console.log('data error');
            });

    });
