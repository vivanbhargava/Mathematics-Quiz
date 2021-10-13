function login(){
    player_name1 = document.getElementById("player_name1").value;
    player_name2 = document.getElementById("player_name2").value;
    localStorage.setItem("Player1", player_name1);
    localStorage.setItem("Player2", player_name2);
    window.location="game.html";
}