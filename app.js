// ==========================================
// 1. DATA SOURCE: SQCDMN_Checklists JSON
// ==========================================
const SQCDMN_Checklists = {
  "Daily": {
    "Safety": [
      {
        "id": 1,
        "question": "Respect des Standards de Sécurité (EPI, LOTO) ?",
        "type": "single_choice",
        "options": ["100% objectif", "75%", "50%", "25%", "0%"],
        "comment_enabled": true
      },
      {
        "id": 2,
        "question": "Nombre de dialogues sécurité établis ?",
        "type": "number",
        "min": 0,
        "max": 10
      },
      {
        "id": 3,
        "question": "Nombre de fiches de risques ?",
        "type": "number",
        "min": 0,
        "max": 10
      },
      {
        "id": 4,
        "question": "Nombre d'incidents de la veille / presque accident ?",
        "type": "number",
        "min": 0,
        "max": 10
      },
      {
        "id": 5,
        "question": "Permis chantier ?",
        "type": "single_choice",
        "options": ["Tous les permis sont conformes", "Permis établis non signés", "Non conforme"],
        "comment_if_non_conforme": true
      }
    ],

    "Quality": [
      {
        "id": 6,
        "question": "Respect des 5S ?",
        "type": "single_choice",
        "options": ["Conforme", "Non conforme"],
        "comment_enabled": true
      },
      {
        "id": 7,
        "question": "Suivi des réclamations qualité ?",
        "type": "single_choice",
        "options": ["100%", "75%", "50%", "25%", "0%"]
      },
      {
        "id": 8,
        "question": "Respect des règles d'hygiène chantier (tenue, propreté) ?",
        "type": "single_choice",
        "options": ["Conforme", "Non conforme"],
        "comment_if_non_conforme": true
      },
      {
        "id": 9,
        "question": "Port Charlotte / Cash Bars ?",
        "type": "single_choice",
        "options": ["Conforme", "Non conforme"],
        "comment_if_non_conforme": true
      }
    ],

    "Delivery": [
      {
        "id": 10,
        "question": "Les actions de J-1 sont clôturées ?",
        "type": "single_choice",
        "options": ["Oui", "Non"],
        "comment_if_non_conforme": true
      },
      {
        "id": 11,
        "question": "Respect du planning chantier journalier ?",
        "type": "single_choice",
        "options": ["Conforme", "Non conforme"],
        "comment_if_non_conforme": true
      },
      {
        "id": 12,
        "question": "Risques watch-out / points à anticiper",
        "type": "text",
        "required": true
      }
    ],

    "Nature": [
      {
        "id": 13,
        "question": "Consommation électrique",
        "type": "single_choice",
        "options": ["Conforme", "Non conforme"]
      },
      {
        "id": 14,
        "question": "Consommation eau",
        "type": "single_choice",
        "options": ["Conforme", "Non conforme"]
      },
      {
        "id": 15,
        "question": "Bonnes / mauvaises pratiques constatées",
        "type": "text",
        "required": true
      }
    ],
    "Plan d'Action": [
      {
        "id": 999,
        "question": "Plan d'action",
        "type": "table",
        "required_if_non_conformity": true,
        "columns": [
          { "key": "action", "label": "Action", "type": "text" },
          { "key": "pilote", "label": "Pilote", "type": "text" },
          { "key": "status", "label": "Status", "type": "single_choice", "options": ["Non lancé", "En cours", "En attente", "Clôturé"] },
          { "key": "due_date", "label": "Date d'échéance", "type": "date" }
        ],
        "storage_field": "action_plan_daily"
      }
    ]
  },
  "Weekly": {
    "Safety": [
      {
        "id": 1,
        "question": "Taux global de conformité sécurité (EPI, LOTO)",
        "type": "single_choice",
        "options": ["100% objectif", "75%", "50%", "25%", "0%"],
        "comment_enabled": true
      },
      {
        "id": 2,
        "question": "Nombre total de dialogues sécurité réalisés cette semaine",
        "type": "single_choice",
        "options": ["0", "1-3", ">3"]
      },
      {
        "id": 3,
        "question": "Nombre total de fiches de risques ouvertes cette semaine",
        "type": "single_choice",
        "options": ["0", "1-2", ">2"]
      },
      {
        "id": 4,
        "question": "Nombre total d'incidents / presque accidents cette semaine",
        "type": "single_choice",
        "options": ["0", "1", ">1"]
      },
      {
        "id": 5,
        "question": "Conformité des permis de travail",
        "type": "single_choice",
        "options": ["Tous les permis requis conformes", "Permis établis non signés", "Non conforme"],
        "comment_if_non_conforme": true
      },
      {
        "id": 6,
        "question": "Avancement de l'analyse des risques sécurité (Risk Assessment Safety)",
        "type": "single_choice",
        "options": ["100%", "75%", "50%", "25%", "0%"]
      },
      {
        "id": 7,
        "question": "Audit sécurité hebdomadaire réalisé ?",
        "type": "single_choice",
        "options": ["Oui", "Non"]
      }
    ],

    "Quality": [
      {
        "id": 8,
        "question": "Respect des règles d'hygiène chantier (tenues, propreté)",
        "type": "single_choice",
        "options": ["Conforme", "Non conforme"],
        "comment_if_non_conforme": true
      },
      {
        "id": 9,
        "question": "Progression du traitement des réclamations qualité chantier",
        "type": "single_choice",
        "options": ["100%", "75%", "50%", "<50%"]
      },
      {
        "id": 10,
        "question": "Conformité du matériel installé sur chantier",
        "type": "single_choice",
        "options": ["Oui", "Non"],
        "comment_if_non_conforme": true
      },
      {
        "id": 11,
        "question": "Avancement de l'analyse des risques qualité (Risk Assessment Quality)",
        "type": "single_choice",
        "options": ["100%", "75%", "50%", "25%", "0%"]
      },
      {
        "id": 12,
        "question": "Contrôle des nuisances (bruit, poussière, émissions)",
        "type": "single_choice",
        "options": ["Oui", "Non"],
        "comment_enabled": true
      },
      {
        "id": 13,
        "question": "Respect du zoning",
        "type": "single_choice",
        "options": ["Conforme", "Non conforme"],
        "comment_if_non_conforme": true
      }
    ],

    "Delivery": [
      {
        "id": 14,
        "question": "Avancement global vs planning weekly",
        "type": "single_choice",
        "options": ["Conforme", "Légère dérive", "Forte dérive"],
        "comment_enabled": true
      },
      {
        "id": 15,
        "question": "Activités critiques de la semaine réalisées",
        "type": "single_choice",
        "options": ["100%", "Partiellement", "Non réalisées"]
      },
      {
        "id": 16,
        "question": "Coactivité maîtrisée (élec, automatisme, génie civil, suppliers)",
        "type": "single_choice",
        "options": ["Oui", "Non"],
        "comment_if_non_conforme": true
      }
    ],

    "Nature": [
      {
        "id": 17,
        "question": "Consommation énergétique (soufflage + utilités PET)",
        "type": "single_choice",
        "options": ["En dessous de la cible", "Au dessus de la cible"],
        "comment_enabled": true
      }
    ],
    "Plan d'Action": [
      {
        "id": 999,
        "question": "Plan d'action",
        "type": "table",
        "required_if_non_conformity": true,
        "columns": [
          { "key": "action", "label": "Action", "type": "text" },
          { "key": "pilote", "label": "Pilote", "type": "text" },
          { "key": "status", "label": "Status", "type": "single_choice", "options": ["Non lancé", "En cours", "En attente", "Clôturé"] },
          { "key": "due_date", "label": "Date d'échéance", "type": "date" }
        ],
        "storage_field": "action_plan_weekly"
      }
    ]
  },
  "Monthly": {
    "Safety": [
      {
        "id": 1,
        "question": "Taux global de conformité sécurité du mois (EPI, LOTO)",
        "type": "single_choice",
        "options": ["100% objectif", "90%", "80%", "<80%"],
        "comment_enabled": true
      },
      {
        "id": 2,
        "question": "Nombre total d'incidents / presque accidents du mois",
        "type": "single_choice",
        "options": ["0", "1", ">1"],
        "comment_if_non_conforme": true
      },
      {
        "id": 3,
        "question": "Avancement de l'analyse des risques Sécurité (Risk Register Safety)",
        "type": "single_choice",
        "options": ["100%", "75%", "50%", "25%", "0%"]
      },
      {
        "id": 4,
        "question": "Conformité des permis de travail chantier",
        "type": "single_choice",
        "options": ["Conforme", "Partiellement conforme", "Non conforme"],
        "comment_if_non_conforme": true
      }
    ],

    "Quality": [
      {
        "id": 5,
        "question": "Avancement de l’analyse des risques Qualité (Risk Register Quality)",
        "type": "single_choice",
        "options": ["100%", "75%", "50%", "25%", "0%"]
      },
      {
        "id": 6,
        "question": "Taux de traitement des non-conformités et réclamations chantier",
        "type": "single_choice",
        "options": ["100%", "75%", "50%", "<50%"]
      }
    ],

    "Delivery": [
      {
        "id": 7,
        "question": "Avancement global du projet vs planning baseline",
        "type": "single_choice",
        "options": ["Conforme", "Légère dérive", "Forte dérive"],
        "comment_if_non_conforme": true
      },
      {
        "id": 8,
        "question": "Avancement des jalons majeurs (milestones)",
        "type": "single_choice",
        "options": [">90%", "70-90%", "<70%"]
      },
      {
        "id": 9,
        "question": "Activités critiques du mois réalisées",
        "type": "single_choice",
        "options": ["100%", "Partiellement", "Non réalisées"]
      },
      {
        "id": 10,
        "question": "Coactivité maîtrisée au niveau macro (élec, automatisme, génie civil, suppliers)",
        "type": "single_choice",
        "options": ["Oui", "Non"],
        "comment_if_non_conforme": true
      }
    ],

    "Nature": [
      {
        "id": 11,
        "question": "Consommation énergétique (utilités)",
        "type": "single_choice",
        "options": ["En dessous de la cible", "Au dessus de la cible"],
        "comment_enabled": true
      }
    ],

    "Leadership": [
      {
        "id": 12,
        "question": "Respect des rituels projet (réunions, escalades, reporting)",
        "type": "single_choice",
        "options": ["Oui", "Partiellement", "Non"],
        "comment_if_non_conforme": true
      },
      {
        "id": 13,
        "question": "Alignement global des parties prenantes (usine, centrale, fournisseurs)",
        "type": "single_choice",
        "options": ["Très bon", "Moyen", "Faible"]
      },
      {
        "id": 14,
        "question": "Pilotage contractuel & gestion des risques",
        "type": "single_choice",
        "options": ["Maîtrisé", "Sous contrôle mais amélioration nécessaire", "Non maîtrisé"],
        "comment_if_non_conforme": true
      }
    ],
    "Plan d'Action": [
      {
        "id": 999,
        "question": "Plan d'action",
        "type": "table",
        "required_if_non_conformity": true,
        "columns": [
          { "key": "action", "label": "Action", "type": "text" },
          { "key": "pilote", "label": "Pilote", "type": "text" },
          { "key": "status", "label": "Status", "type": "single_choice", "options": ["Non lancé", "En cours", "En attente", "Clôturé"] },
          { "key": "due_date", "label": "Date d'échéance", "type": "date" }
        ],
        "storage_field": "action_plan_monthly"
      }
    ]
  }
};

