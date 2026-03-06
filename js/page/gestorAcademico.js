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