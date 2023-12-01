function randomNumber(array){
    let check = false;
    let random;

    while(!check){
        random = Math.floor(Math.random() * 100 + 1);

        if(!array.includes(random)){
            check = true;
        }
    }

    return random
}

function array(nums){
    let arr = []

    for(let i=0; i<nums; i++){
        arr.push(randomNumber(arr));
    }

    return arr
}

const numbers = 5;
let game = array(numbers)
console.log(game)

let title = document.querySelector(`h2`)
let memo = document.querySelector(`h5`);
let correct = document.getElementById(`score`)
let num_ok = document.getElementById(`num_ok`)
let clock = document.getElementById(`time`)
let points = 0;
let time = 30;


memo.innerText = game

let timer = setInterval(function(){
    clock.innerText = `Tempo rimanente: ${time--} secondi `
}, 1000)

setTimeout(function(){
    title.innerText = ""
    memo.innerText = ""
    clock.innerText = ""
    if(time == 0){
        clearInterval(timer)
    }
}, 30000)

let user_num = []

setTimeout(function(){
    while(user_num.length < 5){
        let guess = parseInt(prompt(`Inserisci un numero da indovinare`))
        user_num.push(guess)
    }
    console.log(user_num)
    for(let i=0; i<numbers; i++){
        if(game.includes(user_num[i])){
            points++
            correct.innerText = `Hai indovinato i seguenti (${points}) numeri: `
            num_ok.innerText += " " + user_num[i]
        }
    }
}, 31000)

