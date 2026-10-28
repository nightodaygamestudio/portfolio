/* ==========================================================================
   JAN JELLE KLINGBERG (aka JJAMPION) — FULL LIVE-EDIT CMS CONTROLLER (app.js)
   ========================================================================== */

// === PORTFOLIO_DATA_START ===
const portfolioData = {
  defaultLang: "en",
  defaultTheme: "dark",
  portraitImageUrl: "assets/portrait.jpg",
  adminPinHash: "",
  customCSS: "",

  links: {
    steam: "https://store.steampowered.com/app/4560080/Grimoire_Garden_A_Taskbar_Tale/",
    itch: "https://jjampion.itch.io/",
    play: "https://play.google.com/store/apps/details?id=gg.nightodaygamestudio.mc&hl=de",
    email: "mailto:contact@janjelle.dev"
  },

  skillPills: [
    "Unity (Since 2016)",
    "C# & Reverse Engineering",
    "GameMaker / Godot / Unreal",
    "Single-File HTML5",
    "Steamworks SDK",
    "Android Studio & Play SDK"
  ],

  // All UI Strings (EN & DE) are stored inside portfolioData so every single word is editable & saved!
  ui: {
    en: {
      brandName: "Jan Jelle Klingberg",
      brandAlias: "aka JJampion",
      navSubrole: "Junior Technical Game Designer",
      navAbout: "About Me",
      navOrigin: "Who Am I",
      navProjects: "Hero Project",
      navLab: "Rapid Prototyping",
      heroName: "Jan Jelle Klingberg",
      heroPhonetic: "aka JJampion • / ˈdʒeɪˈtʃæm.pi.ən /",
      heroStatus: "Junior Technical Game Designer • Creator of Nightoday Game Studio",
      heroHeadline: "I don't just write concepts on paper — I ship playable systems & commercial games in record time.",
      heroLead: "I love playing games, but I love building them even more. With active Unity experience since 2016, a formal education in Game Design & Game Production at the Games Academy, and self-published titles on Steam and Google Play under Nightoday Game Studio, I unite creative game design, rapid 3-hour prototyping, and solid technical execution.",
      factLocation: "<strong>Location:</strong> 30 years old • Roth (Middle Franconia) & near Cham (Upper Palatinate).",
      factEdu: "<strong>Education:</strong> Game Design & Game Production at Games Academy (2024–2026).",
      factStudio: "<strong>Studio & Vision:</strong> <em>Nightoday Game Studio</em> • Fast Prototyping & Path to Lead Game Designer.",
      stat1Val: "Since 2016",
      stat1: "Active Unity License & C#",
      stat2Val: "1st & 2x 2nd",
      stat2: "Trijam (3-Hour Game Jam)",
      stat3Val: "Steam & Play",
      stat3: "Self-Published Store Pipelines",
      stat4Val: "20+ Langs",
      stat4: "Custom Tooling & Localization",
      ctaSteam: "Grimoire Garden on Steam",
      ctaItch: "All Projects on itch.io",
      ctaPlay: "Google Play Store",
      ctaOriginBtn: "Read My Origin Story →",
      ctaMail: "contact@janjelle.dev",
      portraitRoleTag: "aka JJampion",
      portraitBtn: "📷 Photo",
      storyBadge: "02 • Who Am I & Personal Origin",
      storyHeading: "From Reverse Engineering & Skyrim to Nightoday Game Studio",
      backAboutBtn: "Back to Overview",
      nextProjectsBtn: "View Hero Project →",
      projectsEyebrow: "03 • Flagship Steam Release",
      projectsHeading: "Hero Project Spotlight",
      addProjectBtn: "Manage Projects",
      designHeader: "🎯 Game Design & Player Experience",
      techHeader: "⚙️ Technical Design & Production",
      steamWidgetLabel: "Available on Steam • Grimoire Garden: A Taskbar Tale",
      itchOpenBtn: "Play / View Project ↗",
      labEyebrow: "04 • Game Jams, Mobile & Web Architecture",
      labHeading: "Projects & Rapid Prototyping Showcase",
      visitItch: "Visit jjampion.itch.io",
      footerText: "© 2026 J.J.Klingberg. Trademarks belong to their respective owners. All rights reserved."
    },
    de: {
      brandName: "Jan Jelle Klingberg",
      brandAlias: "aka JJampion",
      navSubrole: "Junior Technical Game Designer",
      navAbout: "Über Mich",
      navOrigin: "Wer ich bin",
      navProjects: "Hero-Projekt",
      navLab: "Rapid Prototyping",
      heroName: "Jan Jelle Klingberg",
      heroPhonetic: "aka JJampion • / ˈdʒeɪˈtʃæm.pi.ən /",
      heroStatus: "Junior Technical Game Designer • Creator von Nightoday Game Studio",
      heroHeadline: "Ich baue nicht nur Konzepte auf Papier — ich liefere spielbare Systeme & fertige Releases in Rekordzeit.",
      heroLead: "Ich liebe es, Spiele zu spielen – aber noch mehr liebe ich es, sie zu entwickeln. Mit aktiver Unity-Erfahrung seit 2016, meiner Ausbildung in Game Design & Game Production an der Games Academy sowie eigenen Releases auf Steam und im Google Play Store unter Nightoday Game Studio verbinde ich kreatives Game Design, 3-Stunden-Prototyping und saubere technische Umsetzung.",
      factLocation: "<strong>Standort:</strong> 30 Jahre alt • Roth (Mittelfranken) & Raum Cham (Oberpfalz).",
      factEdu: "<strong>Ausbildung:</strong> Game Design & Game Production an der Games Academy (2024–2026).",
      factStudio: "<strong>Studio & Ziel:</strong> <em>Nightoday Game Studio</em> • Fast Prototyping & Weg zum Lead Game Designer.",
      stat1Val: "Seit 2016",
      stat1: "Aktive Unity-Lizenz & C#",
      stat2Val: "1. & 2x 2.",
      stat2: "Trijam (3-Stunden Game Jam)",
      stat3Val: "Steam & Play",
      stat3: "Eigene Steam & Play Releases",
      stat4Val: "20+ Sprachen",
      stat4: "Eigenes Localization-System",
      ctaSteam: "Grimoire Garden auf Steam",
      ctaItch: "Alle Projekte auf itch.io",
      ctaPlay: "Google Play Store",
      ctaOriginBtn: "Meine Story lesen →",
      ctaMail: "contact@janjelle.dev",
      portraitRoleTag: "aka JJampion",
      portraitBtn: "📷 Foto",
      storyBadge: "02 • Wer ich bin & Meine Geschichte",
      storyHeading: "Vom Reverse Engineering & Skyrim zum Nightoday Game Studio",
      backAboutBtn: "Zurück zur Übersicht",
      nextProjectsBtn: "Zum Hero-Projekt →",
      projectsEyebrow: "03 • Flaggschiff Steam-Release",
      projectsHeading: "Hero-Projekt im Fokus",
      addProjectBtn: "Projekte verwalten",
      designHeader: "🎯 Game Design & Spielerlebnis",
      techHeader: "⚙️ Technical Design & Production",
      steamWidgetLabel: "Auf Steam verfügbar • Grimoire Garden: A Taskbar Tale",
      itchOpenBtn: "Projekt ansehen / spielen ↗",
      labEyebrow: "04 • Game Jams, Mobile & Web Architektur",
      labHeading: "Projekte & Rapid Prototyping Showcase",
      visitItch: "Zu jjampion.itch.io",
      footerText: "© 2026 J.J.Klingberg. Trademarks belong to their respective owners. All rights reserved."
    }
  },

  originStory: {
    en: [
      "I am <strong>Jan Jelle Klingberg</strong>, better known as <strong>JJampion</strong> (<code>/ ˈdʒeɪˈtʃæm.pi.ən /</code>). I am <strong>30 years old</strong> and come from <strong>Franconia, Germany</strong> — living in <strong>Roth (Middle Franconia)</strong> and frequently in the <strong>Upper Palatinate (near Cham)</strong>. Since my childhood — actually as long as I can remember — I have been a passionate video game fan fascinated by the gaming world.",
      "While I started working with Unity in 2016, a major technical spark came in <strong>2018</strong> when I discovered how to root Android systems. That inspired me to delve into <strong>reverse engineering of games and manipulating game values</strong> — understanding how games tick under the hood and deciding to pursue my dream of starting my own indie game studio.",
      "<div class='story-quote-highlight'>\"Du sollst doch nicht schon wieder die <strong>Nacht zum Tag</strong> machen!\" — The name <strong>Nightoday Game Studio</strong> came to me easily, inspired by my mother (who often reminded me not to stay up too late, take care of my eyes, and get enough sleep) and the direct translation of 'Nacht zum Tag'.</div>",
      "My second huge inspiration is the legendary <strong>Bethesda Game Studios</strong>, who practically saved my life with <em>Skyrim</em> when I lived in a children's home and only had one single hour of 'media time' per day. I invested almost every single day of that hour into that masterpiece.",
      "My goal is to gain as much studio experience as possible and grow my career toward becoming a <strong>Lead Game Designer or Game Director</strong>. Having trained in <strong>Game Design & Game Production at the Games Academy (2024–2026)</strong> and published my own titles on Steam and Google Play under <strong>Nightoday Game Studio</strong>, I am ready to translate my passion into innovative projects that excite players. Thank you for your interest — if you have any questions or are interested in collaborating, feel free to contact me!"
    ],
    de: [
      "Ich bin <strong>Jan Jelle Klingberg</strong>, besser bekannt als <strong>JJampion</strong> (<code>/ ˈdʒeɪˈtʃæm.pi.ən /</code>). Ich bin <strong>30 Jahre alt</strong> und komme aus <strong>Franken</strong> – wohnhaft in <strong>Roth (Mittelfranken)</strong> und regelmäßig in der <strong>Oberpfalz (Raum Cham)</strong>. Seit meiner Kindheit – eigentlich solange ich denken kann – bin ich leidenschaftlicher Videospielfan und fasziniert von der Welt der Games.",
      "Neben meiner aktiven Arbeit mit Unity (seit 2016) war <strong>2018</strong> ein prägender Meilenstein: Ich entdeckte das Rooten von Android-Systemen, was mich zum <strong>Reverse Engineering von Spielen und der Manipulation von Spielwerten</strong> inspirierte. Damals fasste ich den Entschluss, meinen Traum vom eigenen Indie-Game-Studio zu verwirklichen.",
      "<div class='story-quote-highlight'>„Du sollst doch nicht schon wieder die <strong>Nacht zum Tag</strong> machen!“ — Der Name <strong>Nightoday Game Studio</strong> entstand aus dieser klassischen Erinnerung meiner Mutter, nicht zu lange wach zu bleiben, auf meine Augen zu achten und genug zu schlafen. Aus der direkten Übersetzung von „Nacht zum Tag“ wurde mein Studio-Name geboren.</div>",
      "Meine zweite große Inspiration sind die legendären <strong>Bethesda Game Studios</strong>, die mir mit <em>Skyrim</em> im Grunde das Leben gerettet haben, als ich in einem Kinderheim war und pro Tag nur eine einzige Stunde „Medienzeit“ hatte – eine Stunde, die ich fast jeden Tag in dieses Meisterwerk investierte.",
      "Mein Ziel ist es, so viel Erfahrung wie möglich zu sammeln und meine Karriere bis zum <strong>Lead Game Designer oder Game Director</strong> auszubauen. Mit meiner Ausbildung in <strong>Game Design & Game Production an der Games Academy (2024–2026)</strong> und eigenen Releases auf Steam und im Google Play Store unter <strong>Nightoday Game Studio</strong> freue ich mich darauf, komplexe Probleme kreativ zu lösen und Spieler zu begeistern. Vielen Dank für dein Interesse – bei Fragen oder Interesse an einer Zusammenarbeit melde dich gerne jederzeit!"
    ]
  },

  heroProjects: [
    {
      id: "grimoire-garden",
      title: "Grimoire Garden: A Taskbar Tale",
      badges: ["Published on Steam", "Windows OS Integration", "Unity (C#)", "59 Steam Achievements"],
      coverImageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4560080/header.jpg",
      steamAppId: "4560080",
      pitch: {
        en: "A cozy second-screen taskbar game blending idle farming, deep skill-tree progression, and seamless 'No-Spacebar' typing combat right at the bottom edge of your Windows desktop.",
        de: "Ein Cozy-Second-Screen-Taskbar-Game, das Idle-Farming, tiefgehende Skill-Tree-Progression und nahtlosen 'No-Spacebar'-Typing-Combat direkt am unteren Rand des Windows-Desktops vereint."
      },
      designHighlights: {
        en: [
          "Frictionless Multi-Modal Loop: Switch anytime via global hotkeys (Alt+G) between Cozy, Combat, and Auto modes.",
          "Skill-Based Minigames: 'No-Spacebar' spellcasting against goblins & a Pong-inspired Skeleton Boss fight rewarding Tier 1–20 Bone Meal Fever buffs.",
          "Deep Meta-Progression: Crop investment skill tree, 3 Daily Quests with rerolls, 9-slot Bonus Stash, and an ascending companion (Sparrow Jack Jr.) up to Level 11."
        ],
        de: [
          "Reibungslose Multi-Mode-Loop: Nahtloser Wechsel per Hotkey (Alt+G) zwischen Cozy-, Combat- und Auto-Modus.",
          "Skill-basierte Minigames: 'No-Spacebar'-Typing-Combat gegen Goblins & ein Pong-inspirierter Skeleton-Bosskampf für Tier 1–20 Bone-Meal-Fever-Buffs.",
          "Tiefe Meta-Progression: Ernte-Investitions-Skilltree, 3 Daily Quests mit Rerolls, 9-Slot Bonus Stash und Companion-System (Jack Jr.) mit Ascension bis Level 11."
        ]
      },
      techHighlights: {
        en: [
          "OS-Level Desktop Integration: Multi-monitor selection, dynamic scaling, and automatic Windows taskbar auto-hide detection.",
          "Global Input Hooks & Boss Panic Button: Tracks global keystrokes/clicks outside the window to hatch Jack Jr. Includes instant Ctrl+Alt+I panic hide (hides window + taskbar icon).",
          "Full Steamworks Pipeline: Offline time-delta calculation (Scarecrow/Dance Powder) and 59 tracked Steam Achievements."
        ],
        de: [
          "OS-Level Desktop-Integration: Multi-Monitor-Auswahl, dynamische Skalierung und automatische Erkennung einer sich ausblendenden Windows-Taskleiste.",
          "Global Input Hooks & Panic-Button: Erfasst globale Klicks/Tastenanschläge außerhalb des Spiels zum Ausbrüten von Jack Jr. Inklusive Ctrl+Alt+I Boss-Button (versteckt Spiel + Taskbar-Icon sofort).",
          "Komplette Steamworks-Pipeline: Zeitbasierte Offline-Wachstumsberechnung und 59 getrackte Steam-Achievements."
        ]
      }
    }
  ],

  labProjects: [
    {
      id: "core-dump",
      title: "Core Dump",
      badges: ["🏆 1st Place Winner (Trijam 3h Jam)", "Unity WebGL & Android Port", "ASCII Matrix Look"],
      coverImageUrl: "",
      itchUrl: "https://jjampion.itch.io/",
      itchWidgetCode: "",
      pitch: {
        en: "Built in just 3 hours for the Trijam theme 'The Forbidden Door' (1st Place Winner) and expanded with an Android port. A fast-paced circular hacking shooter with 10 Security Layers, Hardcore mode, and an endless Roguelite mode.",
        de: "Entstanden in nur 3 Stunden zum Trijam-Thema 'The Forbidden Door' (1. Platz Gewinner) und als Android-Port umgesetzt. Ein rasanter Kreis-Arena-Shooter im ASCII-Hacker-Stil mit 10 Security-Layern und Endlos-Modus."
      }
    },
    {
      id: "pair-pursuit",
      title: "Pair Pursuit",
      badges: ["Google Play & itch.io", "Custom 20-Language Localization", "Local Photo UGC"],
      coverImageUrl: "",
      itchUrl: "https://jjampion.itch.io/",
      itchWidgetCode: "",
      pitch: {
        en: "Competitive mobile & web memory game inspired by New Super Mario Bros. DS minigames — featuring cognitive load balancing, global Play Games Leaderboards, a 20-language localization system, and custom local photo decks.",
        de: "Kompetitives Mobile- & Web-Memory-Spiel inspiriert von den New Super Mario Bros. DS-Minispielen – inklusive 20-Sprachen-Lokalisierungssystem, Google Play Leaderboards und eigenen Foto-Kartendecks."
      }
    },
    {
      id: "trijam-runner-ups",
      title: "2x 2nd Place Trijam Prototypes",
      badges: ["🥈 2x 2nd Place Winner", "3-Hour Rapid Prototyping", "Unity & WebGL"],
      coverImageUrl: "",
      itchUrl: "https://jjampion.itch.io/",
      itchWidgetCode: "",
      pitch: {
        en: "Two award-winning 3-hour Game Jam prototypes demonstrating ultra-fast theme interpretation, immediate 'Find the Fun' iteration, and bug-free WebGL delivery under extreme time pressure.",
        de: "Zwei preisgekrönte 3-Stunden-Prototypen beim Trijam: Fokus auf extrem schnelle Themen-Analyse, 'Find the Fun' in den ersten 30 Minuten und sauberen WebGL-Release unter Zeitdruck."
      }
    },
    {
      id: "google-play-release",
      title: "Nightoday Mobile Release (Google Play Live)",
      badges: ["Google Play Store", "Live-Ops & Keystore Management", "Android SDK"],
      coverImageUrl: "",
      itchUrl: "https://play.google.com/store/apps/details?id=gg.nightodaygamestudio.mc&hl=de",
      itchWidgetCode: "",
      pitch: {
        en: "Published commercial Android build maintained with updated Google Play Target SDK requirements, structured keystore security, and end-to-end store compliance.",
        de: "Selbstständig im Google Play Store veröffentlichtes Android-Spiel inklusive Pflege aktueller Target-SDK-Vorgaben, strukturiertem Keystore-Management und Store-Compliance."
      }
    },
    {
      id: "single-file-html-engines",
      title: "Single-File HTML5 & Multi-Engine Experiments",
      badges: ["Vanilla HTML/JS/CSS", "Godot / Unreal / GameMaker 2", "Zero-Dependency"],
      coverImageUrl: "",
      itchUrl: "https://jjampion.itch.io/",
      itchWidgetCode: "",
      pitch: {
        en: "Self-contained web games built inside a single HTML file without external engine overhead, plus cross-engine prototypes exploring Godot, Unreal Engine, and GameMaker Studio 2.",
        de: "Komplette Web-Games innerhalb einer einzigen HTML-Datei ohne Engine-Abhängigkeiten sowie Ausflüge in Godot, Unreal Engine und GameMaker Studio 2."
      }
    }
  ]
};
// === PORTFOLIO_DATA_END ===

