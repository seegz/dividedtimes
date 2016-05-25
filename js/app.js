$(document).ready(function(){
    $(document).on("click", "li.international", function (event) {
        event.preventDefault();
        if($(this).hasClass("active")) {
            $(this).removeClass("active");
            $("#slide-down").slideUp();
        } else {

        $("#international-drop").show();
        $("#politics-drop").hide();
        $("#technology-drop").hide();
        $("#business-drop").hide();
        $("#blogs-drop").hide();
        $("#culture-drop").hide();

        $("#slide-down").slideDown();
        $(this).addClass("active");
        }
    });

    $(document).on("click", "li.politics", function (event) {
        event.preventDefault();
        if($(this)).hasClass("active")) {
          $(this).removeClass("active");
          $("#slide-down").slideUp();
        } else {
        $("#international-drop").hide();
        $("#politics-drop").show();
        $("#technology-drop").hide();
        $("#business-drop").hide();
        $("#blogs-drop").hide();
        $("#culture-drop").hide();
        $("#slide-down").slideDown();
        $(this).addClass("active");
      }
    });

    $(document).on("click", "li.technology", function () {
        $("#international-drop").hide();
        $("#politics-drop").hide();
        $("#technology-drop").show();
        $("#business-drop").hide();
        $("#blogs-drop").hide();
        $("#culture-drop").hide();
        $("#slide-down").slideDown();
        $(this).addClass("active");
    });

    $(document).on("click", "li.business", function () {
        $("#international-drop").hide();
        $("#politics-drop").hide();
        $("#technology-drop").hide();
        $("#business-drop").show();
        $("#blogs-drop").hide();
        $("#culture-drop").hide();
        $("#slide-down").slideDown();
        $(this).addClass("active");
    });

    $(document).on("click", "li.blogs", function () {
        $("#international-drop").hide();
        $("#politics-drop").hide();
        $("#technology-drop").hide();
        $("#business-drop").hide();
        $("#blogs-drop").show();
        $("#culture-drop").hide();
        $("#slide-down").slideDown();
        $(this).addClass("active");
    });

    $(document).on("click", "li.culture", function () {
        $("#international-drop").hide();
        $("#politics-drop").hide();
        $("#technology-drop").hide();
        $("#business-drop").hide();
        $("#blogs-drop").hide();
        $("#culture-drop").show();
        $("#slide-down").slideDown();
        $(this).addClass("active");
    });

});

// $( "#clickme" ).click(function() {
//   $( "#book" ).show( "slow", function() {
//     // Animation complete.
//   });
// });
