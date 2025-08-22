;(function () {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
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
