//main
const table = document.getElementById('tabla-empleados');
const button = document.getElementById('buttoncsv');

//funcion encargada de traer mis empleados
function cargarEmpleados() {
    fetch('http://localhost:3000/getEmployees')
        .then(res => res.json())
        .then(data => {
            table.innerHTML = '';
            data.forEach(rec => {
                table.innerHTML += `
            <tr>
                <td>${rec.idEmployee}</td>
                <td>${rec.name}</td>
                <td>${rec.lastname}</td>
                <td>${rec.lastname2}</td>
                <td>${rec.email}</td>
                <td>${rec.charge}</td>
                <td>${rec.city}</td>
                <td>${rec.salary}</td>
                <td>${rec.age}</td>
            </tr>
            `;
            });
        });
};

button.addEventListener('click', () => {
    uploadData();
})

button.addEventListener('click', () => {
    fetch('http://localhost:3000/uploadCSV', {
        method: 'POST',
        headers: {'Content-type': 'application/json'}
    })
    .then(res => res.json());
})

cargarEmpleados();


