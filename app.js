(function(){
	'use strict';
	angular.module("LunchCheck", [])
	.controller('LunchCheckController', MsgController);
	MsgController.$inject = ['$scope'];
	function MsgController($scope){
		$scope.data="";
		$scope.display= function(data){
			var result= checker(data);
			$scope.result=result;
		}

		function checker(data){
			if (data){
				var comma= ',';
				var temp=data.split(comma);
				if(temp.length<=3)
					return "Enjoy!";
				else if(temp.length>3)
					return"Too much!";
				else if(tem.length==1)
					return"empty string";
			}
			else
				return "Please enter data first";


		}


	} ;
})();