
var HomePageController = angular.module('HomePageController', []);


HomePageController.controller('HomeController', ['$scope', '$routeParams','$http','$rootScope', '$location',
		function($scope, $routeParams, $http,$rootScope,$location) {
	$scope.goToHomePage=function(){
			$location.path('/home');
	}
}]);


HomePageController.controller('insideHomeController', ['$scope', '$routeParams','$http','$rootScope', '$location',
		function($scope, $routeParams, $http,$rootScope,$location) {

			var index;
		$scope.initializePage=function(){
				var hrScroll=$(window).width();
				var hrScrollAll=$(".contentDivParent").width();
				hrScrollAll=hrScrollAll-hrScroll+200;
				$(".overlay").hide();
				for (var i=0; i<5; i++) {
					$(".contentDiv"+i).css({ "right": hrScrollAll});
					hrScrollAll=hrScrollAll-hrScroll;
			  }

				$( ".gallaryPhotos" ).bind( "click", function() {
				  index=$(this).index()+1;
					$(".overlay").show();
					$(".gallaryContainer :nth-child("+index+")").addClass("gallaryPhotosClicked");
			 });

			 $(".overlay").bind( "click", function() {
				 $(".overlay").hide();
				 $(".gallaryContainer :nth-child("+index+")").removeClass("gallaryPhotosClicked");
			 });


		}
		$scope.makeActive = function(event){
		  	//	console.log(event.target.id);
				$(".menuItem").removeClass("activemenuItem");
				$("#"+event.target.id).addClass("activemenuItem");
				var factor=parseInt(event.target.id.slice(-1));
				var vscroll= ($(window).height()/5)*factor;
				var hscroll=($(".contentDivParent").width()/5)*factor;
				//console.log(scroll);
				$("body").animate({scrollTop: vscroll}, 1000);
				$('.contentDivParent').animate({marginLeft : -hscroll}, 1000);
		}
		$scope.popImageUp = function(){

				    alert( $('#mylist img').index(this) );

		}

}]);
