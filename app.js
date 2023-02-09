const TodoBox = document.getElementById('todobox')
const Addbtn = document.querySelector(".addbtn")
const Input = document.querySelector("#input")

function Add() {
    console.log(Input.value)
    Input.value = ''
    TodoBox.classList.add('todoitems')

    let InputValue = document.createElement('div')
    InputValue.innerText = Input.value
    TodoBox.append(InputValue)
}

Addbtn.addEventListener("click", Add)
// Addbtn.addEventListener("click", Cross)

