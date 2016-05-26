console.log('Party controller is up');

angular.module('partiesController', ['PartiesAPI'])
       .controller('partiesController', ['$scope', '$http', 'partiesAPI',
       function($scope, $http, partiesAPI) {

      $scope.parties = [];

       $scope.saveParty = function(data) {
         console.log(data);
         var newParty = {
           party: {
             name: party.name,
             size: party.size,
             phoneNumber: party.phonenumber
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
         partiesAPI.remove(party._id).then(function(response){
           partiesAPI.getAll().then(function(response){
             $scope.parties = response.data.parties;
           })
         })
       }


 }])
