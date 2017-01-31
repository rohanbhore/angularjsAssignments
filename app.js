(function ()
{
'use strict';
  angular.module('LunchCheck',[])

    .controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject=['$scope'];

    function LunchCheckController($scope)
    {
        $scope.gMessage=function(inputvalue)
      {
        $scope.validator=false;

        if (inputvalue!=undefined && inputvalue!='')
          {
          var i =inputvalue.split(',');
          $scope.message=i.length;

            if(i.length<=3 && i.length>0)
            {
              $scope.message ='Enjoy';
            }
            else
            {
             $scope.message = 'Too much!';
            }

          }
          else
            {
              $scope.message='Empty';
              $scope.validator=true;
            }


      if($scope.message ==='Empty')
      {
        setTimeout(function()
                {
                  $scope.alert = 'Please enter data first';
                  $scope.$digest();
                },100);
      }
             else
               {
                 $scope.alert='';
               }
             }
          }


})();
