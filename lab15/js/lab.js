// index.js -Lab 15: AJAX
// Author: Darshaya Washington
// Date: May 31, 2023

$("#activate").on("click", function() {
    $.ajax({
    url: "https://yesno.wtf/api",
    data: {},
    type: "GET",
    success: function(data) {
        var i = "<img src=\"" + data.image +"\"/>";
      $("#output").html(i);
      $("#output").append("<h1>" + data.answer + "</h1>");
      
    }
  })
})

