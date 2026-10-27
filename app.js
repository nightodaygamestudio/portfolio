/* ==========================================================================
   JAN JELLE KLINGBERG (JJAMPION) — PORTFOLIO STATE & CMS CONTROLLER (app.js)
   ========================================================================== */

const ADMIN_PIN = "1996";

const portfolioData = {
  defaultLang: "en",
  defaultTheme: "dark", // Dark Mode (Liquid Obsidian) as default
  portraitImageUrl: "",
  customCSS: "",

  // Updated 2026 Personal "Who Am I" Story (EN & DE)
  originStory: {
    en: [
      "I am <strong>Jan Jelle Klingberg</strong>, better known as <strong>JJampion</strong> (<code>/ ˈdʒeɪˈtʃæm.pi.ən /</code>). I am <strong>30 years old</strong> and come from <strong>Franconia, Germany</strong> — living in <strong>Roth (Middle Franconia)</strong> and frequently in the <strong>Upper Palatinate (near Cham)</strong>. Since my childhood — actually as long as I can remember — I have been a passionate video game fan fascinated by the gaming world.",
      "While I started working with Unity in 2016, a major technical spark came in <strong>2018</strong> when I discovered how to root Android systems. That inspired me to delve into <strong>reverse engineering of games and manipulating game values</strong> — understanding how games tick under the hood and deciding to pursue my dream of starting my own indie game studio.",
      "<div class='story-quote-highlight'>\"Du sollst doch nicht schon wieder die <strong>Nacht zum Tag</strong> machen!\" — The name <strong>Nightoday Game Studio</strong> came to me easily, inspired by my mother (who often reminded me not to stay up too late, take care of my eyes, and get enough sleep) and the direct translation of 'Nacht zum Tag'.</div>",
      "My second huge inspiration is the legendary <strong>Bethesda Game Studios</strong>, who practically saved my life with <em>Skyrim</em> when I lived in a children's home and only had one single hour of 'media time' per day. I invested almost every single day of that hour into that masterpiece.",
      "My goal is to gain as much experience as possible and grow my career toward becoming a <strong>Lead Game Designer or Game Director</strong>. Having trained in <strong>Game Design & Game Production at the Games Academy (2024–2026)</strong> and published my own titles on Steam and Google Play under <strong>Nightoday Game Studio</strong> and <strong>Klingberg Entertainment</strong>, I am ready to translate my passion into innovative projects that excite players. Thank you for your interest — if you have any questions or are interested in collaborating, feel free to contact me!"
    ],
    de: [
      "Ich bin <strong>Jan Jelle Klingberg</strong>, besser bekannt als <strong>JJampion</strong> (<code>/ ˈdʒeɪˈtʃæm.pi.ən /</code>). Ich bin <strong>30 Jahre alt</strong> und komme aus <strong>Franken</strong> – wohnhaft in <strong>Roth (Mittelfranken)</strong> und regelmäßig in der <strong>Oberpfalz (Raum Cham)</strong>. Seit meiner Kindheit – eigentlich solange ich denken kann – bin ich leidenschaftlicher Videospielfan und fasziniert von der Welt der Games.",
      "Neben meiner aktiven Arbeit mit Unity (seit 2016) war <strong>2018</strong> ein prägender Meilenstein: Ich entdeckte das Rooten von Android-Systemen, was mich zum <strong>Reverse Engineering von Spielen und der Manipulation von Spielwerten</strong> inspirierte. Damals fasste ich den Entschluss, meinen Traum vom eigenen Indie-Game-Studio zu verwirklichen.",
      "<div class='story-quote-highlight'>„Du sollst doch nicht schon wieder die <strong>Nacht zum Tag</strong> machen!“ — Der Name <strong>Nightoday Game Studio</strong> entstand aus dieser klassischen Erinnerung meiner Mutter, nicht zu lange wach zu bleiben, auf meine Augen zu achten und genug zu schlafen. Aus der direkten Übersetzung von „Nacht zum Tag“ wurde mein Studio-Name geboren.</div>",
      "Meine zweite große Inspiration sind die legendären <strong>Bethesda Game Studios</strong>, die mir mit <em>Skyrim</em> im Grunde das Leben gerettet haben, als ich in einem Kinderheim war und pro Tag nur eine einzige Stunde „Medienzeit“ hatte – eine Stunde, die ich fast jeden Tag in dieses Meisterwerk investierte.",
      "Mein Ziel ist es, so viel Erfahrung wie möglich zu sammeln und meine Karriere bis zum <strong>Lead Game Designer oder Game Director</strong> auszubauen. Mit meiner Ausbildung in <strong>Game Design & Game Production an der Games Academy (2024–2026)</strong> und eigenen Releases auf Steam und im Google Play Store unter <strong>Nightoday Game Studio</strong> und <strong>Klingberg Entertainment</strong> freue ich mich darauf, komplexe Probleme kreativ zu lösen und Spieler zu begeistern. Vielen Dank für dein Interesse – bei Fragen oder Interesse an einer Zusammenarbeit melde dich gerne jederzeit!"
    ]
  },

  heroProjects: [
    {
      id: "grimoire-garden",
      title: "Grimoire Garden: A Taskbar Tale",
      badges: ["Published on Steam", "Windows OS Integration", "Unity (C#)", "59 Steam Achievements"],
      coverImageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4560080/header.jpg",
      itchUrl: "https://jjampion.itch.io/",
      steamAppId: "4560080",
      itchWidgetCode: "",
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
      },
      demoType: "grimoire"
    },
    {
      id: "core-dump",
      title: "Core Dump",
      badges: ["🏆 1st Place Winner (Trijam 3h Jam)", "Unity WebGL & Android Port", "ASCII Matrix Aesthetic"],
      coverImageUrl: "",
      itchUrl: "https://jjampion.itch.io/",
      steamAppId: "",
      itchWidgetCode: "",
      pitch: {
        en: "Built in just 3 hours for the Trijam theme 'The Forbidden Door' (1st Place Winner) and expanded with an Android port. A fast-paced circular hacking shooter where you breach rotating security rings.",
        de: "Entstanden in nur 3 Stunden zum Trijam-Thema 'The Forbidden Door' (1. Platz Gewinner) und aktuell als Android-Port erweitert. Ein rasanter Kreis-Arena-Shooter im ASCII-Hacker-Stil."
      },
      designHighlights: {
        en: [
          "Creative Theme Translation: Interpreted 'The Forbidden Door' as a digital system backdoor inspired by Starfield's lockpicking, turned into real-time circular arcade action across 10 Security Layers.",
          "3 Distinct Game Modes: Standard Campaign (4 hits / 25% HP loss), One-Life Hardcore Mode, and the endless 'Persistent Threat' mode with active/passive upgrades every 5 levels.",
          "Telegraphed Hazard Design: Rotating laser crosses during Lockdown phases, expanding 'Pizza-Slice' AoE zones on the player's position, and core counter-projectiles."
        ],
        de: [
          "Kreative Themen-Übersetzung: 'The Forbidden Door' als System-Hintertür interpretiert – inspiriert vom Starfield-Lockpicking, übersetzt in Echtzeit-Kreis-Action über 10 Security-Layer.",
          "3 Spielmodi: Kampagne (4 Leben / 25 %-Schritte), Hardcore-Modus (1 Leben) und der endlose 'Persistent Threat'-Modus mit aktiven/passiven Upgrades alle 5 Level.",
          "Lesbares Hazard-Design: Rotierende Plus-Laser in Lockdown-Phasen, wachsende 'Pizza-Slice'-AoE-Attacken auf der Spielerposition und feindliche Core-Projektile."
        ]
      },
      techHighlights: {
        en: [
          "Radical 3-Hour Scope Management: Used procedural-feeling green/black ASCII glyphs instead of hand-drawn sprites to invest 100% of jam time into 3Cs, pacing, and game feel.",
          "Cross-Platform Android Port: Re-engineered circular movement and active ability triggers for mobile touch controls via Android Studio + Highscore Leaderboard."
        ],
        de: [
          "Radikales 3-Stunden-Scope-Management: Bewusster Einsatz von Schwarz-Grün-ASCII-Zeichen statt handgezeichneten Sprites, um 100 % der Jam-Zeit in Game Feel und Balancing zu stecken.",
          "Cross-Platform Android-Port: Umsetzung der mobilen Version über Android Studio inklusive Touch-Steuerung, aktivem Skill-Button und Leaderboard."
        ]
      },
      demoType: "coredump"
    },
    {
      id: "pair-pursuit",
      title: "Pair Pursuit",
      badges: ["Google Play Store & itch.io", "Custom 20-Language Localization", "Local Photo UGC System"],
      coverImageUrl: "",
      itchUrl: "https://jjampion.itch.io/",
      steamAppId: "",
      itchWidgetCode: "",
      pitch: {
        en: "A competitive mobile & web memory game paying homage to the classic New Super Mario Bros. DS minigames — engineered with a custom 20-language localization architecture and local photo deck builder.",
        de: "Ein kompetitives Mobile- & Web-Memory-Spiel als Hommage an die legendären New Super Mario Bros. DS-Minispiele – mit eigenem 20-Sprachen-Lokalisierungssystem und lokalem Foto-Deck-Builder."
      },
      designHighlights: {
        en: [
          "Cognitive Load Balancing: Every 5 levels across 5 difficulties, 4 new cards are added — but a subset is briefly pre-revealed at the start so players always hunt for 8 unknown cards while testing short-term memory.",
          "Competitive Time-Attack: Unlocking a difficulty tier also unlocks a single-run Time Attack mode backed by global Google Play Games Leaderboards."
        ],
        de: [
          "Kognitives Load-Balancing: Alle 5 Level kommen 4 Karten hinzu, wovon jedoch ein Teil zu Beginn kurz aufgedeckt wird – man sucht immer nach 8 unbekannten Karten, während das Kurzzeitgedächtnis mitwächst.",
          "Kompetitiver Time-Attack: Jede freigeschaltete Schwierigkeitsstufe schaltet einen Time-Attack-Modus mit globalen Google Play Games Leaderboards frei."
        ]
      },
      techHighlights: {
        en: [
          "Smart UGC Production Shortcut: Built native device gallery integration so players can use any local photo (pets, family, cars) as custom card pairs (100% local privacy) instead of manually creating 20 static themes.",
          "Custom 20-Language System & Engine Migration: Supports EU & global languages (Japanese, Chinese, Korean, Bengali, Bahasa Indonesia) including custom font-shader debugging after a major Unity upgrade."
        ],
        de: [
          "Smarter UGC-Production-Hebel: Lokale Smartphone-Galerie-Anbindung erlaubt eigene Fotos als Kartenpaare (100 % lokal gespeichert) und adressiert jede Zielgruppe ohne Asset-Bloat.",
          "Eigenes 20-Sprachen-System & Unity-Upgrade: Unterstützt die 20 wichtigsten Sprachen (inkl. Japanisch, Chinesisch, Koreanisch, Bengalisch, Bahasa Indonesia) samt Font-Shader-Debugging."
        ]
      },
      demoType: "pairpursuit"
    }
  ],

  labProjects: [
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
      badges: ["Vanilla HTML/JS/CSS", "Godot / Unreal / GameMaker 2", "Zero-Dependency Architecture"],
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

// Merged, Single Unified Copy for Studios, Clients & Visitors (EN & DE)
const uiStrings = {
  en: {
    navSubrole: "Technical Game Designer • Nightoday Game Studio",
    navAbout: "About Me",
    navOrigin: "Who Am I",
    navProjects: "Hero Projects",
    navLab: "Rapid Prototyping",
    heroStatus: "Technical Game Designer • Founder of Nightoday Game Studio & Klingberg Entertainment",
    heroHeadline: "I don't just write concepts on paper — I ship playable systems & commercial games in record time.",
    heroLead: "I love playing games, but I love building them even more. With active Unity experience since 2016, a formal education in Game Design & Game Production at the Games Academy, and self-published titles on Steam and Google Play under Nightoday Game Studio & Klingberg Entertainment, I unite creative game design, rapid 3-hour prototyping, and rock-solid technical execution.",
    factLocation: "<strong>Location:</strong> 30 years old • Roth (Middle Franconia) & near Cham (Upper Palatinate).",
    factEdu: "<strong>Education:</strong> Game Design & Game Production at Games Academy (2024–2026).",
    factStudio: "<strong>Studio & Vision:</strong> <em>Nightoday Game Studio</em> & <em>Klingberg Entertainment</em> • Path to Lead Game Designer.",
    stat1: "Active Unity License & C#",
    stat2: "Trijam (3-Hour Game Jam)",
    stat3: "Self-Published Store Pipelines",
    stat4: "Custom Tooling & Localization",
    ctaSteam: "Grimoire Garden on Steam",
    ctaItch: "All Projects on itch.io",
    ctaPlay: "Google Play Store",
    ctaOriginBtn: "Read My Origin Story →",
    portraitRoleTag: "JJampion",
    portraitBtn: "📷 Photo",
    storyBadge: "02 • Who Am I & Personal Origin",
    storyHeading: "From Reverse Engineering & Skyrim to Nightoday Game Studio",
    backAboutBtn: "Back to Overview",
    nextProjectsBtn: "Explore Hero Projects →",
    projectsEyebrow: "03 • Proven Production & Technical Design",
    projectsHeading: "Hero Projects & Deep System Case Studies",
    addProjectBtn: "Add / Edit Projects & Itch.io Widgets",
    designHeader: "🎯 Game Design & Player Experience",
    techHeader: "⚙️ Technical Design & Production",
    widgetHeader: "🕹️ Official Store & Itch.io Access",
    widgetEditBtn: "Edit <iframe> / Link",
    itchOpenBtn: "Play / View on itch.io ↗",
    labEyebrow: "04 • 3-Hour Trijams & Single-File HTML Architecture",
    labHeading: "Rapid Prototyping Lab & Itch.io Showcase",
    visitItch: "Visit jjampion.itch.io"
  },
  de: {
    navSubrole: "Technical Game Designer • Nightoday Game Studio",
    navAbout: "Über Mich",
    navOrigin: "Wer ich bin",
    navProjects: "Hero-Projekte",
    navLab: "Rapid Prototyping",
    heroStatus: "Technical Game Designer • Gründer von Nightoday Game Studio & Klingberg Entertainment",
    heroHeadline: "Ich baue nicht nur Konzepte auf Papier — ich liefere spielbare Systeme & fertige Releases in Rekordzeit.",
    heroLead: "Ich liebe es, Spiele zu spielen – aber noch mehr liebe ich es, sie zu entwickeln. Mit aktiver Unity-Erfahrung seit 2016, meiner Ausbildung in Game Design & Game Production an der Games Academy sowie eigenen Releases auf Steam und im Google Play Store unter Nightoday Game Studio & Klingberg Entertainment verbinde ich kreatives Game Design, 3-Stunden-Prototyping und saubere technische Umsetzung.",
    factLocation: "<strong>Standort:</strong> 30 Jahre alt • Roth (Mittelfranken) & Raum Cham (Oberpfalz).",
    factEdu: "<strong>Ausbildung:</strong> Game Design & Game Production an der Games Academy (2024–2026).",
    factStudio: "<strong>Studio & Ziel:</strong> <em>Nightoday Game Studio</em> & <em>Klingberg Entertainment</em> • Weg zum Lead Game Designer.",
    stat1: "Aktive Unity-Lizenz & C#",
    stat2: "Trijam (3-Stunden Game Jam)",
    stat3: "Eigene Steam & Play Releases",
    stat4: "Eigenes Localization-System",
    ctaSteam: "Grimoire Garden auf Steam",
    ctaItch: "Alle Projekte auf itch.io",
    ctaPlay: "Google Play Store",
    ctaOriginBtn: "Meine Story lesen →",
    portraitRoleTag: "JJampion",
    portraitBtn: "📷 Foto",
    storyBadge: "02 • Wer ich bin & Meine Geschichte",
    storyHeading: "Vom Reverse Engineering & Skyrim zum Nightoday Game Studio",
    backAboutBtn: "Zurück zur Übersicht",
    nextProjectsBtn: "Zu den Hero-Projekten →",
    projectsEyebrow: "03 • Praxiserprobte Production & Technical Design",
    projectsHeading: "Hero-Projekte & System-Fallstudien",
    addProjectBtn: "Projekte & Itch.io-Widgets bearbeiten",
    designHeader: "🎯 Game Design & Spielerlebnis",
    techHeader: "⚙️ Technical Design & Production",
    widgetHeader: "🕹️ Store & Itch.io Direktzugang",
    widgetEditBtn: "<iframe> / Link bearbeiten",
    itchOpenBtn: "Auf itch.io ansehen ↗",
    labEyebrow: "04 • 3-Stunden Trijams & Single-File HTML Architektur",
    labHeading: "Rapid Prototyping Lab & Itch.io Showcase",
    visitItch: "Zu jjampion.itch.io"
  }
};

// 4 Ordered Stages: 01 About -> 02 Origin -> 03 Hero Projects -> 04 Rapid Prototyping
const stageOrder = ["about", "origin", "hero-projects", "prototyping-lab"];
let currentLang = portfolioData.defaultLang || "en";
let currentTheme = portfolioData.defaultTheme || "dark";
let currentSection = "about";
let isAdminUnlocked = false;
let isStageTransitioning = false;

/* ==========================================================================
   1. EXCLUSIVE MIDDLE-CENTERED 4-STAGE NAVIGATION + SCROLL-TO-SWITCH
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
  setTimeout(() => { isStageTransitioning = false; }, 680);
}

// Wheel Scroll-to-Switch
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

// Touch Swipe-to-Switch on Mobile
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
   2. STEALTH ADMIN UNLOCK LOGIC (CTRL+SHIFT+E, 5x LOGO CLICK, ?admin=1)
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

  const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
  if (["input", "textarea", "select"].includes(activeTag)) return;

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

function verifyAdminPin() {
  const entered = document.getElementById("admin-pin-input").value.trim();
  if (entered === ADMIN_PIN) {
    isAdminUnlocked = true;
    document.body.classList.add("admin-unlocked");
    closePinModal();
    openCMSDrawerDirectly();
  } else {
    document.getElementById("pin-error-msg").style.display = "block";
  }
}

function lockAdminMode() {
  isAdminUnlocked = false;
  document.body.classList.remove("admin-unlocked");
  document.getElementById("cms-backdrop").classList.remove("open");
}

/* ==========================================================================
   3. GPU-OPTIMIZED 3D TILT & SPECULAR CURSOR SPOTLIGHT
   ========================================================================== */
let rafPending = false;
window.addEventListener("pointermove", (e) => {
  if (e.pointerType === "touch" || rafPending) return;
  const card = e.target.closest(".liquid-glass");
  if (!card) return;
  rafPending = true;
  requestAnimationFrame(() => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((centerY - y) / centerY) * 1.1;
    const tiltY = ((x - centerX) / centerX) * 1.1;
    card.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
    rafPending = false;
  });
}, { passive: true });

