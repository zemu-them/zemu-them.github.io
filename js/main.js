$(function() {

  $.scrollify({
    section:".panel",
    updateHash: true,
    scrollbars:false,
    before:function(i,panels) {
      if(i != 0){
        var ref = panels[i].attr("data-section-name");
        $(".pagination .active").removeClass("active");
        $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        $(".pagination").css({
          "visibility" : "visible"
        });
      }else{
        $(".pagination .active").removeClass("active");
      }
    },
    after:function(i,panels) {
      if(i == 0){
        $(".pagination .active").removeClass("active");
        $(".pagination").css({
          "visibility" : "hidden"
        });
      }
      var pagination = "<ul class=\"pagination\">";
      var activeClass = "";
      $(".panel").each(function(i) {
        activeClass = "";
        if(i===0) {
          activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });
      pagination += "</ul>";
      $(".home").append(pagination);
      $(".pagination a").on("click",$.scrollify.move);
    },
     afterRender:function() {
       //スクロールバーの高さが一番上だった場合
       if(document.documentElement.scrollTop == 0){
         $(".pagination").css({
           "visibility" : "hidden"
         });
       }
     }
  });
});

//初期状態の画面表示
topPageLink(window.innerWidth, window.innerHeight);

$(function(){
  //画面サイズ変更時に呼ばれる
  $(window).resize(function(){
    topPageLink($(window).width(), $(window).height());
  });
});

function topPageLink(horizontal,vertical){
  if(horizontal < vertical){
    //Vertical
    $(".top_name div").css({
      "height": "100%",
      "width": "25%"
    });
    $(".top_career div").css({
      "height": "100%",
      "width": "25%"
    });
    $(".top_create div").css({
      "height": "100%",
      "width": "25%"
    });
    $(".top_link div").css({
      "height": "100%",
      "width": "25%"
    });
  }
  else {
    //Horizontal
    $(".top_name div").css({
      "height": "25%",
      "width": "100%"
    });
    $(".top_career div").css({
      "height": "25%",
      "width": "100%"
    });
    $(".top_create div").css({
      "height": "25%",
      "width": "100%"
    });
    $(".top_link div").css({
      "height": "25%",
      "width": "100%"
    });
  }
}

// pagination非表示
function hiddenPagination(){
  $(".pagination .active").removeClass("active");
  $(".pagination").css({
    "visibility" : "hidden"
  });
}

function OnLinkClick(strLink) {
  $.scrollify.move("#"+strLink);
  return false;
}
