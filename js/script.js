let lastValue= "O";
let display = document.getElementById("display");
display.textContent = "Player 1's turn to play";

let buttons = document.querySelectorAll(".box");
for (let button of buttons) {
    button.addEventListener("click", () => {
        if (button.textContent !== "") {
            return;
        }
        if (lastValue === "O"){
            button.textContent = "X";
            lastValue = "X";
            display.textContent = "Player 2's turn to play";
            checkStatus();
        }  else{
            button.textContent = "O";
            lastValue = "O";
            display.textContent = "Player 1's turn to play"
            checkStatus();
        }       
    })
} 

let restart = document.getElementById("#restartbtn");

restart.addEventListener("click", () => {
    window.location.href = "index.html";
}); 
    
    


