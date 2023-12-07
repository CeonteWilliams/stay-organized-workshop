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
function displayUserTasks(userId) {
    const selectedTasks = event.target.value
    fetch(`http://127.0.0.1:8083/api/todos/${selectedTasks}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return data.category
        })
        .then(renderUserCard)
}

function renderUserCard(tasks) {
    let html = '';
    for (let index = 0; index < tasks.length; index += 1) {
        const user = user[index];
        html += `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-header">${currentTask.name}</h5>
                </div>
            </div>
        `
    }
    const resultDiv = getElementById(UserSelect)
    resultDiv.innerHTML += html 
}