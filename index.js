// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });
  document.addEventListener('DOMContentLoaded', function () {
    // Target the paragraph element with id="text"
    const paragraph = document.getElementById('text');
  
    // Replace its content with "This is really cool!"
    paragraph.textContent = 'This is really cool!';
  });
  