
$scope.items = ['Yes', 'No'];
function open() {
       var modalInstance = $modal.open({
           templateUrl: 'Path for the view for the modal',
           controller: 'Controller for the modal view',
           size: 40,
           resolve: {
               items: function () {
                   return $scope.items;
               }
           }
       });

       modalInstance.result.then(function (selectedItem) {
          //Pass
       }, function () {
           //Fail
       });

   };
