$(document).ready(function(){
  $(".hide").click(function(){
    $("#heading").hide("slow");
  });
  $(".show").click(function(){
    $("#heading").show("slow");
  });
});

$(document).ready(function(){
    $("#fade-btn").click(function(){
        $("#fade-div").fadeOut("slow");
    });
});


$(document).ready(function(){
    $("#slide").mouseleave(function(){
        $("#slide-div").slideDown(5000);
    });
    $(".stop").click(function(){
        $("#slide-div").stop();
    });
});


$(document).ready(function(){
    $("#ani-btn").dblclick(function(){
        $("img").animate({
            left: '400px',
            opacity: '0.5',
            height: '150px',
            width: '150px',
        });
    });
});

$(document).ready(function(){
    $("#hide").click(function(){
        $("#ani-div").hide("slow",
        function(){
            alert("The animation div is now hidden");
        });
    });
});

$(document).ready(function(){
    $(".chaining").click(function(){
        $(".chaining-div").slideUp(2000).slideDown(2000);
    });
});


$(document).ready(function(){
    $("#text-btn").click(function(){
        alert("Text: " +
    $("#example").text());
    });
    $("#html-btn").click(function(){
        alert("HTML: " +
    $("#example").html());
    });
});

$(document).ready(function(){
    $("#btn1").click(function(){
        $("#test1").text("Hello Everybody! This is Farmer Sangay");
    });
    $("#btn2").click(function(){
        $("#test2").html("<b>Hello Everybody! This is Farmer Sangay</b>");
    });
    $("#btn3").click(function(){
        $("#test3").val("Loday");
    });
});


$(document).ready(function(){
    $("#before-btn").mouseenter(function(){
        $("#add-p").before("<b>Loday</b>");
    });
    $("#after-btn").mouseenter(function(){
        $("#add-p").after("<i>Wangchuk</i>");
    });
});

$(document).ready(function(){
    $("#remove").click(function(){
        $("button").remove("#before-btn, #after-btn");
    });
});

$(document).ready(function(){
    $("#class-btn").click(function(){
        $(".h2, h3, .class-p").toggleClass("black");
    });
});

$(document).ready(function(){
    $("#dim-btn").click(function(){
        var txt = "";
        txt += "Width of div: " +
     $(".dim-div").width() + "</br>";
       txt += "Height of div: " +
    $(".dim-div").height();
      $(".dim-div").html(txt);
    });
});