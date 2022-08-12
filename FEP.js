let body = document.querySelector('body')
body.id = 'bodyID'
body.innerText = 'Random Password Generator\n\nYour friend tells you about this party he is performing at. It\'s for some very wealthy people, at a countryside mansion. He says the password is randomly generated every few minutes and hands you a device. It will link up to the MainFrame computer and give you the password when you arrive.\n\n\n\n'

let container = document.createElement('div')
container.id = 'containerID'
document.body.appendChild(container)

let button = document.createElement('button')
button.id = 'buttonID'
button.textContent = 'When you arrive, the guard asks you for the password. Click HERE to link up with the MainFrame computer using the device and get the randomly generated password.'

container.appendChild(button)

getData()

function getData() {
    $('button').click(function() {
        $.get('https://passwordinator.herokuapp.com?num=true&char=true&caps=true&len=18', function(data) {
            let current = data.data
            createBtn(current)
            console.log(`getData functions check: ${current}`)
        })
    })
}

function createBtn(current) {
    let currentBtn = document.createElement('button')
    currentBtn.id = 'currentBtnID'
    container.appendChild(currentBtn)
    currentBtn.innerText = `Now click here to copy it to the device and show the guard the Password:\n ${current}`
    copyPassword(currentBtn, current)
    console.log(`createBtn functions check: ${current}`)
}

function copyPassword(currentBtn, current) {
    currentBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(current)
        createSuccess(current)
        console.log(`copyPassword functions check: ${currentBtn.innerText}`)
    })
}

function createSuccess(current) {
    let successImg = document.createElement('button')
    successImg.id = 'successImgID'
    container.appendChild(successImg)
    successImg.innerText = `${current}\n is copied to your device and your granted access in.\nWelcome to the party!`
    console.log('createSuccess functions check')
}
console.log('Document functions check')