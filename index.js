document.getElementById("myH").style.fontFamily = "Verdana, Arial, sans-serif";


function myFunction() {
    var x = document.createElement("IMG");
    document.getElementById("myH").innerHTML = "ИДИ НАХУЙ";
    x.setAttribute("src", "images/GwYIge.gif");
    x.setAttribute("width", "1600");
    x.setAttribute("height", "800");
    x.setAttribute("alt", "The Pulpit Rock");
    x.setAttribute("audio", "sound/screamer-test-103648.mp3");
    x.style.display = "block";
    x.style.margin = "0 auto";
    document.getElementById("knapp").style.display = "none";
    document.body.appendChild(x);
  }

  const audio = new Audio();
  audio.src = "sound/screamer-test-103648.mp3"