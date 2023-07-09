
let yourScore = document.getElementById("yourScore")
let valueyourScore = Number(yourScore.innerHTML)
let dealerScore = document.getElementById("dealerScore")
let valuedealerScore = Number(dealerScore.innerHTML)

// console.log(yourScore+1+1+1+1+1)

let yourNear;
let dealerNear;
function hitButtonFunction() {
    let random_number = getRandomNumber()
    valueyourScore += random_number
    yourScore.innerHTML = valueyourScore
    yourNear = 21 - valueyourScore
    yourNear < 1 ? console.log("Dealer Won") : ""
}

function standButtonFunction() {
    let random_number = getRandomNumber()
    valuedealerScore += random_number
    dealerScore.innerHTML = valuedealerScore
    dealerNear = 21 - valuedealerScore
    dealerNear < 1 ? console.log("Dealer Won") : ""
}

function dealButtonFunction() {
    if(yourNear < dealerNear){
        console.log("You won the match")
    }
    else if (dealerNear < yourNear){
        console.log("Dealer won the match")
    }
    else {
        console.log("Its a tie")
    }
}
 
function getRandomNumber() {
    return (Math.floor(Math.random() * 13)) + 1
}