const stageOrder = ["about", "origin", "hero-projects", "prototyping-lab"];
let currentLang = portfolioData.defaultLang || "en";
let currentTheme = portfolioData.defaultTheme || "dark";
let currentSection = "about";
let isAdminUnlocked = false;
let isInlineEditActive = true;
let isStageTransitioning = false;

let pendingRepoFiles = {};
let localPreviewBlobUrls = {};

/* ==========================================================================
   1. STAGE NAVIGATION + SCROLL-TO-SWITCH
   ========================================================================== */
function switchSection(sectionId) {
  if (!stageOrder.includes(sectionId)) return;
  currentSection = sectionId;

  const navMap = {
    "about": "nav-about",
    "origin": "nav-origin",
    "hero-projects": "nav-projects",
    "prototyping-lab": "nav-lab"
  };

  stageOrder.forEach(id => {
    const el = document.getElementById(id);
    const navEl = document.getElementById(navMap[id]);
    const dotEl = document.getElementById(`dot-${id}`);
    if (!el) return;

    if (id === sectionId) {
      el.classList.add("active-section");
      el.classList.remove("is-entered");
      if (navEl) navEl.classList.add("active-nav");
      if (dotEl) dotEl.classList.add("active");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.classList.add("is-entered");
        });
      });
    } else {
      el.classList.remove("active-section", "is-entered");
      if (navEl) navEl.classList.remove("active-nav");
      if (dotEl) dotEl.classList.remove("active");
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function stepStage(direction) {
  const idx = stageOrder.indexOf(currentSection);
  const nextIdx = idx + direction;
  if (nextIdx < 0 || nextIdx >= stageOrder.length) return;
  isStageTransitioning = true;
  switchSection(stageOrder[nextIdx]);
  setTimeout(() => { isStageTransitioning = false; }, 650);
}

let wheelAccumulator = 0;
let wheelResetTimer = null;

window.addEventListener("wheel", (e) => {
  const cmsOpen = document.getElementById("cms-backdrop").classList.contains("open");
  const pinOpen = document.getElementById("pin-modal-backdrop").classList.contains("open");
  if (cmsOpen || pinOpen || isStageTransitioning) return;

  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const atTop = scrollTop <= 6;
  const atBottom = scrollTop >= maxScroll - 6;

  if (e.deltaY > 0 && !atBottom) { wheelAccumulator = 0; return; }
  if (e.deltaY < 0 && !atTop) { wheelAccumulator = 0; return; }

  wheelAccumulator += e.deltaY;
  clearTimeout(wheelResetTimer);
  wheelResetTimer = setTimeout(() => { wheelAccumulator = 0; }, 220);

  if (wheelAccumulator > 95) {
    wheelAccumulator = 0;
    stepStage(1);
  } else if (wheelAccumulator < -95) {
    wheelAccumulator = 0;
    stepStage(-1);
  }
}, { passive: true });

let touchStartY = 0;
window.addEventListener("touchstart", (e) => {
  if (e.touches.length === 1) touchStartY = e.touches[0].clientY;
}, { passive: true });

window.addEventListener("touchend", (e) => {
  const cmsOpen = document.getElementById("cms-backdrop").classList.contains("open");
  const pinOpen = document.getElementById("pin-modal-backdrop").classList.contains("open");
  if (cmsOpen || pinOpen || isStageTransitioning || !e.changedTouches.length) return;

  const deltaY = touchStartY - e.changedTouches[0].clientY;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

  if (deltaY > 75 && scrollTop >= maxScroll - 10) {
    stepStage(1);
  } else if (deltaY < -75 && scrollTop <= 10) {
    stepStage(-1);
  }
}, { passive: true });

/* ==========================================================================
   2. SHA-256 CMS UNLOCK & DIRECT ON-PAGE LIVE TEXT EDITING
   ========================================================================== */
let logoClickCount = 0;
let logoClickTimer = null;

function handleSecretLogoClick() {
  logoClickCount++;
  clearTimeout(logoClickTimer);
  if (logoClickCount >= 5) {
    logoClickCount = 0;
    openPinModal();
  } else {
    logoClickTimer = setTimeout(() => { logoClickCount = 0; }, 1400);
  }
}

window.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "e") {
    e.preventDefault();
    openPinModal();
    return;
  }

  const activeEl = document.activeElement;
  const activeTag = activeEl ? activeEl.tagName.toLowerCase() : "";
  if (["input", "textarea", "select"].includes(activeTag) || (activeEl && activeEl.isContentEditable)) return;

  if (e.key === "PageDown") {
    e.preventDefault();
    stepStage(1);
  } else if (e.key === "PageUp") {
    e.preventDefault();
    stepStage(-1);
  }
});

