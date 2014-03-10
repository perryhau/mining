'use strict';
admin
  .factory('Connection', ['$resource',
    function($resource){
      var Connection = $resource('/api/connection/:slug', {'slug':'@slug'},{
        update:{method:'PUT', params: {'slug':'@slug'}}
      });
      return Connection;
    }])
  .factory('Element', ['$resource',
    function($resource){
      return $resource('/api/element/:slug', {'slug':'@slug'}, {
        update:{method:'PUT', params: {'slug':'@slug'}}
      });
    }])
  .factory('Cube', ['$resource',
    function($resource){
      return $resource('/api/cube/:slug', {'slug':'@slug'}, {
        update:{method:'PUT', params: {'slug':'@slug'}},
        testquery: {method:'POST', url:"/api/cubequery.json", params: {'sql': '@sql', 'connection': '@connection'}}
      });
    }])
  .factory('Dashboard', ['$resource',
    function($resource){
      return $resource('/api/dashboard/:slug', {'slug':''}, {});
    }])
;