document.addEventListener("pointerout", (e) => {
  const card = e.target.closest(".liquid-glass");
  if (card && !card.contains(e.relatedTarget)) {
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  }
}, { passive: true });

document.addEventListener("visibilitychange", () => {
  document.body.classList.toggle("tab-hidden", document.hidden);
});

/* ==========================================================================
   4. LANGUAGE & THEME CONTROLLERS
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

  triggerMorphAnimation("about-morph-box", () => renderAll());
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
    label.textContent = currentLang === "de" ? "Liquid Pearl (Weiß)" : "Liquid Pearl";
  } else {
    icon.textContent = "🌙";
    label.textContent = "Liquid Obsidian";
  }
}

/* ==========================================================================
   5. RENDER FUNCTIONS
   ========================================================================== */
function renderHeroStrings() {
  const t = uiStrings[currentLang];
  document.getElementById("nav-subrole").textContent = t.navSubrole;
  document.getElementById("nav-about").textContent = t.navAbout;
  document.getElementById("nav-origin").textContent = t.navOrigin;
  document.getElementById("nav-projects").textContent = t.navProjects;
  document.getElementById("nav-lab").textContent = t.navLab;

  document.getElementById("hero-status-text").textContent = t.heroStatus;
  document.getElementById("hero-headline").textContent = t.heroHeadline;
  document.getElementById("hero-lead-text").textContent = t.heroLead;

  document.getElementById("fact-location").innerHTML = t.factLocation;
  document.getElementById("fact-edu").innerHTML = t.factEdu;
  document.getElementById("fact-studio").innerHTML = t.factStudio;

  document.getElementById("stat-1-label").textContent = t.stat1;
  document.getElementById("stat-2-label").textContent = t.stat2;
  document.getElementById("stat-3-label").textContent = t.stat3;
  document.getElementById("stat-4-label").textContent = t.stat4;

  document.getElementById("cta-steam").textContent = t.ctaSteam;
  document.getElementById("cta-itch").textContent = t.ctaItch;
  document.getElementById("cta-play").textContent = t.ctaPlay;
  document.getElementById("cta-origin-btn").textContent = t.ctaOriginBtn;

  // Stage 02: Origin Story
  document.getElementById("story-badge").textContent = t.storyBadge;
  document.getElementById("story-heading").textContent = t.storyHeading;
  document.getElementById("back-about-btn").textContent = t.backAboutBtn;
  document.getElementById("next-projects-btn").textContent = t.nextProjectsBtn;

  const paragraphs = (portfolioData.originStory && portfolioData.originStory[currentLang]) || portfolioData.originStory.en;
  document.getElementById("story-paragraphs").innerHTML = paragraphs.map(p => `<p>${p}</p>`).join("");

  // Stage 03 & 04 Headers
  document.getElementById("projects-eyebrow").textContent = t.projectsEyebrow;
  document.getElementById("projects-heading").textContent = t.projectsHeading;
  document.getElementById("add-project-top-btn").textContent = t.addProjectBtn;

  document.getElementById("lab-eyebrow").textContent = t.labEyebrow;
  document.getElementById("lab-heading").textContent = t.labHeading;
  document.getElementById("visit-itch-label").textContent = t.visitItch;
}

