$(window).load(function() {
// Every time the window is scrolled ...
  $(window).scroll(function() {
    var article = $(".each-article"), articleLen = article.length;
    // Check the location of each desired element
    article.each(function(i) {
      var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      // If the object is completely visible in the window, fade it it
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({"opacity":"1", "padding-top":0}, 300);
      }
    });
  });
});