const ROLE_SETTINGS = {
  "factory": { title: "Responsable Usine", icon: "🏭", type: "Daily" },
  "central": { title: "Responsable Centrale", icon: "🏢", type: "Weekly" },
  "director": { title: "Directeur Projet", icon: "👔", type: "Monthly" }
};

// ==========================================
// STATE VARIABLES & LOGGING
// ==========================================
let currentRoleKey = null;
let currentChecklistType = null;
let currentSessionAnswers = {}; 
let currentSessionId = null;
let currentSessionStart = null;

let currentUser = { nom: null, email: null };
let editingChecklistId = null;

function logUserAction(actionType, checklistId, role) {
  const actions = JSON.parse(localStorage.getItem('User_Actions') || '[]');
  actions.push({
    email: currentUser.email,
    nom: currentUser.nom,
    action_type: actionType,
    checklist_id: checklistId,
    timestamp: new Date().toISOString(),
    role: role
  });
  localStorage.setItem('User_Actions', JSON.stringify(actions));
}

// DOM Elements
const views = document.querySelectorAll('.view');
const btnEnter = document.getElementById('btn-enter');
const roleButtons = document.querySelectorAll('.btn-role');
const btnBackMenu = document.getElementById('btn-back-menu');
const btnDashboardNav = document.getElementById('btn-dashboard-nav');
const btnBackFromDashboard = document.getElementById('btn-back-from-dashboard');
const btnBackToDashboard = document.getElementById('btn-back-to-dashboard');

const checklistTitle = document.getElementById('checklist-title');
const checklistContainer = document.getElementById('checklist-container');
const dashboardList = document.getElementById('dashboard-list');
const historyDetailContainer = document.getElementById('history-detail-container');
const historyDetailTitle = document.getElementById('history-detail-title');

// Initialize App
function init() {
  initUsersDB();
  generateQRCode();
  setupEventListeners();
  
  // Register service worker for PWA
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker registered'))
      .catch(err => console.log('Service Worker registration failed', err));
  }
}

function navigateTo(targetId) {
  if (targetId === 'entry') {
    document.getElementById('view-entry').classList.add('active');
    document.getElementById('app-layout').style.display = 'none';
  } else {
    document.getElementById('view-entry').classList.remove('active');
    document.getElementById('app-layout').style.display = 'flex';
    
    // De-activate all content sections and nav items
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    
    // Map legacy targetId to new sectionId
    let sectionId = targetId;
    if (targetId === 'menu' || targetId === 'dashboard') sectionId = 'content-history';
    if (targetId === 'kpi') sectionId = 'content-kpi';
    if (targetId === 'checklist') sectionId = 'content-checklist';
    if (targetId === 'change-password') sectionId = 'content-change-password';
    if (targetId === 'history-detail') sectionId = 'content-history-detail';
    
    const targetSection = document.getElementById(sectionId);
    if(targetSection) targetSection.classList.add('active');
    
    // Activate sidebar item
    const activeNavBtn = document.querySelector(`.nav-item[data-target="${sectionId}"]`);
    if(activeNavBtn) activeNavBtn.classList.add('active');
    
    applyRolePermissions();
    if(sectionId === 'content-history') loadDashboard();
  }
  window.scrollTo(0,0);
}

function applyRolePermissions() {
  const email = currentUser.email;
  if (!email) return;
  
  const spanName = document.getElementById('sidebar-user-name');
  if(spanName) spanName.textContent = currentUser.nom || email.split('@')[0];

  const btnFactory = document.querySelector('.nav-item[data-role="factory"]');
  const btnCentral = document.querySelector('.nav-item[data-role="central"]');
  const btnDirector = document.querySelector('.nav-item[data-role="director"]');

  if (btnFactory) btnFactory.style.display = 'flex';
  if (btnCentral) btnCentral.style.display = 'flex';
  if (btnDirector) btnDirector.style.display = 'flex';

  if (email === 'salihelyass@danone.com') {
    if (btnCentral) btnCentral.style.display = 'none';
    if (btnDirector) btnDirector.style.display = 'none';
  } else if (email === 'soufianejair@danone.com') {
    if (btnFactory) btnFactory.style.display = 'none';
    if (btnDirector) btnDirector.style.display = 'none';
  } else if (email === 'rahalsabir@danone.com') {
    if (btnFactory) btnFactory.style.display = 'none';
    if (btnCentral) btnCentral.style.display = 'none';
  }
}

