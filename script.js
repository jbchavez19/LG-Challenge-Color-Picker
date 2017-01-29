// Set background color of page to chosen color

function setColor(color) 
{
  var body = document.querySelector("body");
  body.className = color;
}

// Set color of <h1> on page

function setTextColor(color)
{
  var text = document.querySelector("h1");
  text.style.color = color;
}

// Get all h2 elements and add event listeners. When clicked, use 
// the color selected in section 5 to change the text color.

var listOfH2 = document.querySelectorAll("h2");
for(var i = 0; i < listOfH2.length; i++) 
{
   listOfH2[i].addEventListener("click", function() {
     var color = document.querySelector("#choose-color").value;
     this.style.color = color;
   });
}

// Get all section elements and add listeners. When clicked it will be selected.
// Only one can be selected, use resetSelected function to remove selections.

var listOfSections = document.querySelectorAll("section");
var selected = null;

for(var i = 0; i < listOfSections.length; i++)
{
   listOfSections[i].addEventListener("click", function() {
     if(this.className === "selected")
     {
        this.className = "";
        selected = null;
     }
     else 
     {
        if(selected != null)
           selected.className = "";
        this.className = "selected";
        selected = this;
     }
   });
}

// When the color is changed, set the background
// color of the selected section

var colorInput = document.querySelector("#background-color");

colorInput.addEventListener("change", function() {
   if(selected != null)
   {
      selected.style.background = colorInput.value;
   }
});
