// Vérifier si l'utilisateur est admin
function checkAdminAccess() {
  const user = JSON.parse(localStorage.getItem("mcn_current_user"));
  if (!user || user.role !== "admin") {
    alert("Accès refusé. Vous devez être administrateur.");
    window.location.href = "index.html";
  }
}

// Initialiser les données de démonstration
function initDemoData() {
  if (!localStorage.getItem("mcn_reservations")) {
    const demoReservations = [
      {
        id: 1,
        clientName: "Amadou Diop",
        email: "amadou.diop@email.com",
        date: "2025-10-15",
        time: "10:00",
        visitors: 4,
        status: "pending",
        createdAt: new Date("2025-10-08").toISOString(),
      },
      {
        id: 2,
        clientName: "Fatou Sall",
        email: "fatou.sall@email.com",
        date: "2025-10-12",
        time: "14:00",
        visitors: 2,
        status: "accepted",
        createdAt: new Date("2025-10-05").toISOString(),
      },
      {
        id: 3,
        clientName: "Moussa Ba",
        email: "moussa.ba@email.com",
        date: "2025-10-20",
        time: "11:00",
        visitors: 6,
        status: "pending",
        createdAt: new Date("2025-10-07").toISOString(),
      },
    ];
    localStorage.setItem("mcn_reservations", JSON.stringify(demoReservations));
  }

  if (!localStorage.getItem("mcn_notifications")) {
    localStorage.setItem("mcn_notifications", JSON.stringify([]));
  }
}

// Afficher la date actuelle
function updateCurrentDate() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  document.getElementById("currentDate").textContent =
    new Date().toLocaleDateString("fr-FR", options);
}

// Charger les statistiques
function loadStats() {
  const reservations =
    JSON.parse(localStorage.getItem("mcn_reservations")) || [];
  const users = JSON.parse(localStorage.getItem("mcn_users")) || [];

  const total = reservations.length;
  const pending = reservations.filter((r) => r.status === "pending").length;
  const accepted = reservations.filter((r) => r.status === "accepted").length;

  document.getElementById("totalReservations").textContent = total;
  document.getElementById("pendingReservations").textContent = pending;
  document.getElementById("acceptedReservations").textContent = accepted;
  document.getElementById("totalUsers").textContent = users.length;

  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const weekReservations = reservations.filter(
    (r) => new Date(r.createdAt) >= weekAgo
  );
  document.getElementById("weekReservations").textContent =
    weekReservations.length;

  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const monthReservations = reservations.filter(
    (r) => new Date(r.createdAt) >= monthStart
  );
  document.getElementById("monthReservations").textContent =
    monthReservations.length;

  const avgDaily = total > 0 ? (total / 30).toFixed(1) : 0;
  document.getElementById("avgDailyReservations").textContent = avgDaily;

  const dayCount = {};
  reservations.forEach((r) => {
    const day = new Date(r.date).toLocaleDateString("fr-FR", {
      weekday: "long",
    });
    dayCount[day] = (dayCount[day] || 0) + 1;
  });
  const popularDay = Object.keys(dayCount).reduce(
    (a, b) => (dayCount[a] > dayCount[b] ? a : b),
    "-"
  );
  document.getElementById("popularDay").textContent = popularDay;
}

// Obtenir le texte du statut
function getStatusText(status) {
  const statusMap = {
    pending: "En attente",
    accepted: "Acceptée",
    rejected: "Refusée",
  };
  return statusMap[status] || status;
}

