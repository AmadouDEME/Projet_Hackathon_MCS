document.addEventListener("DOMContentLoaded", function () {
  // Gestion des clics sur les liens de navigation (menu principal et modal mobile)
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      const mobileMenuModal = document.getElementById("mobileMenuModal");
      const menuBtn = document.querySelector(".mobile-menu-btn i");
      const targetId = link.getAttribute("href").substring(1); // Récupère l'ID sans le '#'
      const targetElement = document.getElementById(targetId);

      // Si le modal est ouvert, le fermer
      if (mobileMenuModal && mobileMenuModal.style.display === "block") {
        mobileMenuModal.style.display = "none";
        menuBtn.classList.remove("ri-close-line");
        menuBtn.classList.add("ri-menu-line");
        document.body.style.overflow = "auto";
      }

      // Défilement vers la section ciblée
      if (targetElement) {
        event.preventDefault(); // Empêche le comportement par défaut pour un contrôle manuel
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Gestion du formulaire de réservation
  const bookingForm = document.querySelector(".booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert(
        "Votre réservation a été enregistrée avec succès ! Vous recevrez une confirmation par email et par SMS."
      );
      closeBookingModal();
    });
  }
});

function toggleMobileMenu() {
  const mobileMenuModal = document.getElementById("mobileMenuModal");
  const menuBtn = document.querySelector(".mobile-menu-btn i");
  const navLinks = document.querySelector("header .nav-links"); // menu principal
  const modalContent = mobileMenuModal.querySelector(".mobile-menu-modal-content");

  if (mobileMenuModal.style.display === "block") {
    // 🔹 Si le menu est déjà ouvert → on le ferme
    mobileMenuModal.style.display = "none";
    menuBtn.classList.remove("ri-close-line");
    menuBtn.classList.add("ri-menu-line");
    document.body.style.overflow = "auto";
  } else {
    // 🔹 Si le menu est fermé → on l’ouvre
    // On copie les liens du menu principal dans le modal
    const clonedLinks = navLinks.cloneNode(true);
    // On vide le contenu actuel pour éviter les doublons
    modalContent.innerHTML = `<span class="close" onclick="closeMobileMenu()">&times;</span>`;
    modalContent.appendChild(clonedLinks);

    // On affiche le modal
    mobileMenuModal.style.display = "block";
    menuBtn.classList.remove("ri-menu-line");
    menuBtn.classList.add("ri-close-line");
    document.body.style.overflow = "hidden";
  }
}


function closeMobileMenu() {
  const mobileMenuModal = document.getElementById("mobileMenuModal");
  const menuBtn = document.querySelector(".mobile-menu-btn i");

  mobileMenuModal.style.display = "none";
  menuBtn.classList.remove("ri-close-line");
  menuBtn.classList.add("ri-menu-line");
  document.body.style.overflow = "auto";
}

