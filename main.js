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