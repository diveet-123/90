function add_user()
{
    player1_name = document.getElementById("number1").value;
    player2_name = document.getElementById("number2").value;
   localStorage.setItem("player1_name" , player1_name);
   localStorage.setItem("player2_name" , player2_name);
   window.location = "index.html";
}