function renderPortrait() {
  const container = document.getElementById("portrait-container");
  const navAvatar = document.getElementById("nav-avatar");
  const t = uiStrings[currentLang];

  if (portfolioData.portraitImageUrl && portfolioData.portraitImageUrl.trim() !== "") {
    container.innerHTML = `<img src="${portfolioData.portraitImageUrl}" alt="Jan Jelle Klingberg (JJampion)" />`;
    navAvatar.innerHTML = `<img src="${portfolioData.portraitImageUrl}" alt="JJK" />`;
  } else {
    container.innerHTML = `
      <div class="portrait-visitor-monogram">
        <div class="portrait-initials-ring">JJK</div>
        <div style="font-size:0.74rem; color:var(--accent-primary); font-weight:800;">${t.portraitRoleTag}</div>
        <button class="pill-btn admin-only" style="padding:4px 10px; font-size:0.7rem;" onclick="document.getElementById('cms-portrait-file').click()">
          ${t.portraitBtn}
        </button>
      </div>
    `;
    navAvatar.textContent = "JJ";
  }
}

function renderWidgetSlot(project) {
  const t = uiStrings[currentLang];
  const pitchText = (project.pitch && project.pitch[currentLang]) || (project.pitch && project.pitch.en) || "";

  let embedContent = "";

  if (project.itchWidgetCode && project.itchWidgetCode.trim() !== "") {
    embedContent = `
      <div style="display:flex; flex-wrap:wrap; gap:12px; align-items:center;">
        <div class="iframe-responsive-wrapper">
          ${project.itchWidgetCode}
        </div>
        <button class="pill-btn admin-only" onclick="openCMSForProject('${project.id}')">⚙️ ${t.widgetEditBtn}</button>
      </div>
    `;
  } else if (project.steamAppId && project.steamAppId.trim() !== "") {
    embedContent = `
      <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center;">
        <div class="iframe-responsive-wrapper" style="flex: 1 1 520px;">
          <iframe src="https://store.steampowered.com/widget/${project.steamAppId}/" frameborder="0" width="646" height="190" loading="lazy"></iframe>
        </div>
        <div class="itch-launch-card" style="flex: 1 1 320px;">
          <div class="itch-launch-thumb">
            ${project.coverImageUrl ? `<img src="${project.coverImageUrl}" alt="${project.title}" loading="lazy" />` : `itch.io`}
          </div>
          <div class="itch-launch-info">
            <div class="itch-launch-title-row">
              <span class="itch-badge">itch.io</span>
              <span class="itch-launch-title">${project.title}</span>
            </div>
            <div class="itch-launch-desc">${pitchText}</div>
            <div class="itch-launch-actions">
              <a href="${project.itchUrl || 'https://jjampion.itch.io/'}" target="_blank" rel="noopener" class="btn-itch">${t.itchOpenBtn}</a>
              <button class="pill-btn admin-only" style="padding:5px 10px; font-size:0.74rem;" onclick="openCMSForProject('${project.id}')">⚙️ ${t.widgetEditBtn}</button>
            </div>
          </div>
        </div>
      </div>
    `;
  } else {
    embedContent = `
      <div class="itch-launch-card">
        <div class="itch-launch-thumb">
          ${project.coverImageUrl ? `<img src="${project.coverImageUrl}" alt="${project.title}" loading="lazy" />` : `itch.io`}
        </div>
        <div class="itch-launch-info">
          <div class="itch-launch-title-row">
            <span class="itch-badge">itch.io</span>
            <span class="itch-launch-title">${project.title}</span>
          </div>
          <div class="itch-launch-desc">${pitchText}</div>
          <div class="itch-launch-actions">
            <a href="${project.itchUrl || 'https://jjampion.itch.io/'}" target="_blank" rel="noopener" class="btn-itch">${t.itchOpenBtn}</a>
            <button class="pill-btn admin-only" style="padding:5px 10px; font-size:0.74rem;" onclick="openCMSForProject('${project.id}')">⚙️ ${t.widgetEditBtn}</button>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="widget-embed-zone">
      <div class="widget-zone-header">
        <span>${t.widgetHeader}</span>
      </div>
      ${embedContent}
    </div>
  `;
}

function renderInteractiveDemo(demoType) {
  if (demoType === "grimoire") {
    return `
      <div class="interactive-box">
        <div class="sim-header">
          <span>⌨️ LIVE DEMO: "No-Spacebar" Typing Combat</span>
          <span id="gg-score-label">Goblins Defeated: 0</span>
        </div>
        <div class="taskbar-sim-stage">
          <div>
            <span style="font-size:0.76rem; color:#94a3b8;">Type word:</span>
            <span class="goblin-word" id="gg-active-word">IGNIS</span>
          </div>
          <input type="text" id="gg-typing-input" placeholder="Type spell (no space)..." 
            style="padding:6px 10px; border-radius:6px; border:1px solid #38bdf8; background:#07090e; color:#fff; font-family:var(--font-mono); font-size:0.82rem; width:180px; max-width:100%;"
            oninput="checkGrimoireTyping(this)" />
        </div>
      </div>
    `;
  }
  if (demoType === "coredump") {
    return `
      <div class="interactive-box">
        <div class="sim-header">
          <span>🟢 ASCII MATRIX LOCKPICK ARENA (Trijam 1st Place)</span>
          <span>Layer 01 / 10</span>
        </div>
        <div style="font-family:var(--font-mono); color:#34d399; background:#020604; padding:12px; border-radius:8px; text-align:center; letter-spacing:0.08em; font-size:0.78rem; overflow-x:auto;">
          [ 01001100 ] === ( GAP ) === [ 01000011 ]<br/>
          <span style="color:#a7f3d0;">▲ TIMING SHOT THROUGH RING GAP ▲</span>
        </div>
      </div>
    `;
  }
  if (demoType === "pairpursuit") {
    return `
      <div class="interactive-box">
        <div class="sim-header">
          <span>🌍 20-LANGUAGE CUSTOM LOCALIZATION PREVIEW</span>
          <span>Custom Font Shader</span>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:8px;">
          <button class="pill-btn" style="padding:3px 9px; font-size:0.72rem;" onclick="setPairLang('EN: Match 8 Hidden Planet Pairs!')">EN</button>
          <button class="pill-btn" style="padding:3px 9px; font-size:0.72rem;" onclick="setPairLang('DE: Finde 8 verdeckte Planeten-Paare!')">DE</button>
          <button class="pill-btn" style="padding:3px 9px; font-size:0.72rem;" onclick="setPairLang('JP: 8組の惑星カードを見つけよう！')">日本語</button>
          <button class="pill-btn" style="padding:3px 9px; font-size:0.72rem;" onclick="setPairLang('KR: 숨겨진 행성 카드 8쌍을 맞추세요!')">한국어</button>
          <button class="pill-btn" style="padding:3px 9px; font-size:0.72rem;" onclick="setPairLang('BN: ৮টি গ্রহের জোড়া খুঁজে বের করুন!')">বাংলা</button>
          <button class="pill-btn" style="padding:3px 9px; font-size:0.72rem;" onclick="setPairLang('ID: Temukan 8 Pasang Kartu Planet!')">ID</button>
        </div>
        <div id="pair-lang-output" style="font-weight:700; color:#38bdf8; font-size:0.85rem;">
          EN: Match 8 Hidden Planet Pairs!
        </div>
      </div>
    `;
  }
  return "";
}

function renderProjects() {
  const t = uiStrings[currentLang];
  const heroContainer = document.getElementById("hero-projects-container");
  const labContainer = document.getElementById("lab-projects-container");

  heroContainer.innerHTML = portfolioData.heroProjects.map(proj => {
    const pitch = (proj.pitch && proj.pitch[currentLang]) || (proj.pitch && proj.pitch.en) || "";
    const designList = (proj.designHighlights && proj.designHighlights[currentLang]) || (proj.designHighlights && proj.designHighlights.en) || [];
    const techList = (proj.techHighlights && proj.techHighlights[currentLang]) || (proj.techHighlights && proj.techHighlights.en) || [];

    const badgesHtml = (proj.badges || []).map((b, idx) => {
      const cls = b.includes("1st") || b.includes("Winner") ? "badge award" : (idx === 0 ? "badge highlight" : "badge");
      return `<span class="${cls}">${b}</span>`;
    }).join("");

    const imageHtml = proj.coverImageUrl && proj.coverImageUrl.trim() !== ""
      ? `<img src="${proj.coverImageUrl}" alt="${proj.title}" loading="lazy" />`
      : `<div class="image-artwork-fallback">
           <div style="font-weight:800; font-size:1.15rem; letter-spacing:-0.02em;">${proj.title}</div>
           <div style="font-size:0.78rem; color:#94a3b8;">${(proj.badges || []).slice(0, 2).join(" • ")}</div>
           <button class="pill-btn admin-only" style="margin-top:8px;" onclick="openCMSForProject('${proj.id}')">📷 Add Screenshot / GIF</button>
         </div>`;

    return `
      <article class="project-card liquid-glass hover-lift" id="proj-${proj.id}">
        <div class="project-top-grid">
          <div>
            <div class="project-badges">${badgesHtml}</div>
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-pitch">${pitch}</p>

            <div class="highlights-columns">
              <div class="highlight-box">
                <h4>${t.designHeader}</h4>
                <ul>${designList.map(item => `<li>${item}</li>`).join("")}</ul>
              </div>
              <div class="highlight-box">
                <h4>${t.techHeader}</h4>
                <ul>${techList.map(item => `<li>${item}</li>`).join("")}</ul>
              </div>
            </div>
          </div>

          <div class="project-media-column">
            <div class="project-image-frame">
              ${imageHtml}
            </div>
            ${renderInteractiveDemo(proj.demoType)}
          </div>
        </div>

        ${renderWidgetSlot(proj)}
      </article>
    `;
  }).join("");

  labContainer.innerHTML = portfolioData.labProjects.map(proj => {
    const pitch = (proj.pitch && proj.pitch[currentLang]) || (proj.pitch && proj.pitch.en) || "";
    const badgesHtml = (proj.badges || []).map(b => `<span class="badge">${b}</span>`).join("");

    const labImageHtml = proj.coverImageUrl && proj.coverImageUrl.trim() !== ""
      ? `<div class="project-image-frame" style="margin-bottom:12px;"><img src="${proj.coverImageUrl}" alt="${proj.title}" loading="lazy" /></div>`
      : "";

    return `
      <article class="lab-card liquid-glass hover-lift">
        <div>
          ${labImageHtml}
          <div class="project-badges">${badgesHtml}</div>
          <h3 class="project-title" style="font-size:1.22rem;">${proj.title}</h3>
          <p class="project-pitch" style="font-size:0.88rem; margin-bottom:12px;">${pitch}</p>
        </div>
        ${renderWidgetSlot(proj)}
      </article>
    `;
  }).join("");
}

const ggWords = ["IGNIS", "LUMOS", "TERRA", "AQUA", "HARVEST", "GRIMOIRE"];
let ggWordIdx = 0;
let ggKills = 0;

function checkGrimoireTyping(inputEl) {
  const target = ggWords[ggWordIdx];
  if (inputEl.value.toUpperCase().trim() === target) {
    ggKills++;
    ggWordIdx = (ggWordIdx + 1) % ggWords.length;
    inputEl.value = "";
    const wordEl = document.getElementById("gg-active-word");
    wordEl.textContent = ggWords[ggWordIdx];
    wordEl.style.transform = "scale(1.18)";
    setTimeout(() => { wordEl.style.transform = "scale(1)"; }, 180);
    document.getElementById("gg-score-label").textContent = `Goblins Defeated: ${ggKills} ✨`;
  }
}

function setPairLang(text) {
  const el = document.getElementById("pair-lang-output");
  if (el) el.textContent = text;
}

/* ==========================================================================
   6. CMS STUDIO & MODULAR app.js GITHUB PAGES PUBLISHER
   ========================================================================== */
function openCMSDrawerDirectly() {
  const backdrop = document.getElementById("cms-backdrop");
  backdrop.classList.add("open");
  populateCMSProjectSelect();
  document.getElementById("cms-portrait-url").value = portfolioData.portraitImageUrl || "";
  document.getElementById("cms-custom-css").value = portfolioData.customCSS || "";
  document.getElementById("gh-repo").value = localStorage.getItem("jjk_gh_repo") || "";
  document.getElementById("gh-branch").value = localStorage.getItem("jjk_gh_branch") || "main";
  document.getElementById("gh-token").value = localStorage.getItem("jjk_gh_token") || "";
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

function openCMSForProject(projectId) {
  if (!isAdminUnlocked) {
    openPinModal();
    return;
  }
  openCMSDrawerDirectly();
  const select = document.getElementById("cms-project-select");
  select.value = projectId;
  loadProjectIntoCMS();
}

function populateCMSProjectSelect() {
  const select = document.getElementById("cms-project-select");
  const allProjects = [...portfolioData.heroProjects, ...portfolioData.labProjects];
  select.innerHTML = allProjects.map(p => `<option value="${p.id}">${p.title}</option>`).join("");
  loadProjectIntoCMS();
}

function findProjectById(id) {
  return portfolioData.heroProjects.find(p => p.id === id) || portfolioData.labProjects.find(p => p.id === id);
}

function loadProjectIntoCMS() {
  const id = document.getElementById("cms-project-select").value;
  const proj = findProjectById(id);
  if (!proj) return;
  document.getElementById("cms-proj-img").value = proj.coverImageUrl || "";
  document.getElementById("cms-proj-link").value = proj.itchUrl || "";
  document.getElementById("cms-proj-widget").value = proj.itchWidgetCode || "";
}

function saveSelectedProjectChanges() {
  const id = document.getElementById("cms-project-select").value;
  const proj = findProjectById(id);
  if (!proj) return;
  proj.coverImageUrl = document.getElementById("cms-proj-img").value.trim();
  proj.itchUrl = document.getElementById("cms-proj-link").value.trim();
  proj.itchWidgetCode = document.getElementById("cms-proj-widget").value.trim();
  renderProjects();
}

function updatePortraitFromInput(url) {
  portfolioData.portraitImageUrl = url.trim();
  document.getElementById("cms-portrait-url").value = portfolioData.portraitImageUrl;
  renderPortrait();
}

function handlePortraitFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    portfolioData.portraitImageUrl = e.target.result;
    document.getElementById("cms-portrait-url").value = "[Local Image Embedded]";
    renderPortrait();
  };
  reader.readAsDataURL(file);
}