function updateProgress() {
  let totalQuestions = 0;
  if(!currentChecklistType) return;
  Object.values(SQCDMN_Checklists[currentChecklistType]).forEach(questionsList => {
    totalQuestions += questionsList.length;
  });

  // Ne compter que les réponses valides non-commentaires
  const validAnswers = Object.keys(currentSessionAnswers).filter(k => 
      !k.startsWith('comment_') && 
      currentSessionAnswers[k] !== undefined && 
      String(currentSessionAnswers[k]).trim() !== ""
  );
  
  const answeredCount = validAnswers.length;
  const percent = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;
  
  const progText = document.getElementById('checklist-progress-text');
  const progBar = document.getElementById('checklist-progress-bar');
  if(progText) progText.textContent = `${percent}% complété (${answeredCount}/${totalQuestions})`;
  if(progBar) progBar.style.width = `${percent}%`;
}

function generateQRCode() {
  const container = document.getElementById("qrcodes-demo-container");
  if(!container) return;
  container.innerHTML = "";
  
  let baseUrl = window.location.href.split('?')[0]; 
  if (baseUrl.startsWith("file://")) baseUrl = "https://sherpa-field.demo/app";

  const appUrls = [
    { url: baseUrl + "?qr=1", title: "Checklist Journalière" },
    { url: baseUrl + "?qr=2", title: "Checklist Hebdomadaire" },
    { url: baseUrl + "?qr=3", title: "Checklist Mensuelle" }
  ];

  appUrls.forEach(item => {
    const wrap = document.createElement("div");
    wrap.style.display = "flex";
    wrap.style.flexDirection = "column";
    wrap.style.alignItems = "center";
    wrap.style.background = "#fff";
    wrap.style.padding = "10px";
    wrap.style.borderRadius = "8px";
    wrap.style.border = "1px solid #e5e7eb";
    wrap.style.flex = "1";
    wrap.style.minWidth = "0"; // prevent flex blowout
    wrap.style.cursor = "pointer"; // Rendre cliquable pour tester sur PC
    wrap.title = "Cliquez pour simuler le scan (Test PC)";

    // Navigation au clic pour simuler le scan du QR Code
    wrap.addEventListener("click", () => {
        window.location.href = item.url;
    });

    const qrDiv = document.createElement("div");
    qrDiv.style.flexShrink = "0";
    
    const title = document.createElement("div");
    title.textContent = item.title;
    title.style.marginTop = "8px";
    title.style.fontWeight = "600";
    title.style.color = "#003DA5"; // Bleu Danone
    title.style.fontSize = "0.75rem";
    title.style.textAlign = "center";

    wrap.appendChild(qrDiv);
    wrap.appendChild(title);
    container.appendChild(wrap);

    try {
      new QRCode(qrDiv, {
        text: item.url,
        width: 120, height: 120,
        colorDark : "#003DA5", colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
      });
    } catch(e) { console.error(e); }
  });
}

// ==========================================
// DATA STORAGE ENGINE
// ==========================================
function initUsersDB() {
  const existingUsers = localStorage.getItem('SHERPA_Users');
  if (!existingUsers) {
    const defaultUsers = [
      { email: 'marwabasri@danone.com', password: 'Danone2026!', nom: 'Marwa Basri' },
      { email: 'soufianejair@danone.com', password: 'Danone2026!', nom: 'Soufiane Jair' },
      { email: 'salihelyass@danone.com', password: 'Danone2026!', nom: 'Salih Elyass' },
      { email: 'rahalsabir@danone.com', password: 'Danone2026!', nom: 'Rahal Sabir' }
    ];
    localStorage.setItem('SHERPA_Users', JSON.stringify(defaultUsers));
  }
}

function getUsers() {
  return JSON.parse(localStorage.getItem('SHERPA_Users') || '[]');
}

function updatePassword(email, newPwd) {
  const users = getUsers();
  const index = users.findIndex(u => u.email === email);
  if(index !== -1) {
    users[index].password = newPwd;
    localStorage.setItem('SHERPA_Users', JSON.stringify(users));
    return true;
  }
  return false;
}

function loadAllResponses() {
  const data = localStorage.getItem('SQCDMN_Responses');
  return data ? JSON.parse(data) : [];
}

function saveResponses(responsesArray) {
  const existing = loadAllResponses();
  const updated = existing.concat(responsesArray);
  localStorage.setItem('SQCDMN_Responses', JSON.stringify(updated));
}

