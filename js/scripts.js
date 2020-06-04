$(document).ready(function() {
  $("form#quiz").submit(function(event){
    event.preventDefault();
    
    const color = $("#color").val();
    if(color === "red") {
      $("#celebrity").text("Taylor Swift");
      $("#results").show();
    }
    else if (color === "yellow") {
      $("#celebrity").text("Beyoncé");
      $("#results").show();
    }
    else if (color === "green") {
      $("#celebrity").text("Oprah Winfrey");
      $("#results").show();
    }
    else {
      $("#celebrity").text("Jennifer Aniston");
      $("#results").show();
    }
  });
});