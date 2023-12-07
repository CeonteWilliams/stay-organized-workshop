"user strict"

let element = document.getElementById("userSelect")
fetch("http://127.0.0.1:8083/api/users")
.then(response => response.json())
.then(data =>{
    for(let i= 0; i < data.length; i++){
        let opt = document.createElement("option");
        opt.innerText = data [i].name;
        opt.value = data[i].id; 
        element.appendChild(opt);
    }
})