document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          
          window.scrollTo({
              top: offsetTop - 50, // Ajustar valor requerido
              behavior: 'smooth'
          });
      }
  });
});

//----------------------------------------------------------------


document.addEventListener('DOMContentLoaded', function() {
  const btnCopy = document.getElementById('btnCopyEmail');
  
  if (btnCopy) {
    btnCopy.addEventListener('click', function() {
      copyEmail();
    });
  } else {
    console.error('Element with ID not found');
  }

  function copyEmail() {
    const emailText = "ledesma-agustin@hotmail.com";
    navigator.clipboard.writeText(emailText).then(() => {

      Toastify({
        text: "Correo copiado correctamente",
        duration: 3000,
        backgroundColor: "linear-gradient(to right, #9088f3, #7843e9)",
        }).showToast();

    }).catch(err => {
        console.error('Error al copiar el correo electrónico: ', err);
    });
  }
});

//----------------------------------------------------------------


// function([string1, string2],target id,[color1,color2])    
consoleText(['Desarrollador de Software.'], 'text',['rebeccapurple','rebeccapurple']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

//Dark-BLACK
  const toggle = document.getElementById("darkModeToggle");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Guardar preferencia
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });

  // Cargar preferencia guardada
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  // New year
  document.getElementById('year').textContent = new Date().getFullYear();