function openPinModal() {
  document.getElementById("cms-backdrop").classList.remove("open");
  document.getElementById("pin-error-msg").style.display = "none";
  document.getElementById("admin-pin-input").value = "";
  document.getElementById("pin-modal-backdrop").classList.add("open");
  setTimeout(() => document.getElementById("admin-pin-input").focus(), 80);
}

function closePinModal() {
  document.getElementById("pin-modal-backdrop").classList.remove("open");
}

async function computeSHA256Hex(text) {
  const msgBuffer = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

function computeObfuscatedDigest(str) {
  let acc = 0;
  for (let i = 0; i < str.length; i++) {
    acc = (acc * 31 + str.charCodeAt(i)) >>> 0;
  }
  return acc;
}

async function verifyAdminPin() {
  const entered = document.getElementById("admin-pin-input").value.trim();
  if (!entered) return;

  const enteredSha256 = await computeSHA256Hex(entered);
  const hasCustomHash = portfolioData.adminPinHash && portfolioData.adminPinHash.length === 64;

  const isMatch = hasCustomHash
    ? (enteredSha256 === portfolioData.adminPinHash)
    : (computeObfuscatedDigest(entered) === 0x172345);

  if (isMatch) {
    isAdminUnlocked = true;
    isInlineEditActive = true;
    document.body.classList.add("admin-unlocked", "inline-edit-active");
    closePinModal();
    applyInlineEditability();
    openCMSDrawerDirectly();
  } else {
    document.getElementById("pin-error-msg").style.display = "block";
  }
}

async function updateAdminPinHash() {
  const newPin = document.getElementById("cms-new-pin").value.trim();
  const statusEl = document.getElementById("pin-hash-status");
  if (!newPin) {
    statusEl.textContent = "Please enter a new PIN first.";
    return;
  }
  portfolioData.adminPinHash = await computeSHA256Hex(newPin);
  document.getElementById("cms-new-pin").value = "";
  statusEl.textContent = "✓ SHA-256 hash generated! Click 'Publish to GitHub' above to save.";
}

function lockAdminMode() {
  isAdminUnlocked = false;
  document.body.classList.remove("admin-unlocked", "inline-edit-active");
  document.getElementById("cms-backdrop").classList.remove("open");
  applyInlineEditability();
}

function toggleInlineEditMode() {
  if (!isAdminUnlocked) return;
  isInlineEditActive = !isInlineEditActive;
  document.body.classList.toggle("inline-edit-active", isInlineEditActive);
  const btn = document.getElementById("inline-edit-toggle-btn");
  if (btn) {
    btn.textContent = isInlineEditActive ? "✏️ Live-Edit: ON" : "✏️ Live-Edit: OFF";
  }
  applyInlineEditability();
}

function markUnsavedIndicator() {
  const saveBtn = document.getElementById("quick-save-gh-btn");
  if (saveBtn) {
    saveBtn.innerHTML = "🚀 Save Changes to GitHub *";
  }
}

// Activates contenteditable on all page elements when Admin + Live-Edit is ON
function applyInlineEditability() {
  const canEdit = isAdminUnlocked && isInlineEditActive;

  // 1. Standard UI Strings ([data-edit-ui])
  document.querySelectorAll("[data-edit-ui]").forEach(el => {
    if (canEdit) {
      el.setAttribute("contenteditable", "true");
      el.setAttribute("spellcheck", "false");
      if (!el.dataset.boundInline) {
        el.dataset.boundInline = "true";
        el.addEventListener("click", (e) => {
          // Prevent parent link/button navigation while editing text in admin mode
          if (isAdminUnlocked && isInlineEditActive && el.closest("a")) {
            e.preventDefault();
          }
        });
        el.addEventListener("blur", () => {
          const key = el.getAttribute("data-edit-ui");
          const useHtml = el.getAttribute("data-edit-html") === "true";
          if (portfolioData.ui && portfolioData.ui[currentLang]) {
            portfolioData.ui[currentLang][key] = useHtml ? el.innerHTML.trim() : el.textContent.trim();
            markUnsavedIndicator();
          }
        });
      }
    } else {
      el.removeAttribute("contenteditable");
    }
  });

  // 2. Dynamic Elements (Origin Story paragraphs, Skill Pills, Hero Project & Lab Tiles)
  document.querySelectorAll("[data-edit-dynamic]").forEach(el => {
    if (canEdit) {
      el.setAttribute("contenteditable", "true");
      el.setAttribute("spellcheck", "false");
    } else {
      el.removeAttribute("contenteditable");
    }
  });
}

/* ==========================================================================
   3. AMBIENT SPOTLIGHT TRACKING
   ========================================================================== */
let rafPending = false;
window.addEventListener("pointermove", (e) => {
  if (e.pointerType === "touch" || rafPending) return;
  const card = e.target.closest(".liquid-glass");
  if (!card) return;
  rafPending = true;
  requestAnimationFrame(() => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    rafPending = false;
  });
}, { passive: true });

