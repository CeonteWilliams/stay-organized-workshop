"user strict"

window.onload = function(_event){
    getuser()
    .then(populateUsers)

const Users = document.getElementById("UserSelect")

}

function getuser(){

return fetch(`http://127.0.0.1:8083/api/users`)
.then(response => response.json())

}

function populateUsers(users,Users){
let html = ""
for (let index = 0; users< users.length; index+= 1) {
    const element = users[index];
    html+= `<option value=${users.name}${users.id}${users.username}</option>`

}console.log(users)



}