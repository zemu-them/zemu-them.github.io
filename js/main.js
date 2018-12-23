$(function() {
  $.scrollify({
    section:".panel",
    updateHash: true,
    scrollbars:false
  });
});

if(window.innerWidth < window.innerHeight){
  $(function() {
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
  });
}

function OnLinkClick(strLink) {
  $.scrollify.move("#"+strLink);
  return false;
}