document.addEventListener("visibilitychange", () => {
  document.body.classList.toggle("tab-hidden", document.hidden);
});

/* ==========================================================================
   4. LANGUAGE & THEME CONTROLLERS (PEARL / OBSIDIAN)
   ========================================================================== */
function triggerMorphAnimation(targetId, callback) {
  const box = document.getElementById(targetId);
  if (!box) { callback(); return; }
  box.classList.add("morphing");
  setTimeout(() => {
    callback();
    box.classList.remove("morphing");
  }, 150);
}

function setLanguage(lang) {
  currentLang = lang;
  portfolioData.defaultLang = lang;
  document.documentElement.lang = lang;

  document.getElementById("lang-en-btn").classList.toggle("active", lang === "en");
  document.getElementById("lang-de-btn").classList.toggle("active", lang === "de");

  triggerMorphAnimation("about-morph-box", () => {
    renderAll();
    if (document.getElementById("cms-backdrop").classList.contains("open")) {
      populateCMSEditors();
    }
  });
}

function toggleTheme() {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  portfolioData.defaultTheme = currentTheme;
  applyTheme();
}

function applyTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme);
  const icon = document.getElementById("theme-icon");
  const label = document.getElementById("theme-label");
  if (currentTheme === "dark") {
    icon.textContent = "☀️";
    label.textContent = "Pearl";
  } else {
    icon.textContent = "🌙";
    label.textContent = "Obsidian";
  }
}

/* ==========================================================================
   5. RENDER FUNCTIONS (WITH FULL INLINE EDIT BINDINGS)
   ========================================================================== */
