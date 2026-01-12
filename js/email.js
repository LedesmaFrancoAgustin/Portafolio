
const formEmail = document.getElementById('formEmail');
const buttonForm = document.getElementById('buttonForm');

 const serviceID = 'service_lqf4uas';
 const templateID = 'template_gmkl5lh';
 const apikey = 'cy6blbeOu17XpocIC';

formEmail.addEventListener('submit', function (event) {
  event.preventDefault();

  

  emailjs.init(serviceID);

  buttonForm.classList.add('loading');
  buttonForm.disabled = true;
  buttonForm.innerText = 'Enviando...';

  emailjs.sendForm(serviceID, templateID, formEmail, apikey)
    .then(() => {

      Toastify({
        text: "Correo enviado correctamente",
        duration: 3000,
        backgroundColor: "linear-gradient(to right, #9088f3, #7843e9)",
      }).showToast();

      formEmail.reset();

    })
    .catch((err) => {

      console.error('Error al enviar correo:', err);

      Toastify({
        text: "❌ Ocurrió un error. No se pudo enviar el correo. Intentalo nuevamente.",
        duration: 4000,
        gravity: "top",
        position: "right",
        backgroundColor: "linear-gradient(to right, #ff5f6d, #d90429)",
      }).showToast();

    })
    .finally(() => {
      buttonForm.classList.remove('loading');
      buttonForm.disabled = false;
      buttonForm.innerText = 'Enviar';
    });
});
