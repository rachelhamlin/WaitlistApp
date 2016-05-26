angular.module('PartiesAPI', [])
       .factory('partiesAPI', ['$http', function( $http ) {
         return {

         getAll: function() {
           return $http.get('/api/parties');
         },

         save: function(newParty) {
           return $http.post('/api/parties', newParty);
         },

         remove: function(id) {
           return $http.delete('/api/parties/' + id);
         }
       }
 }])