function addNewProjectFromCMS() {
  const title = document.getElementById("new-proj-title").value.trim();
  if (!title) return;
  const badges = document.getElementById("new-proj-badges").value.split(",").map(s => s.trim()).filter(Boolean);
  const pitchEn = document.getElementById("new-proj-pitch-en").value.trim();
  const pitchDe = document.getElementById("new-proj-pitch-de").value.trim() || pitchEn;
  const coverImageUrl = document.getElementById("new-proj-img").value.trim();
  const itchUrl = document.getElementById("new-proj-link").value.trim() || "https://jjampion.itch.io/";
  const itchWidgetCode = document.getElementById("new-proj-widget").value.trim();

  portfolioData.labProjects.unshift({
    id: "proj-" + Date.now(),
    title,
    badges: badges.length ? badges : ["Unity", "itch.io"],
    coverImageUrl,
    itchUrl,
    itchWidgetCode,
    pitch: { en: pitchEn, de: pitchDe }
  });

  renderProjects();
  populateCMSProjectSelect();
  document.getElementById("new-proj-title").value = "";
  document.getElementById("new-proj-widget").value = "";
}

function applyCustomCSS(cssText) {
  portfolioData.customCSS = cssText;
  const styleEl = document.getElementById("custom-user-css");
  if (styleEl) styleEl.textContent = cssText;
}