function generateId() {
  return 'res_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

function generateSessionId() {
  return 'sess_' + Date.now().toString(36);
}

// ==========================================
// CHECKLIST UI LOGIC
// ==========================================
function openChecklist(roleKey) {
  currentRoleKey = roleKey;
  const settings = ROLE_SETTINGS[roleKey];
  currentChecklistType = settings.type;
  
  checklistTitle.textContent = `${settings.icon} ${settings.title} (${settings.type})`;
  currentSessionAnswers = {}; 
  currentSessionId = generateSessionId();
  currentSessionStart = new Date().toISOString();
  
  const checklistData = SQCDMN_Checklists[settings.type];
  renderChecklistItems(checklistData);
  
  navigateTo('checklist');
}

function renderChecklistItems(checklistData) {
  checklistContainer.innerHTML = '';
  
  Object.keys(checklistData).forEach(category => {
    const questions = checklistData[category];
    
    const catBlock = document.createElement("div");
    catBlock.className = "category-block";
    catBlock.innerHTML = `<h2 class="category-header">${category}</h2>`;
    
    questions.forEach(q => {
      const qCard = document.createElement("div");
      qCard.className = "question-card";
      
      const qTitle = document.createElement("div");
      qTitle.className = "question-title";
      qTitle.textContent = q.question;
      qCard.appendChild(qTitle);

      const interactiveArea = document.createElement("div");
      interactiveArea.className = "interactive-area";

      // Container pour le commentaire
      const commentContainer = document.createElement("div");
      commentContainer.className = "comment-container";
      commentContainer.style.display = "none";
      commentContainer.style.marginTop = "15px";

      const commentInput = document.createElement("textarea");
      commentInput.placeholder = "Ajouter un commentaire...";
      commentInput.style.width = "100%";
      commentInput.style.padding = "10px";
      commentInput.style.borderRadius = "8px";
      commentInput.style.border = "1px solid var(--color-border)";
      commentInput.style.minHeight = "60px";
      commentInput.style.fontFamily = "inherit";

      commentInput.addEventListener("input", () => {
        currentSessionAnswers[`comment_${q.id}`] = commentInput.value;
      });

      commentContainer.appendChild(commentInput);

      if (q.type === 'single_choice') {
        const optionsRow = document.createElement("div");
        optionsRow.className = "options-row";
        
        q.options.forEach(opt => {
          const btn = document.createElement("button");
          btn.className = "btn-option";
          btn.textContent = opt;
          
          btn.addEventListener("click", () => {
            Array.from(optionsRow.children).forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            currentSessionAnswers[q.question] = opt;
            
            // Logique d'affichage dynamique du commentaire
            if (q.comment_if_non_conforme) {
              const optLower = opt.toLowerCase();
              const isNonConforme = 
                optLower.includes('non') || 
                optLower.includes('<') || 
                optLower.includes('dérive') || 
                optLower.includes('0%') || 
                optLower.includes('partiellement') || 
                optLower.includes('faible');
                
              if (isNonConforme) {
                commentContainer.style.display = "block";
                commentInput.setAttribute("required", "true");
                commentInput.placeholder = "⚠️ Commentaire OBLIGATOIRE suite à non-conformité...";
                commentInput.style.borderColor = "#ef4444"; // Rendu rouge
              } else {
                commentContainer.style.display = "none";
                commentInput.removeAttribute("required");
                currentSessionAnswers[`comment_${q.id}`] = ""; // on vide
                commentInput.value = "";
              }
            } else if (q.comment_enabled) {
              commentContainer.style.display = "block";
            }

            updateProgress();
          });
          optionsRow.appendChild(btn);
        });
        interactiveArea.appendChild(optionsRow);

      } else if (q.type === 'number') {
        const numInput = document.createElement("input");
        numInput.type = "number";
        if (q.min !== undefined) numInput.min = q.min;
        if (q.max !== undefined) numInput.max = q.max;
        numInput.style.padding = "10px";
        numInput.style.width = "100px";
        numInput.style.borderRadius = "8px";
        numInput.style.border = "1px solid var(--color-border)";
        
        numInput.addEventListener("input", () => {
          currentSessionAnswers[q.question] = numInput.value;
          updateProgress();
        });
        interactiveArea.appendChild(numInput);

        if (q.comment_enabled) {
          commentContainer.style.display = "block";
        }

      } else if (q.type === 'text') {
        const txtInput = document.createElement("textarea");
        txtInput.placeholder = "Saisissez votre texte ici...";
        txtInput.style.width = "100%";
        txtInput.style.padding = "10px";
        txtInput.style.borderRadius = "8px";
        txtInput.style.border = "1px solid var(--color-border)";
        txtInput.style.minHeight = "80px";
        txtInput.style.fontFamily = "inherit";
        
        txtInput.addEventListener("input", () => {
          currentSessionAnswers[q.question] = txtInput.value;
          updateProgress();
        });
        interactiveArea.appendChild(txtInput);
        
        if (q.comment_enabled) {
          commentContainer.style.display = "block";
        }

      } else if (q.type === 'table') {
        // Validation trick
        currentSessionAnswers[q.question] = "[Table]"; // Fake text to pass visual validation
        currentSessionAnswers[q.storage_field] = [];
        
        const tableContainer = document.createElement("div");
        tableContainer.className = "table-container";
        tableContainer.style.width = "100%";
        tableContainer.style.overflowX = "auto";
        
        const htmlTable = document.createElement("table");
        htmlTable.className = "dynamic-table";
        htmlTable.style.width = "100%";
        htmlTable.style.borderCollapse = "collapse";
        htmlTable.style.marginTop = "10px";
        htmlTable.style.marginBottom = "10px";
        
        const thead = document.createElement("thead");
        const trHead = document.createElement("tr");
        q.columns.forEach(col => {
           const th = document.createElement("th");
           th.textContent = col.label;
           th.style.border = "1px solid var(--color-border)";
           th.style.padding = "8px";
           th.style.backgroundColor = "var(--color-bg)";
           th.style.textAlign = "left";
           th.style.fontSize = "0.9rem";
           trHead.appendChild(th);
        });
        const thAction = document.createElement("th");
        thAction.textContent = "Actions";
        thAction.style.border = "1px solid var(--color-border)";
        thAction.style.padding = "8px";
        thAction.style.backgroundColor = "var(--color-bg)";
        trHead.appendChild(thAction);
        thead.appendChild(trHead);
        htmlTable.appendChild(thead);
        
        const tbody = document.createElement("tbody");
        htmlTable.appendChild(tbody);
        
        const updateTableData = () => {
           const rows = Array.from(tbody.querySelectorAll("tr"));
           const tableData = rows.map(row => {
               const rowObj = {};
               const inputs = row.querySelectorAll("[data-key]");
               inputs.forEach(input => {
                   rowObj[input.getAttribute("data-key")] = input.value;
               });
               return rowObj;
           });
           currentSessionAnswers[q.storage_field] = tableData;
        };
        
        const addRow = () => {
           const tr = document.createElement("tr");
           q.columns.forEach(col => {
               const td = document.createElement("td");
               td.style.border = "1px solid var(--color-border)";
               td.style.padding = "8px";
               
               let input;
               if (col.type === "single_choice") {
                   input = document.createElement("select");
                   input.style.width = "100%";
                   input.style.padding = "6px";
                   input.style.borderRadius = "4px";
                   input.style.border = "1px solid #ccc";
                   col.options.forEach(opt => {
                       const option = document.createElement("option");
                       option.value = opt;
                       option.textContent = opt;
                       input.appendChild(option);
                   });
               } else {
                   input = document.createElement("input");
                   input.type = col.type === 'date' ? 'date' : 'text';
                   input.style.width = "100%";
                   input.style.padding = "6px";
                   input.style.borderRadius = "4px";
                   input.style.border = "1px solid #ccc";
               }
               input.setAttribute("data-key", col.key);
               input.addEventListener("input", updateTableData);
               
               td.appendChild(input);
               tr.appendChild(td);
           });
           
           const tdAction = document.createElement("td");
           tdAction.style.border = "1px solid var(--color-border)";
           tdAction.style.padding = "8px";
           tdAction.style.textAlign = "center";
           const btnRemove = document.createElement("button");
           btnRemove.textContent = "🗑";
           btnRemove.style.background = "none";
           btnRemove.style.color = "#ef4444";
           btnRemove.style.border = "none";
           btnRemove.style.cursor = "pointer";
           btnRemove.style.fontSize = "1.2rem";
           btnRemove.addEventListener("click", () => {
               tr.remove();
               updateTableData();
           });
           tdAction.appendChild(btnRemove);
           tr.appendChild(tdAction);
           
           tbody.appendChild(tr);
           updateTableData();
        };

        const btnAdd = document.createElement("button");
        btnAdd.textContent = "+ Ajouter une ligne";
        btnAdd.className = "btn-secondary";
        btnAdd.style.backgroundColor = "var(--color-bg)";
        btnAdd.style.border = "1px dashed var(--color-primary)";
        btnAdd.style.color = "var(--color-primary)";
        btnAdd.style.padding = "8px 16px";
        btnAdd.style.marginTop = "10px";
        btnAdd.style.borderRadius = "8px";
        btnAdd.style.cursor = "pointer";
        btnAdd.addEventListener("click", () => addRow());
        
        tableContainer.appendChild(htmlTable);
        tableContainer.appendChild(btnAdd);
        
        interactiveArea.appendChild(tableContainer);
      }

      qCard.appendChild(interactiveArea);
      if (q.comment_if_non_conforme || q.comment_enabled) {
         qCard.appendChild(commentContainer);
      }
      
      catBlock.appendChild(qCard);
    });
    
    checklistContainer.appendChild(catBlock);
  });
  
  updateProgress();
}

function submitChecklist() {
  let isValid = true;
  let missingItems = [];
  let hasNonConformity = false;

  // Validation intelligente
  Object.values(SQCDMN_Checklists[currentChecklistType]).forEach(questionsList => {
    questionsList.forEach(q => {
      // Ignorer la validation standard (vide) pour le Plan d'Action (q.type === 'table')
      // car sa validation se fait à la fin via la logique globale.
      if (q.type === 'table') return;

      const ans = currentSessionAnswers[q.question];
      
      // La question principale est vide ?
      if (ans === undefined || String(ans).trim() === "") {
        isValid = false;
        missingItems.push(`- Question: "${q.question}"`);
      } else {
         // Détection globale des non-conformités
         const optLower = String(ans).toLowerCase();
         const isNonConforme = 
             optLower.includes('non') || 
             optLower.includes('<') || 
             optLower.includes('dérive') || 
             optLower.includes('0%') || 
             optLower.includes('partiellement') || 
             optLower.includes('faible');

         if (isNonConforme) {
             hasNonConformity = true; // Déclenche l'obligation du plan d'action
         }

         // Vérifier si le commentaire spécifique est requis et absent
         if (q.comment_if_non_conforme && isNonConforme) {
             const comment = currentSessionAnswers[`comment_${q.id}`];
             if (!comment || String(comment).trim() === "") {
                isValid = false;
                missingItems.push(`- Commentaire requis pour: "${q.question}"`);
             }
         }
      }
    });
  });

  // Validation spécifique du Plan d'Action
  const storageField = `action_plan_${currentChecklistType.toLowerCase()}`;
  const actionPlanData = currentSessionAnswers[storageField];
  
  if (hasNonConformity) {
      if (!actionPlanData || !Array.isArray(actionPlanData) || actionPlanData.length === 0) {
          isValid = false;
          missingItems.push(`- Un Plan d'Action est OBLIGATOIRE (au moins 1 ligne) suite à une non-conformité.`);
      } else {
          // Vérifier que chaque ligne a des informations de base
          let rowIncomplete = false;
          actionPlanData.forEach(row => {
              if (!row.action || !row.pilote || !row.due_date || row.action.trim() === "" || row.pilote.trim() === "") {
                  rowIncomplete = true;
              }
          });
          if (rowIncomplete) {
              isValid = false;
              missingItems.push(`- Le Plan d'Action contient des lignes incomplètes (Action, Pilote ou Date manquante).`);
          }
      }
  }

  if (!isValid) {
     alert(`Veuillez compléter les champs obligatoires manquants:\n\n${missingItems.join("\n")}`);
     return;
  }
  
  const timestampISO = new Date().toISOString();
  let existingData = loadAllResponses();
  
  if (editingChecklistId) {
    const index = existingData.findIndex(r => r.id === editingChecklistId);
    if (index !== -1) {
      existingData[index].answers = { ...currentSessionAnswers };
      existingData[index].updated_at = timestampISO;
    }
    if (typeof logUserAction === 'function') logUserAction("edit_checklist", editingChecklistId, ROLE_SETTINGS[currentRoleKey].title);
  } else {
    // Construct single record
    const sessionRecord = {
      id: currentSessionId || generateId(),
      email: currentUser.email,
      nom: currentUser.nom,
      role: ROLE_SETTINGS[currentRoleKey].title,
      type_checklist: currentChecklistType,
      start_time: currentSessionStart,
      end_time: timestampISO,
      updated_at: timestampISO,
      answers: { ...currentSessionAnswers }
    };
    existingData.push(sessionRecord);
    if (typeof logUserAction === 'function') logUserAction("submit_checklist", sessionRecord.id, ROLE_SETTINGS[currentRoleKey].title);
  }
  
  localStorage.setItem('SQCDMN_Responses', JSON.stringify(existingData));
  
  editingChecklistId = null; 
  
  alert(`Soumission réussie ! Checklist enregistrée.`);
  navigateTo('menu');
}

// ==========================================
// DASHBOARD & EXPORT TO EXCEL
// ==========================================
function loadDashboard() {
  const responses = loadAllResponses().filter(r => !r.deleted && r.answers); // read horizontal
  dashboardList.innerHTML = '';
  
  if (responses.length === 0) {
    dashboardList.innerHTML = '<p style="text-align:center;color:#6b7280;">Aucune session enregistrée.</p>';
    return;
  }

  responses.slice().reverse().forEach(sess => {
    const card = document.createElement('div');
    card.className = 'history-card';
    const dateStr = new Date(sess.updated_at || sess.end_time || sess.start_time).toLocaleString();
    
    let canModify = false;
    if (sess.email === currentUser.email) canModify = true;
    else if (sess.type_checklist === 'Monthly') canModify = true;

    card.innerHTML = `
      <div class="history-card-header" onclick="openHistoryDetail('${sess.id}')" style="cursor:pointer;">
        <span class="history-role">${sess.role || 'Inconnu'} (${sess.type_checklist || 'N/A'})</span>
        <span class="history-date">${dateStr}</span>
      </div>
      <div class="history-prog" onclick="openHistoryDetail('${sess.id}')" style="cursor:pointer;">
        ${Object.keys(sess.answers || {}).length} réponses ✅<br>
        <small style="color:var(--color-primary);margin-top:5px;display:block;">🔎 Cliquez pour voir les détails</small>
      </div>
      <div class="action-buttons-row">
        <button class="btn-modify" onclick="editChecklist('${sess.id}')" ${!canModify ? 'disabled' : ''}>✏️ Modifier</button>
        <button class="btn-delete" onclick="deleteChecklist('${sess.id}')" ${!canModify ? 'disabled' : ''}>🗑️ Supprimer</button>
      </div>
    `;
    dashboardList.appendChild(card);
  });
}

function openHistoryDetail(id) {
  const sessObj = loadAllResponses().find(r => r.id === id);
  if (!sessObj) return;
  const dateStr = new Date(sessObj.updated_at || sessObj.end_time || sessObj.start_time).toLocaleString();
  historyDetailTitle.textContent = `${sessObj.role} (${dateStr})`;
  historyDetailContainer.innerHTML = '';
  
  Object.entries(sessObj.answers || {}).forEach(([q, a]) => {
    const div = document.createElement('div');
    div.className = 'detail-item';
    div.innerHTML = `<div class="detail-q">${q}</div><div class="detail-a">Réponse: ${a}</div>`;
    historyDetailContainer.appendChild(div);
  });
  navigateTo('history-detail');
}

function editChecklist(id) {
  const sessObj = loadAllResponses().find(r => r.id === id);
  if (!sessObj) return;
  
  editingChecklistId = id;
  currentRoleKey = Object.keys(ROLE_SETTINGS).find(key => ROLE_SETTINGS[key].title === sessObj.role) || 'factory';
  currentChecklistType = sessObj.type_checklist;
  currentSessionStart = sessObj.start_time;
  currentSessionAnswers = { ...sessObj.answers };
  
  const settings = ROLE_SETTINGS[currentRoleKey];
  checklistTitle.textContent = `${settings.icon} Édition ${settings.title} (${settings.type})`;
  
  const checklistData = SQCDMN_Checklists[settings.type];
  renderChecklistItems(checklistData);
  
  // Highlight previously selected options
  document.querySelectorAll('.question-card').forEach(card => {
    const qTitle = card.querySelector('.question-title').textContent;
    const ans = currentSessionAnswers[qTitle];
    if (ans) {
      card.querySelectorAll('.btn-option').forEach(btn => {
        if (btn.textContent === ans) btn.classList.add('selected');
      });
    }
  });

  navigateTo('checklist');
}

function deleteChecklist(id) {
  if (confirm("Voulez-vous vraiment supprimer cette checklist ? Cette action est irréversible.")) {
    let existingData = loadAllResponses();
    const index = existingData.findIndex(r => r.id === id);
    if(index !== -1) {
      existingData[index].deleted = true;
      existingData[index].updated_at = new Date().toISOString();
      localStorage.setItem('SQCDMN_Responses', JSON.stringify(existingData));
      if (typeof logUserAction === 'function') logUserAction("delete_checklist", id, existingData[index].role);
      loadDashboard();
      alert("Checklist supprimée.");
    }
  }
}

async function exportToXLSX() {
  const data = loadAllResponses().filter(r => !r.deleted && r.answers);
  if(data.length === 0) {
    alert("Aucune donnée à exporter.");
    return;
  }
  
  const sessionsByType = {
      "Daily": [],
      "Weekly": [],
      "Monthly": []
  };

  data.forEach(row => {
    if (sessionsByType[row.type_checklist]) {
        sessionsByType[row.type_checklist].push(row);
    }
  });

  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Sherpa SQCDMN';
  workbook.created = new Date();

  // Charger le logo de manière ultra-sécurisée
  let imageId = null;
  try {
    const logoResponse = await fetch('./logo.png');
    if (logoResponse.ok) {
      const contentType = logoResponse.headers.get('content-type');
      if (contentType && contentType.includes('image')) {
        const logoBuffer = await logoResponse.arrayBuffer();
        imageId = workbook.addImage({
          buffer: logoBuffer,
          extension: 'png',
        });
      } else {
        console.warn("Le fichier logo.png n'est pas une image valide (peut-être une page 404).");
      }
    } else {
      console.warn("Logo non trouvé sur le serveur : " + logoResponse.status);
    }
  } catch (e) {
    console.warn("Impossible de charger le logo pour l'export Excel.", e);
  }

  try {

  ['Daily', 'Weekly', 'Monthly'].forEach(type => {
      const typeSessions = sessionsByType[type];
      const schema = SQCDMN_Checklists[type];
      if (!schema || typeSessions.length === 0) return;

      const ws = workbook.addWorksheet(`Checklist_${type}`);

      // Ajouter le logo en haut à gauche
      if (imageId !== null) {
        ws.addImage(imageId, {
          tl: { col: 0, row: 0 },
          ext: { width: 140, height: 60 }
        });
      }
      
      // Ajouter le titre
      ws.getCell('C2').value = `Export Historique - Checklist ${type}`;
      ws.getCell('C2').font = { size: 16, bold: true, color: { argb: 'FF0B3C8C' } };

      const startRow = 6;

      const dynamicHeaders = [];
      const headerKeys = []; // Pour garder la trace des clés exactes (question ou comment_ID)

      Object.values(schema).forEach(catArray => {
          catArray.forEach(qObj => {
              dynamicHeaders.push(qObj.question);
              headerKeys.push({ type: 'main', key: qObj.question });

              if (qObj.comment_enabled || qObj.comment_if_non_conforme) {
                  dynamicHeaders.push("Commentaire: " + qObj.question);
                  headerKeys.push({ type: 'comment', key: `comment_${qObj.id}` });
              }
          });
      });

      const sheetHeaders = [
          "ID Session",
          "Nom Prénom",
          "Email",
          "Date de début",
          "Date de soumission",
          "Dernière M.A.J",
          "Rôle"
      ].concat(dynamicHeaders);

      // Styliser les en-têtes
      const headerRow = ws.getRow(startRow);
      sheetHeaders.forEach((header, index) => {
        const cell = headerRow.getCell(index + 1);
        cell.value = header;
        // Fond bleu Danone
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FF0B3C8C' } 
        };
        // Texte blanc en gras
        cell.font = { color: { argb: 'FFFFFFFF' }, bold: true };
        cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
        
        // Ajuster la largeur de la colonne
        const colLength = Math.max(15, Math.min(header.length + 5, 45));
        ws.getColumn(index + 1).width = colLength;
      });
      headerRow.height = 30;

      // Ajouter les données
      typeSessions.forEach((sess, index) => {
          const dStart = sess.start_time ? new Date(sess.start_time).toLocaleString() : '';
          const dEnd = sess.end_time ? new Date(sess.end_time).toLocaleString() : '';
          const dUpdate = sess.updated_at ? new Date(sess.updated_at).toLocaleString() : '';
          
          const rowData = [
              sess.id || index + 1,
              sess.nom || '',
              sess.email || '',
              dStart,
              dEnd,
              dUpdate,
              sess.role
          ];

          headerKeys.forEach(info => {
              rowData.push(sess.answers[info.key] || "");
          });

          const dataRow = ws.getRow(startRow + 1 + index);
          dataRow.values = rowData;
          dataRow.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
      });
  });
  
  // -- Début Export Action Plan --
  const wsAction = workbook.addWorksheet(`Action_Plan`);
  // Logo
  if (imageId !== null) {
    wsAction.addImage(imageId, { tl: { col: 0, row: 0 }, ext: { width: 140, height: 60 } });
  }
  wsAction.getCell('C2').value = `Consolidation des Plans d'Action`;
  wsAction.getCell('C2').font = { size: 16, bold: true, color: { argb: 'FF0B3C8C' } };

  const actionHeaders = ["Action", "Pilote", "Status", "Date", "Checklist Type", "Date Soumission", "Utilisateur"];
  const startRowAction = 6;
  const headerRowAction = wsAction.getRow(startRowAction);
  actionHeaders.forEach((header, index) => {
    const cell = headerRowAction.getCell(index + 1);
    cell.value = header;
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0B3C8C' } };
    cell.font = { color: { argb: 'FFFFFFFF' }, bold: true };
    cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    wsAction.getColumn(index + 1).width = Math.max(15, Math.min(header.length + 15, 45));
  });
  headerRowAction.height = 30;

  let currentRowAction = startRowAction + 1;
  data.forEach(sess => {
      const storageField = `action_plan_${sess.type_checklist.toLowerCase()}`;
      const actionPlanData = sess.answers && sess.answers[storageField];
      
      if (actionPlanData && Array.isArray(actionPlanData)) {
          const dUpdate = sess.updated_at ? new Date(sess.updated_at).toLocaleString() : '';
          actionPlanData.forEach(actionRow => {
              // Ignore empty rows
              if (!actionRow.action && !actionRow.pilote && !actionRow.due_date) return; 
              
              const rowData = [
                  actionRow.action || "",
                  actionRow.pilote || "",
                  actionRow.status || "",
                  actionRow.due_date || "",
                  sess.type_checklist,
                  dUpdate,
                  sess.nom || sess.email
              ];
              
              const dataRow = wsAction.getRow(currentRowAction);
              dataRow.values = rowData;
              dataRow.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
              currentRowAction++;
          });
      }
  });
  // -- Fin Export Action Plan --

  // Exporter le fichier
  const dateStr = new Date().toISOString().split('T')[0];
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, `Export_SHERPA_${dateStr}.xlsx`);
  
  } catch (criticalError) {
    console.error("Erreur critique lors de l'export Excel :", criticalError);
    alert("Une erreur inattendue a bloqué le téléchargement. Consultez la console (F12) pour plus de détails.");
  }
}

