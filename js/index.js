
const carta = document.querySelector('.card00');
carta.addEventListener('click', () => {

    let timerInterval;
    Swal.fire({
      title: 'Redirigiendo...',
      html: 'Espere',
      timer: 1500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      
      if (result.dismiss === Swal.DismissReason.timer) {
        "../"
      }
    })
})


