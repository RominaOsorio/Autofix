const form = document.querySelector('form')
const alertBox = document.getElementById('formAlert')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const name = document.getElementById('name').value.trim()
  const repairType = document.getElementById('repairType').value
  const descripcion = document.getElementById('descripcion').value.trim()
  const fecha = document.getElementById('fechaInput').value
  const tarjeta = document.getElementById('tarjetaInput').value.trim()
  const titular = document.getElementById('nombreTitularInput').value.trim()
  const cvv = document.getElementById('cvvInput').value.trim()

  if (name && repairType && descripcion && fecha && tarjeta && titular && cvv) {
    alertBox.innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        ¡Solicitud enviada con éxito!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
    form.reset()
  } else {
    alertBox.innerHTML = `
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
        Por favor, complete todos los campos antes de enviar.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
  }
})
