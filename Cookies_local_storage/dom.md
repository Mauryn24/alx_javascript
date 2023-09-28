<!DOCTYPE html>
<html>
<head>
  <title>DOM Introduction</title>
</head>
<body>
  <p id="myParagraph">This is a paragraph.</p>

  <script>
    // Select the element by its id and store it in a variable
    var paragraphElement = document.getElementById("myParagraph");

    // Modify the content of the <p> element
    paragraphElement.innerHTML = "I successfully updated this paragraph with JavaScript";
  </script>
</body>
</html>


task two

<!DOCTYPE html>
<html>
<head>
  <title>Selecting Elements</title>
  <style>
    .highlight {
      color: red;
    }
    .bolden {
      font-weight: bold;
    }
  </style>
</head>
<body>
  <p class="highlight">This is a highlighted paragraph.</p>
  <p>This is a normal paragraph.</p>

  <script>
    // Select all elements with the class "highlight"
    var highlightedElements = document.querySelectorAll(".highlight");

    // Loop through the selected elements and make their content bold
    highlightedElements.forEach(function(element) {
      element.classList.add("bolden");
    });
  </script>
</body>
</html>


task 3

<!DOCTYPE html>
<html>
<head>
  <title>Modifying Elements</title>
  <style>
    img {
      border: 1px solid black;
    }
  </style>
</head>
<body>
  <img id="myImage" src="https://picsum.photos/200/300" alt="My Image">
  
  <script>
    // Select the <img> element by its id and store it in a variable
    var imageElement = document.getElementById("myImage");

    // Modify the src attribute
    imageElement.src = "https://picsum.photos/200/301";

    // Modify the alt attribute
    imageElement.alt = "New image";

    // Modify the border style
    imageElement.style.border = "2px solid red";
  </script>
</body>
</html>


next task

<!DOCTYPE html>
<html>
<head>
  <title>Creating and Removing Elements</title>
</head>
<body>
  <div id="container"></div>
  <button id="toggleButton">Toggle Paragraph</button>

  <script>
    // Select the container element by its id and store it in a variable
    var container = document.getElementById("container");

    // Create a new <p> element
    var newParagraph = document.createElement("p");
    newParagraph.textContent = "New paragraph";

    // Append the newly created <p> element to the container
    container.appendChild(newParagraph);

    // Create a button to toggle the paragraph
    var toggleButton = document.getElementById("toggleButton");
    var paragraphVisible = true;

    toggleButton.addEventListener("click", function() {
      if (paragraphVisible) {
        // Hide the paragraph by setting its display property to "none"
        newParagraph.style.display = "none";
      } else {
        // Show the paragraph by setting its display property to "block"
        newParagraph.style.display = "block";
      }
      
      // Toggle the paragraph visibility state
      paragraphVisible = !paragraphVisible;
    });
  </script>
</body>
</html>



In this code:

We select the container element by its id "container" and store it in the variable container.

We create a new <p> element using document.createElement and set its text content to "New paragraph".

We append the newly created <p> element to the container using container.appendChild.

We create a button with the id "toggleButton" to toggle the visibility of the paragraph. We also initialize a variable paragraphVisible to keep track of whether the paragraph is currently visible or not.

We add a click event listener to the button. When clicked, it checks the paragraphVisible variable and either hides or shows the paragraph by modifying its display style property accordingly. It then toggles the paragraphVisible state.

This code will create a new paragraph, append it to the container, and allow you to toggle its visibility with the button.