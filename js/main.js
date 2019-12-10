
document.querySelector('#company').innerText = "Joe's Bed and Breakfast"
document.querySelector('header > h2').innerText = "Cozy up with an amazing view!"


let userName = prompt("What is your name?")

let message = `Hello ${userName}, welcome to the unpluged experience!`
document.querySelector('#greeting').innerText = message