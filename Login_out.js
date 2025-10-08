// Identifiants Admin (uniques et prédéfinis)
const ADMIN_CREDENTIALS = {
  email: 'admin@mcn.sn',
  password: 'Admin@MCN2025',
  name: 'Administrateur MCN',
  role: 'admin'
};

// Charger les utilisateurs clients depuis localStorage au démarrage
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

  const successMsg = document.getElementById("loginSuccess");

  // Vérifier d'abord si c'est l'admin
  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    // Connexion Admin
    localStorage.setItem('mcn_current_user', JSON.stringify({
      name: ADMIN_CREDENTIALS.name,
      email: ADMIN_CREDENTIALS.email,
      role: 'admin'
    }));

    successMsg.innerHTML = '<i class="ri-shield-star-line"></i> Bienvenue Administrateur !';
    successMsg.classList.add("show");

    // Rediriger vers dash_admin.html après 1.5 secondes
    setTimeout(() => {
      window.location.href = "dash_admin.html";
    }, 1500);
    return;
  }

  // Rechercher parmi les utilisateurs clients dans localStorage
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    // Connexion Client
    localStorage.setItem('mcn_current_user', JSON.stringify({
      name: user.name,
      email: user.email,
      role: 'client'
    }));

    successMsg.innerHTML = `<i class="ri-user-smile-line"></i> Bienvenue ${user.name} !`;
    successMsg.classList.add("show");

    // Rediriger vers accueil.html après 1.5 secondes
    setTimeout(() => {
      window.location.href = "accueil.html";
    }, 1500);
  } else {
    // Identifiants incorrects
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

  // Empêcher l'inscription avec l'email admin
  if (email === ADMIN_CREDENTIALS.email) {
    successMsg.style.background = "rgba(244, 67, 54, 0.1)";
    successMsg.style.borderColor = "#f44336";
    successMsg.style.color = "#c62828";
    successMsg.innerHTML =
      '<i class="ri-error-warning-line"></i> Cet email est réservé';
    successMsg.classList.add("show");

    setTimeout(() => {
      successMsg.classList.remove("show");
      successMsg.style.background = "rgba(76, 175, 80, 0.1)";
      successMsg.style.borderColor = "#4CAF50";
      successMsg.style.color = "#2e7d32";
    }, 3000);
    return;
  }

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

  // Ajouter l'utilisateur client et sauvegarder dans localStorage
  users.push({ 
    name, 
    email, 
    password,
    role: 'client'
  });
  localStorage.setItem('mcn_users', JSON.stringify(users));

  successMsg.innerHTML = '<i class="ri-checkbox-circle-line"></i> Inscription réussie ! Redirection...';
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

// Fonction pour se déconnecter
function logout() {
  localStorage.removeItem('mcn_current_user');
  window.location.href = "index.html";
}

// Fonction pour vérifier si l'utilisateur est connecté
function getCurrentUser() {
  return JSON.parse(localStorage.getItem('mcn_current_user'));
}

// Fonction pour vérifier si l'utilisateur est admin
function isAdmin() {
  const user = getCurrentUser();
  return user && user.role === 'admin';
}

// Fonction pour vérifier si l'utilisateur est client
function isClient() {
  const user = getCurrentUser();
  return user && user.role === 'client';
}