// ==========================================
// EVENTS Binding
// ==========================================
function setupEventListeners() {
  btnEnter.addEventListener('click', () => {
    const nameInput = document.getElementById('user-name');
    const rawNom = nameInput ? nameInput.value.trim() : '';
    const nom = rawNom.toLowerCase();

    if (!nom) {
      document.getElementById('auth-error-msg').textContent = "Veuillez saisir un nom pour continuer.";
      document.getElementById('auth-error-msg').style.display = 'block';
      return;
    }
    
    document.getElementById('auth-error-msg').style.display = 'none';

    // Routage direct strict par nom d'utilisateur
    if (nom.includes('salih') || nom.includes('elyass') || nom.includes('yasse')) {
        currentUser.nom = "SALIH EL YASSE";
        currentUser.email = "salihelyass@danone.com";
        openChecklist('factory'); // Journalière
    } 
    else if (nom.includes('soufiane') || nom.includes('jair')) {
        currentUser.nom = "JAIR SOUFIANE";
        currentUser.email = "soufianejair@danone.com";
        openChecklist('central'); // Hebdomadaire
    }
    else if (nom.includes('rahal') || nom.includes('sabir') || nom.includes('saber')) {
        currentUser.nom = "RAHAL SABIR";
        currentUser.email = "rahalsabir@danone.com";
        openChecklist('director'); // Mensuelle
    }
    else {
        // Utilisateur administrateur ou autre
        currentUser.nom = rawNom;
        currentUser.email = 'admin@danone.com';
        navigateTo('menu');
    }
  });
  
  // Handle checklist clicks from sidebar
  document.querySelectorAll('.nav-item[data-role]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      openChecklist(e.currentTarget.dataset.role);
    });
  });
  
  // Submit inline logic (moved since html is static)
  const btnSubmit = document.getElementById('btn-submit-inline');
  if(btnSubmit) btnSubmit.addEventListener('click', submitChecklist);
  
  // Dashboard logic
  const btnExportCL = document.getElementById('btn-export-cl');
  if(btnExportCL) btnExportCL.onclick = exportToXLSX;

  const btnClearHistory = document.getElementById('btn-clear-history');
  if(btnClearHistory) {
    btnClearHistory.addEventListener('click', () => {
      if(confirm("⚠ Êtes-vous sûr de vouloir supprimer définitivement tout l'historique de toutes les sessions ? (Irreversible)")) {
        localStorage.removeItem('SQCDMN_Sessions');
        localStorage.removeItem('User_Actions');
        loadDashboard();
        renderKPIAnalytics();
        alert("Historique vidé avec succès.");
      }
    });
  }

  const btnDashboardNav = document.getElementById('btn-dashboard-nav');
  if(btnDashboardNav) {
    btnDashboardNav.addEventListener('click', () => {
      navigateTo('dashboard');
    });
  }

  const btnKpiNav = document.getElementById('btn-kpi-nav');
  if(btnKpiNav) {
    btnKpiNav.addEventListener('click', () => {
      renderKPIAnalytics();
      navigateTo('kpi');
    });
  }
  
  const btnBackHistory = document.getElementById('btn-back-to-history');
  if(btnBackHistory) {
    btnBackHistory.addEventListener('click', () => {
      navigateTo('dashboard');
    });
  }


  const btnLogout = document.getElementById('btn-logout');
  if(btnLogout) {
    btnLogout.addEventListener('click', () => {
      currentUser.email = null;
      currentUser.nom = null;
      const nameInput = document.getElementById('user-name');
      if(nameInput) nameInput.value = '';
      navigateTo('entry');
    });
  }
}