function renderHeroStrings() {
  const t = portfolioData.ui[currentLang] || portfolioData.ui.en;

  // Navigation & Brand
  document.getElementById("brand-name-display").textContent = t.brandName || "Jan Jelle Klingberg";
  document.getElementById("brand-alias-display").textContent = t.brandAlias || "aka JJampion";
  document.getElementById("nav-subrole").textContent = t.navSubrole;
  document.getElementById("nav-about").textContent = t.navAbout;
  document.getElementById("nav-origin").textContent = t.navOrigin;
  document.getElementById("nav-projects").textContent = t.navProjects;
  document.getElementById("nav-lab").textContent = t.navLab;

  // Stage 01: Identity & Pitch
  document.getElementById("hero-main-name").textContent = t.heroName || "Jan Jelle Klingberg";
  document.getElementById("hero-phonetic-tag").textContent = t.heroPhonetic || "aka JJampion • / ˈdʒeɪˈtʃæm.pi.ən /";
  document.getElementById("story-phonetic-tag").textContent = t.heroPhonetic || "aka JJampion • / ˈdʒeɪˈtʃæm.pi.ən /";
  document.getElementById("hero-status-text").textContent = t.heroStatus;
  document.getElementById("hero-headline").textContent = t.heroHeadline;
  document.getElementById("hero-lead-text").textContent = t.heroLead;

  // Bio Facts
  document.getElementById("fact-location").innerHTML = t.factLocation;
  document.getElementById("fact-edu").innerHTML = t.factEdu;
  document.getElementById("fact-studio").innerHTML = t.factStudio;

  // 4 Stats (Values + Labels)
  document.getElementById("stat-1-val").textContent = t.stat1Val || "Since 2016";
  document.getElementById("stat-1-label").textContent = t.stat1;
  document.getElementById("stat-2-val").textContent = t.stat2Val || "1st & 2x 2nd";
  document.getElementById("stat-2-label").textContent = t.stat2;
  document.getElementById("stat-3-val").textContent = t.stat3Val || "Steam & Play";
  document.getElementById("stat-3-label").textContent = t.stat3;
  document.getElementById("stat-4-val").textContent = t.stat4Val || "20+ Langs";
  document.getElementById("stat-4-label").textContent = t.stat4;

  // Skill Pills (Editable inline)
  const pillsContainer = document.getElementById("skill-pills-container");
  pillsContainer.innerHTML = (portfolioData.skillPills || []).map((pill, idx) =>
    `<span class="skill-pill" data-edit-dynamic="true" onblur="updateSingleSkillPill(${idx}, this.textContent)">${pill}</span>`
  ).join("");

  // Action Buttons & External URLs
  document.getElementById("cta-steam").textContent = t.ctaSteam;
  document.getElementById("cta-itch").textContent = t.ctaItch;
  document.getElementById("cta-play").textContent = t.ctaPlay;
  document.getElementById("cta-origin-btn").textContent = t.ctaOriginBtn;
  document.getElementById("cta-mail").textContent = t.ctaMail || "contact@janjelle.dev";

  if (portfolioData.links) {
    document.getElementById("link-steam-btn").href = portfolioData.links.steam || "#";
    document.getElementById("link-itch-btn").href = portfolioData.links.itch || "#";
    document.getElementById("link-play-btn").href = portfolioData.links.play || "#";
    document.getElementById("link-mail-btn").href = portfolioData.links.email || "mailto:contact@janjelle.dev";
    document.getElementById("visit-itch-link").href = portfolioData.links.itch || "https://jjampion.itch.io/";
  }

  // Stage 02: Origin Story
  document.getElementById("story-badge").textContent = t.storyBadge;
  document.getElementById("story-heading").textContent = t.storyHeading;
  document.getElementById("back-about-btn").textContent = t.backAboutBtn;
  document.getElementById("next-projects-btn").textContent = t.nextProjectsBtn;

  const paragraphs = (portfolioData.originStory && portfolioData.originStory[currentLang]) || portfolioData.originStory.en;
  document.getElementById("story-paragraphs").innerHTML = paragraphs.map((p, idx) =>
    `<div data-edit-dynamic="true" onblur="updateOriginParagraphInline(${idx}, this.innerHTML)">${p}</div>`
  ).join("");

  // Stage 03 & 04 Headers + Footer
  document.getElementById("projects-eyebrow").textContent = t.projectsEyebrow;
  document.getElementById("projects-heading").textContent = t.projectsHeading;
  document.getElementById("add-project-top-btn").textContent = t.addProjectBtn;

  document.getElementById("lab-eyebrow").textContent = t.labEyebrow;
  document.getElementById("lab-heading").textContent = t.labHeading;
  document.getElementById("visit-itch-label").textContent = t.visitItch;
  document.getElementById("footer-text").textContent = t.footerText || "© 2026 J.J.Klingberg. Trademarks belong to their respective owners. All rights reserved.";
}

function updateSingleSkillPill(index, newText) {
  const cleaned = newText.trim();
  if (cleaned) {
    portfolioData.skillPills[index] = cleaned;
  } else {
    portfolioData.skillPills.splice(index, 1);
    renderHeroStrings();
    applyInlineEditability();
  }
  markUnsavedIndicator();
}

function updateOriginParagraphInline(index, newHtml) {
  if (!portfolioData.originStory[currentLang]) {
    portfolioData.originStory[currentLang] = [];
  }
  portfolioData.originStory[currentLang][index] = newHtml.trim();
  markUnsavedIndicator();
}

function resolveDisplayImageUrl(path) {
  if (!path) return "";
  if (localPreviewBlobUrls[path]) return localPreviewBlobUrls[path];
  return path;
}

function renderPortrait() {
  const container = document.getElementById("portrait-container");
  const navAvatar = document.getElementById("nav-avatar");
  const t = portfolioData.ui[currentLang] || portfolioData.ui.en;
  const displayUrl = resolveDisplayImageUrl(portfolioData.portraitImageUrl);

  if (displayUrl && displayUrl.trim() !== "") {
    container.innerHTML = `<img src="${displayUrl}" alt="Jan Jelle Klingberg (aka JJampion)" onerror="this.parentElement.innerHTML='<div class=\\'portrait-visitor-monogram\\'><div class=\\'portrait-initials-ring\\'>JJK</div><div style=\\'font-size:0.74rem; font-weight:800;\\'>aka JJampion</div></div>'" />`;
    navAvatar.innerHTML = `<img src="${displayUrl}" alt="JJK" onerror="this.parentElement.textContent='JJ'" />`;
  } else {
    container.innerHTML = `
      <div class="portrait-visitor-monogram">
        <div class="portrait-initials-ring">JJK</div>
        <div style="font-size:0.74rem; color:var(--text-secondary); font-weight:800;">${t.portraitRoleTag}</div>
        <button class="pill-btn admin-only" style="padding:4px 10px; font-size:0.7rem;" onclick="document.getElementById('cms-portrait-file').click()">
          ${t.portraitBtn}
        </button>
      </div>
    `;
    navAvatar.textContent = "JJ";
  }
}

