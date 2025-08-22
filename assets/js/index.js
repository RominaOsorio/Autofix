;(function () {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')
  const formAlert = document.getElementById('formAlert')

  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        event.preventDefault()
        event.stopPropagation()

        if (form.checkValidity()) {
          formAlert.innerHTML = `
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            ¡Agendamiento realizado exitosamente!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `
          form.reset()
          form.classList.remove('was-validated')

          const fechaInput = document.getElementById('fechaInput')
          const hoy = new Date()
          const dia = hoy.getDate().toString().padStart(2, '0')
          const mes = (hoy.getMonth() + 1).toString().padStart(2, '0')
          const anio = hoy.getFullYear()
          fechaInput.value = `${anio}-${mes}-${dia}`
        } else {
          form.classList.add('was-validated')
        }
      },
      false
    )
  })

  const fechaInput = document.getElementById('fechaInput')
  const hoy = new Date()
  const dia = hoy.getDate().toString().padStart(2, '0')
  const mes = (hoy.getMonth() + 1).toString().padStart(2, '0')
  const anio = hoy.getFullYear()
  const fechaFormateada = `${anio}-${mes}-${dia}`
  fechaInput.setAttribute('min', fechaFormateada)
  fechaInput.value = fechaFormateada
})()
