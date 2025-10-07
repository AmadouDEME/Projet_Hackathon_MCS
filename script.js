function openBookingModal() {
  document.getElementById('bookingModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  document.getElementById('bookingModal').style.display = 'none';
  document.body.style.overflow = 'auto';
  resetBookingForm();
}

function resetBookingForm() {
  document.getElementById('bookingForm').reset();
  document.getElementById('groupInfoBlock').style.display = 'none';
  document.getElementById('paymentBlock').style.display = 'block';
  document.getElementById('cardPaymentFields').style.display = 'none';
  document.getElementById('mobileMoneyFields').style.display = 'none';
}

function handleTicketTypeChange() {
  const ticketType = document.getElementById('ticketType').value;
  const groupInfoBlock = document.getElementById('groupInfoBlock');
  const paymentBlock = document.getElementById('paymentBlock');

  if (ticketType === 'groupe') {
    groupInfoBlock.style.display = 'block';
    paymentBlock.style.display = 'none';
  } else if (ticketType === 'jeune') {
    groupInfoBlock.style.display = 'none';
    paymentBlock.style.display = 'none';
  } else {
    groupInfoBlock.style.display = 'none';
    paymentBlock.style.display = 'block';
  }
}

function handlePaymentMethodChange() {
  const paymentMethod = document.getElementById('paymentMethod').value;
  const cardFields = document.getElementById('cardPaymentFields');
  const mobileMoneyFields = document.getElementById('mobileMoneyFields');

  if (paymentMethod === 'carte') {
    cardFields.style.display = 'block';
    mobileMoneyFields.style.display = 'none';
  } else if (paymentMethod === 'mobilemoney') {
    cardFields.style.display = 'none';
    mobileMoneyFields.style.display = 'block';
  } else {
    cardFields.style.display = 'none';
    mobileMoneyFields.style.display = 'none';
  }
}

function openVisitModal() {
  document.getElementById('visitModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeVisitModal() {
  document.getElementById('visitModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

function showTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  const btns = document.querySelectorAll('.tab-btn');

  tabs.forEach(tab => tab.classList.remove('active'));
  btns.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabName + '-tab').classList.add('active');
  event.target.classList.add('active');
}

function openModal(type) {
  const modal = document.getElementById('detailModal');
  const content = document.getElementById('modalContent');

  const modalData = {
    'baobab': {
      title: 'Le Baobab Monumental',
      image: 'attached_assets/baobab_1759707629197.png',
      sections: [
        {
          title: 'L\'Œuvre',
          content: `<p><strong>"The Saga of the Baobab"</strong> est une sculpture monumentale en acier corten de 12 mètres de haut et pesant 22 tonnes, créée par l'artiste haïtien <strong>Édouard Duval-Carrié</strong>.</p>
          <p>Installée au cœur de l'atrium central du musée, cette œuvre magistrale a été inaugurée le 6 décembre 2018 lors de l'ouverture du Musée des Civilisations Noires.</p>`
        },
        {
          title: 'Symbolisme',
          content: `<p>Le baobab est l'un des symboles les plus puissants d'Afrique. Cet arbre millénaire incarne :</p>
          <ul>
            <li>La sagesse ancestrale et la longévité</li>
            <li>Le lien entre les générations passées et futures</li>
            <li>La résilience des civilisations africaines</li>
            <li>Le point de rassemblement communautaire traditionnel</li>
          </ul>`
        },
        {
          title: 'L\'Artiste',
          content: `<p><strong>Édouard Duval-Carrié</strong> (né en 1954) est un peintre et sculpteur haïtien de renommée internationale. Pour cette contribution exceptionnelle, il a été décoré de l'<strong>Ordre National du Lion, Chevalier</strong> par le Sénégal.</p>
          <p>L'œuvre symbolise les liens profonds entre Haïti et l'Afrique de l'Ouest, témoignant de l'interconnexion de la diaspora africaine mondiale.</p>`
        },
        {
          title: 'Architecture & Expérience',
          content: `<p>La sculpture est visible depuis les quatre niveaux d'exposition du musée, servant de point de référence visuel pour les visiteurs qui circulent dans les espaces circulaires inspirés des cases à impluvium de Casamance et du Grand Zimbabwe.</p>
          <p>La patine rouillée de l'acier corten donne au baobab un aspect organique et ancien qui contraste magnifiquement avec l'architecture moderne du musée.</p>`
        }
      ]
    },
    'bronzes': {
      title: 'Tête d\'Oba Oguola - Bronze du Bénin',
      image: 'attached_assets/bronze_1759707567697.png',
      sections: [
        {
          title: 'Oba Oguola : Le Fondateur de la Tradition',
          content: `<p><strong>Oba Oguola</strong> fut le cinquième Oba du Royaume du Bénin, régnant de 1280 à 1295 après J.-C. Son règne marqua un tournant décisif dans l'histoire artistique africaine.</p>
          <p><strong>Réalisations majeures</strong> :</p>
          <ul>
            <li>Construction des premiers et deuxièmes fossés autour de la Cité du Bénin pour la protéger</li>
            <li>Victoire à la bataille d'Urhezen contre le souverain Akpanigiakon d'Udo</li>
            <li><strong>Fondateur de l'art du bronze au Bénin</strong> - établit cette tradition au XIVe siècle</li>
          </ul>
          <p>Selon la tradition, l'Ooni d'Ife envoya son fils Ezohe enseigner la fonte du bronze. Ezohe laissa son propre fils, Igueghae, né à Bénin, pour continuer à produire du bronze pour l'Oba.</p>`
        },
        {
          title: 'L\'Art du Bronze - Héritage d\'Oguola',
          content: `<p>L'art de la fonte du bronze fut placé sous la direction héréditaire de l'Ine N'Igun Eronmwon, permettant au royaume de produire certaines des plus belles têtes en bronze d'Afrique.</p>
          <p><strong>Organisation du métier</strong> :</p>
          <ul>
            <li>Guilde fermée occupant leur propre rue près du palais</li>
            <li>Fondeurs autorisés à travailler uniquement pour l'Oba, sous peine de mort</li>
            <li>Techniques améliorées par les Obas successifs</li>
            <li>Utilisation de manilles (lingots de laiton portugais) comme source de métal dès le XVe siècle</li>
          </ul>`
        },
        {
          title: 'Technique de la Cire Perdue',
          content: `<p>Les fondeurs béninois utilisaient la technique sophistiquée de la <strong>cire perdue</strong> :</p>
          <ul>
            <li>Un modèle détaillé est façonné en cire sur un noyau d'argile</li>
            <li>L'argile est appliquée sur la cire, puis chauffée</li>
            <li>La cire fond et s'écoule par un canal</li>
            <li>Le métal en fusion est versé dans le moule</li>
            <li>Une fois refroidi, l'argile est retirée, révélant la sculpture</li>
          </ul>
          <p>Cette technique, probablement introduite par Iguéghaé entre 1325 et 1380, fut influencée par le Royaume d'Ifé voisin.</p>`
        },
        {
          title: 'Types de Sculptures',
          content: `<p>Les collections comprennent :</p>
          <ul>
            <li><strong>Plaques en relief</strong> : Scènes historiques commémorant événements majeurs</li>
            <li><strong>Têtes royales</strong> : Environ 170 têtes symbolisant le pouvoir et la sagesse, certaines datant du XIIe siècle</li>
            <li><strong>Statuettes de nobles</strong> : Témoignages du statut des dignitaires</li>
            <li><strong>Figures mythologiques</strong> : Représentations des croyances et légendes</li>
          </ul>
          <p><strong>Caractéristiques stylistiques</strong> : Tête grossie, grands yeux expressifs, nez segmenté avec précision.</p>`
        },
        {
          title: 'Fonction Rituelle',
          content: `<p>Créées pour la cour royale de l'Oba (roi), ces œuvres servaient à :</p>
          <ul>
            <li>Décorer les autels ancestraux des Obas et Reines mères</li>
            <li>Honorer les ancêtres lors de rituels</li>
            <li>Valider l'accession d'un nouvel Oba</li>
            <li>Renforcer symboliquement le pouvoir royal</li>
          </ul>`
        },
        {
          title: 'Histoire Coloniale & Restitution',
          content: `<p>En 1897, l'expédition punitive britannique dirigée par Harry Rawson a saisi ces œuvres. Environ 200 furent remises au British Museum, le reste dispersé dans les musées mondiaux.</p>
          <p>Depuis 2021, un mouvement international de restitution est en cours. L'Allemagne a transféré plus d'un millier d'objets au Nigeria en 2022, marquant un tournant historique dans la justice patrimoniale.</p>
          <p>Felix von Luschan du Musée d'Ethnologie de Berlin témoigna : <em>"Techniquement, ces bronzes représentent la plus grande réussite possible qui soit"</em>.</p>`
        }
      ]
    },
    'masques': {
      title: 'Masques Traditionnels Ouest-Africains',
      image: 'attached_assets/masque_1759707714666.png',
      sections: [
        {
          title: 'Essence Sacrée',
          content: `<p>Les masques traditionnels d'Afrique de l'Ouest sont bien plus que des sculptures : ce sont des <strong>auxiliaires liturgiques sacrés</strong> au cœur de la vie socio-religieuse africaine.</p>
          <p>Le porteur de masque, souvent en état de transe, perd son identité humaine pour incarner l'esprit représenté. Le masque sert de médiateur entre le monde des vivants et celui des ancêtres, des esprits et des déités.</p>`
        },
        {
          title: 'Fonctions Rituelles',
          content: `<p>Les masques participent à quatre catégories principales de rituels :</p>
          <ul>
            <li><strong>Rites de passage</strong> : Naissances, initiations, mariages, funérailles</li>
            <li><strong>Rituels spirituels</strong> : Communication avec les ancêtres, protection contre esprits malveillants, guérison</li>
            <li><strong>Rituels agraires</strong> : Assurer bonnes récoltes, protection des semailles, chasse</li>
            <li><strong>Justice sociale</strong> : Maintien de l'ordre, punition des coupables, règlement de conflits</li>
          </ul>`
        },
        {
          title: 'Le Rituel Complet',
          content: `<p>Le masque n'est jamais porté seul :</p>
          <ul>
            <li><strong>Costume complet</strong> en raphia, fibres, tissus ornés de cauris</li>
            <li><strong>Musique et danse</strong> comme éléments intégraux</li>
            <li><strong>Transe du danseur</strong> habité par l'esprit</li>
            <li><strong>Messages des ancêtres</strong> transmis via cris ou grognements, interprétés par un sage</li>
          </ul>
          <p>Ces "mascarades" spectaculaires mêlent jeu et sacré, avec une fonction cathartique permettant d'exorciser les angoisses collectives.</p>`
        },
        {
          title: 'Principaux Masques par Ethnie',
          content: `<ul>
            <li><strong>Dogon (Mali)</strong> : Kanaga (cruciforme), Sirigé, Satimbe - 78 types liés aux cultes des morts (Awa), esprits (Bini) et nature (Lebe)</li>
            <li><strong>Baoulé (Côte d'Ivoire)</strong> : Goli, Mblo, Kpan - Festivals d'ancêtres, divination, guérison. Rouges (masculins), noirs (féminins)</li>
            <li><strong>Punu (Gabon)</strong> : Masques blancs féminins idéalisés avec longs cils incurvés, yeux en amande</li>
            <li><strong>Yoruba (Nigeria/Bénin)</strong> : Gelede (masques-ventres), Egungun - Fertilité, maternité</li>
            <li><strong>Bwa (Burkina Faso)</strong> : Masques peints géométriques (hibou) - Protection, fertilité, équilibre cosmique</li>
          </ul>`
        },
        {
          title: 'Symbolisme',
          content: `<ul>
            <li><strong>Ancêtres</strong> : Kaolin blanc représentant le monde des morts</li>
            <li><strong>Animaux totems</strong> : Buffle, antilope, hyène (puissance, sagesse, fertilité)</li>
            <li><strong>Beauté féminine</strong> : Traits raffinés, scarifications ornementales</li>
            <li><strong>Personnages mythologiques</strong> : Rois, héros, déités spécifiques</li>
          </ul>
          <p><strong>Organisation sociale</strong> : Porteurs exclusivement masculins, sociétés initiatiques secrètes, hiérarchie stricte selon l'âge et le savoir.</p>`
        }
      ]
    },
    'contemporain': {
      title: 'Art Contemporain Africain - Abdoulaye Konaté',
      image: 'attached_assets/konate_1759707745239.png',
      sections: [
        {
          title: 'L\'Artiste',
          content: `<p><strong>Abdoulaye Konaté</strong> (né en 1953 à Diré, Mali) est l'un des artistes contemporains africains les plus influents de sa génération. Vivant et travaillant à Bamako, il est mondialement reconnu pour ses installations textiles monumentales.</p>
          <p>Formé à l'Institut National des Arts de Bamako (1972-1976) puis à La Havane, Cuba (1978-1985), il abandonne la peinture traditionnelle dans les années 1990 pour se consacrer aux tapisseries textiles.</p>`
        },
        {
          title: 'Technique Unique',
          content: `<p>Konaté crée des compositions textiles à grande échelle utilisant :</p>
          <ul>
            <li><strong>Tissus maliens traditionnels</strong> : Coton tissé et teint (souvent par des femmes)</li>
            <li><strong>Processus artisanal</strong> : Découpe, teinture, couture et assemblage de milliers de bandes</li>
            <li><strong>Échelle monumentale</strong> : Œuvres jusqu'à 9 mètres, réalisées avec assistants sur plusieurs mois</li>
            <li><strong>Style</strong> : Compositions abstraites et figuratives avec effets optiques saisissants</li>
          </ul>`
        },
        {
          title: 'Engagement Socio-Politique',
          content: `<p>Ses œuvres explorent des questions cruciales :</p>
          <ul>
            <li><strong>Épidémie du SIDA</strong> : Patchwork de 6000 m² pour la CAN 2002 à Bamako</li>
            <li><strong>Guerres et conflits</strong> : Série "Bosnie, Rwanda, Angola" (1995)</li>
            <li><strong>Droits humains & migrations</strong></li>
            <li><strong>Crises écologiques & déforestation</strong></li>
            <li><strong>Relations entre religion, pouvoir et mondialisation</strong></li>
            <li><strong>Identité culturelle mandingue</strong> : Série "Hommage aux chasseurs du Mandé"</li>
          </ul>`
        },
        {
          title: 'Œuvres Majeures',
          content: `<ul>
            <li><strong>"Hommage aux chasseurs du Mandé"</strong> (1994) : Société de chasseurs et culture mandingue</li>
            <li><strong>"Bleu no. 1"</strong> : Exploration de l'indigo, hommage aux traditions ouest-africaines (Metropolitan Museum, NY)</li>
            <li><strong>"Gris-gris blancs pour Israël et la Palestine"</strong> (2006) : Position politique sur crises globales</li>
            <li><strong>"Sambadio"</strong> (2024) : Textile de 9 mètres inspiré d'Ali Farka Touré</li>
            <li><strong>Séries récentes</strong> : Croix d'Agadez, Tombouctou-motifs, Motifs Wolof et Touareg</li>
          </ul>`
        },
        {
          title: 'Reconnaissance Internationale',
          content: `<p><strong>Expositions majeures</strong> :</p>
          <ul>
            <li>Venice Biennale (2017), Documenta 12 & 15 (Kassel)</li>
            <li>Centre Pompidou (Paris), Tate Modern (Londres)</li>
            <li>Metropolitan Museum (New York), MoMA</li>
          </ul>
          <p><strong>Distinctions</strong> : Officier de l'Ordre National du Mali, Chevalier de l'Ordre des Arts et des Lettres de France, Prix Léopold Sédar Senghor (Dak'Art 1996).</p>
          <p><strong>Leadership</strong> : Directeur fondateur du Conservatoire des Arts et Métiers Multimédia Balla Fasséké Kouyaté (CAMM-BFK), Bamako.</p>
          <p><em>"Il y a deux lignes dans mon art : l'esthétique influencée par la nature et les traditions du Mali, et le côté spirituel qui enquête sur la souffrance humaine."</em> - Abdoulaye Konaté</p>`
        }
      ]
    },
    'tapisseries': {
      title: 'Peintures et Tapisseries - Soly Cissé',
      image: 'attached_assets/soly cisse_1759707558075.png',
      sections: [
        {
          title: 'Soly Cissé - L\'Artiste',
          content: `<p><strong>Né en 1969 à Dakar, Sénégal</strong>, Soly Cissé est un artiste multidisciplinaire majeur de l'art contemporain africain : peintre, sculpteur, photographe, vidéaste et scénographe.</p>
          <p><strong>Formation</strong> : Diplômé major de sa promotion de l'École Nationale des Beaux-Arts de Dakar en 1996.</p>
          <p><strong>Influence précoce</strong> : Enfant, il dessinait sur les radiographies que son père radiologue ramenait à la maison, ce qui a profondément marqué son travail sur la transparence, le jeu de lumière/ombre et l'utilisation de fonds noirs.</p>`
        },
        {
          title: 'Style & Technique',
          content: `<p><strong>Caractéristiques visuelles</strong> :</p>
          <ul>
            <li><strong>Fonds noirs</strong> comme point de départ (référence aux radiographies)</li>
            <li><strong>Couleurs intenses et vives</strong> : bleus profonds, jaunes, rouges, blancs</li>
            <li><strong>Coups de pinceau épais et dynamiques</strong>, application au couteau et à mains nues</li>
            <li><strong>Peinture néo-expressionniste</strong> avec énergie gestuelle</li>
          </ul>
          <p><strong>Sujets & Thèmes</strong> : Êtres hybrides mi-humains mi-animaux, créatures mythologiques, masques, totems, pictogrammes sénoufos, graffitis, codes-barres, lettres et chiffres dispersés.</p>
          <p><strong>Influences</strong> : Francis Bacon, Jean-Michel Basquiat, Picasso, Modigliani, Giacometti. Mélange de raw art, graffiti, pop art, expressionnisme, figuration libre.</p>`
        },
        {
          title: 'Œuvres & Parcours',
          content: `<p><strong>Séries majeures</strong> :</p>
          <ul>
            <li><strong>Black Books (2016)</strong> : Collages expérimentaux sur albums noirs</li>
            <li><strong>Série Poissons</strong> : Utilisation de goudron comme medium, thème pollution marine</li>
            <li><strong>MANATURE</strong> : Installation contestataire contre la pollution des eaux</li>
          </ul>
          <p><strong>Thématiques</strong> : Identité, exil, fanatisme religieux, dominations sociétales, rapport humain/nature, environnement.</p>`
        },
        {
          title: 'Reconnaissance Internationale',
          content: `<p><strong>Biennales internationales</strong> : São Paulo (1998), La Havane (2000), Dak'Art (2006), 11 participations au total.</p>
          <p><strong>Expositions majeures</strong> :</p>
          <ul>
            <li><strong>Africa Remix</strong> (2004-2007) : Düsseldorf, Centre Pompidou Paris, Londres, Tokyo, Johannesburg</li>
            <li>Rétrospective au Musée de Dakar (2008)</li>
            <li>Expositions personnelles à Paris, Lisbonne, Lyon, Bruxelles, New York</li>
          </ul>
          <p><strong>Collections</strong> : Centre Pompidou (Paris), Mori Art Museum (Tokyo), Jean Pigozzi Collection.</p>
          <p><strong>Impact</strong> : Considéré comme l'une des étoiles montantes de sa génération et figure majeure de l'art contemporain sénégalais sur la scène internationale. Il rejette "l'esprit colonialiste qui façonne encore les regards sur l'art africain".</p>`
        },
        {
          title: 'Techniques Traditionnelles',
          content: `<ul>
            <li><strong>Kente (Ghana)</strong> : Tissage de bandes de soie et coton aux motifs géométriques colorés, symbole royal ashanti</li>
            <li><strong>Bogolan (Mali)</strong> : Toile de coton teinte avec boue fermentée, motifs symboliques bambara</li>
            <li><strong>Ndop (Cameroun)</strong> : Indigo profond avec motifs réservés par couture, tissé sur métiers traditionnels</li>
            <li><strong>Adire (Nigeria)</strong> : Technique yoruba de teinture à réserve, motifs indigo complexes</li>
            <li><strong>Raphia du Congo</strong> : Fibres tissées avec broderies raffinées, utilisées dans cérémonies royales</li>
          </ul>`
        },
        {
          title: 'Symbolisme des Motifs',
          content: `<p>Chaque motif porte une signification profonde :</p>
          <ul>
            <li><strong>Motifs géométriques</strong> : Représentent l'ordre cosmique, l'harmonie universelle</li>
            <li><strong>Spirales</strong> : Cycle de la vie, continuité des générations</li>
            <li><strong>Losanges</strong> : Protection, fécondité</li>
            <li><strong>Lignes brisées</strong> : Chemins de la vie, obstacles surmontés</li>
            <li><strong>Couleurs</strong> : Blanc (pureté, ancêtres), Rouge (vie, pouvoir), Noir (maturité, sagesse), Jaune/Or (richesse, royauté)</li>
          </ul>`
        },
        {
          title: 'Fonctions Sociales',
          content: `<p>Les textiles jouent des rôles cruciaux dans la société :</p>
          <ul>
            <li><strong>Marqueurs de statut</strong> : Certains tissus réservés à la royauté ou aux initiés</li>
            <li><strong>Rites de passage</strong> : Pagnes spécifiques pour mariages, funérailles, naissances</li>
            <li><strong>Communication</strong> : Proverbes et messages codés dans les motifs</li>
            <li><strong>Monnaie d'échange</strong> : Valeur économique dans le commerce pré-colonial</li>
            <li><strong>Héritage culturel</strong> : Transmission des savoirs entre générations de tisserands</li>
          </ul>`
        },
        {
          title: 'Évolution Contemporaine',
          content: `<p>Les artistes contemporains réinventent ces traditions :</p>
          <ul>
            <li>Intégration de matériaux modernes (plastique recyclé, fils industriels)</li>
            <li>Dialogue entre techniques ancestrales et design contemporain</li>
            <li>Messages politiques et sociaux (environnement, droits humains)</li>
            <li>Reconnaissance internationale dans galeries et musées mondiaux</li>
          </ul>
          <p>Cette collection illustre comment les civilisations noires ont constamment renouvelé leur créativité textile, du traditionnel au contemporain, tout en préservant leur essence culturelle.</p>`
        }
      ]
    },
    'photographies': {
      title: 'Photographies et Vidéo Arts',
      image: 'attached_assets/conse_1759707613406.png',
      sections: [
        {
          title: 'Archives Photographiques',
          content: `<p>Cette collection rassemble des archives photographiques exceptionnelles documentant l'évolution des civilisations noires de la préhistoire à nos jours. Ces images constituent une mémoire visuelle irremplaçable.</p>
          <p>Les photographies couvrent :</p>
          <ul>
            <li>Portraits de leaders et personnalités historiques africaines</li>
            <li>Documentation des traditions et cérémonies ancestrales</li>
            <li>Évolution urbaine et architecturale des villes africaines</li>
            <li>Mouvements d'indépendance et luttes anticoloniales</li>
            <li>Diaspora africaine à travers les continents</li>
          </ul>`
        },
        {
          title: 'Pionniers de la Photographie Africaine',
          content: `<ul>
            <li><strong>Seydou Keïta (Mali, 1921-2001)</strong> : Portraitiste emblématique de Bamako, capturant l'élégance et la dignité des Maliens dans les années 1950-60</li>
            <li><strong>Malick Sidibé (Mali, 1935-2016)</strong> : Chroniqueur de la jeunesse malienne post-indépendance, "l'œil de Bamako"</li>
            <li><strong>Samuel Fosso (Cameroun/RCA, né en 1962)</strong> : Maître de l'autoportrait, explorant identité et mémoire</li>
            <li><strong>J.D. 'Okhai Ojeikere (Nigeria, 1930-2014)</strong> : Documentariste des coiffures traditionnelles nigérianes</li>
          </ul>`
        },
        {
          title: 'Thématiques Documentées',
          content: `<p><strong>Traditions et Rituels</strong> :</p>
          <ul>
            <li>Cérémonies d'initiation et rites de passage</li>
            <li>Festivals et mascarades traditionnels</li>
            <li>Pratiques spirituelles et religieuses</li>
          </ul>
          <p><strong>Histoire Politique</strong> :</p>
          <ul>
            <li>Luttes anticoloniales et indépendances (1950-1970)</li>
            <li>Panafricanisme et unité africaine</li>
            <li>Mouvements des droits civiques dans la diaspora</li>
          </ul>
          <p><strong>Vie Quotidienne</strong> :</p>
          <ul>
            <li>Scènes de marché et commerce traditionnel</li>
            <li>Mode et esthétique africaine à travers les décennies</li>
            <li>Transformation des espaces urbains</li>
          </ul>`
        },
        {
          title: 'Installations Vidéo',
          content: `<p>Les installations vidéo contemporaines explorent :</p>
          <ul>
            <li><strong>Mémoire et diaspora</strong> : Récits visuels sur migration et identité fragmentée</li>
            <li><strong>Africanité moderne</strong> : Vision contemporaine des civilisations africaines</li>
            <li><strong>Archives en mouvement</strong> : Réinterprétation de documents historiques</li>
            <li><strong>Performance et corps</strong> : Le corps comme site de mémoire culturelle</li>
          </ul>
          <p>Artistes majeurs : Isaac Julien, Yinka Shonibare, Kader Attia, Pascale Marthine Tayou.</p>`
        },
        {
          title: 'Fonction Archivistique',
          content: `<p>Cette collection remplit plusieurs fonctions essentielles :</p>
          <ul>
            <li><strong>Préservation patrimoniale</strong> : Sauvegarde d'images rares et menacées</li>
            <li><strong>Contre-narration</strong> : Alternative aux représentations coloniales stéréotypées</li>
            <li><strong>Éducation visuelle</strong> : Ressource pédagogique pour comprendre l'histoire africaine</li>
            <li><strong>Recherche académique</strong> : Source primaire pour historiens et chercheurs</li>
            <li><strong>Fierté identitaire</strong> : Célébration de la beauté, dignité et richesse des civilisations noires</li>
          </ul>
          <p>Ces images témoignent que l'histoire africaine ne commence pas avec la colonisation, mais s'inscrit dans une continuité millénaire de créativité, innovation et humanité.</p>`
        }
      ]
    },
    'niveau1': {
      title: 'Niveau 1 : L\'Afrique, Berceau de l\'Humanité',
      image: 'attached_assets/afrique_1759707547579.png',
      sections: [
        {
          title: 'Les Origines de l\'Humanité',
          content: `<p>Les découvertes scientifiques ont établi de manière irréfutable que <strong>l'Afrique est le berceau de l'humanité</strong>. C'est sur ce continent que nos ancêtres ont fait leurs premiers pas il y a des millions d'années.</p>
          <p>Ce niveau expose les preuves archéologiques et paléontologiques qui racontent cette extraordinaire histoire.</p>`
        },
        {
          title: 'Découvertes Majeures',
          content: `<ul>
            <li><strong>Lucy (Australopithecus afarensis)</strong> : Découverte en Éthiopie en 1974, datée de 3,2 millions d'années, preuve de la bipédie précoce</li>
            <li><strong>Toumaï (Sahelanthropus tchadensis)</strong> : Crâne découvert au Tchad (2001), 7 millions d'années, l'un des plus anciens hominidés connus</li>
            <li><strong>Homo habilis</strong> : Premiers fabricants d'outils (2,4-1,4 millions d'années), gorges d'Olduvai (Tanzanie)</li>
            <li><strong>Homo erectus</strong> : Premier à maîtriser le feu et à migrer hors d'Afrique (1,9 million d'années)</li>
            <li><strong>Homo sapiens</strong> : Émergence en Afrique orientale il y a 300 000 ans</li>
          </ul>`
        },
        {
          title: 'Outils et Technologies Préhistoriques',
          content: `<p>Cette section présente les premiers outils créés par l'humanité :</p>
          <ul>
            <li><strong>Outils oldowayens</strong> : Galets taillés simples (2,6 millions d'années)</li>
            <li><strong>Bifaces acheuléens</strong> : Outils symétriques sophistiqués (1,7 million d'années)</li>
            <li><strong>Pointes de lance</strong> : Armes de chasse spécialisées (500 000 ans)</li>
            <li><strong>Art rupestre</strong> : Premières expressions artistiques (40 000 ans)</li>
          </ul>
          <p>Ces innovations témoignent de l'ingéniosité précoce de nos ancêtres africains.</p>`
        },
        {
          title: 'Sites Archéologiques Majeurs',
          content: `<ul>
            <li><strong>Gorges d'Olduvai (Tanzanie)</strong> : "Berceau de l'humanité", fouilles des Leakey</li>
            <li><strong>Vallée de l'Omo (Éthiopie)</strong> : Plus anciens fossiles d'Homo sapiens</li>
            <li><strong>Grotte de Blombos (Afrique du Sud)</strong> : Art symbolique précoce, perles en coquillages (75 000 ans)</li>
            <li><strong>Djebel Irhoud (Maroc)</strong> : Fossiles d'Homo sapiens de 300 000 ans</li>
            <li><strong>Sterkfontein (Afrique du Sud)</strong> : "Berceau de l'humanité", site UNESCO</li>
          </ul>`
        },
        {
          title: 'Migration "Out of Africa"',
          content: `<p>L'Afrique n'est pas seulement le lieu de naissance de l'humanité, mais aussi le point de départ des grandes migrations qui ont peuplé la planète :</p>
          <ul>
            <li><strong>Première vague</strong> : Homo erectus quitte l'Afrique il y a 1,9 million d'années</li>
            <li><strong>Deuxième vague</strong> : Homo sapiens migre vers le Moyen-Orient (120 000-90 000 ans)</li>
            <li><strong>Peuplement mondial</strong> : Expansion vers l'Asie (70 000 ans), Europe (45 000 ans), Amériques (15 000 ans)</li>
          </ul>
          <p>Les études génétiques confirment que <strong>tous les humains modernes partagent une ascendance africaine commune</strong>. Nous sommes tous, fondamentalement, africains.</p>
          <p>Ce niveau célèbre donc non seulement les origines africaines de l'humanité, mais aussi la contribution primordiale de l'Afrique à l'histoire humaine universelle.</p>`
        }
      ]
    },
    'niveau2': {
      title: 'Niveau 2 : Grands Empires Africains',
      image: 'attached_assets/chateau_1759707604033.png',
      sabreImage: 'attached_assets/sabre_1759707596682.png',
      sections: [
        {
          title: 'Les Grands Empires Africains',
          content: `<p>L'Afrique a été le théâtre de grandes civilisations et empires qui ont prospéré bien avant la colonisation européenne. Ces royaumes sophistiqués possédaient des structures politiques complexes, une économie florissante et un rayonnement culturel remarquable.</p>
          <p>Cette salle présente des objets historiques provenant de plusieurs grands empires :</p>
          <ul>
            <li><strong>Empire du Mali</strong> (1235-1670) : Fondé par Soundiata Keïta, célèbre pour Mansa Moussa et Tombouctou</li>
            <li><strong>Empire Songhaï</strong> (1464-1591) : Contrôlait les routes commerciales trans-sahariennes</li>
            <li><strong>Royaume du Bénin</strong> (XIIe-XIXe siècle) : Renommé pour ses bronzes et son organisation militaire</li>
            <li><strong>Empire du Ghana</strong> (300-1240) : Premier grand empire ouest-africain, "pays de l'or"</li>
            <li><strong>Royaume du Kongo</strong> (1390-1914) : Puissant État d'Afrique centrale</li>
          </ul>`
        },
        {
          title: 'Architecture Monumentale : La Grande Mosquée de Djenné',
          content: `<p>L'image présentée montre la <strong>Grande Mosquée de Djenné</strong> au Mali, le plus grand édifice en terre crue du monde et chef-d'œuvre de l'architecture soudano-sahélienne.</p>
          <ul>
            <li><strong>Construction</strong> : Édifice actuel reconstruit en 1907 sur les fondations d'une mosquée du XIIIe siècle</li>
            <li><strong>Architecture</strong> : Style banco (terre crue mélangée à paille et beurre de karité), résistant au climat sahélien</li>
            <li><strong>Dimensions</strong> : 75 mètres de long, 75 mètres de large, murs de 16 mètres de haut</li>
            <li><strong>Caractéristiques</strong> : Trois tours-minarets, poutres en bois de palmier (toron) dépassant des murs pour faciliter l'entretien</li>
            <li><strong>Patrimoine UNESCO</strong> : Inscrite depuis 1988</li>
            <li><strong>Tradition vivante</strong> : Récrépissage annuel collectif lors du festival, mobilisant toute la communauté</li>
          </ul>
          <p>Djenné fut un centre intellectuel et commercial majeur de l'Empire du Mali, abritant des savants, des commerçants et des artisans réputés.</p>`
        },
        {
          title: 'Le Sabre d\'El Hadj Omar Tall',
          content: `<p>Parmi les objets les plus emblématiques de cette collection figure le <strong>célèbre sabre d'El Hadj Omar Tall</strong>, symbole de la résistance anticoloniale africaine du XIXe siècle.</p>
          <img src="attached_assets/sabre_1759707596682.png" alt="Sabre d'El Hadj Omar Tall" class="modal-sabre-image">`
        },
        {
          title: 'El Hadj Omar Tall : Le Personnage Historique',
          content: `<p><strong>El Hadj Omar Tall</strong> (vers 1794-1864) fut un érudit musulman, chef de guerre et fondateur de l'Empire Toucouleur en Afrique occidentale.</p>
          <p><strong>Parcours exceptionnel</strong> :</p>
          <ul>
            <li><strong>1794</strong> : Naissance dans le Fouta-Toro (Sénégal actuel)</li>
            <li><strong>1828-1848</strong> : Pèlerinage de 18 ans à La Mecque, nommé <strong>calife de la confrérie Tijaniyya</strong> pour l'Afrique sub-saharienne</li>
            <li>Séjours à l'université Al-Azhar (Le Caire), Sokoto et Hamdallahi</li>
            <li><strong>1852</strong> : Lance son djihad depuis Dinguiraye (Guinée)</li>
            <li><strong>1856</strong> : Conquiert Nioro, capitale du Kaarta</li>
            <li><strong>1857</strong> : Siège de Médine, défait par Louis Faidherbe et l'armée française</li>
            <li><strong>1860</strong> : Traité de paix avec la France</li>
            <li><strong>1861-1862</strong> : Conquiert Ségou et Hamdallahi (plus de 70 000 morts à Hamdallahi)</li>
            <li><strong>1864</strong> : Disparition mystérieuse dans les falaises de Bandiagara (Mali)</li>
          </ul>
          <p>Son empire s'étendait sur les territoires actuels de la Guinée, du Sénégal, du Mali et de la Mauritanie.</p>`
        },
        {
          title: 'Le Sabre : Description & Histoire',
          content: `<p><strong>Description physique</strong> :</p>
          <ul>
            <li>Pièce composite de fer, laiton, cuivre, cuir et bois avec son étui/fourreau</li>
            <li>Lame forgée à <strong>Klingenthal</strong> (France) vers le milieu du XIXe siècle</li>
            <li>Poignée modifiée par un métallurgiste toucouleur</li>
            <li>Objet hybride franco-africain unique</li>
          </ul>
          <p><strong>Origine contestée</strong> : L'attribution à El Hadj Omar Tall fait débat chez les historiens. Aucune source historique ne mentionne qu'il possédait un sabre européen. Il fut probablement possédé par son fils Ahmadou Tall.</p>`
        },
        {
          title: 'Parcours Colonial et Restitution',
          content: `<p><strong>1893</strong> : Le Général Louis Archinard participe à la prise de Bandiagara (Mali). Les biens d'Ahmadou Tall sont confisqués comme butin de guerre. Archinard ramène le sabre en France.</p>
          <p><strong>1909</strong> : Archinard fait don du sabre au Musée de l'Armée à Paris (statut d'inaliénabilité).</p>
          <p><strong>Novembre 2017</strong> : Emmanuel Macron annonce à Ouagadougou une nouvelle politique de restitution du patrimoine africain.</p>
          <p><strong>17 novembre 2019</strong> : Le Premier ministre Édouard Philippe remet symboliquement le sabre au président sénégalais Macky Sall à Dakar (dépôt de 5 ans au MCN).</p>
          <p><strong>Décembre 2020</strong> : Vote d'une loi de restitution au Parlement français.</p>
          <p><strong>27 décembre 2020</strong> : <strong>Transfert définitif de propriété</strong> au Sénégal, première restitution d'objet culturel de la France vers l'Afrique dans ce cadre légal.</p>`
        },
        {
          title: 'Signification & Débats',
          content: `<p><strong>Symbole national</strong> : Pour le Sénégal, le sabre représente :</p>
          <ul>
            <li>Un symbole de résistance à la colonisation</li>
            <li>L'héritage d'un grand érudit et conquérant</li>
            <li>Un élément du patrimoine culturel national</li>
          </ul>
          <p><strong>Controverses historiques</strong> :</p>
          <ul>
            <li>El Hadj Omar mena des guerres d'islamisation violentes</li>
            <li>Son empire prospérait en partie grâce au trafic d'esclaves</li>
            <li>Il combattit d'autres royaumes africains, pas seulement les Français</li>
            <li>Sa mémoire est perçue différemment selon les pays : héros anticolonial au Sénégal, envahisseur au Mali</li>
          </ul>
          <p>Le sabre incarne ainsi les <strong>tensions mémorielles</strong> entre histoire coloniale, résistance africaine et complexité des empires précoloniaux. Il invite à une réflexion nuancée sur l'histoire africaine, loin des simplifications.</p>`
        }
      ]
    },
    'niveau3': {
      title: 'Niveau 3 : Arts et Traditions Populaires',
      image: 'attached_assets/populaire_1759707575343.png',
      sections: [
        {
          title: 'Diversité Culturelle Africaine',
          content: `<p>L'Afrique compte plus de 3000 groupes ethniques, chacun avec ses traditions, langues, musiques et expressions artistiques uniques. Ce niveau célèbre cette extraordinaire diversité culturelle qui fait la richesse du continent.</p>
          <p>Les arts et traditions populaires africains ne sont pas de simples objets décoratifs, mais des éléments vivants qui structurent la vie sociale, spirituelle et économique des communautés.</p>`
        },
        {
          title: 'Instruments de Musique',
          content: `<p>La musique africaine est fondamentale dans la transmission culturelle :</p>
          <ul>
            <li><strong>Djembé (Afrique de l'Ouest)</strong> : Tambour en peau de chèvre, cœur des célébrations mandingues</li>
            <li><strong>Kora (Sénégal, Mali, Guinée)</strong> : Harpe-luth à 21 cordes, instrument des griots</li>
            <li><strong>Balafon (Mali)</strong> : Xylophone en bois avec calebasses résonantes, patrimoine UNESCO</li>
            <li><strong>Mbira (Zimbabwe)</strong> : Lamellophone métallique, utilisé pour communiquer avec les ancêtres</li>
            <li><strong>Talking drum (Nigeria)</strong> : Tambour à cordes tendues imitant les tonalités de la parole</li>
            <li><strong>Ngoni (Mali)</strong> : Luth à cordes, ancêtre du banjo américain</li>
          </ul>
          <p>Ces instruments ne produisent pas seulement de la musique, ils "parlent", transmettent l'histoire orale, accompagnent les rituels et rythment la vie quotidienne.</p>`
        },
        {
          title: 'Masques et Sculptures',
          content: `<p>Les masques et sculptures occupent une place centrale dans les traditions spirituelles et sociales :</p>
          <ul>
            <li><strong>Statues d'ancêtres</strong> : Représentations sculptées gardant le lien avec les défunts</li>
            <li><strong>Fétiches et amulettes</strong> : Objets protecteurs chargés de pouvoir spirituel</li>
            <li><strong>Sceptres et insignes royaux</strong> : Symboles d'autorité politique et spirituelle</li>
            <li><strong>Masques de fertilité</strong> : Utilisés lors de rituels pour assurer la fécondité</li>
            <li><strong>Sculptures commémoratives</strong> : Honorer événements importants ou personnages illustres</li>
          </ul>
          <p>Chaque ethnie a développé son style distinctif : réalisme chez les Yoruba, stylisation géométrique chez les Dogon, expressionnisme chez les Fang.</p>`
        },
        {
          title: 'Peintures et Tapisseries',
          content: `<p>Les arts visuels racontent des histoires et préservent la mémoire collective :</p>
          <ul>
            <li><strong>Peintures murales</strong> : Décorations de cases et palais (fresques Ndebele d'Afrique du Sud)</li>
            <li><strong>Tissage Kente</strong> : Bandes de soie royales ashanti aux motifs codés</li>
            <li><strong>Bogolan</strong> : Toiles de boue malienne avec symboles bambara</li>
            <li><strong>Art parietal</strong> : Peintures rupestres du Tassili n'Ajjer (Algérie, 6000 av. J.-C.)</li>
            <li><strong>Teinture à réserve</strong> : Techniques indigo (adire yoruba, ndop camerounais)</li>
          </ul>`
        },
        {
          title: 'Artisanat et Savoir-Faire',
          content: `<p>Les traditions artisanales se transmettent de génération en génération :</p>
          <ul>
            <li><strong>Ferronnerie</strong> : Forgerons détenteurs de savoirs métallurgiques ancestraux</li>
            <li><strong>Poterie</strong> : Techniques de modelage sans tour (poterie berbère, jarres peules)</li>
            <li><strong>Vannerie</strong> : Tressage de fibres végétales (paniers, nattes, chapeaux)</li>
            <li><strong>Bijouterie</strong> : Orfèvrerie touareg, perles massaï, bijoux akan en or</li>
            <li><strong>Cuir travaillé</strong> : Maroquinerie traditionnelle (coussins touaregs, sandales peules)</li>
            <li><strong>Sculpture sur bois</strong> : Tabourets, portes sculptées, objets utilitaires artistiques</li>
          </ul>`
        },
        {
          title: 'Cérémonies et Traditions Vivantes',
          content: `<p>Les traditions se perpétuent à travers cérémonies et festivals :</p>
          <ul>
            <li><strong>Dama (Dogon)</strong> : Cérémonie funéraire avec masques, peut durer plusieurs jours</li>
            <li><strong>Gelede (Yoruba)</strong> : Festival de masques honorant les mères et ancêtres féminins</li>
            <li><strong>Timkat (Éthiopie)</strong> : Épiphanie orthodoxe avec processions et baptêmes collectifs</li>
            <li><strong>Laarim (Burkina Faso)</strong> : Initiation des jeunes hommes avec scarifications rituelles</li>
            <li><strong>Umhlanga (Swaziland)</strong> : Danse des roseaux, cérémonie de passage des jeunes filles</li>
          </ul>
          <p>Ces pratiques maintiennent la cohésion sociale, transmettent les valeurs et assurent la continuité culturelle face à la mondialisation. Elles témoignent de la vitalité des civilisations africaines, qui ne sont pas figées dans le passé mais en constante évolution créative.</p>`
        }
      ]
    },
    'niveau4': {
      title: 'Niveau 4 : Religions et Diaspora',
      image: 'attached_assets/festivite_1759707620074.png',
      sections: [
        {
          title: 'Religions Africaines',
          content: `<p>L'Afrique est le berceau de systèmes religieux complexes et sophistiqués, bien antérieurs aux religions abrahamiques. Ces spiritualités africaines ont profondément influencé les religions mondiales et persistent aujourd'hui sous diverses formes.</p>
          <p><strong>Religions traditionnelles africaines</strong> :</p>
          <ul>
            <li><strong>Animisme</strong> : Croyance en la présence d'esprits dans la nature (arbres, rivières, montagnes)</li>
            <li><strong>Culte des ancêtres</strong> : Communication et offrandes aux défunts qui veillent sur les vivants</li>
            <li><strong>Divinités et panthéons</strong> : Orishas (Yoruba), Lwas (Vodou), Nkisi (Kongo)</li>
            <li><strong>Cosmologies</strong> : Systèmes philosophiques expliquant l'origine du monde et le rôle humain</li>
          </ul>`
        },
        {
          title: 'Grandes Traditions Spirituelles',
          content: `<ul>
            <li><strong>Religion Yoruba (Nigeria)</strong> : Système complexe avec Olodumare (dieu suprême) et Orishas (divinités). Influence majeure sur religions afro-américaines</li>
            <li><strong>Vodou (Bénin/Togo)</strong> : Culte des Lwas, ancêtres divinisés. Exporté en Haïti, Louisiane, Cuba</li>
            <li><strong>Religion Akan (Ghana)</strong> : Nyame (dieu créateur), culte des Abosom (divinités mineures)</li>
            <li><strong>Traditions Kongo</strong> : Nzambi Mpungu (dieu suprême), pratiques rituelles sophistiquées</li>
            <li><strong>Christianisme éthiopien orthodoxe</strong> : L'une des plus anciennes églises chrétiennes (IVe siècle), traditions uniques</li>
            <li><strong>Islam africain</strong> : Présent depuis le VIIe siècle, syncrétisme avec traditions locales (confréries soufies)</li>
          </ul>`
        },
        {
          title: 'La Traite et la Diaspora Africaine',
          content: `<p>La traite transatlantique des esclaves (XVIe-XIXe siècles) a dispersé des millions d'Africains à travers le monde, créant la <strong>diaspora africaine</strong>.</p>
          <p><strong>Chiffres de la traite</strong> :</p>
          <ul>
            <li>12 à 15 millions d'Africains déportés vers les Amériques</li>
            <li>Millions d'autres morts pendant la capture et le transport (Middle Passage)</li>
            <li>Durée : environ 400 ans (1500-1888, abolition au Brésil)</li>
          </ul>
          <p><strong>Destinations principales</strong> : Brésil (40%), Caraïbes (40%), Amérique du Nord (5%), Amérique espagnole (15%)</p>`
        },
        {
          title: 'Syncrétisme Religieux dans la Diaspora',
          content: `<p>Arrachés à leur terre, les Africains ont préservé leurs spiritualités en les fusionnant avec les religions imposées :</p>
          <ul>
            <li><strong>Candomblé (Brésil)</strong> : Orishas yoruba associés à saints catholiques. Yemanja = Notre-Dame, Shango = Saint Jérôme</li>
            <li><strong>Santería (Cuba)</strong> : Religion lucumí mélangeant catholicisme et traditions yoruba</li>
            <li><strong>Vodou haïtien</strong> : Lwas du Bénin combinés aux saints catholiques et pratiques taïno</li>
            <li><strong>Hoodoo (USA)</strong> : Magie populaire afro-américaine, racines kongo et yoruba</li>
            <li><strong>Rastafari (Jamaïque)</strong> : Mouvement messianique considérant Hailé Sélassié comme divin, retour spirituel en Afrique</li>
          </ul>
          <p>Ce syncrétisme permit aux esclaves de préserver leur identité culturelle sous le masque de la conformité religieuse imposée.</p>`
        },
        {
          title: 'Mouvements Culturels et Politiques',
          content: `<p>La diaspora a produit des mouvements qui ont façonné l'histoire mondiale :</p>
          <p><strong>Panafricanisme</strong> :</p>
          <ul>
            <li>W.E.B. Du Bois, Marcus Garvey : Unité des peuples africains et diaspora</li>
            <li>Congrès panafricains (1919-1945)</li>
            <li>Indépendances africaines inspirées par la diaspora</li>
          </ul>
          <p><strong>Négritude</strong> :</p>
          <ul>
            <li>Aimé Césaire, Léopold Sédar Senghor, Léon-Gontran Damas</li>
            <li>Affirmation de l'identité noire, valorisation des cultures africaines</li>
            <li>Mouvement littéraire et politique (années 1930-1960)</li>
          </ul>
          <p><strong>Harlem Renaissance (USA, années 1920)</strong> : Explosion culturelle afro-américaine (Langston Hughes, Zora Neale Hurston, Duke Ellington)</p>
          <p><strong>Mouvement des droits civiques (USA, 1950-1960)</strong> : Martin Luther King Jr., Malcolm X, Rosa Parks - Lutte contre ségrégation raciale</p>
          <p><strong>Black Power (années 1960-1970)</strong> : Affirmation politique et culturelle, Panthères Noires, Angela Davis</p>`
        },
        {
          title: 'Héritage Culturel Global',
          content: `<p>La diaspora africaine a profondément enrichi la culture mondiale :</p>
          <p><strong>Musiques</strong> : Jazz, Blues, Gospel, Reggae, Samba, Salsa, Hip-hop, Afrobeat - Toutes ont des racines africaines</p>
          <p><strong>Langues créoles</strong> : Créole haïtien, Gullah (USA), Papiamento (Curaçao) - Mélanges d'africain et d'européen</p>
          <p><strong>Cuisines</strong> : Gumbo (Louisiane), Feijoada (Brésil), Jerk (Jamaïque) - Fusion de techniques africaines</p>
          <p><strong>Danses</strong> : Samba, Salsa, Merengue, Capoeira - Héritages directs de traditions africaines</p>
          <p>Ce niveau démontre que malgré l'horreur de l'esclavage, les peuples africains ont non seulement survécu mais ont transformé le monde par leur créativité, résilience et humanité. La diaspora africaine est une force culturelle mondiale qui continue de façonner notre présent et notre avenir collectif.</p>`
        }
      ]
    }
  };

  if (modalData[type]) {
    const data = modalData[type];
    let html = `<h2>${data.title}</h2>`;

    if (data.image) {
      html += `<img src="${data.image}" alt="${data.title}" class="modal-detail-image">`;
    }

    data.sections.forEach(section => {
      html += `<div class="detail-section">`;
      html += `<h3>${section.title}</h3>`;
      html += section.content;
      html += `</div>`;
    });

    if (data.sabreImage) {
      const sabreHTML = `<img src="${data.sabreImage}" alt="Sabre d'El Hadj Omar Tall" class="modal-sabre-image">`;
      html = html.replace('</div><div class="detail-section">', '</div>' + sabreHTML + '<div class="detail-section">');
    }

    content.innerHTML = html;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  document.getElementById('detailModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
  const bookingModal = document.getElementById('bookingModal');
  const visitModal = document.getElementById('visitModal');
  const detailModal = document.getElementById('detailModal');

  if (event.target == bookingModal) {
    closeBookingModal();
  }
  if (event.target == visitModal) {
    closeVisitModal();
  }
  if (event.target == detailModal) {
    closeModal();
  }
}

function openEventModal(eventType) {
  const modal = document.getElementById('detailModal');
  const content = document.getElementById('modalContent');

  const eventData = {
    'restitutions': {
      title: 'Conférence : Les restitutions du patrimoine africain',
      image: 'attached_assets/festivite_1759707620074.png',
      content: `
        <p><strong>Date</strong> : 15 Novembre 2024<br>
        <strong>Heure</strong> : 14h00<br>
        <strong>Lieu</strong> : Auditorium du Musée</p>

        <h3>À propos de la conférence</h3>
        <p>Rejoignez-nous pour une discussion cruciale sur les enjeux de la restitution des œuvres africaines conservées dans les musées européens. Cette conférence réunira des experts internationaux, des représentants de musées, et des leaders culturels africains.</p>

        <h3>Intervenants confirmés</h3>
        <ul>
          <li><strong>Dr. Hamady Bocoum</strong> - Ancien directeur du Musée des Civilisations Noires</li>
          <li><strong>Prof. Felwine Sarr</strong> - Co-auteur du rapport Savoy-Sarr sur la restitution du patrimoine</li>
          <li><strong>Bénédicte Savoy</strong> - Historienne de l'art, Collège de France</li>
        </ul>

        <h3>Thématiques abordées</h3>
        <ul>
          <li>Le contexte historique des spoliations coloniales</li>
          <li>Les cadres juridiques de la restitution</li>
          <li>Les exemples récents : le sabre d'El Hadj Omar Tall, les bronzes du Bénin</li>
          <li>L'impact culturel et symbolique des restitutions</li>
          <li>Les perspectives d'avenir pour le patrimoine africain</li>
        </ul>

        <p><strong>Entrée gratuite sur inscription</strong><br>
        Inscription obligatoire : contact@mcn.sn</p>
      `
    },
    'bronze': {
      title: 'Atelier : Sculptures en bronze',
      image: 'attached_assets/bronze_1759707567697.png',
      content: `
        <p><strong>Date</strong> : 22 Novembre 2024<br>
        <strong>Heure</strong> : 10h00 - 16h00<br>
        <strong>Lieu</strong> : Salle pédagogique</p>

        <h3>Description de l'atelier</h3>
        <p>Découvrez les techniques ancestrales de sculpture en bronze héritées du royaume du Bénin. Cet atelier pratique vous initiera à la méthode de la cire perdue, utilisée depuis le XIVe siècle par les maîtres fondeurs africains.</p>

        <h3>Programme</h3>
        <ul>
          <li><strong>10h00 - 11h30</strong> : Histoire des bronzes du Bénin et d'Oba Oguola</li>
          <li><strong>11h30 - 13h00</strong> : Démonstration de la technique de la cire perdue</li>
          <li><strong>13h00 - 14h00</strong> : Pause déjeuner</li>
          <li><strong>14h00 - 16h00</strong> : Atelier pratique - Création de votre propre sculpture</li>
        </ul>

        <h3>Animé par</h3>
        <p><strong>Maître Kofi Mensah</strong>, sculpteur béninois formé dans la tradition des guildes royales, continuateur des techniques ancestrales.</p>

        <p><strong>Places limitées à 15 participants</strong><br>
        Tarif : 5 000 FCFA (matériel fourni)<br>
        Inscription : contact@mcn.sn</p>
      `
    },
    'nocturne': {
      title: 'Visite nocturne : Collections permanentes',
      image: 'attached_assets/musee_1759707647448.webp',
      content: `
        <p><strong>Date</strong> : 6 Décembre 2024<br>
        <strong>Heure</strong> : 18h00 - 21h00<br>
        <strong>Lieu</strong> : Musée - Tous les niveaux</p>

        <h3>Une expérience unique</h3>
        <p>Découvrez nos 4 niveaux thématiques dans une atmosphère intimiste et mystérieuse. La visite nocturne offre une perspective différente sur nos collections, sublimées par un éclairage spécial qui met en valeur la beauté des œuvres.</p>

        <h3>Parcours de la visite</h3>
        <ul>
          <li><strong>Niveau 1</strong> : L'Afrique, berceau de l'humanité</li>
          <li><strong>Niveau 2</strong> : Grands empires africains (avec le sabre d'El Hadj Omar Tall)</li>
          <li><strong>Niveau 3</strong> : Arts et traditions populaires</li>
          <li><strong>Niveau 4</strong> : Religions et diaspora</li>
        </ul>

        <h3>Points forts</h3>
        <ul>
          <li>Visite guidée par des experts du musée</li>
          <li>Éclairage spécial pour sublimer les œuvres</li>
          <li>Performance musicale live de djembé et kora</li>
          <li>Cocktail et dégustation de spécialités sénégalaises</li>
        </ul>

        <p><strong>Places limitées</strong><br>
        Tarif : 3 500 FCFA (visite + cocktail)<br>
        Réservation obligatoire</p>
      `
    },
    'documentaires': {
      title: 'Projection : Documentaires sur les civilisations noires',
      image: 'attached_assets/conse_1759707613406.png',
      content: `
        <p><strong>Date</strong> : 14 Décembre 2024<br>
        <strong>Heure</strong> : 15h00 - 19h00<br>
        <strong>Lieu</strong> : Auditorium</p>

        <h3>Cycle de projections</h3>
        <p>Explorez l'histoire et la culture des peuples africains et de la diaspora à travers une sélection de documentaires primés et captivants.</p>

        <h3>Programme des projections</h3>
        <ul>
          <li><strong>15h00</strong> : "Lucy, l'Éthiopienne" (45 min) - Les origines de l'humanité en Afrique</li>
          <li><strong>16h00</strong> : "Les Empires oubliés" (50 min) - Mali, Songhaï, Bénin</li>
          <li><strong>17h00</strong> : Pause et débat avec le réalisateur</li>
          <li><strong>17h30</strong> : "Afrobeat Revolution" (60 min) - L'influence africaine sur la musique mondiale</li>
        </ul>

        <h3>Invité spécial</h3>
        <p><strong>Moussa Touré</strong>, réalisateur sénégalais primé à Cannes, sera présent pour un débat après la projection.</p>

        <h3>Discussion thématique</h3>
        <p>Les projections seront suivies d'une discussion sur le rôle du cinéma documentaire dans la préservation et la transmission de la mémoire africaine.</p>

        <p><strong>Entrée libre</strong> (dans la limite des places disponibles)<br>
        Auditorium de 200 places</p>
      `
    }
  };

  if (eventData[eventType]) {
    const data = eventData[eventType];
    let html = `<h2>${data.title}</h2>`;
    if (data.image) {
      html += `<img src="${data.image}" alt="${data.title}" class="modal-detail-image">`;
    }
    html += `<div class="detail-section">${data.content}</div>`;

    content.innerHTML = html;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const bookingForm = document.querySelector('.booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Votre réservation a été enregistrée avec succès ! Vous recevrez une confirmation par email et par SMS.');
      closeBookingModal();
    });
  }
});