"user strict"

window.onload = function (_event) {
    getUsers()
        .then(populateUsers)

    const UsersChoice = document.getElementById("UserSelect")

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