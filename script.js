window.onload = function() {
    var button = document.querySelector('button');
  
    button.addEventListener('click', function() {
      alert("Let's Rock!!");
      window.open("https://www.youtube.com/", "_blank")
    });
  }