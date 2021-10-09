function login(){
    player_name1 = document.getElementById("player_name1").value;
    player_name2 = document.getElementById("player_name2").value;
    localStorage.setItem("Player 1 Name: ", player_name1);
    localStorage.setItem("Player 2 Name:", player_name2);
    window.location="game.html";
}