const listUsers = document.getElementById('listaUsuarios')

fetch("https://jsonplaceholder.typicode.com/users").then(res => {
    if(!res.ok) {
        throw new Error("No se encuentra al usuario");
    } 
        return res.json();
    })
    .then (data => {
        /*console.log(data) - PARA COMPROBAR QUE NOS TRAE LOS OBJETOS DE LA API*/
        const usersModified = [] /* nuevo array creado para guardar toda la info que recolecto */
        data.forEach(user => {
            console.log(user)
            const newUser = {
                ...user,
                age: randomAge(),
                img: `./assets/img/${user.id}.jpeg`
            }
            usersModified.push(newUser) /* PUSH para meter toda la info en el array que creamos antes usersModified */
        });
        showUsers(usersModified)
    });
    
function randomAge() {
    return Math.floor(Math.random()* 100)
}

function showUsers(users) { /* TODA ESTA FUNCION PINTA EN LA PANTALLA LA INFORMACION QUE HEMOS RECOPILADO */
    users.forEach(user => {
        const {name, age, username, img, phone, email, company, address} = user;
        const {street, suite, city} = address
        
        listUsers.innerHTML += `
        <li>
        <p>Nombre: ${name}</p>
        <p><strong>Edad: </strong>${age}</p>
        <p><strong>Nombre de usuario: </strong>${username}</p>
        <img src="${img}" alt="${name}">
        <p><strong>Teléfono: </strong>${phone}</p>
        <p><strong>Correo: </strong>${email}</p>
        <p><strong>Compañía: </strong>${company.name}</p>
        <p><strong>Dirección: </strong>${street}, ${suite}, ${city}</p>
        </li>
        `
    }) 
}

