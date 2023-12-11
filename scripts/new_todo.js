 function fetchAndPopulateDropdowns() {
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
}

    
function addTodo() {
    const formData = new FormData(document.getElementById('toDoForm'));

  fetch('http://localhost:8083/api/todos', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            resultDiv.textContent = `ToDo added successfully. ID: ${data.id}, Description: ${data.description}`;
        })
        .catch(error => {
            console.error('Error adding ToDo:', error);
            const resultDiv = document.getElementById('result');
            resultDiv.textContent = 'Error adding ToDo. Please try again.';
        });
}

fetchAndPopulateDropdowns();