// Afficher les réservations récentes
function loadRecentReservations() {
  const reservations =
    JSON.parse(localStorage.getItem("mcn_reservations")) || [];
  const recent = reservations.slice(-5).reverse();

  const container = document.getElementById("recentReservations");

  if (recent.length === 0) {
    container.innerHTML =
      '<div class="empty-state"><i class="ri-calendar-line"></i><p>Aucune réservation pour le moment</p></div>';
    return;
  }

  let html =
    '<table class="reservations-table"><thead><tr><th>Client</th><th>Date</th><th>Heure</th><th>Visiteurs</th><th>Statut</th><th>Actions</th></tr></thead><tbody>';

  recent.forEach((res) => {
    html += `
                    <tr>
                        <td><strong>${res.clientName}</strong><br><small>${
      res.email
    }</small></td>
                        <td>${new Date(res.date).toLocaleDateString(
                          "fr-FR"
                        )}</td>
                        <td>${res.time}</td>
                        <td>${res.visitors} personnes</td>
                        <td><span class="status-badge status-${
                          res.status
                        }">${getStatusText(res.status)}</span></td>
                        <td>
                            ${
                              res.status === "pending"
                                ? `
                                <div class="action-buttons">
                                    <button class="btn btn-accept" onclick="updateReservationStatus(${res.id}, 'accepted')">
                                        <i class="ri-check-line"></i> Accepter
                                    </button>
                                    <button class="btn btn-reject" onclick="updateReservationStatus(${res.id}, 'rejected')">
                                        <i class="ri-close-line"></i> Refuser
                                    </button>
                                </div>
                            `
                                : "-"
                            }
                        </td>
                    </tr>
                `;
  });

  html += "</tbody></table>";
  container.innerHTML = html;
}

// Charger toutes les réservations avec filtres
function loadAllReservations(filter = "all") {
  let reservations = JSON.parse(localStorage.getItem("mcn_reservations")) || [];

  if (filter === "pending") {
    reservations = reservations.filter((r) => r.status === "pending");
  } else if (filter === "accepted") {
    reservations = reservations.filter((r) => r.status === "accepted");
  } else if (filter === "rejected") {
    reservations = reservations.filter((r) => r.status === "rejected");
  } else if (filter === "week") {
    const weekAgo = new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000);
    reservations = reservations.filter((r) => new Date(r.createdAt) >= weekAgo);
  } else if (filter === "month") {
    const monthStart = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      1
    );
    reservations = reservations.filter(
      (r) => new Date(r.createdAt) >= monthStart
    );
  }

  const container = document.getElementById("reservationsContent");

  if (reservations.length === 0) {
    container.innerHTML =
      '<div class="empty-state"><i class="ri-calendar-line"></i><p>Aucune réservation trouvée</p></div>';
    return;
  }

  let html =
    '<table class="reservations-table"><thead><tr><th>Client</th><th>Date de visite</th><th>Heure</th><th>Visiteurs</th><th>Statut</th><th>Créée le</th><th>Actions</th></tr></thead><tbody>';

  reservations.reverse().forEach((res) => {
    html += `
                    <tr>
                        <td><strong>${res.clientName}</strong><br><small>${
      res.email
    }</small></td>
                        <td>${new Date(res.date).toLocaleDateString(
                          "fr-FR"
                        )}</td>
                        <td>${res.time}</td>
                        <td>${res.visitors} personnes</td>
                        <td><span class="status-badge status-${
                          res.status
                        }">${getStatusText(res.status)}</span></td>
                        <td>${new Date(res.createdAt).toLocaleDateString(
                          "fr-FR"
                        )}</td>
                        <td>
                            ${
                              res.status === "pending"
                                ? `
                                <div class="action-buttons">
                                    <button class="btn btn-accept" onclick="updateReservationStatus(${res.id}, 'accepted')">
                                        <i class="ri-check-line"></i>
                                    </button>
                                    <button class="btn btn-reject" onclick="updateReservationStatus(${res.id}, 'rejected')">
                                        <i class="ri-close-line"></i>
                                    </button>
                                </div>
                            `
                                : "-"
                            }
                        </td>
                    </tr>
                `;
  });

  html += "</tbody></table>";
  container.innerHTML = html;
}

// Filtrer les réservations
function filterReservations(filter, event) {
  document
    .querySelectorAll(".filter-btn")
    .forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");
  loadAllReservations(filter);
}

