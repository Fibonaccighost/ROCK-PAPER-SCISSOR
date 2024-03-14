let trigger = document.getElementById("trigger2")

function compChoice(rNumber) {
    switch (rNumber) {
        case 0:
            document.getElementById("container").insertAdjacentHTML("beforeend",`<div><p>Bot</p><img src="stone.png"></div>`)
            break;
        case 1:
            document.getElementById("container").insertAdjacentHTML("beforeend",`<div><p>Bot</p><img id="paper" src="paper.png"></div>`)
            break;
        case 2:
            document.getElementById("container").insertAdjacentHTML("beforeend",`<div><p>Bot</p><img src="Scissor.png"></div>`)
            break;
    
        default:
            break;
    }
    trigger.remove()
}

trigger.addEventListener("click", () => {
    let rNumber = Math.floor(Math.random() * 3);
    compChoice(rNumber);
    if (rNumber == 0) {
        document.getElementById("result").insertAdjacentHTML("beforeend", `<p><strong>WIN</strong></p>`);
    } else if (rNumber == 1) {
        document.getElementById("result").insertAdjacentHTML("beforeend", `<p><strong>TIE</strong></p>`);
    } else {
        document.getElementById("result").insertAdjacentHTML("beforeend", `<p><strong>LOSE</strong></p>`);
    }
});