// ----------Куча комментариев----------------------------------------------
//
// ==UserScript==
// @name Fix nezermoar "8"
// @namespace absolvo.ru/
// @version 0.01
// @source absolvo.ru/
// @description Fix nezermoar "8"
// @include http://joyreactor.cc
// @include http://joyreactor.cc/*
// @include http://reactor.cc
// @include http://reactor.cc/*
// @include http://*.reactor.cc
// @include http://*.reactor.cc/*
// ==/UserScript==

(function() {
  function updatePosts() {
    $("div.article").each(function() {
      var author = $(this).find(".uhead_nick a,.reply-link a").eq(0).text();
      if (author === "nezermoar") {
        var text = $(this).find(".post_content").eq(0);
        text.html(text.html().replace(/8/gi, "в"));
      }
    });
  }
  function updateComments() {
    console.log("Update");
    $(".comment_show").click(function() {
      setTimeout(updateComments, 500);
    });
    $(".comment").each(function() {
      var author = $(this).find(".reply-link a").eq(0).text();
      if (author === "nezermoar") {
        var text = $(this).find(".txt>div, .txt>span").eq(0);
        if(text[0].className === "comments_bottom") {
          return;
        }
        text.html(text.html().replace(/8/gi, "в"));
      }
    });
  }
  updatePosts();
  updateComments();
  
  $(".toggleComments").click(function() {
    setTimeout(updateComments, 2000);
  });
})();
