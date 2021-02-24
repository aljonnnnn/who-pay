const addNameBtn = document.querySelector('.add-btn');
const whoPayBtn = document.querySelector('.who-pay-btn');
const listName = [];

addNameBtn.addEventListener('click', function() {
    const name = document.querySelector('.input-name').value;

    if (name !== '') {
        listName.push(name);
    } else {
        alert('enter name in input')
    }

    document.querySelector('.input-name').value = '';
})

whoPayBtn.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * listName.length);
    
    const winner =  document.querySelector('.unlucky');
    winner.textContent = '👌 '+ listName[randomNumber] +' 👏';
    console.log(winner.textContent);
})


const enterInput = document.querySelector('.input-name');
enterInput.addEventListener('keypress', function(event) {
    const name = document.querySelector('.input-name').value;

    if (event.keyCode === 13) {
        if (name !== '') {
            listName.push(name);
        }
        
        document.querySelector('.input-name').value = '';
    }
})