function renderProjects() {
  const t = portfolioData.ui[currentLang] || portfolioData.ui.en;
  const heroContainer = document.getElementById("hero-projects-container");
  const labContainer = document.getElementById("lab-projects-container");

  // Stage 03: Middle-Centered Flagship Hero Project (All parts inline-editable!)
  const hero = portfolioData.heroProjects[0];
  if (hero) {
    const pitch = (hero.pitch && hero.pitch[currentLang]) || (hero.pitch && hero.pitch.en) || "";
    const designList = (hero.designHighlights && hero.designHighlights[currentLang]) || (hero.designHighlights && hero.designHighlights.en) || [];
    const techList = (hero.techHighlights && hero.techHighlights[currentLang]) || (hero.techHighlights && hero.techHighlights.en) || [];
    const badgesHtml = (hero.badges || []).map((b, idx) =>
      `<span class="${idx === 0 ? 'badge highlight' : 'badge'}" data-edit-dynamic="true" onblur="updateHeroBadgeInline(${idx}, this.textContent)">${b}</span>`
    ).join("");
    const coverUrl = resolveDisplayImageUrl(hero.coverImageUrl);

    heroContainer.innerHTML = `
      <article class="project-card-centered liquid-glass hover-lift">
        <div class="project-badges-centered">${badgesHtml}</div>
        <h3 class="project-title" data-edit-dynamic="true" onblur="updateHeroFieldInline('title', this.textContent)">${hero.title}</h3>
        <p class="project-pitch-centered" data-edit-dynamic="true" onblur="updateHeroFieldInline('pitch', this.textContent)">${pitch}</p>

        ${coverUrl ? `<div class="hero-cover-showcase"><img src="${coverUrl}" alt="${hero.title}" loading="lazy" /></div>` : ""}

        <div class="highlights-columns">
          <div class="highlight-box">
            <h4 data-edit-ui="designHeader">${t.designHeader}</h4>
            <ul>${designList.map((item, i) => `<li data-edit-dynamic="true" onblur="updateHeroHighlightInline('designHighlights', ${i}, this.textContent)">${item}</li>`).join("")}</ul>
          </div>
          <div class="highlight-box">
            <h4 data-edit-ui="techHeader">${t.techHeader}</h4>
            <ul>${techList.map((item, i) => `<li data-edit-dynamic="true" onblur="updateHeroHighlightInline('techHighlights', ${i}, this.textContent)">${item}</li>`).join("")}</ul>
          </div>
        </div>

        <div class="steam-widget-centered-box">
          <span style="font-size:0.78rem; color:var(--text-muted); font-weight:700;" data-edit-ui="steamWidgetLabel">${t.steamWidgetLabel}</span>
          <div class="iframe-centered-wrapper">
            <iframe src="https://store.steampowered.com/widget/${hero.steamAppId || '4560080'}/" frameborder="0" width="646" height="190" loading="lazy"></iframe>
          </div>
        </div>
      </article>
    `;
  }

  // Stage 04: Responsive Tile Grid for Unlimited Projects (Titles & descriptions inline-editable!)
  labContainer.innerHTML = portfolioData.labProjects.map((proj, index) => {
    const pitch = (proj.pitch && proj.pitch[currentLang]) || (proj.pitch && proj.pitch.en) || "";
    const badgesHtml = (proj.badges || []).map((b, bIdx) => {
      const isAward = b.includes("1st") || b.includes("2nd") || b.includes("🏆") || b.includes("🥈");
      return `<span class="${isAward ? 'badge award' : 'badge'}" data-edit-dynamic="true" onblur="updateLabBadgeInline(${index}, ${bIdx}, this.textContent)">${b}</span>`;
    }).join("");

    const coverUrl = resolveDisplayImageUrl(proj.coverImageUrl);
    const labImageHtml = coverUrl && coverUrl.trim() !== ""
      ? `<div class="tile-cover-frame"><img src="${coverUrl}" alt="${proj.title}" loading="lazy" /></div>`
      : "";

    let footerWidgetHtml = "";
    if (proj.itchWidgetCode && proj.itchWidgetCode.trim() !== "") {
      footerWidgetHtml = `
        <div style="display:flex; flex-direction:column; gap:8px;">
          <div class="iframe-centered-wrapper" style="justify-content:flex-start;">${proj.itchWidgetCode}</div>
          <button class="pill-btn admin-only" style="align-self:flex-end; padding:4px 10px; font-size:0.72rem;" onclick="editProjectInCMS(${index})">✏️ Edit Tile</button>
        </div>
      `;
    } else {
      footerWidgetHtml = `
        <div class="itch-launch-card">
          <div style="display:flex; align-items:center; gap:8px; min-width:0;">
            <span class="itch-badge">itch.io</span>
            <span style="font-weight:800; font-size:0.88rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${proj.title}</span>
          </div>
          <div style="display:flex; gap:6px; align-items:center; flex-shrink:0;">
            <a href="${proj.itchUrl || 'https://jjampion.itch.io/'}" target="_blank" rel="noopener" class="btn-itch">${t.itchOpenBtn}</a>
            <button class="pill-btn admin-only" style="padding:5px 10px; font-size:0.72rem;" onclick="editProjectInCMS(${index})">✏️</button>
          </div>
        </div>
      `;
    }

    return `
      <article class="lab-card liquid-glass hover-lift">
        <div>
          ${labImageHtml}
          <div class="project-badges">${badgesHtml}</div>
          <h3 class="project-title" style="font-size:1.25rem; margin-bottom:6px;" data-edit-dynamic="true" onblur="updateLabFieldInline(${index}, 'title', this.textContent)">${proj.title}</h3>
          <p style="font-size:0.88rem; color:var(--text-secondary);" data-edit-dynamic="true" onblur="updateLabFieldInline(${index}, 'pitch', this.textContent)">${pitch}</p>
        </div>
        ${footerWidgetHtml}
      </article>
    `;
  }).join("");

  applyInlineEditability();
}

// Inline Edit Helpers for Hero Project & Lab Project Tiles
function updateHeroFieldInline(field, val) {
  const hero = portfolioData.heroProjects[0];
  if (!hero) return;
  if (field === "title") hero.title = val.trim();
  if (field === "pitch") hero.pitch[currentLang] = val.trim();
  markUnsavedIndicator();
}

function updateHeroBadgeInline(badgeIdx, val) {
  const hero = portfolioData.heroProjects[0];
  if (!hero || !hero.badges) return;
  hero.badges[badgeIdx] = val.trim();
  markUnsavedIndicator();
}

function updateHeroHighlightInline(listKey, itemIdx, val) {
  const hero = portfolioData.heroProjects[0];
  if (!hero || !hero[listKey] || !hero[listKey][currentLang]) return;
  hero[listKey][currentLang][itemIdx] = val.trim();
  markUnsavedIndicator();
}

function updateLabFieldInline(projIdx, field, val) {
  const proj = portfolioData.labProjects[projIdx];
  if (!proj) return;
  if (field === "title") proj.title = val.trim();
  if (field === "pitch") {
    if (!proj.pitch) proj.pitch = { en: "", de: "" };
    proj.pitch[currentLang] = val.trim();
  }
  markUnsavedIndicator();
}

function updateLabBadgeInline(projIdx, badgeIdx, val) {
  const proj = portfolioData.labProjects[projIdx];
  if (!proj || !proj.badges) return;
  proj.badges[badgeIdx] = val.trim();
  markUnsavedIndicator();
}

/* ==========================================================================
   6. CMS STUDIO DRAWER CONTROLLERS
   ========================================================================== */
function openCMSDrawerDirectly() {
  const backdrop = document.getElementById("cms-backdrop");
  backdrop.classList.add("open");
  populateCMSEditors();
  renderCMSProjectList();
  document.getElementById("gh-repo").value = localStorage.getItem("jjk_gh_repo") || "nightodaygamestudio/portfolio";
  document.getElementById("gh-branch").value = localStorage.getItem("jjk_gh_branch") || "main";
  document.getElementById("gh-token").value = localStorage.getItem("jjk_gh_token") || "";
}

function populateCMSEditors() {
  document.getElementById("cms-portrait-url").value = portfolioData.portraitImageUrl || "";
  document.getElementById("cms-skill-pills").value = (portfolioData.skillPills || []).join(", ");
  document.getElementById("cms-custom-css").value = portfolioData.customCSS || "";

  if (portfolioData.links) {
    document.getElementById("cms-link-steam").value = portfolioData.links.steam || "";
    document.getElementById("cms-link-itch").value = portfolioData.links.itch || "";
    document.getElementById("cms-link-play").value = portfolioData.links.play || "";
    document.getElementById("cms-link-email").value = portfolioData.links.email || "";
  }

  // Hero Project Editor
  const hero = portfolioData.heroProjects[0];
  if (hero) {
    document.getElementById("cms-hero-lang-indicator").textContent = currentLang.toUpperCase();
    document.getElementById("cms-hero-title").value = hero.title || "";
    document.getElementById("cms-hero-badges").value = (hero.badges || []).join(", ");
    document.getElementById("cms-hero-steam-id").value = hero.steamAppId || "4560080";
    document.getElementById("cms-hero-img").value = hero.coverImageUrl || "";
    document.getElementById("cms-hero-pitch").value = (hero.pitch && hero.pitch[currentLang]) || "";
    document.getElementById("cms-hero-design").value = ((hero.designHighlights && hero.designHighlights[currentLang]) || []).join("\n");
    document.getElementById("cms-hero-tech").value = ((hero.techHighlights && hero.techHighlights[currentLang]) || []).join("\n");
  }

  // Origin Story Editor
  document.getElementById("cms-story-lang-indicator").textContent = currentLang.toUpperCase();
  const storyArr = (portfolioData.originStory && portfolioData.originStory[currentLang]) || [];
  document.getElementById("cms-origin-story-textarea").value = storyArr.join("\n\n");
}

