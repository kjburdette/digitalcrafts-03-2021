function createDiv(){
    const div = document.createElement("div")
    div.className = "main-container"
    const header = document.createElement("h1")
    header.innerHTML = "Task Manager"
    const label = document.createElement("label")
    label.className = "label"
    label.setAttribute("for", "task")
    label.innerHTML = "Enter a task you need done:"
    const input = document.createElement("input")
    input.type = "text"
    input.className = "task"
    input.name = "task"
    const button = document.createElement("button")
    button.type = "button"
    button.innerHTML = "Add Task to List"
    button.className = "submit"
    const header2 = document.createElement("h2")
    header2.innerHTML = "Tasks to be Completed:"
    const toDoList = document.createElement("ul")
    toDoList.className = "todo"
    const root = document.querySelector("#root")
    div.append(header,label,input,button,header2,toDoList)
    root.append(div)

}

createDiv()

function addToList(){
    const userInput = document.querySelector(".task").value
    const list = document.querySelector(".todo")
    const listItem = document.createElement("li")
    const checkbox = document.createElement("input")
    checkbox.className = "checkbox"
    checkbox.type = "checkbox"
    listItem.append(checkbox,userInput)
    list.append(listItem)
}

const submitBtn = document.querySelector(".submit")

submitBtn.addEventListener('click', function(){
    addToList()
})