document.getElementById("myH").style.color = "red";
document.getElementById("myP").style.color = "red";
document.getElementById("myH").style.fontFamily = "Verdana, Arial, sans-serif";
document.getElementById("myP").style.fontFamily = "Verdana, Arial, sans-serif";



function myFunction() {
    var x = document.createElement("IMG");
    document.getElementById("myH").innerHTML = "Кирюша";
    document.getElementById("myP").innerHTML = "Я Тебя любою ";
    x.setAttribute("src", "images/red-heart_2764-fe0f.png");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.getElementById("knapp").style.display = "none";
    document.body.appendChild(x);
  }