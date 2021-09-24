var button = document.getElementById('btn')
var body = document.querySelector('body')
var hexName = document.querySelector('#hexName')


const arrays = ['a', 'b', 'c', 'd', 'e', 'f', 1,2,3,4,5,6,7,8,9]

btn.addEventListener('click', changeBackground)

function changeBackground() {
    let hexNumber = '#'
    for (let i = 0; i < 6; i++) {
    hexNumber += arrays[Math.floor(Math.random()*arrays.length)]
    
}
    body.style.backgroundColor = hexNumber;
    hexName.textContent = hexNumber.toUpperCase();
}