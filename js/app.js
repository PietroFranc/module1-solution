//This is the controller
contr=angular.module('myApp', [])
contr.controller('miocontroller', function($scope) {
  //This is the model used from controller
  //model include all variables
  //Controller respond from user stymolous
  //in thi case the button Check If Too Much
  //removeEmpty purge text received from form trimming from
  //split text into array using comma delimited field
  //rejecting all emty string
  //conseguently change color of border with gree if you have
  //entered same text red if field is empty
  // text color of status is green if there are dish in number
  //less or equal to three
  //red if you have entered more than three dish
  $scope.string = '';
  $scope.array=[];
  $scope.message="Enjoy!";
  $scope.colore="green";
  $scope.colore_bordo="green";
  $scope.splitter = function(){
      $scope.array = $scope.string.split(',');
      $scope.array=$scope.removeEmpty($scope.array);
      $scope.a=$scope.array.length;
      $scope.colore_bordo="green";
      if($scope.a>3){
          $scope.message="Too much!";
          $scope.colore="red";
      }else{
          $scope.message="Enjoy!";
          $scope.colore="green";
      }
      if(($scope.string.length==0) ){
        $scope.a=0;
        $scope.colore_bordo="red";
        $scope.colore="red";
        $scope.message="Please enter data first";
      }
  }
  $scope.removeEmpty = function(nuovo_Array){
    var data_Array = [];
    angular.forEach(nuovo_Array, function(value)  {
      value=value.trim();
      if (value!= "") data_Array.push(value);
    });
    return data_Array;
  }
});