function updateSkillPillsFromCMS(val) {
  portfolioData.skillPills = val.split(",").map(s => s.trim()).filter(Boolean);
  renderHeroStrings();
  applyInlineEditability();
  markUnsavedIndicator();
}

function updateLinksFromCMS() {
  portfolioData.links = {
    steam: document.getElementById("cms-link-steam").value.trim(),
    itch: document.getElementById("cms-link-itch").value.trim(),
    play: document.getElementById("cms-link-play").value.trim(),
    email: document.getElementById("cms-link-email").value.trim()
  };
  renderHeroStrings();
  markUnsavedIndicator();
}

function saveHeroProjectFromCMS() {
  const hero = portfolioData.heroProjects[0];
  if (!hero) return;
  hero.title = document.getElementById("cms-hero-title").value.trim();
  hero.badges = document.getElementById("cms-hero-badges").value.split(",").map(s => s.trim()).filter(Boolean);
  hero.steamAppId = document.getElementById("cms-hero-steam-id").value.trim();
  hero.coverImageUrl = document.getElementById("cms-hero-img").value.trim();
  hero.pitch[currentLang] = document.getElementById("cms-hero-pitch").value.trim();
  hero.designHighlights[currentLang] = document.getElementById("cms-hero-design").value.split("\n").map(s => s.trim()).filter(Boolean);
  hero.techHighlights[currentLang] = document.getElementById("cms-hero-tech").value.split("\n").map(s => s.trim()).filter(Boolean);
  renderProjects();
  markUnsavedIndicator();
}

function saveOriginStoryFromCMS() {
  const raw = document.getElementById("cms-origin-story-textarea").value;
  portfolioData.originStory[currentLang] = raw.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
  renderHeroStrings();
  applyInlineEditability();
  markUnsavedIndicator();
}

function toggleCMS() {
  const backdrop = document.getElementById("cms-backdrop");
  if (backdrop.classList.contains("open")) {
    backdrop.classList.remove("open");
    return;
  }
  if (!isAdminUnlocked) {
    openPinModal();
    return;
  }
  openCMSDrawerDirectly();
}

function renderCMSProjectList() {
  const listEl = document.getElementById("cms-project-list");
  const countEl = document.getElementById("cms-projects-count");
  if (!listEl) return;

  countEl.textContent = portfolioData.labProjects.length;
  listEl.innerHTML = portfolioData.labProjects.map((proj, idx) => `
    <div class="cms-project-item">
      <span class="cms-project-item-title">${idx + 1}. ${proj.title}</span>
      <div class="cms-item-actions">
        <button class="cms-mini-btn" title="Move Up" onclick="moveProjectTile(${idx}, -1)">↑</button>
        <button class="cms-mini-btn" title="Move Down" onclick="moveProjectTile(${idx}, 1)">↓</button>
        <button class="cms-mini-btn" onclick="editProjectInCMS(${idx})">Edit</button>
        <button class="cms-mini-btn" style="color:#f43f5e;" onclick="deleteProjectTile(${idx})">🗑️</button>
      </div>
    </div>
  `).join("");
}

function moveProjectTile(index, direction) {
  const targetIdx = index + direction;
  if (targetIdx < 0 || targetIdx >= portfolioData.labProjects.length) return;
  const temp = portfolioData.labProjects[index];
  portfolioData.labProjects[index] = portfolioData.labProjects[targetIdx];
  portfolioData.labProjects[targetIdx] = temp;
  renderProjects();
  renderCMSProjectList();
  markUnsavedIndicator();
}

function deleteProjectTile(index) {
  const proj = portfolioData.labProjects[index];
  if (!proj) return;
  if (!confirm(`Delete project "${proj.title}"?`)) return;
  portfolioData.labProjects.splice(index, 1);
  renderProjects();
  renderCMSProjectList();
  markUnsavedIndicator();
}

function editProjectInCMS(index) {
  if (!isAdminUnlocked) {
    openPinModal();
    return;
  }
  openCMSDrawerDirectly();
  const proj = portfolioData.labProjects[index];
  if (!proj) return;

  document.getElementById("edit-proj-id").value = proj.id;
  document.getElementById("new-proj-title").value = proj.title || "";
  document.getElementById("new-proj-badges").value = (proj.badges || []).join(", ");
  document.getElementById("new-proj-pitch-en").value = (proj.pitch && proj.pitch.en) || "";
  document.getElementById("new-proj-pitch-de").value = (proj.pitch && proj.pitch.de) || "";
  document.getElementById("new-proj-img").value = proj.coverImageUrl || "";
  document.getElementById("new-proj-link").value = proj.itchUrl || "";
  document.getElementById("new-proj-widget").value = proj.itchWidgetCode || "";

  document.getElementById("cms-form-mode-label").textContent = `✏️ Editing: ${proj.title}`;
  document.getElementById("cms-save-proj-btn-text").textContent = "Update Project Tile";
}

function resetProjectForm() {
  document.getElementById("edit-proj-id").value = "";
  document.getElementById("new-proj-title").value = "";
  document.getElementById("new-proj-badges").value = "";
  document.getElementById("new-proj-pitch-en").value = "";
  document.getElementById("new-proj-pitch-de").value = "";
  document.getElementById("new-proj-img").value = "";
  document.getElementById("new-proj-img-file").value = "";
  document.getElementById("new-proj-link").value = "";
  document.getElementById("new-proj-widget").value = "";

  document.getElementById("cms-form-mode-label").textContent = "➕ Add New Project Tile";
  document.getElementById("cms-save-proj-btn-text").textContent = "Add Project to Grid";
}

function saveOrAddProjectTile() {
  const editId = document.getElementById("edit-proj-id").value.trim();
  const title = document.getElementById("new-proj-title").value.trim();
  if (!title) return;

  const badges = document.getElementById("new-proj-badges").value.split(",").map(s => s.trim()).filter(Boolean);
  const pitchEn = document.getElementById("new-proj-pitch-en").value.trim();
  const pitchDe = document.getElementById("new-proj-pitch-de").value.trim() || pitchEn;
  const coverImageUrl = document.getElementById("new-proj-img").value.trim();
  const itchUrl = document.getElementById("new-proj-link").value.trim() || "https://jjampion.itch.io/";
  const itchWidgetCode = document.getElementById("new-proj-widget").value.trim();

  if (editId) {
    const existing = portfolioData.labProjects.find(p => p.id === editId);
    if (existing) {
      existing.title = title;
      existing.badges = badges.length ? badges : ["Unity", "itch.io"];
      existing.coverImageUrl = coverImageUrl;
      existing.itchUrl = itchUrl;
      existing.itchWidgetCode = itchWidgetCode;
      existing.pitch = { en: pitchEn, de: pitchDe };
    }
  } else {
    portfolioData.labProjects.unshift({
      id: "proj-" + Date.now(),
      title,
      badges: badges.length ? badges : ["Unity", "itch.io"],
      coverImageUrl,
      itchUrl,
      itchWidgetCode,
      pitch: { en: pitchEn, de: pitchDe }
    });
  }

  renderProjects();
  renderCMSProjectList();
  resetProjectForm();
  markUnsavedIndicator();
}

