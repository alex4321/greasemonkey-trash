// ----------Куча комментариев----------------------------------------------
//
// ==UserScript==
// @name Hello World
// @namespace absolvo.ru/
// @version 0.01
// @source absolvo.ru/
// @description Fix commemts
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
      var author = $(this).find(".uhead_nick a").text();
      if (author === "nezermoar") {
        var text = $(this).find(".post_content").eq(0);
        text.html(text.html().replace(/8/gi, "в"));
      }
    });
  }
  function updateComments() {
    console.log("UPDATE");
    $(".comment").each(function() {
      var author = $(this).find(".comment_username").text();
      if (author === "nezermoar") {
        var text = $(this).find(".txt").eq(0);
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
