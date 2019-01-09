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
        $(".pagination a").css({
          "padding" : "4px",
          "min-width" : "100px",
          "height" : "20px",
          "margin-bottom" : "5px",
        });
      }else{
        $(".pagination .active").removeClass("active");
        $(".pagination a").css({
          "opacity" : "0",
          "padding" : "0px",
          "min-width" : "0px",
          "height" : "0px",
          "margin-bottom" : "0px",
          "transition" : "opacity 0.5s ease 0.5s, padding 0.5s ease 1s, min-width 0.5s ease 1s, height 0.5s ease 1s, margin-bottom 0.5s ease 1s"
        });
            }
    },
    after:function(i,panels) {
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
      if(i != 0){
        $(".pagination a").css({
          "opacity": "1",
          "transition" : "opacity 0.5s"
        });
      }
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

function OnLinkClick(strLink) {
  $.scrollify.move("#"+strLink);
  return false;
}
