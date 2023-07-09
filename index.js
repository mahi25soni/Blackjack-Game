
let yourScore = document.getElementById("yourScore")
let valueyourScore = Number(yourScore.innerHTML)
let dealerScore = document.getElementById("dealerScore")
let valuedealerScore = Number(dealerScore.innerHTML)

let wins = document.getElementById("wins")
let value_wins = Number(wins.innerHTML)

let losses = document.getElementById("losses")
let value_losses = Number(losses.innerHTML)

let draws = document.getElementById("draws")
let value_draws = Number(draws.innerHTML)


let yourNear;
let dealerNear;

function hitButtonFunction() {
    let random_number = getRandomNumber()
    valueyourScore += random_number
    yourScore.innerHTML = valueyourScore
    console.log(valueyourScore)
    yourNear = 21 - valueyourScore
    if(yourNear < 0){
        value_losses++;
        losses.innerHTML = value_losses
        setTimeout(() => {
            alert("You lost, dealer won") 
            setToZero()
        }, 0); 
    }

    yourNear = Math.abs(yourNear)
}

function standButtonFunction() {
    let random_number = getRandomNumber()
    valuedealerScore += random_number
    dealerScore.innerHTML = valuedealerScore
    dealerNear = 21 - valuedealerScore
    if(dealerNear < 0){
        value_wins++;
        wins.innerHTML = value_wins
        alert("You won, dealer lost")
        setToZero()
    }

    dealerNear = Math.abs(dealerNear)

}

function dealButtonFunction() {
    if(yourNear < dealerNear){
        value_wins++;
        wins.innerHTML = value_wins
        alert("You won, dealer lost")
        setToZero()
    }
    else if (dealerNear < yourNear){
        value_losses++;
        losses.innerHTML = value_losses
        alert("You lost, dealer won")
        setToZero()
    }
    else {
        value_draws++;
        draws.innerHTML = value_draws
        alert("And its a tie!")
        setToZero()
    }
}
 
function getRandomNumber() {
    return (Math.floor(Math.random() * 13)) + 1
}

function setToZero() {
    valueyourScore = 0
    yourScore.innerHTML = valueyourScore

    valuedealerScore = 0
    dealerScore.innerHTML = valuedealerScore
}