document.addEventListener('DOMContentLoaded', init);

// ==========================================
// ANALYTICS & KPI ENGINE
// ==========================================
const KPI_PET = {
  "Daily": {
    "Safety": [
      {
        "id": "D-S1",
        "kpi_name": "Safety Compliance Rate",
        "description": "Taux de conformité sécurité basé sur EPI, portes, balisage.",
        "calculation": "Pourcentage de réponses '100% objectif' / total items sécurité",
        "thresholds": { "green": ">=80%", "orange": "50-79%", "red": "<50%" }
      },
      {
        "id": "D-S2",
        "kpi_name": "Daily Safety Dialogues Count",
        "description": "Nombre de dialogues sécurité réalisés ce jour.",
        "options_scoring": { "0": "red", ">1": "green" }
      },
      {
        "id": "D-S3",
        "kpi_name": "Daily Risk Cards",
        "description": "Nombre de fiches de risques du jour.",
        "options_scoring": { "0": "green", ">1": "orange" }
      },
      {
        "id": "D-S4",
        "kpi_name": "Incident-Free Days Indicator",
        "description": "Indicateur d'incident sur la veille.",
        "options_scoring": { "0": "green", ">1": "red" }
      }
    ],

    "Quality": [
      {
        "id": "D-Q1",
        "kpi_name": "Food Safety Cleanliness Score",
        "description": "État de propreté zone PET.",
        "options_scoring": { "100% objectif": "green", "Non conforme": "red" }
      },
      {
        "id": "D-Q2",
        "kpi_name": "On-time Documentation Rate",
        "description": "Respect des enregistrements du jour.",
        "thresholds": { "green": "100%", "orange": "75%", "red": "<50%" }
      },
      {
        "id": "D-Q3",
        "kpi_name": "Quality Claims Follow-up",
        "description": "Avancement du traitement des réclamations.",
        "thresholds": { "green": "100%", "orange": "75%", "red": "<50%" }
      },
      {
        "id": "D-Q4",
        "kpi_name": "Hygiene Compliance Score",
        "description": "Respect mesures d'hygiène chantier.",
        "options_scoring": { "Conforme": "green", "Non conforme": "red" }
      }
    ],

    "Delivery": [
      {
        "id": "D-D1",
        "kpi_name": "PSL Achievement Rate",
        "description": "Respect des commandes et PSL.",
        "options_scoring": { ">90%": "green", "<90%": "red" }
      },
      {
        "id": "D-D2",
        "kpi_name": "Maintenance Completion Rate",
        "description": "Réalisation du planning maintenance.",
        "options_scoring": { "100%": "green", "<100%": "orange" }
      }
    ],

    "Nature": [
      {
        "id": "D-N1",
        "kpi_name": "Energy Performance Indicator",
        "description": "Consommation énergétique vs cible.",
        "options_scoring": { "En dessous de la cible": "green", "Au dessus de la cible": "red" }
      }
    ]
  },

  "Weekly": {
    "Safety": [
      {
        "id": "W-S1",
        "kpi_name": "Weekly Safety Score",
        "description": "Moyenne de conformité sécurité hebdomadaire.",
        "thresholds": { "green": ">=80%", "orange": "50-79%", "red": "<50%" }
      },
      {
        "id": "W-S2",
        "kpi_name": "Safety Risk Assessment Progress",
        "description": "Avancement analyse des risques sécurité.",
        "thresholds": { "green": "100%", "orange": "50-99%", "red": "<50%" }
      }
    ],

    "Quality": [
      {
        "id": "W-Q1",
        "kpi_name": "Weekly Hygiene & Cleanliness Score",
        "description": "Conformité hygiène semaine.",
        "options_scoring": { "Conforme": "green", "Non conforme": "red" }
      },
      {
        "id": "W-Q2",
        "kpi_name": "Quality Risk Assessment Progress",
        "description": "Avancement analyse risques qualité.",
        "thresholds": { "green": "100%", "orange": "50-99%", "red": "<50%" }
      },
      {
        "id": "W-Q3",
        "kpi_name": "Installation Conformity Score",
        "description": "Conformité installation vs plans constructeur.",
        "options_scoring": { "Oui": "green", "Non": "red" }
      }
    ],

    "Delivery": [
      {
        "id": "W-D1",
        "kpi_name": "Lookahead Planning Compliance",
        "description": "% réalisation vs planning 3 semaines.",
        "options_scoring": { "Conforme": "green", "Légère dérive": "orange", "Forte dérive": "red" }
      },
      {
        "id": "W-D2",
        "kpi_name": "Critical Tasks Completion Rate",
        "description": "% activités critiques réalisées.",
        "options_scoring": { "100%": "green", "Partiellement": "orange", "Non réalisées": "red" }
      }
    ],

    "Nature": [
      {
        "id": "W-N1",
        "kpi_name": "Environment Compliance Score",
        "description": "Propreté chantier + tri déchets.",
        "options_scoring": { "Conforme": "green", "Non conforme": "red" }
      }
    ]
  },

  "Monthly": {
    "Safety": [
      {
        "id": "M-S1",
        "kpi_name": "Monthly Safety Index",
        "description": "Score global sécurité mensuel.",
        "thresholds": { "green": ">=80%", "orange": "50-79%", "red": "<50%" }
      },
      {
        "id": "M-S2",
        "kpi_name": "Monthly Incident Rate",
        "description": "Nombre incidents cumulés / mois.",
        "options_scoring": { "0": "green", "1": "orange", ">1": "red" }
      }
    ],

    "Quality": [
      {
        "id": "M-Q1",
        "kpi_name": "Monthly Hygiene Audit Score",
        "description": "Audit mensuel hygiène & propreté PET.",
        "options_scoring": { "Conforme": "green", "Non conforme": "red" }
      }
    ],

    "Delivery": [
      {
        "id": "M-D1",
        "kpi_name": "Baseline Schedule Adherence",
        "description": "% avancement vs planning baseline.",
        "options_scoring": { "Conforme": "green", "Légère dérive": "orange", "Forte dérive": "red" }
      }
    ],

    "Nature": [
      {
        "id": "M-N1",
        "kpi_name": "Monthly Energy Performance",
        "description": "Énergie vs cible mensuelle.",
        "options_scoring": { "En dessous de la cible": "green", "Au dessus de la cible": "red" }
      }
    ],

    "Leadership": [
      {
        "id": "M-L1",
        "kpi_name": "Governance Rituals Completion",
        "description": "Réalisation rituels projet.",
        "options_scoring": { "Oui": "green", "Partiellement": "orange", "Non": "red" }
      }
    ]
  }
};