async function buildUpdatedAppJSString() {
  const res = await fetch("app.js", { cache: "no-store" });
  const rawJS = await res.text();
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
    alert("Could not build app.js locally (make sure you run on http/https or GitHub Pages): " + err.message);
  }
}

async function publishDirectlyToGitHub() {
  const repo = document.getElementById("gh-repo").value.trim();
  const branch = document.getElementById("gh-branch").value.trim() || "main";
  const token = document.getElementById("gh-token").value.trim();
  const statusEl = document.getElementById("gh-status-msg");

  if (!repo || !token) {
    statusEl.textContent = "⚠️ Please enter Repo (user/repo) and GitHub Token.";
    return;
  }

  localStorage.setItem("jjk_gh_repo", repo);
  localStorage.setItem("jjk_gh_branch", branch);
  localStorage.setItem("jjk_gh_token", token);

  statusEl.textContent = "⏳ Connecting to GitHub API (syncing app.js)...";

  try {
    const apiUrl = `https://api.github.com/repos/${repo}/contents/app.js`;
    const getRes = await fetch(`${apiUrl}?ref=${branch}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/vnd.github+json"
      }
    });

    let sha = undefined;
    let sourceJS = "";
    if (getRes.ok) {
      const fileData = await getRes.json();
      sha = fileData.sha;
      sourceJS = decodeURIComponent(escape(atob(fileData.content.replace(/\n/g, ""))));
    } else {
      sourceJS = await buildUpdatedAppJSString();
    }

    const updatedJS = sourceJS.replace(
      /const portfolioData = \{[\s\S]*?\n\};/,
      `const portfolioData = ${JSON.stringify(portfolioData, null, 2)};`
    );

    const base64Content = btoa(unescape(encodeURIComponent(updatedJS)));

    const putRes = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/vnd.github+json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "Update portfolioData in app.js via Stealth CMS Studio",
        content: base64Content,
        branch: branch,
        ...(sha ? { sha } : {})
      })
    });

    if (putRes.ok) {
      statusEl.textContent = "✅ Live pushed app.js to GitHub Pages! Changes go live in ~30s.";
    } else {
      const err = await putRes.json();
      statusEl.textContent = `❌ GitHub Error: ${err.message || putRes.status}`;
    }
  } catch (err) {
    statusEl.textContent = `❌ Network Error: ${err.message}`;
  }
}

function renderAll() {
  applyTheme();
  applyCustomCSS(portfolioData.customCSS || "");
  renderHeroStrings();
  renderPortrait();
  renderProjects();
}

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  if (params.get("admin") === "1") {
    openPinModal();
  }
  setLanguage(portfolioData.defaultLang || "en");
  switchSection("about");
});