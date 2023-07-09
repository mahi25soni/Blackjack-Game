console.log("s;dfsdkfj")

let yourScore = document.getElementById("yourScore").innerHTML
let dealerScore = document.getElementById("dealerScore").innerHTML


function hitButtonFunction() {
    let random_number = getRandomNumber()
    console.log(random_number)
}

function getRandomNumber() {
    return (Math.floor(Math.random() * 13)) + 1
}