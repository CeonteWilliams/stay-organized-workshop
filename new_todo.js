//fetching usernames from the API by calling api/users

fetch("http://localhost:8083/api/users")
    .then(response => response.json())
    .then(users => {
        const userDropdown = document.getElementById('user');

        //creating the users dropdown

        users.forEach(user => {
            const option = document.createElement('option');
            option.value = user.id;
            option.text = user.name;
            userDropdown.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching users:', error));


//fetching category names from the API by calling api/categories

fetch("http://localhost:8083/api/categories")
    .then(response => response.json())
    .then(categories => {
        const categoryDropdown = document.getElementById('category');

        //creating the categories dropdown

        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.id;
            option.text = category.name;
            categoryDropdown.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching categories:', error));


    const formElement = document.querySelector('.toDoform')

    formElement.addEventListener('submit', event => {
        event.preventDefault();

        const toDoformData = new FormData(formElement)
        const data = new URLSearchParams(toDoformData)
        
        fetch("http://localhost:8083/api/todos", {
            method: "POST",
                body: data
            }).then(response => response.json())
              .then(data => console.log(data))
              .catch(error => console.log(error))
    })






/* window.onload = function () {
  const taskArea = document.getElementById("taskArea")
  const addToDo = document.getElementById("addToDo")


  addTask.addEventListener("click", function name(params) {
    const taskDescription = taskArea.value.trim()

    if (taskDescription !== "") {
        addTask(taskDescription)
    }
    
  })

function addTask(taskDescription){
    const apiUrl = "http://localhost:8083/api/todos"

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ task: taskDescription})
    })
    .then(response => response.json())
    .then(data => {
        displayTask(data.task)
    })
    .catch(error => console.error("Error adding task:", error))
}
function displayTask(taskDescription) {
    const taskArea = document.createElement("description")
    taskArea.textContent = taskDescription
    taskArea.appendChild(taskArea)
    
}

} */




