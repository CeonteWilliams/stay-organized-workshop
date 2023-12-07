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




    