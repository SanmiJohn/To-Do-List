const TodoBox = document.getElementById('todobox')
const Addbtn = document.querySelector(".addbtn")
const Inputbox = document.querySelector("#input")

// let TodoBar = document.createElement('div')
// let TodoWords = document.createElement('span')
// let Hr = document.createElement('hr')
// let Icon = document.createElement('i')

function Add() {
    if (Inputbox.value) {
        let TodoBar = document.createElement('div')
        let TodoWords = document.createElement('span')
        TodoWords.classList.add('todowords')
        TodoBar.classList.add('todoitems')

        let Hr = document.createElement('hr')
        Hr.classList.add('hrline')

        let Icon = document.createElement('i')
        Icon.classList.add('fa-solid', 'fa-trash')

        TodoWords.innerText = Inputbox.value

        TodoBar.append(TodoWords)
        TodoBar.append(Icon)
        TodoBar.append(Hr)
        TodoBox.append(TodoBar)

        Inputbox.value = ''
    } else {
        alert('Input task to be done')
    }

    function Cross() {
        Span.classList.add('crossitem')
    }

    let Span = document.querySelector('span')
    Span.addEventListener("click", Cross)


    function Delete() {
        let TodoBar = document.createElement('div')
        let TodoWords = document.createElement('span')
        let Hr = document.createElement('hr')
        let Icon = document.createElement('i')

        console.log('Glory to GOD')

        TodoWords.classList.remove('todowords')
        TodoBar.classList.remove('todoitems')
        Hr.classList.remove('hrline')
        Icon.classList.remove('fa-solid', 'fa-trash')

        // TodoBar.remove(TodoWords)
        // TodoBar.remove(Icon)
        // TodoBar.remove(Hr)
        // TodoBox.remove(TodoBar)
    }

    let Delbtn = document.querySelector('i')
    Delbtn.addEventListener("click", Delete)
}

Addbtn.addEventListener("click", Add)


