
 // Function to store previous page URL in localStorage
 function storePreviousPage() {
    localStorage.setItem('previousPage', window.location.href);
}

// Check if the game has been played and redirect accordingly
window.onload = function() {
    if (localStorage.getItem('gamePlayed')) {
        let previousPage = localStorage.getItem('previousPage');
        if (previousPage) {
            localStorage.removeItem('gamePlayed'); // Remove the gamePlayed flag
            localStorage.removeItem('previousPage'); // Remove the previous page URL
            window.location.href = "game.html"; // Redirect to the previous page
        }
    }
};

let trigger = document.getElementById("trigger1")

function compChoice(rNumber) {
    switch (rNumber) {
        case 0:
            document.getElementById("container").insertAdjacentHTML("beforeend",`<div><p>Bot</p><img src="stone.png"></div>`)
            break;
        case 1:
            document.getElementById("container").insertAdjacentHTML("beforeend",`<div><p>Bot</p><img src="paper.png"></div>`)
            break;
        case 2:
            document.getElementById("container").insertAdjacentHTML("beforeend",`<div><p>Bot</p><img src="Scissor.png"></div>`)
            break;
    
        default:
            break;
    }
    trigger.remove()
    // Set gamePlayed flag indicating the game has been played
    localStorage.setItem('gamePlayed', true);
    // Store the URL of the current page as the previous page
    storePreviousPage();
}

trigger.addEventListener("click", () => {
    let rNumber = Math.floor(Math.random() * 3);
    compChoice(rNumber);
    if (rNumber == 0) {
        document.getElementById("result").insertAdjacentHTML("beforeend", `<p><strong>TIE</strong></p>`);
    } else if (rNumber == 1) {
        document.getElementById("result").insertAdjacentHTML("beforeend", `<p><strong>LOSE</strong></p>`);
    } else {
        document.getElementById("result").insertAdjacentHTML("beforeend", `<p><strong>WIN</strong></p>`);
    }
});