// Mettre à jour le statut d'une réservation
function updateReservationStatus(id, status) {
  const reservations =
    JSON.parse(localStorage.getItem("mcn_reservations")) || [];
  const reservation = reservations.find((r) => r.id === id);

  if (reservation) {
    reservation.status = status;
    localStorage.setItem("mcn_reservations", JSON.stringify(reservations));

    loadStats();
    loadRecentReservations();
    loadAllReservations();

    alert(
      `Réservation ${
        status === "accepted" ? "acceptée" : "refusée"
      } avec succès !`
    );
  }
}

// Envoyer une notification
function sendNotification(event) {
  event.preventDefault();

  const recipients = document.getElementById("recipients").value;
  const title = document.getElementById("notificationTitle").value;
  const message = document.getElementById("notificationMessage").value;

  const notifications =
    JSON.parse(localStorage.getItem("mcn_notifications")) || [];
  notifications.push({
    id: Date.now(),
    recipients,
    title,
    message,
    date: new Date().toISOString(),
  });

  localStorage.setItem("mcn_notifications", JSON.stringify(notifications));

  const alert = document.getElementById("notificationAlert");
  alert.classList.add("show");
  setTimeout(() => alert.classList.remove("show"), 3000);

  document.getElementById("notificationTitle").value = "";
  document.getElementById("notificationMessage").value = "";

  loadNotificationHistory();
}

// Charger l'historique des notifications
function loadNotificationHistory() {
  const notifications =
    JSON.parse(localStorage.getItem("mcn_notifications")) || [];
  const container = document.getElementById("notificationHistory");

  if (notifications.length === 0) {
    container.innerHTML =
      '<div class="empty-state"><i class="ri-notification-3-line"></i><p>Aucune notification envoyée</p></div>';
    return;
  }

  let html = "";
  notifications.reverse().forEach((notif) => {
    const recipientsText = {
      all: "Tous les clients",
      active: "Clients avec réservations actives",
      pending: "Clients avec réservations en attente",
    };

    html += `
                    <div class="notification-item">
                        <h4>${notif.title}</h4>
                        <p>${notif.message}</p>
                        <small><i class="ri-group-line"></i> ${
                          recipientsText[notif.recipients]
                        } • ${new Date(notif.date).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}</small>
                    </div>
                `;
  });

  container.innerHTML = html;
}

// Charger les utilisateurs
function loadUsers() {
  const users = JSON.parse(localStorage.getItem("mcn_users")) || [];
  const container = document.getElementById("usersContent");

  if (users.length === 0) {
    container.innerHTML =
      '<div class="empty-state"><i class="ri-user-line"></i><p>Aucun utilisateur inscrit</p></div>';
    return;
  }

  let html =
    '<table class="reservations-table"><thead><tr><th>Nom</th><th>Email</th><th>Rôle</th><th>Réservations</th></tr></thead><tbody>';

  users.forEach((user) => {
    const reservations =
      JSON.parse(localStorage.getItem("mcn_reservations")) || [];
    const userReservations = reservations.filter((r) => r.email === user.email);

    html += `
                    <tr>
                        <td><strong>${user.name}</strong></td>
                        <td>${user.email}</td>
                        <td><span class="status-badge status-accepted">${
                          user.role || "client"
                        }</span></td>
                        <td>${userReservations.length} réservation(s)</td>
                    </tr>
                `;
  });

  html += "</tbody></table>";
  container.innerHTML = html;
}

// Changer de section
function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });

  document.getElementById(sectionId).classList.add("active");
  event.target.closest(".nav-link").classList.add("active");

  if (sectionId === "reservations") {
    loadAllReservations();
  } else if (sectionId === "notifications") {
    loadNotificationHistory();
  } else if (sectionId === "users") {
    loadUsers();
  }
}

// Déconnexion
function logout() {
  if (confirm("Êtes-vous sûr de vouloir vous déconnecter ?")) {
    localStorage.removeItem("mcn_current_user");
    window.location.href = "index.html";
  }
}

// Initialisation au chargement de la page
window.addEventListener("DOMContentLoaded", function () {
  checkAdminAccess();
  initDemoData();
  updateCurrentDate();
  loadStats();
  loadRecentReservations();
  loadNotificationHistory();
});
