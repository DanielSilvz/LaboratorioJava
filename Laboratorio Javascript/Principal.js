    function fetchandMostrarPropiedad() {
    fetch ('https://graco-api.onrender.com/propiedad-principales')
    .then(response => response.json())
    .then(data => {
    if(data.success) {
    data.data.forEach(propiedad => {
    const propiedadItem = document.createElement('propiedad-item');
    propiedadItem.classList.add('propiedad-card');
    propiedad.innerHTML = `



    <h3>Identificacion de la Propiedad: ${propiedad.id}</h3>
    <img src="${propiedad.imagenes[0]}" alt="Muestra de la propiedad" class="propiedad-images">
    <p>Cuartos Disponibles: ${propiedad.cuartos}</p>
    <p>Precio Total: ${propiedad.precio}</p>
    <p>Estado de la Propiedad: ${propiedad.estado}</p>


    
    `;
    propiedadItem.appendChild(propiedadItem);
    });
    } else {
    console.log("Mire pa que sepa no soy 100% funcional y su pedido fallo");
    }
    })
    .catch(error=> {
    console.log("Nah ya falle y es por:", error);
    });
    }
    fetchandMostrarPropiedad()