//
// $(document).ready(function() {
//   $("button#green").click(function() {
//     $("body").removeClass();
//     $("body").addClass("green-background");
//     $("p").css("color", "blue");
//   });
//
//   $("button#yellow").click(function() {
//     $("body").removeClass();
//     $("body").addClass("yellow-background");
//   });
//
//   $("button#red").click(function() {
//     $("body").removeClass();
//     $("body").addClass("red-background");
//   });
// });
//
// $(document).ready(function() {
//   alert("help me");
// });



// $(document).ready(function() {
//   $("panel-heading").css("background-color", "pink");
//   $("#termsHeading").css("color", "blue" );
//     $("#termsHeading").css("font-weight", "bold" );
//       // $("#termsHeading").css("align-self", "center" );
// });
//
// $(document).ready(function() {
//    alert("help me");});
//
// $(document).ready(function() {
//   $("#javascript").click(function() {
//     $("#panelHeading").removeClass();
//     $("#panelHeading").addClass("boldtext");
//     $("p").css("color", "blue");
//   });

$(function(){
  $(document).ready(function() {
    $("#javascript").click(function() {
      $(".panel-heading").text("JavaScript");
      $("#panelText").css("font-size", "24px");
      $("#panelText").text("JavaScript is a great language if you can ever manage to figure it out");
    });
  });
});

$(function(){
  $(document).ready(function() {
    $("#operators").click(function() {
      $(".panel-heading").text("Operators");
      $("#panelText").css("font-size", "24px");
      $("#panelText").text("Operators are great! Add, subtract, multiply, divide. You can even make long distance calls.");
    });
  });
});

$(function(){
  $(document).ready(function() {
    $("#variables").click(function() {
      $(".panel-heading").text("Variables");
      $("#panelText").css("font-size", "24px");
      $("#panelText").text("Variables are undefined values that are plugged into functions to compute results.");
    });
  });
});
$(function(){
  $(document).ready(function() {
    $("#variable").click(function() {
      $(".panel-heading").text("Variable Name Conventions");
      $("#panelText").css("font-size", "24px");
      $("#panelText").text("Variable names should start with a letter, but not a number. Camelcase is used.");
    });
  });
});
$(function(){
  $(document).ready(function() {
    $("#functions").click(function() {
      $(".panel-heading").text("Functions");
      $("#panelText").css("font-size", "24px");
      $("#panelText").text("Functions hava a set of parameters and a body, which contains the statements which are to executed when the function is called.");
    });
  });
});

$(function(){
  $(document).ready(function() {
    $("#methods").click(function() {
      $(".panel-heading").text("Methods");
      $("#panelText").css("font-size", "24px");
      $("#panelText").text("Methods are actions that can be performed on objects.");
    });
  });
});
$(function(){
  $(document).ready(function() {
    $("#arguments").click(function() {
      $(".panel-heading").text("Arguments");
      $("#panelText").css("font-size", "24px");
      $("#panelText").text("Argument object is an array like object corresponding to the arguments passed to a function");
    });
  });
});
$(function(){
  $(document).ready(function() {
    $("#parameters").click(function() {
      $(".panel-heading").text("Parameters");
      $("#panelText").css("font-size", "24px");
      $("#panelText").text("Parameters in a function call are the functions arguments. Function parameters are the names listed in the function definition.");
    });
  });
});

$(function(){
  $(document).ready(function() {
    $("#return").click(function() {
      $(".panel-heading").text("Return");
      $("#panelText").css("font-size", "24px");
      $("#panelText").text("Return statement ends function execution and specifies a value to be returned to the function caller.");
    });
  });
});

$(function(){
  $(document).ready(function() {
    $("#chaining").click(function() {
      $(".panel-heading").text("Chaining Methods");
      $("#panelText").css("font-size", "24px");
      $("#panelText").text("Method Chaining is a technique used to simplify code that involves calling multiple functions on the same object consecutively.");
    });
  });
});

$(function(){
  $(document).ready(function() {
    $("#strings").click(function() {
      $(".panel-heading").text("Strings");
      $("#panelText").css("font-size", "24px");
      $("#panelText").text("Any text within a single or double quote.");
    });
  });
});

$(function(){
  $(document).ready(function() {
    $("#booleans").click(function() {
      $(".panel-heading").text("Booleans");
      $("#panelText").css("font-size", "24px");
      $("#panelText").text("Simple true false statements.");
    });
  });
});
$(function(){
  $(document).ready(function() {
    $("#undefined").click(function() {
      $(".panel-heading").text("Undefined");
      $("#panelText").css("font-size", "24px");
      $("#panelText").text("Undefined is a property of the global object and a variable that has not been assigned a value.");
    });
  });
});
$(function(){
  $(document).ready(function() {
    $("#nan").click(function() {
      $(".panel-heading").text("NaN");
      $("#panelText").css("font-size", "24px");
      $("#panelText").text("0/0: global NaN property is a value that is not a number. ");
    });
  });
});

$(function(){
  $(document).ready(function() {
    $("#escape").click(function() {
      $(".panel-heading").text("Escape");
      $("#panelText").css("font-size", "24px");
      $("#panelText").text("The escape() function makes a string portable so it can be transported across any network to a cpomputer that supports ASCII characters.");
    });
  });
});

$(function(){
  $(document).ready(function() {
    $("#alert").click(function() {
      $(".panel-heading").text("Alert");
      $("#panelText").css("font-size", "24px");
      $("#panelText").text("Alert displays a modal.");
    });
  });
});

$(function(){
  $(document).ready(function() {
    $("#comments").click(function() {
      $(".panel-heading").text("Comments");
      $("#panelText").css("font-size", "24px");
      $("#panelText").text("Non-executing in-line code for descriptive purposes");
    });
  });
});

$(function(){
  $(document).ready(function() {
    $("#jquery").click(function() {
      $(".panel-heading").text("jQuery");
      $("#panelText").css("font-size", "24px");
      $("#panelText").text("A javascript library");
    });
  });
});

$(function(){
  $(document).ready(function() {
    $("#attributes").click(function() {
      $(".panel-heading").text("Attributes");
      $("#panelText").css("font-size", "24px");
      $("#panelText").text("DOM attributes define characteristics of objects.");
    });
  });
});