function openBookingModal() {
  document.getElementById("bookingModal").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeBookingModal() {
  document.getElementById("bookingModal").style.display = "none";
  document.body.style.overflow = "auto";
  resetBookingForm();
}

function resetBookingForm() {
  document.getElementById("bookingForm").reset();
  document.getElementById("groupInfoBlock").style.display = "none";
  document.getElementById("paymentBlock").style.display = "block";
  document.getElementById("cardPaymentFields").style.display = "none";
  document.getElementById("mobileMoneyFields").style.display = "none";
}

function handleTicketTypeChange() {
  const ticketType = document.getElementById("ticketType").value;
  const groupInfoBlock = document.getElementById("groupInfoBlock");
  const paymentBlock = document.getElementById("paymentBlock");

  if (ticketType === "groupe") {
    groupInfoBlock.style.display = "block";
    paymentBlock.style.display = "none";
  } else if (ticketType === "jeune") {
    groupInfoBlock.style.display = "none";
    paymentBlock.style.display = "none";
  } else {
    groupInfoBlock.style.display = "none";
    paymentBlock.style.display = "block";
  }
}

function handlePaymentMethodChange() {
  const paymentMethod = document.getElementById("paymentMethod").value;
  const cardFields = document.getElementById("cardPaymentFields");
  const mobileMoneyFields = document.getElementById("mobileMoneyFields");

  if (paymentMethod === "carte") {
    cardFields.style.display = "block";
    mobileMoneyFields.style.display = "none";
  } else if (paymentMethod === "mobilemoney") {
    cardFields.style.display = "none";
    mobileMoneyFields.style.display = "block";
  } else {
    cardFields.style.display = "none";
    mobileMoneyFields.style.display = "none";
  }
}

function openVisitModal() {
  document.getElementById("visitModal").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeVisitModal() {
  document.getElementById("visitModal").style.display = "none";
  document.body.style.overflow = "auto";
}

function showTab(tabName) {
  const tabs = document.querySelectorAll(".tab-content");
  const btns = document.querySelectorAll(".tab-btn");

  tabs.forEach((tab) => tab.classList.remove("active"));
  btns.forEach((btn) => btn.classList.remove("active"));

  document.getElementById(tabName + "-tab").classList.add("active");
  event.target.classList.add("active");
}

function openModal(type) {
  const modal = document.getElementById("detailModal");
  const content = document.getElementById("modalContent");

  const modalData = {
    baobab: {
      title: "Le Baobab Monumental",
      image: "attached_assets/baobab_1759707629197.png",
      sections: [
        {
          title: "L'Œuvre",
          content: `<p><strong>"The Saga of the Baobab"</strong> est une sculpture monumentale en acier corten de 12 mètres de haut et pesant 22 tonnes, créée par l'artiste haïtien <strong>Édouard Duval-Carrié</strong>.</p>
          <p>Installée au cœur de l'atrium central du musée, cette œuvre magistrale a été inaugurée le 6 décembre 2018 lors de l'ouverture du Musée des Civilisations Noires.</p>`,
        },
        {
          title: "Symbolisme",
          content: `<p>Le baobab est l'un des symboles les plus puissants d'Afrique. Cet arbre millénaire incarne :</p>
          <ul>
            <li>La sagesse ancestrale et la longévité</li>
            <li>Le lien entre les générations passées et futures</li>
            <li>La résilience des civilisations africaines</li>
            <li>Le point de rassemblement communautaire traditionnel</li>
          </ul>`,
        },
        {
          title: "L'Artiste",
          content: `<p><strong>Édouard Duval-Carrié</strong> (né en 1954) est un peintre et sculpteur haïtien de renommée internationale. Pour cette contribution exceptionnelle, il a été décoré de l'<strong>Ordre National du Lion, Chevalier</strong> par le Sénégal.</p>
          <p>L'œuvre symbolise les liens profonds entre Haïti et l'Afrique de l'Ouest, témoignant de l'interconnexion de la diaspora africaine mondiale.</p>`,
        },
        {
          title: "Architecture & Expérience",
          content: `<p>La sculpture est visible depuis les quatre niveaux d'exposition du musée, servant de point de référence visuel pour les visiteurs qui circulent dans les espaces circulaires inspirés des cases à impluvium de Casamance et du Grand Zimbabwe.</p>
          <p>La patine rouillée de l'acier corten donne au baobab un aspect organique et ancien qui contraste magnifiquement avec l'architecture moderne du musée.</p>`,
        },
      ],
    },
  };

  if (modalData[type]) {
    const data = modalData[type];
    let html = `<h2>${data.title}</h2>`;

    if (data.image) {
      html += `<img src="${data.image}" alt="${data.title}" class="modal-detail-image">`;
    }

    data.sections.forEach((section) => {
      html += `<div class="detail-section">`;
      html += `<h3>${section.title}</h3>`;
      html += section.content;
      html += `</div>`;
    });

    content.innerHTML = html;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

function closeModal() {
  document.getElementById("detailModal").style.display = "none";
  document.body.style.overflow = "auto";
}

function openEventModal(eventType) {
  const modal = document.getElementById("detailModal");
  const content = document.getElementById("modalContent");

  const eventData = {
    restitutions: {
      title: "Conférence : Les restitutions du patrimoine africain",
      image: "attached_assets/festivite_1759707620074.png",
      content: `
        <p><strong>Date</strong> : 15 Novembre 2024<br>
        <strong>Heure</strong> : 14h00<br>
        <strong>Lieu</strong> : Auditorium du Musée</p>
      `,
    },
  };

  if (eventData[eventType]) {
    const data = eventData[eventType];
    let html = `<h2>${data.title}</h2>`;
    if (data.image) {
      html += `<img src="${data.image}" alt="${data.title}" class="modal-detail-image">`;
    }
    html += `<div class="detail-section">${data.content}</div>`;

    content.innerHTML = html;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

window.onclick = function (event) {
  const bookingModal = document.getElementById("bookingModal");
  const visitModal = document.getElementById("visitModal");
  const detailModal = document.getElementById("detailModal");
  const mobileMenuModal = document.getElementById("mobileMenuModal");

  if (event.target === bookingModal) {
    closeBookingModal();
  }
  if (event.target === visitModal) {
    closeVisitModal();
  }
  if (event.target === detailModal) {
    closeModal();
  }
  if (event.target === mobileMenuModal) {
    closeMobileMenu();
  }
};