function renderKPIAnalytics() {
  const kpiContainer = document.getElementById('kpi-container');
  if(!kpiContainer) return;
  kpiContainer.innerHTML = '';
  
  const data = loadAllResponses().filter(r => !r.deleted && r.answers);
  const sessions = {};
  data.forEach(r => {
    const sId = r.id;
    sessions[sId] = { type: r.type_checklist, date: new Date(r.updated_at || r.end_time || r.start_time || Date.now()), answers: r.answers };
  });
  
  // Chercher la session la plus récente pour chaque rôle
  const latestSessions = { "Daily": null, "Weekly": null, "Monthly": null };
  Object.values(sessions).forEach(sess => {
     if (!latestSessions[sess.type] || sess.date > latestSessions[sess.type].date) {
         latestSessions[sess.type] = sess;
     }
  });

  const scores = { "Daily": [], "Weekly": [], "Monthly": [] };

  Object.keys(KPI_PET).forEach(type => {
    const activeSession = latestSessions[type];
    
    if (!activeSession) {
      const emptyBox = document.createElement('div');
      emptyBox.className = 'kpi-cat-block';
      emptyBox.innerHTML = `
        <div class="kpi-cat-header" style="background:#6b7280;">🎯 ${type.toUpperCase()} CHECKLIST</div>
        <div style="padding:20px; text-align:center; color:#9ca3af;"><i>Aucune checklist validée pour le moment.</i></div>
      `;
      kpiContainer.appendChild(emptyBox);
      return; 
    }

    const block = document.createElement('div');
    block.className = 'kpi-cat-block';
    
    const header = document.createElement('div');
    header.className = 'kpi-cat-header';
    header.textContent = `🎯 ${type.toUpperCase()} CHECKLIST`;
    block.appendChild(header);

    const cats = KPI_PET[type];
    Object.keys(cats).forEach(cat => {
      const catTitle = document.createElement('div');
      catTitle.style.padding = '8px 15px';
      catTitle.style.fontWeight = '800';
      catTitle.style.backgroundColor = '#f3f4f6';
      catTitle.style.color = '#374151';
      catTitle.style.borderBottom = '1px solid #e5e7eb';
      catTitle.style.borderTop = '1px solid #e5e7eb';
      catTitle.textContent = `▶ Volet : ${cat}`;
      block.appendChild(catTitle);

      const kpiList = cats[cat];
      const checklistQuestions = SQCDMN_Checklists[type][cat];

      kpiList.forEach((kpi, index) => {
         const matchedQuestionStr = checklistQuestions && checklistQuestions[index] ? checklistQuestions[index].question : null;
         let answer = matchedQuestionStr ? activeSession.answers[matchedQuestionStr] : null;

         // Cas exceptionnel: Si c'est un KPI calculé aggrégé sans réponse directe, on traite différemment ?
         // Mais pour votre cas d'usage, l'utilisateur a rentré les questions directement.
         
         const colorStr = evaluateKPIValue(answer, kpi);
         
         let numScore = 0;
         if (colorStr === 'green') numScore = 100;
         else if (colorStr === 'orange') numScore = 50;
         else if (colorStr === 'red') numScore = 0;
         
         if (colorStr !== 'gray') scores[type].push(numScore);

         const item = document.createElement('div');
         item.className = 'kpi-item';

         const badgeClass = colorStr === 'gray' ? 'kpi-badge-none' : `kpi-badge-${colorStr}`;
         let badgeText = 'N/A';
         if (colorStr === 'green') badgeText = 'VERT';
         else if (colorStr === 'orange') badgeText = 'ORANGE';
         else if (colorStr === 'red') badgeText = 'ROUGE';

         let ansDisplay = '';
         if (answer) {
             ansDisplay = `<div style="font-size:0.8rem; color:#1d4ed8; margin-top:6px;">➤ Réponse terrain : <b>${answer}</b></div>`;
         } else {
             ansDisplay = `<div style="font-size:0.8rem; color:#ef4444; margin-top:6px;"><i>Question non répondue</i></div>`;
         }

         item.innerHTML = `
           <div style="flex:1; padding-right:15px;">
             <div class="kpi-name">${kpi.kpi_name}</div>
             <div class="kpi-desc">${kpi.description}</div>
             ${ansDisplay}
           </div>
           <div class="kpi-status-badge ${badgeClass}">${badgeText}</div>
         `;
         block.appendChild(item);
      });
    });
    
    kpiContainer.appendChild(block);
  });

  // Calculate and apply average global scores
  const calcAvg = (arr) => {
     if (!arr || arr.length === 0) return { avg: '-', color: 'gray' };
     const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
     let color = 'red';
     if (mean >= 80) color = 'green';
     else if (mean >= 50) color = 'orange';
     return { avg: Math.round(mean) + '%', color: color };
  };

  ['Daily', 'Weekly', 'Monthly'].forEach(t => {
     const res = calcAvg(scores[t]);
     const el = document.getElementById(`kpi-${t.toLowerCase()}-score`);
     if (el) {
       el.textContent = res.avg;
       el.className = `kpi-score-val kpi-color-${res.color}`;
     }
  });
}

