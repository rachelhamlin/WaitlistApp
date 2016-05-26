console.log('Party controller is up');

angular.module('partiesController', ['PartiesAPI'])
       .controller('partiesController', ['$scope', '$http', 'partiesAPI',
       function($scope, $http, partiesAPI) {

      $scope.parties = [];

       $scope.saveParty = function(party) {
         console.log(party);
         var newParty = {
           party: {
             name: party.name,
             size: party.size,
             phoneNumber: party.phone
           }
         }

         partiesAPI.save(newParty).then(function(response){
           console.log(response);
           $scope.parties.push(response.data);
         });
       }

         partiesAPI.getAll().then(function(response){
           $scope.parties = response.data.parties;
         })

       $scope.remove = function(party){
         console.log(party);
         partiesAPI.remove(party._id).then(function(){
           partiesAPI.getAll().then(function(response){
             $scope.parties = response.data.parties;
           })
         })
       }

 }])
