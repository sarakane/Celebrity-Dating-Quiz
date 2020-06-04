$(document).ready(function() {
  $("form#quiz").submit(function(event){
    event.preventDefault();
    
    const color = $("#color").val();
    const iceCream = $("#icecream").val();
    const animal = $("input:radio[name=animal]:checked").val();

    if(color === "red") {
      if((iceCream === "chocolate" || iceCream === "vanilla") && animal === "dog") {
      $("#celebrity").text("Taylor Swift");
      }
      else if((iceCream === "chocolate" || iceCream === "vanilla") && animal === "elephant") {
        $("#celebrity").text("Madonna");
      }
      else if(iceCream === "rockyroad") {
        $("#celebrity").text("Beyoncé");
      }
      else {
        $("#celebrity").text("Jennifer Aniston");
        
      }
      $("#results").show();
    }
    
    else if (color === "yellow") {
      if(iceCream === "chocolate" || iceCream === "vanilla") {
        $("#celebrity").text("Oprah Winfrey");
      }
      else if(iceCream === "cookiesandcream") {
        $("#celebrity").text("Robert Downey Jr");
      }
      else {
        $("#celebrity").text("Britney Spears");
        
      }
      $("#results").show();
    }
    else if (color === "green") {
      if(iceCream === "chocolate" || iceCream === "cookiesandcream"){
        $("#celebrity").text("George Clooney");
      }
      else {
        $("#celebrity").text("Tom Hanks");
      }
      $("#results").show();
    }
    else {
      $("#celebrity").text("Jennifer Aniston");
      $("#results").show();
    }
  });
});