function evaluateKPIValue(answer, rule) {
  if (!answer) return "gray";
  const strAns = answer.toString().trim();
  const numAnswer = parseFloat(strAns.replace(/[^0-9.-]/g, ''));
  
  // 1. Strict exact match for options
  if (rule.options_scoring && rule.options_scoring[strAns]) {
    return rule.options_scoring[strAns];
  }
  
  // 2. Contains match or mathematical string match (">1")
  if (rule.options_scoring) {
      for (const [key, color] of Object.entries(rule.options_scoring)) {
          if (key === ">0" && numAnswer > 0) return color;
          if (key === ">1" && numAnswer > 1) return color;
          if (key === ">3" && numAnswer > 3) return color;
          if (strAns.includes(key)) return color;
      }
  }

  // 3. Threshold mathematical logic
  if (rule.thresholds && !isNaN(numAnswer)) {
      const checkTh = (thStr, num) => {
          if (thStr.includes('>=')) return num >= parseFloat(thStr.replace('>=',''));
          if (thStr.includes('<=')) return num <= parseFloat(thStr.replace('<=',''));
          if (thStr.includes('>')) return num > parseFloat(thStr.replace('>',''));
          if (thStr.includes('<')) return num < parseFloat(thStr.replace('<',''));
          if (thStr.includes('-')) {
             const p = thStr.split('-');
             return num >= parseFloat(p[0]) && num <= parseFloat(p[1]);
          }
          return num === parseFloat(thStr);
      };
      
      // Order of checks matters: ensure stricter red vs green evaluate properly
      if (rule.thresholds.red && checkTh(rule.thresholds.red, numAnswer)) return "red";
      if (rule.thresholds.orange && checkTh(rule.thresholds.orange, numAnswer)) return "orange";
      if (rule.thresholds.green && checkTh(rule.thresholds.green, numAnswer)) return "green";
  }
  
  return "gray";
}

// ==========================================
// PWA INSTALLATION LOGIC
// ==========================================
let deferredPrompt;
const pwaModal = document.getElementById('pwa-install-modal');
const pwaCloseBtn = document.getElementById('pwa-close-btn');
const pwaInstallBtn = document.getElementById('pwa-install-btn');
const pwaIosInstructions = document.getElementById('pwa-ios-instructions');

// Hide modal
if (pwaCloseBtn) {
  pwaCloseBtn.addEventListener('click', () => {
    pwaModal.style.display = 'none';
  });
}

// Check if iOS
const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};

// Check if in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  
  // Show the modal after a small delay (e.g., right after QR code scan or login)
  if (pwaModal) {
    setTimeout(() => {
       pwaModal.style.display = 'flex';
       pwaInstallBtn.style.display = 'block';
       if(pwaIosInstructions) pwaIosInstructions.style.display = 'none';
    }, 1500);
  }
});

if (pwaInstallBtn) {
  pwaInstallBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      // We've used the prompt, and can't use it again, throw it away
      deferredPrompt = null;
      pwaModal.style.display = 'none';
    }
  });
}

// Fallback logic for iOS
window.addEventListener('load', () => {
  if (isIos() && !isInStandaloneMode()) {
    setTimeout(() => {
      if (pwaModal && pwaInstallBtn && pwaIosInstructions) {
        pwaModal.style.display = 'flex';
        pwaInstallBtn.style.display = 'none'; // Native button doesn't work on iOS
        pwaIosInstructions.style.display = 'block'; // Show instructions instead
      }
    }, 1500);
  }
});

// Hide if app is successfully installed
window.addEventListener('appinstalled', () => {
  deferredPrompt = null;
  if(pwaModal) pwaModal.style.display = 'none';
  console.log('PWA was installed');
});

const btnManualPwa = document.getElementById('btn-manual-pwa');
if (btnManualPwa) {
  btnManualPwa.addEventListener('click', () => {
    if (pwaModal) {
      pwaModal.style.display = 'flex';
      if (isIos() || !deferredPrompt) {
        // Show fallback/instructions if native prompt isn't ready or it's iOS
        pwaInstallBtn.style.display = 'none';
        if(pwaIosInstructions) {
          pwaIosInstructions.style.display = 'block';
          pwaIosInstructions.innerHTML = `Pour installer l'application :<br />
          <b>Sur iOS :</b> Appuyez sur Partager puis "Sur l'écran d'accueil"<br /><br />
          <b>Sur Android/PC :</b> Utilisez le menu de votre navigateur (Chrome/Edge) et cliquez sur "Installer l'application" / "Ajouter à l'écran d'accueil".`;
        }
      } else {
        pwaInstallBtn.style.display = 'block';
        if(pwaIosInstructions) pwaIosInstructions.style.display = 'none';
      }
    }
  });
}
