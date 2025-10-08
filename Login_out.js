// Charger les utilisateurs depuis localStorage au démarrage
let users = JSON.parse(localStorage.getItem('mcn_users')) || [];

function switchForm(formType) {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (formType === "register") {
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
  } else {
    registerForm.classList.remove("active");
    loginForm.classList.add("active");
  }
}

function togglePassword(inputId, icon) {
  const input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("ri-eye-line");
    icon.classList.add("ri-eye-off-line");
  } else {
    input.type = "password";
    icon.classList.remove("ri-eye-off-line");
    icon.classList.add("ri-eye-line");
  }
}

function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Rechercher l'utilisateur dans localStorage
  const user = users.find((u) => u.email === email && u.password === password);

  const successMsg = document.getElementById("loginSuccess");

  if (user) {
    // Sauvegarder la session de l'utilisateur connecté
    localStorage.setItem('mcn_current_user', JSON.stringify({
      name: user.name,
      email: user.email
    }));

    successMsg.textContent = `Bienvenue ${user.name} !`;
    successMsg.classList.add("show");

    // Rediriger vers index.html après 1.5 secondes
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  } else {
    successMsg.style.background = "rgba(244, 67, 54, 0.1)";
    successMsg.style.borderColor = "#f44336";
    successMsg.style.color = "#c62828";
    successMsg.innerHTML =
      '<i class="ri-error-warning-line"></i> Email ou mot de passe incorrect';
    successMsg.classList.add("show");

    setTimeout(() => {
      successMsg.classList.remove("show");
      successMsg.style.background = "rgba(76, 175, 80, 0.1)";
      successMsg.style.borderColor = "#4CAF50";
      successMsg.style.color = "#2e7d32";
    }, 3000);
  }
}

function handleRegister(event) {
  event.preventDefault();

  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const successMsg = document.getElementById("registerSuccess");

  if (password !== confirmPassword) {
    successMsg.style.background = "rgba(244, 67, 54, 0.1)";
    successMsg.style.borderColor = "#f44336";
    successMsg.style.color = "#c62828";
    successMsg.innerHTML =
      '<i class="ri-error-warning-line"></i> Les mots de passe ne correspondent pas';
    successMsg.classList.add("show");

    setTimeout(() => {
      successMsg.classList.remove("show");
      successMsg.style.background = "rgba(76, 175, 80, 0.1)";
      successMsg.style.borderColor = "#4CAF50";
      successMsg.style.color = "#2e7d32";
    }, 3000);
    return;
  }

  if (users.find((u) => u.email === email)) {
    successMsg.style.background = "rgba(244, 67, 54, 0.1)";
    successMsg.style.borderColor = "#f44336";
    successMsg.style.color = "#c62828";
    successMsg.innerHTML =
      '<i class="ri-error-warning-line"></i> Un compte existe déjà avec cet email';
    successMsg.classList.add("show");

    setTimeout(() => {
      successMsg.classList.remove("show");
      successMsg.style.background = "rgba(76, 175, 80, 0.1)";
      successMsg.style.borderColor = "#4CAF50";
      successMsg.style.color = "#2e7d32";
    }, 3000);
    return;
  }

  // Ajouter l'utilisateur et sauvegarder dans localStorage
  users.push({ name, email, password });
  localStorage.setItem('mcn_users', JSON.stringify(users));

  successMsg.textContent = "Inscription réussie ! Redirection...";
  successMsg.classList.add("show");

  setTimeout(() => {
    switchForm("login");
    document.getElementById("loginEmail").value = email;
    successMsg.classList.remove("show");
  }, 2000);
}

function socialLogin(provider) {
  alert(`Connexion via ${provider} - Fonctionnalité à venir !`);
}

// Fonction pour se déconnecter (à utiliser dans index.html si besoin)
function logout() {
  localStorage.removeItem('mcn_current_user');
  window.location.href = "Login_out.html";
}

// Fonction pour vérifier si l'utilisateur est connecté (à utiliser dans index.html si besoin)
function getCurrentUser() {
  return JSON.parse(localStorage.getItem('mcn_current_user'));
}