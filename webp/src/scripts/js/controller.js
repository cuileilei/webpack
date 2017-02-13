function indexCtrl(){
    new Swiper(".swiper-container")
}
function homeCtrl($state){
    $state.go("home.first.firs")
}
function firsCtrl($http,$scope){
    $http.get("../livelist.json")
        .then(function(data){
            $scope.data = data.data.data
        });
    var sum;
    var mySwiper = new Swiper(".swiper-container",{
        onSlideChangeStart:function(swiper){
            sum=swiper.activeIndex;
           // console.log($('li').length)
            $(".list").children().eq(sum).addClass("act").siblings().removeClass("act");
            // console.log(sum)
        }
    });
    $("li").click(function(){
        var ind = $(this).index();
        $(this).addClass("act").siblings().removeClass();
        mySwiper.slideTo(ind, 1000, false);
    });
}
angular.module("myApp")
    .controller("indexCtrl",indexCtrl)
    .controller("homeCtrl",homeCtrl)
    .controller("firsCtrl",firsCtrl)