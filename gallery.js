$(document).ready(function () {
  var itemInfo;
  $.ajax({
    datatype: "json",
    type: "get",
    url: "itemInfo.json",
    success: function (data) {
      itemInfo = data;
    },
    error: function (data) {
      console.error(data.statusText);
    },
  });
  $(".gallery_item").click(function () {
    var i = $(this).index();
    $(".detail_title").html(itemInfo[i].title);
    $(".detail_sub").html(itemInfo[i].desc);
    $(".gallery_detail")
      .css("display", "block")
      .stop()
      .animate({ opacity: 1 }, 300);
    var src = $(this).find("img").attr("src");
    $(".gallery_detail img").attr("src", src);
  });
  $(".gallery_detail>a").click(function (e) {
    e.preventDefault();
    $(".gallery_detail")
      .stop()
      .animate({ opacity: 0 }, 300, function () {
        $(".gallery_detail").css("display", "none");
      });
  });

  // ===============================
});
