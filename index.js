
let allButtons = Array.from(document.getElementsByTagName("button"))
let theme = document.getElementById("theme-setter")
let olderBoss = document.getElementById("past-element")
let boss = document.getElementById("future-element")
let firstElement = document.getElementById("first-element")
let secondElement = document.getElementById("second-element")


allButtons.forEach(element => {
    element.addEventListener("click", async ()=> {
        olderBoss.remove()

        const random = Math.floor(Math.random() * 3);
        firstElement.innerHTML = element.innerHTML
        secondElement.innerHTML = allButtons[random].innerHTML

        
        theme.appendChild(boss)
        boss.classList.remove("hidden")
        boss.classList.add("flex")

        await new Promise(resolve => setTimeout(resolve, 0));

        checkWinner(firstElement.innerHTML, secondElement.innerHTML)
    })
})


let kind = {
    "Stone":1,
    "Paper":2,
    "Scissor":3
}
function checkWinner(your, pc){
    const checking = kind[pc] - kind[your]

    if((checking === 1) || (checking === -2)){
        alert("PC won")
    }
    else if(checking === 0){
        alert("no one won")
    }
    else {
        alert("YOu won")
    }

}