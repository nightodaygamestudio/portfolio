/* ==========================================================================
   JAN JELLE KLINGBERG (JJAMPION) — PORTFOLIO STATE & CMS CONTROLLER (app.js)
   ========================================================================== */

const ADMIN_PIN = "1996";

const portfolioData = {
  "defaultLang": "en",
  "defaultTheme": "dark",
  "portraitImageUrl": "data:image/jpeg;base64,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",
  "customCSS": "",
  "originStory": {
    "en": [
      "I am <strong>Jan Jelle Klingberg</strong>, better known as <strong>JJampion</strong> (<code>/ ˈdʒeɪˈtʃæm.pi.ən /</code>). I am <strong>30 years old</strong> and come from <strong>Franconia, Germany</strong> — living in <strong>Roth (Middle Franconia)</strong> and frequently in the <strong>Upper Palatinate (near Cham)</strong>. Since my childhood — actually as long as I can remember — I have been a passionate video game fan fascinated by the gaming world.",
      "While I started working with Unity in 2016, a major technical spark came in <strong>2018</strong> when I discovered how to root Android systems. That inspired me to delve into <strong>reverse engineering of games and manipulating game values</strong> — understanding how games tick under the hood and deciding to pursue my dream of starting my own indie game studio.",
      "<div class='story-quote-highlight'>\"Du sollst doch nicht schon wieder die <strong>Nacht zum Tag</strong> machen!\" — The name <strong>Nightoday Game Studio</strong> came to me easily, inspired by my mother (who often reminded me not to stay up too late, take care of my eyes, and get enough sleep) and the direct translation of 'Nacht zum Tag'.</div>",
      "My second huge inspiration is the legendary <strong>Bethesda Game Studios</strong>, who practically saved my life with <em>Skyrim</em> when I lived in a children's home and only had one single hour of 'media time' per day. I invested almost every single day of that hour into that masterpiece.",
      "My goal is to gain as much experience as possible and grow my career toward becoming a <strong>Lead Game Designer or Game Director</strong>. Having trained in <strong>Game Design & Game Production at the Games Academy (2024–2026)</strong> and published my own titles on Steam and Google Play under <strong>Nightoday Game Studio</strong> and <strong>Klingberg Entertainment</strong>, I am ready to translate my passion into innovative projects that excite players. Thank you for your interest — if you have any questions or are interested in collaborating, feel free to contact me!"
    ],
    "de": [
      "Ich bin <strong>Jan Jelle Klingberg</strong>, besser bekannt als <strong>JJampion</strong> (<code>/ ˈdʒeɪˈtʃæm.pi.ən /</code>). Ich bin <strong>30 Jahre alt</strong> und komme aus <strong>Franken</strong> – wohnhaft in <strong>Roth (Mittelfranken)</strong> und regelmäßig in der <strong>Oberpfalz (Raum Cham)</strong>. Seit meiner Kindheit – eigentlich solange ich denken kann – bin ich leidenschaftlicher Videospielfan und fasziniert von der Welt der Games.",
      "Neben meiner aktiven Arbeit mit Unity (seit 2016) war <strong>2018</strong> ein prägender Meilenstein: Ich entdeckte das Rooten von Android-Systemen, was mich zum <strong>Reverse Engineering von Spielen und der Manipulation von Spielwerten</strong> inspirierte. Damals fasste ich den Entschluss, meinen Traum vom eigenen Indie-Game-Studio zu verwirklichen.",
      "<div class='story-quote-highlight'>„Du sollst doch nicht schon wieder die <strong>Nacht zum Tag</strong> machen!“ — Der Name <strong>Nightoday Game Studio</strong> entstand aus dieser klassischen Erinnerung meiner Mutter, nicht zu lange wach zu bleiben, auf meine Augen zu achten und genug zu schlafen. Aus der direkten Übersetzung von „Nacht zum Tag“ wurde mein Studio-Name geboren.</div>",
      "Meine zweite große Inspiration sind die legendären <strong>Bethesda Game Studios</strong>, die mir mit <em>Skyrim</em> im Grunde das Leben gerettet haben, als ich in einem Kinderheim war und pro Tag nur eine einzige Stunde „Medienzeit“ hatte – eine Stunde, die ich fast jeden Tag in dieses Meisterwerk investierte.",
      "Mein Ziel ist es, so viel Erfahrung wie möglich zu sammeln und meine Karriere bis zum <strong>Lead Game Designer oder Game Director</strong> auszubauen. Mit meiner Ausbildung in <strong>Game Design & Game Production an der Games Academy (2024–2026)</strong> und eigenen Releases auf Steam und im Google Play Store unter <strong>Nightoday Game Studio</strong> und <strong>Klingberg Entertainment</strong> freue ich mich darauf, komplexe Probleme kreativ zu lösen und Spieler zu begeistern. Vielen Dank für dein Interesse – bei Fragen oder Interesse an einer Zusammenarbeit melde dich gerne jederzeit!"
    ]
  },
  "heroProjects": [
    {
      "id": "grimoire-garden",
      "title": "Grimoire Garden: A Taskbar Tale",
      "badges": [
        "Published on Steam",
        "Windows OS Integration",
        "Unity (C#)",
        "59 Steam Achievements"
      ],
      "coverImageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4560080/header.jpg",
      "itchUrl": "https://jjampion.itch.io/",
      "steamAppId": "4560080",
      "itchWidgetCode": "",
      "pitch": {
        "en": "A cozy second-screen taskbar game blending idle farming, deep skill-tree progression, and seamless 'No-Spacebar' typing combat right at the bottom edge of your Windows desktop.",
        "de": "Ein Cozy-Second-Screen-Taskbar-Game, das Idle-Farming, tiefgehende Skill-Tree-Progression und nahtlosen 'No-Spacebar'-Typing-Combat direkt am unteren Rand des Windows-Desktops vereint."
      },
      "designHighlights": {
        "en": [
          "Frictionless Multi-Modal Loop: Switch anytime via global hotkeys (Alt+G) between Cozy, Combat, and Auto modes.",
          "Skill-Based Minigames: 'No-Spacebar' spellcasting against goblins & a Pong-inspired Skeleton Boss fight rewarding Tier 1–20 Bone Meal Fever buffs.",
          "Deep Meta-Progression: Crop investment skill tree, 3 Daily Quests with rerolls, 9-slot Bonus Stash, and an ascending companion (Sparrow Jack Jr.) up to Level 11."
        ],
        "de": [
          "Reibungslose Multi-Mode-Loop: Nahtloser Wechsel per Hotkey (Alt+G) zwischen Cozy-, Combat- und Auto-Modus.",
          "Skill-basierte Minigames: 'No-Spacebar'-Typing-Combat gegen Goblins & ein Pong-inspirierter Skeleton-Bosskampf für Tier 1–20 Bone-Meal-Fever-Buffs.",
          "Tiefe Meta-Progression: Ernte-Investitions-Skilltree, 3 Daily Quests mit Rerolls, 9-Slot Bonus Stash und Companion-System (Jack Jr.) mit Ascension bis Level 11."
        ]
      },
      "techHighlights": {
        "en": [
          "OS-Level Desktop Integration: Multi-monitor selection, dynamic scaling, and automatic Windows taskbar auto-hide detection.",
          "Global Input Hooks & Boss Panic Button: Tracks global keystrokes/clicks outside the window to hatch Jack Jr. Includes instant Ctrl+Alt+I panic hide (hides window + taskbar icon).",
          "Full Steamworks Pipeline: Offline time-delta calculation (Scarecrow/Dance Powder) and 59 tracked Steam Achievements."
        ],
        "de": [
          "OS-Level Desktop-Integration: Multi-Monitor-Auswahl, dynamische Skalierung und automatische Erkennung einer sich ausblendenden Windows-Taskleiste.",
          "Global Input Hooks & Panic-Button: Erfasst globale Klicks/Tastenanschläge außerhalb des Spiels zum Ausbrüten von Jack Jr. Inklusive Ctrl+Alt+I Boss-Button (versteckt Spiel + Taskbar-Icon sofort).",
          "Komplette Steamworks-Pipeline: Zeitbasierte Offline-Wachstumsberechnung und 59 getrackte Steam-Achievements."
        ]
      },
      "demoType": "grimoire"
    },
    {
      "id": "core-dump",
      "title": "Core Dump",
      "badges": [
        "🏆 1st Place Winner (Trijam 3h Jam)",
        "Unity WebGL & Android Port",
        "ASCII Matrix Aesthetic"
      ],
      "coverImageUrl": "",
      "itchUrl": "https://jjampion.itch.io/",
      "steamAppId": "",
      "itchWidgetCode": "",
      "pitch": {
        "en": "Built in just 3 hours for the Trijam theme 'The Forbidden Door' (1st Place Winner) and expanded with an Android port. A fast-paced circular hacking shooter where you breach rotating security rings.",
        "de": "Entstanden in nur 3 Stunden zum Trijam-Thema 'The Forbidden Door' (1. Platz Gewinner) und aktuell als Android-Port erweitert. Ein rasanter Kreis-Arena-Shooter im ASCII-Hacker-Stil."
      },
      "designHighlights": {
        "en": [
          "Creative Theme Translation: Interpreted 'The Forbidden Door' as a digital system backdoor inspired by Starfield's lockpicking, turned into real-time circular arcade action across 10 Security Layers.",
          "3 Distinct Game Modes: Standard Campaign (4 hits / 25% HP loss), One-Life Hardcore Mode, and the endless 'Persistent Threat' mode with active/passive upgrades every 5 levels.",
          "Telegraphed Hazard Design: Rotating laser crosses during Lockdown phases, expanding 'Pizza-Slice' AoE zones on the player's position, and core counter-projectiles."
        ],
        "de": [
          "Kreative Themen-Übersetzung: 'The Forbidden Door' als System-Hintertür interpretiert – inspiriert vom Starfield-Lockpicking, übersetzt in Echtzeit-Kreis-Action über 10 Security-Layer.",
          "3 Spielmodi: Kampagne (4 Leben / 25 %-Schritte), Hardcore-Modus (1 Leben) und der endlose 'Persistent Threat'-Modus mit aktiven/passiven Upgrades alle 5 Level.",
          "Lesbares Hazard-Design: Rotierende Plus-Laser in Lockdown-Phasen, wachsende 'Pizza-Slice'-AoE-Attacken auf der Spielerposition und feindliche Core-Projektile."
        ]
      },
      "techHighlights": {
        "en": [
          "Radical 3-Hour Scope Management: Used procedural-feeling green/black ASCII glyphs instead of hand-drawn sprites to invest 100% of jam time into 3Cs, pacing, and game feel.",
          "Cross-Platform Android Port: Re-engineered circular movement and active ability triggers for mobile touch controls via Android Studio + Highscore Leaderboard."
        ],
        "de": [
          "Radikales 3-Stunden-Scope-Management: Bewusster Einsatz von Schwarz-Grün-ASCII-Zeichen statt handgezeichneten Sprites, um 100 % der Jam-Zeit in Game Feel und Balancing zu stecken.",
          "Cross-Platform Android-Port: Umsetzung der mobilen Version über Android Studio inklusive Touch-Steuerung, aktivem Skill-Button und Leaderboard."
        ]
      },
      "demoType": "coredump"
    },
    {
      "id": "pair-pursuit",
      "title": "Pair Pursuit",
      "badges": [
        "Google Play Store & itch.io",
        "Custom 20-Language Localization",
        "Local Photo UGC System"
      ],
      "coverImageUrl": "",
      "itchUrl": "https://jjampion.itch.io/",
      "steamAppId": "",
      "itchWidgetCode": "",
      "pitch": {
        "en": "A competitive mobile & web memory game paying homage to the classic New Super Mario Bros. DS minigames — engineered with a custom 20-language localization architecture and local photo deck builder.",
        "de": "Ein kompetitives Mobile- & Web-Memory-Spiel als Hommage an die legendären New Super Mario Bros. DS-Minispiele – mit eigenem 20-Sprachen-Lokalisierungssystem und lokalem Foto-Deck-Builder."
      },
      "designHighlights": {
        "en": [
          "Cognitive Load Balancing: Every 5 levels across 5 difficulties, 4 new cards are added — but a subset is briefly pre-revealed at the start so players always hunt for 8 unknown cards while testing short-term memory.",
          "Competitive Time-Attack: Unlocking a difficulty tier also unlocks a single-run Time Attack mode backed by global Google Play Games Leaderboards."
        ],
        "de": [
          "Kognitives Load-Balancing: Alle 5 Level kommen 4 Karten hinzu, wovon jedoch ein Teil zu Beginn kurz aufgedeckt wird – man sucht immer nach 8 unbekannten Karten, während das Kurzzeitgedächtnis mitwächst.",
          "Kompetitiver Time-Attack: Jede freigeschaltete Schwierigkeitsstufe schaltet einen Time-Attack-Modus mit globalen Google Play Games Leaderboards frei."
        ]
      },
      "techHighlights": {
        "en": [
          "Smart UGC Production Shortcut: Built native device gallery integration so players can use any local photo (pets, family, cars) as custom card pairs (100% local privacy) instead of manually creating 20 static themes.",
          "Custom 20-Language System & Engine Migration: Supports EU & global languages (Japanese, Chinese, Korean, Bengali, Bahasa Indonesia) including custom font-shader debugging after a major Unity upgrade."
        ],
        "de": [
          "Smarter UGC-Production-Hebel: Lokale Smartphone-Galerie-Anbindung erlaubt eigene Fotos als Kartenpaare (100 % lokal gespeichert) und adressiert jede Zielgruppe ohne Asset-Bloat.",
          "Eigenes 20-Sprachen-System & Unity-Upgrade: Unterstützt die 20 wichtigsten Sprachen (inkl. Japanisch, Chinesisch, Koreanisch, Bengalisch, Bahasa Indonesia) samt Font-Shader-Debugging."
        ]
      },
      "demoType": "pairpursuit"
    }
  ],
  "labProjects": [
    {
      "id": "proj-1793180375188",
      "title": "TEST",
      "badges": [
        "test"
      ],
      "coverImageUrl": "",
      "itchUrl": "https://jjampion.itch.io/",
      "itchWidgetCode": "<iframe frameborder=\"0\" src=\"https://itch.io/embed/4648177?bg_color=000000&amp;fg_color=acacac&amp;link_color=0c4400&amp;border_color=136600\" width=\"552\" height=\"167\"><a href=\"https://jjampion.itch.io/tfdbreach\">TFD://BREACH by JJampion</a></iframe>",
      "pitch": {
        "en": "test",
        "de": "test"
      }
    },
    {
      "id": "trijam-runner-ups",
      "title": "2x 2nd Place Trijam Prototypes",
      "badges": [
        "🥈 2x 2nd Place Winner",
        "3-Hour Rapid Prototyping",
        "Unity & WebGL"
      ],
      "coverImageUrl": "",
      "itchUrl": "https://jjampion.itch.io/",
      "itchWidgetCode": "",
      "pitch": {
        "en": "Two award-winning 3-hour Game Jam prototypes demonstrating ultra-fast theme interpretation, immediate 'Find the Fun' iteration, and bug-free WebGL delivery under extreme time pressure.",
        "de": "Zwei preisgekrönte 3-Stunden-Prototypen beim Trijam: Fokus auf extrem schnelle Themen-Analyse, 'Find the Fun' in den ersten 30 Minuten und sauberen WebGL-Release unter Zeitdruck."
      }
    },
    {
      "id": "google-play-release",
      "title": "Nightoday Mobile Release (Google Play Live)",
      "badges": [
        "Google Play Store",
        "Live-Ops & Keystore Management",
        "Android SDK"
      ],
      "coverImageUrl": "",
      "itchUrl": "https://play.google.com/store/apps/details?id=gg.nightodaygamestudio.mc&hl=de",
      "itchWidgetCode": "",
      "pitch": {
        "en": "Published commercial Android build maintained with updated Google Play Target SDK requirements, structured keystore security, and end-to-end store compliance.",
        "de": "Selbstständig im Google Play Store veröffentlichtes Android-Spiel inklusive Pflege aktueller Target-SDK-Vorgaben, strukturiertem Keystore-Management und Store-Compliance."
      }
    },
    {
      "id": "single-file-html-engines",
      "title": "Single-File HTML5 & Multi-Engine Experiments",
      "badges": [
        "Vanilla HTML/JS/CSS",
        "Godot / Unreal / GameMaker 2",
        "Zero-Dependency Architecture"
      ],
      "coverImageUrl": "",
      "itchUrl": "https://jjampion.itch.io/",
      "itchWidgetCode": "",
      "pitch": {
        "en": "Self-contained web games built inside a single HTML file without external engine overhead, plus cross-engine prototypes exploring Godot, Unreal Engine, and GameMaker Studio 2.",
        "de": "Komplette Web-Games innerhalb einer einzigen HTML-Datei ohne Engine-Abhängigkeiten sowie Ausflüge in Godot, Unreal Engine und GameMaker Studio 2."
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