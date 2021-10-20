player1_name = localStorage.getItem("Player1");
player2_name = localStorage.getItem("Player2");
document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";
player1_score = 0;
player2_score = 0;
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("quesplayer").innerHTML = "Question Turn: " + player1_name;
document.getElementById("ansplayer").innerHTML = "Answer Turn: " + player2_name;
operation = "";
function add() {
    operation = "+";
    document.getElementById("add_button").style.borderColor = "blue";
    document.getElementById("add_button").style.borderWidth = "3";
    document.getElementById("minus_button").style.borderColor = "blue";
    document.getElementById("minus_button").style.borderWidth = "0";
    document.getElementById("multiply_button").style.borderColor = "blue";
    document.getElementById("multiply_button").style.borderWidth = "0";
    document.getElementById("divide_button").style.borderColor = "blue";
    document.getElementById("divide_button").style.borderWidth = "0";
}
function subtract() {
    operation = "-";
    document.getElementById("add_button").style.borderColor = "blue";
    document.getElementById("add_button").style.borderWidth = "0";
    document.getElementById("minus_button").style.borderColor = "blue";
    document.getElementById("minus_button").style.borderWidth = "3";
    document.getElementById("multiply_button").style.borderColor = "blue";
    document.getElementById("multiply_button").style.borderWidth = "0";
    document.getElementById("divide_button").style.borderColor = "blue";
    document.getElementById("divide_button").style.borderWidth = "0";
}
function multiply() {
    operation = "x"
    document.getElementById("add_button").style.borderColor = "blue";
    document.getElementById("add_button").style.borderWidth = "0";
    document.getElementById("minus_button").style.borderColor = "blue";
    document.getElementById("minus_button").style.borderWidth = "0";
    document.getElementById("multiply_button").style.borderColor = "blue";
    document.getElementById("multiply_button").style.borderWidth = "3";
    document.getElementById("divide_button").style.borderColor = "blue";
    document.getElementById("divide_button").style.borderWidth = "0";
}
function divide() {
    operation = "÷";
    document.getElementById("add_button").style.borderColor = "blue";
    document.getElementById("add_button").style.borderWidth = "0";
    document.getElementById("minus_button").style.borderColor = "blue";
    document.getElementById("minus_button").style.borderWidth = "0";
    document.getElementById("multiply_button").style.borderColor = "blue";
    document.getElementById("multiply_button").style.borderWidth = "0";
    document.getElementById("divide_button").style.borderColor = "blue";
    document.getElementById("divide_button").style.borderWidth = "3";
}
function send() {
    document.getElementById("result").innerHTML = "";
    number1 = document.getElementById("firstnum").value;
    number2 = document.getElementById("secondnum").value;
    actual_answer = 0;
    if (operation == "+") {
        actual_answer = parseInt(number1) + parseInt(number2);
    }
    if (operation == "-") {
        actual_answer = parseInt(number1) - parseInt(number2);
    }
    if (operation == "x") {
        actual_answer = parseInt(number1) * parseInt(number2);
    }
    if (operation == "÷") {
        actual_answer = parseInt(number1) / parseInt(number2);
    }
    console.log(actual_answer);
    question_number = "<h4>" + number1 + operation + number2 + "</h4>";
    input_box = "<br> Answer: <input type='text' id='check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    document.getElementById("output").innerHTML = question_number + input_box + check_button;
    document.getElementById("firstnum").value = "";
    document.getElementById("secondnum").value = "";
    document.getElementById("add_button").style.borderColor = "blue";
    document.getElementById("add_button").style.borderWidth = "0";
    document.getElementById("minus_button").style.borderColor = "blue";
    document.getElementById("minus_button").style.borderWidth = "0";
    document.getElementById("multiply_button").style.borderColor = "blue";
    document.getElementById("multiply_button").style.borderWidth = "0";
    document.getElementById("divide_button").style.borderColor = "blue";
    document.getElementById("divide_button").style.borderWidth = "0";
}
questurn = "Player1";
ansturn = "Player2";
function check() {
    ans = document.getElementById("check_box").value;
    if (ans == actual_answer) {
        if (ansturn == "Player1") {
            player1_score += 2;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score += 2;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "Yay! Bruh Corrrect Ansswwer";
    } else {
        if (ansturn == "Player1") {
            player1_score -= 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score -= 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Urrrgggggghhhhhhhhhhh! Wrong Answer";
    }
    if (questurn == "Player1") {
        questurn = "Player2";
        document.getElementById("quesplayer").innerHTML = "Question Turn: " + player2_name;
    } else {
        questurn = "Player1";
        document.getElementById("quesplayer").innerHTML = "Question Turn: " + player1_name;
    }
    if (ansturn == "Player1") {
        ansturn = "Player2";
        document.getElementById("ansplayer").innerHTML = "Answer Turn: " + player2_name;
    } else {
        ansturn = "Player1";
        document.getElementById("ansplayer").innerHTML = "Answer Turn: " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
    document.getElementById("add_button").style.borderColor = "blue";
    document.getElementById("add_button").style.borderWidth = "0";
    document.getElementById("minus_button").style.borderColor = "blue";
    document.getElementById("minus_button").style.borderWidth = "0";
    document.getElementById("multiply_button").style.borderColor = "blue";
    document.getElementById("multiply_button").style.borderWidth = "0";
    document.getElementById("divide_button").style.borderColor = "blue";
    document.getElementById("divide_button").style.borderWidth = "0";
}