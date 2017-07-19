/** 
 * @author:GongHaibo/龚海波  
 * @email:yanyuzixuan@sina.cn
 * @time:2015-06
 **/





$(document).ready(function() {

	$("#owl-demo").owlCarousel({

		singleItem: true,
		/*paginationNumbers : true,*/
    autoPlay : 3000,
		navigation: true,
		pagination : false,
		stopOnHover: false,
		transitionStyle: "fade", 
    navigationText : [
      	"<i class='pre'><img src='img/pre-n.png'></i>",
		     "<i class='nex'><img src='img/pre-r.png'></i>"
      ],
      
	});
  
  	$("#owl-demo2").owlCarousel({

		singleItem: true,
		/*paginationNumbers : true,*/
    autoPlay : 3000,
		navigation: true,
		pagination : false,
		stopOnHover: false,
		transitionStyle: "fade", 
    navigationText : [
      	"<i class='pree'><img src='img/perr.png'></i>",
		     "<i class='nexx'><img src='img/netr.png'></i>"
      ],
      
	});
  

    $(".right-banner img").mouseover(function(){
      $(".owl-theme .owl-controls .owl-buttons .owl-next i.nex,.owl-theme .owl-controls .owl-buttons .owl-prev i.pre").css("display","block");
 
      });
      
      $(".right-banner img").mouseout(function(){
      $(".owl-theme .owl-controls .owl-buttons .owl-next i.nex,.owl-theme .owl-controls .owl-buttons .owl-prev i.pre").css("display","none");
 
      });
      
      
      
      
          $(".right-cont img").mouseover(function(){
      $(".owl-theme .owl-controls .owl-buttons .owl-next i.nexx,.owl-theme .owl-controls .owl-buttons .owl-prev i.pree").css("display","block");
 
      });
      
      $(".right-cont img").mouseout(function(){
      $(".owl-theme .owl-controls .owl-buttons .owl-next i.nexx,.owl-theme .owl-controls .owl-buttons .owl-prev i.pree").css("display","none");
 
      });
      
      
      
      
      $(".venbox").venobox({
        numeratio:true,
        border:"20px"
        });
       //鼠标放进渐变状态
      $(".centent_box #0").mouseover(function(){
         var img = $(".atr");
           img.css("opacity","0.4");
           img.css("ttransition","opacity 1.5s ease 0s");
        });
      $(".centent_box #0").mouseout(function(){
         var img = $(".atr");
           img.css("opacity","1");
           img.css("ttransition","opacity 1.5s ease 0s");
        });
        
        $(".centent_box #1").mouseover(function(){
         var img = $(".att");
           img.css("opacity","0.4");
           img.css("ttransition","opacity 1.5s ease 0s");
        });
      $(".centent_box #1").mouseout(function(){
         var img = $(".att");
           img.css("opacity","1");
           img.css("ttransition","opacity 1.5s ease 0s");
        });
        
          $(".centent_box #2").mouseover(function(){
         var img = $(".aty");
           img.css("opacity","0.4");
           img.css("ttransition","opacity 1.5s ease 0s");
        });
      $(".centent_box #2").mouseout(function(){
         var img = $(".aty");
           img.css("opacity","1");
           img.css("ttransition","opacity 1.5s ease 0s");
        });
          $(".centent_box #3").mouseover(function(){
         var img = $(".atu");
           img.css("opacity","0.4");
           img.css("ttransition","opacity 1.5s ease 0s");
        });
      $(".centent_box #3").mouseout(function(){
         var img = $(".atu");
           img.css("opacity","1");
           img.css("ttransition","opacity 1.5s ease 0s");
        });
          $(".centent_box #4").mouseover(function(){
         var img = $(".ati");
           img.css("opacity","0.4");
           img.css("ttransition","opacity 1.5s ease 0s");
        });
      $(".centent_box #4").mouseout(function(){
         var img = $(".ati");
           img.css("opacity","1");
           img.css("ttransition","opacity 1.5s ease 0s");
        });
          $(".centent_box #5").mouseover(function(){
         var img = $(".ato");
           img.css("opacity","0.4");
           img.css("ttransition","opacity 1.5s ease 0s");
        });
      $(".centent_box #5").mouseout(function(){
         var img = $(".ato");
           img.css("opacity","1");
           img.css("ttransition","opacity 1.5s ease 0s");
        });
          $(".centent_box #6").mouseover(function(){
         var img = $(".atp");
           img.css("opacity","0.4");
           img.css("ttransition","opacity 1.5s ease 0s");
        });
      $(".centent_box #6").mouseout(function(){
         var img = $(".atp");
           img.css("opacity","1");
           img.css("ttransition","opacity 1.5s ease 0s");
        });
          $(".centent_box #7").mouseover(function(){
         var img = $(".ata");
           img.css("opacity","0.4");
           img.css("ttransition","opacity 1.5s ease 0s");
        });
      $(".centent_box #7").mouseout(function(){
         var img = $(".ata");
           img.css("opacity","1");
           img.css("ttransition","opacity 1.5s ease 0s");
        });
        //分享按钮
        

});