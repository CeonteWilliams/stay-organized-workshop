"user strict"

window.onload = function (_event) {
    getUsers()
        .then(populateUsers)

    const UsersChoice = document.getElementById("UserSelect")
    UsersChoice.onchange = displayUserTasks

}

function getUsers() {
    return fetch(`http://127.0.0.1:8083/api/users`)
        .then(response => response.json())
}

function populateUsers(users) {
    let html = ""
    for (const currentUser of users) {
        html += `<option value="${currentUser.id}">${currentUser.name}</option>`
    }

    const Users = document.getElementById("UserSelect")
    Users.innerHTML += html
}
function displayUserTasks(event) {
    const selectedUserId = event.target.value
    fetch(`http://127.0.0.1:8083/api/todos/byuser/${selectedUserId}`)
        .then(response => response.json())
        .then(renderTasks)
}

function renderTasks(todos) {

    let html = ""
    for (let index = 0; index < todos.length; index += 1) {
        const task = todos[index];
        html += `<h5> tasks: ${task.userid}, ${task.category}, ${task.description} </h5>`
    }
    const resultsDiv = document.getElementById("todoResults")
    resultsDiv.innerHTML = html

}