function updatePortraitFromInput(url) {
  portfolioData.portraitImageUrl = url.trim();
  document.getElementById("cms-portrait-url").value = portfolioData.portraitImageUrl;
  renderPortrait();
  markUnsavedIndicator();
}

function handlePortraitFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const ext = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
  const repoPath = `assets/portrait.${ext}`;

  const reader = new FileReader();
  reader.onload = function(e) {
    const base64Data = e.target.result.split(",")[1];
    pendingRepoFiles[repoPath] = base64Data;
    localPreviewBlobUrls[repoPath] = URL.createObjectURL(file);

    portfolioData.portraitImageUrl = repoPath;
    document.getElementById("cms-portrait-url").value = repoPath;
    document.getElementById("portrait-upload-hint").textContent = `✓ Queued '${repoPath}'. Click 'Publish to GitHub' to upload.`;
    renderPortrait();
    markUnsavedIndicator();
  };
  reader.readAsDataURL(file);
}

function handleHeroImageFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const cleanName = file.name.toLowerCase().replace(/[^a-z0-9.]/g, "-");
  const repoPath = `assets/projects/${cleanName}`;

  const reader = new FileReader();
  reader.onload = function(e) {
    const base64Data = e.target.result.split(",")[1];
    pendingRepoFiles[repoPath] = base64Data;
    localPreviewBlobUrls[repoPath] = URL.createObjectURL(file);
    document.getElementById("cms-hero-img").value = repoPath;
    markUnsavedIndicator();
  };
  reader.readAsDataURL(file);
}

function handleProjectImageFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const cleanName = file.name.toLowerCase().replace(/[^a-z0-9.]/g, "-");
  const repoPath = `assets/projects/${cleanName}`;

  const reader = new FileReader();
  reader.onload = function(e) {
    const base64Data = e.target.result.split(",")[1];
    pendingRepoFiles[repoPath] = base64Data;
    localPreviewBlobUrls[repoPath] = URL.createObjectURL(file);
    document.getElementById("new-proj-img").value = repoPath;
    markUnsavedIndicator();
  };
  reader.readAsDataURL(file);
}

function applyCustomCSS(cssText) {
  portfolioData.customCSS = cssText;
  const styleEl = document.getElementById("custom-user-css");
  if (styleEl) styleEl.textContent = cssText;
  markUnsavedIndicator();
}

async function uploadSingleFileToGitHub(repo, branch, token, filePath, base64Content, commitMsg) {
  const apiUrl = `https://api.github.com/repos/${repo}/contents/${filePath}`;
  const getRes = await fetch(`${apiUrl}?ref=${branch}`, {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Accept": "application/vnd.github+json"
    }
  });

  let sha = undefined;
  if (getRes.ok) {
    const fileData = await getRes.json();
    sha = fileData.sha;
  }

  const putRes = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Accept": "application/vnd.github+json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: commitMsg,
      content: base64Content,
      branch: branch,
      ...(sha ? { sha } : {})
    })
  });

  if (!putRes.ok) {
    const err = await putRes.json();
    throw new Error(err.message || `HTTP ${putRes.status}`);
  }
}

async function buildUpdatedAppJSString(sourceOverride) {
  let rawJS = sourceOverride;
  if (!rawJS) {
    const res = await fetch("app.js", { cache: "no-store" });
    rawJS = await res.text();
  }
  const replacementBlock = `// === PORTFOLIO_DATA_START ===\nconst portfolioData = ${JSON.stringify(portfolioData, null, 2)};\n// === PORTFOLIO_DATA_END ===`;
  if (rawJS.includes("// === PORTFOLIO_DATA_START ===")) {
    return rawJS.replace(
      /\/\/ === PORTFOLIO_DATA_START ===[\s\S]*?\/\/ === PORTFOLIO_DATA_END ===/,
      replacementBlock
    );
  }
  return rawJS.replace(
    /const portfolioData = \{[\s\S]*?\n\};/,
    `const portfolioData = ${JSON.stringify(portfolioData, null, 2)};`
  );
}

async function exportAppJS() {
  try {
    const updatedJS = await buildUpdatedAppJSString();
    const blob = new Blob([updatedJS], { type: "application/javascript" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "app.js";
    a.click();
  } catch (err) {
    alert("Could not build app.js: " + err.message);
  }
}

async function publishDirectlyToGitHub() {
  const repoInput = document.getElementById("gh-repo");
  const branchInput = document.getElementById("gh-branch");
  const tokenInput = document.getElementById("gh-token");

  const repo = (repoInput && repoInput.value.trim()) || localStorage.getItem("jjk_gh_repo") || "nightodaygamestudio/portfolio";
  const branch = (branchInput && branchInput.value.trim()) || localStorage.getItem("jjk_gh_branch") || "main";
  const token = (tokenInput && tokenInput.value.trim()) || localStorage.getItem("jjk_gh_token") || "";
  const statusEl = document.getElementById("gh-status-msg");
  const quickSaveBtn = document.getElementById("quick-save-gh-btn");

  if (!repo || !token) {
    openCMSDrawerDirectly();
    if (statusEl) statusEl.textContent = "⚠️ Please enter Repository and GitHub Token first.";
    return;
  }

  localStorage.setItem("jjk_gh_repo", repo);
  localStorage.setItem("jjk_gh_branch", branch);
  localStorage.setItem("jjk_gh_token", token);

  try {
    if (quickSaveBtn) quickSaveBtn.textContent = "⏳ Saving to GitHub...";

    // 1. Upload any queued binary image files to assets/
    const filePaths = Object.keys(pendingRepoFiles);
    for (const filePath of filePaths) {
      if (statusEl) statusEl.textContent = `⏳ Uploading ${filePath}...`;
      await uploadSingleFileToGitHub(
        repo,
        branch,
        token,
        filePath,
        pendingRepoFiles[filePath],
        `Upload ${filePath} via Portfolio CMS`
      );
      delete pendingRepoFiles[filePath];
    }

    // 2. Fetch and update app.js
    if (statusEl) statusEl.textContent = "⏳ Updating app.js in repository...";
    const apiUrl = `https://api.github.com/repos/${repo}/contents/app.js`;
    const getRes = await fetch(`${apiUrl}?ref=${branch}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/vnd.github+json"
      }
    });

    let sourceJS = "";
    if (getRes.ok) {
      const fileData = await getRes.json();
      sourceJS = decodeURIComponent(escape(atob(fileData.content.replace(/\n/g, ""))));
    }

    const updatedJS = await buildUpdatedAppJSString(sourceJS);
    const base64Content = btoa(unescape(encodeURIComponent(updatedJS)));

    await uploadSingleFileToGitHub(
      repo,
      branch,
      token,
      "app.js",
      base64Content,
      "Update portfolio content via Live CMS"
    );

    if (statusEl) statusEl.textContent = "✅ All changes & files published to GitHub!";
    if (quickSaveBtn) quickSaveBtn.textContent = "✅ Saved to GitHub!";
    setTimeout(() => {
      if (quickSaveBtn) quickSaveBtn.textContent = "🚀 Save to GitHub";
    }, 3000);
  } catch (err) {
    if (statusEl) statusEl.textContent = `❌ Error: ${err.message}`;
    if (quickSaveBtn) quickSaveBtn.textContent = "❌ Error (Open CMS)";
  }
}

function renderAll() {
  applyTheme();
  applyCustomCSS(portfolioData.customCSS || "");
  renderHeroStrings();
  renderPortrait();
  renderProjects();
  applyInlineEditability();
}

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  if (params.get("admin") === "1") {
    openPinModal();
  }
  setLanguage(portfolioData.defaultLang || "en");
  switchSection("about");
});
