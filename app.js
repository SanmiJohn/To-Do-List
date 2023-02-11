const TodoBox = document.getElementById('todobox')
const Addbtn = document.querySelector(".addbtn")
const Inputbox = document.querySelector("#input")

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
}

Addbtn.addEventListener("click", Add)

