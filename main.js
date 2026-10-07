const parrafo = document.getElementById('parrafo');
const botonEstilo = document.getElementById('botonEstilo');

let styleHasChanged = false;

function changePStyle() {

  if (styleHasChanged) {
    parrafo.style.fontFamily = '';
    parrafo.style.fontSize = '';
    parrafo.style.color = '';
    parrafo.style.fontWeight = '';
    styleHasChanged = false;
  } else {
    parrafo.style.fontFamily = 'Arial, sans-serif';
    parrafo.style.fontSize = '20px';
    parrafo.style.color = '#2e7d32';
    parrafo.style.fontWeight = 'bold';
    styleHasChanged = true;
  }
}

botonEstilo.addEventListener('click', changePStyle);

// TASK 2
const form1 = document.getElementById('form1');

function handleFormSubmit(event) {
  event.preventDefault();

  const inputNombre = form1.elements['fname'];
  const inputApellido = form1.elements['lname'];

  console.log('Nombre:', inputNombre.value);
  console.log('Apellido:', inputApellido.value);

  inputNombre.value = '';
  inputApellido.value = '';
}
form1.addEventListener('submit', handleFormSubmit);


// TASK 3
const botonEnlaces = document.getElementById('botonEnlaces');

function showLinksInfo() {
  const links = document.querySelectorAll('a');

  const totalLinks = links.length;

  const firstLink = links[0].href;
  const lastLink = links[totalLinks - 1].href;

  alert(
    `Información de links:\n` +
    `- Total de links: ${totalLinks}\n` +
    `- Primer enlace: ${firstLink}\n` +
    `- Último enlace: ${lastLink}`
  );
}

botonEnlaces.addEventListener('click', showLinksInfo);