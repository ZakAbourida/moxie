import type { Lang } from "./translations"

const it = {
  common: {
    home: "Home",
    product: "Prodotto",
    explore: "Esplora il progetto",
    reserved: "Area riservata",
    backHome: "Torna alla panoramica",
    discover: "Approfondisci",
    beta: "Private beta sul campo",
    betaDetail:
      "In test durante la stagione con un gruppo ristretto di coach e circa 20 atleti.",
    skip: "Vai al contenuto",
  },
  home: {
    topicsEyebrow: "Esplora Moxie",
    topicsTitle: "Due esperienze. Un unico sistema.",
    topicsBody:
      "Entra dal workspace del coach, dal portale dell’atleta o guarda cosa tiene insieme tutto il prodotto. Program Builder e Analyser sono i due cuori operativi di Moxie.",
    projectEyebrow: "Un progetto reale",
    projectTitle: "Costruito da un coach. Usato sul campo.",
    projectBody:
      "Moxie nasce per sostituire gli strumenti che usavo ogni giorno. Non è un concept né un prodotto aperto al mercato: è un progetto a uso ristretto, testato questa stagione con colleghi e atleti reali.",
    projectStats: [
      { value: "3–4", label: "coach nel gruppo pilota" },
      { value: "≈20", label: "atleti in utilizzo reale" },
      { value: "1", label: "stagione di private beta" },
    ],
    engineeringCta: "Scopri come è costruito",
  },
  topics: [
    {
      id: "coach",
      n: "01",
      eyebrow: "Coach workspace · Desktop first",
      title: "Esperienza coach",
      short:
        "Programmare, leggere gli atleti e adattare il lavoro senza cambiare strumento o perdere il contesto.",
      hero: "Tutto il coaching, in un solo workspace.",
      intro:
        "Il coach parte dal roster, costruisce il lavoro nel Program Center e torna all’Analyser per capire cosa adattare. Libreria, Feedback e Calendario collegano ogni passaggio.",
    },
    {
      id: "programmazione",
      n: "01A",
      eyebrow: "Coach side · Desktop first",
      title: "Programmazione",
      short:
        "Dal blocco alla singola serie, con la velocità di una griglia e la struttura di un sistema.",
      hero: "Il programma non è un file. È un documento vivo.",
      intro:
        "Il coach costruisce, assegna e adatta il lavoro in una griglia pensata per il modo in cui scrive davvero: settimane, giorni, esercizi e prescrizioni compatte nello stesso spazio.",
    },
    {
      id: "monitoraggio",
      n: "01B",
      eyebrow: "Dal segnale alla scelta",
      title: "Monitoraggio",
      short:
        "Carico, readiness e feedback diventano segnali leggibili. La decisione resta al coach.",
      hero: "Capire chi ha bisogno di te, adesso.",
      intro:
        "Moxie mette in relazione ciò che era previsto, ciò che è successo davvero e come ha risposto l’atleta. Non decide al posto del coach: rende visibili gli scostamenti che meritano attenzione.",
    },
    {
      id: "atleta",
      n: "02",
      eyebrow: "Athlete side · Mobile first",
      title: "Esperienza atleta",
      short:
        "La seduta, il feedback e il wellness in un portale mobile semplice da usare ogni giorno.",
      hero: "Registrare la realtà, senza interrompere l’allenamento.",
      intro:
        "L’atleta vede cosa fare, modifica ciò che ha eseguito davvero e restituisce feedback in pochi secondi. Il dato torna al coach senza chat, screenshot o trascrizioni.",
    },
    {
      id: "engineering",
      n: "03",
      eyebrow: "Case study · Full stack",
      title: "Engineering",
      short:
        "Architettura, sicurezza e motore di dominio dietro un prodotto utilizzato con dati reali.",
      hero: "Non solo interfaccia. Un sistema costruito end to end.",
      intro:
        "Moxie è anche un case study full stack: un’applicazione multi-ruolo con dati sensibili, programmi versionati, log reali e regole di dominio testate.",
    },
  ],
  coach: {
    workflowEyebrow: "Il workflow reale",
    workflowTitle: "Guarda il roster. Costruisci. Analizza. Adatta.",
    workflowBody:
      "Moxie non chiede al coach di lavorare per moduli isolati. Ogni giornata attraversa tre livelli connessi e ritorna al punto di partenza con informazioni nuove.",
    workflowSteps: [
      {
        n: "01",
        title: "Triage del roster",
        body: "Dashboard, Weekly Monitor e System Map mostrano chi richiede attenzione oggi.",
      },
      {
        n: "02",
        title: "Programma il lavoro",
        body: "Program Center e Builder gestiscono struttura, lifecycle, template, export e versioni.",
      },
      {
        n: "03",
        title: "Leggi la risposta",
        body: "Analyser incrocia ACWR, readiness, compliance, feedback e storico individuale.",
      },
      {
        n: "04",
        title: "Adatta",
        body: "La decisione del coach torna nel programma e alimenta il ciclo successivo.",
      },
    ],
    builderEyebrow: "Centro focale · Program Builder V3",
    builderTitle:
      "Il programma intero davanti. Il dettaglio sempre modificabile.",
    builderBody:
      "Una griglia che conserva la velocità di un foglio di calcolo, ma trasforma prescrizioni, settimane e versioni in dati collegati all’esecuzione reale.",
    builderCta: "Dentro il Program Builder",
    analyserEyebrow: "Centro focale · Analyser",
    analyserTitle: "Lo storico serve a decidere cosa fare dopo.",
    analyserBody:
      "Carico, intensità, readiness e confronto pianificato-reale si incontrano nello stesso spazio. Ogni dato dichiara se è reale, stimato o insufficiente.",
    analyserCta: "Dentro analisi e monitoraggio",
    paletteEyebrow: "Velocità operativa · Cmd+K",
    paletteTitle: "Il workspace si usa anche senza cercare nei menu.",
    paletteBody:
      "La Command Palette apre atleti, programmi e azioni da tastiera. Alt+numero cambia sezione, “?” richiama la guida contestuale e il Builder mantiene una navigazione tra celle in stile Excel.",
    paletteHint: "Cerca un atleta, un programma o un’azione…",
    paletteItems: [
      { keys: "⌘ K", label: "Apri Command Palette" },
      { keys: "Alt 6", label: "Vai al Program Center" },
      { keys: "Alt 7", label: "Vai all’Analyser" },
      { keys: "?", label: "Guida contestuale" },
    ],
    libraryEyebrow: "Exercise Library · Fondamenta",
    libraryTitle:
      "Non un elenco di nomi. Il vocabolario strutturato del programma.",
    libraryBody:
      "172 esercizi organizzati per tipo, target, pattern, attrezzatura e meccanica. La stessa tassonomia rende coerenti la scelta nel Builder, il calcolo del volume e la lettura nell’Analyser.",
    feedbackEyebrow: "Feedback Center · Ritorno dal campo",
    feedbackTitle: "La voce dell’atleta non resta sepolta in una chat.",
    feedbackBody:
      "Check-in, sessioni concluse, RPE, note e segnalazioni di dolore entrano in un’unica inbox. Il coach legge il feedback già collegato alla persona e al lavoro che lo ha generato.",
    contextEyebrow: "Contesto operativo",
    contextTitle: "La stagione e la persona restano sempre visibili.",
    contextBody:
      "Il Calendario colloca sessioni, gare e test nel tempo. La pagina atleta riunisce stato, programma, readiness e storico prima di entrare nell’analisi completa.",
    modulesEyebrow: "Strumenti connessi",
    modulesTitle: "Il contesto non si perde tra una decisione e l’altra.",
    modulesBody:
      "Gli strumenti di supporto non competono con Program Builder e Analyser: forniscono il contesto operativo che li rende utili.",
    modules: [
      {
        title: "Dashboard",
        tag: "Ingresso quotidiano",
        body: "Atleti attivi, readiness, feedback da leggere e prossimi appuntamenti in un solo colpo d’occhio.",
      },
      {
        title: "Command Center",
        tag: "Triage rapido",
        body: "Volume, domanda neurale e salute mostrano chi richiede attenzione prima di aprire il dettaglio.",
      },
      {
        title: "Libreria esercizi",
        tag: "172 esercizi strutturati",
        body: "Tipo, target, pattern, attrezzatura e meccanica rendono ogni esercizio leggibile dal Builder e dall’Analyser.",
      },
      {
        title: "Feedback Center",
        tag: "La voce dell’atleta",
        body: "RPE, note, fatica e dolore confluiscono in una coda ordinata, senza cercare messaggi nelle chat.",
      },
      {
        title: "Calendario",
        tag: "Il contesto della stagione",
        body: "Gare ed eventi restano collegati agli atleti e ai programmi a cui danno significato.",
      },
      {
        title: "Gestione atleti",
        tag: "Roster e storico",
        body: "Profili, inviti, stato e archiviazione preservano lo storico senza sporcare il lavoro corrente.",
      },
    ],
    analyserMockup: {
      title: "moxie · analyser center — roster snapshot",
      tabs: ["Snapshot", "Trend", "Programmi"],
      headers: ["Atleta", "Programma", "ACWR", "Readiness", "Compliance"],
      alert: "2 atleti in alert · 9 totali",
    },
  },
  programming: {
    pillars: [
      {
        title: "Griglia, non form",
        body: "Settimane sulle colonne e giorni sulle righe: il coach mantiene la visione del blocco mentre lavora sul dettaglio.",
      },
      {
        title: "Sintassi da coach",
        body: "4x8 @75% r120, RIR, RPE, wave loading ed EMOM diventano dati strutturati senza rallentare la scrittura.",
      },
      {
        title: "Storia preservata",
        body: "Template, duplicazione e versioni permettono di adattare il programma senza perdere ciò che è stato fatto prima.",
      },
    ],
    flowTitle: "Dalla prescrizione alla realtà",
    flowBody:
      "Il programma assegnato non termina quando viene pubblicato. L’esecuzione dell’atleta torna dentro lo stesso sistema e rende leggibile la distanza tra previsto e reale.",
  },
  monitoring: {
    plainTitle: "Numeri tecnici, significato immediato.",
    plainBody:
      "Readiness significa quanto l’atleta è pronto oggi. RPE indica quanto è stata dura la seduta. ACWR confronta il carico recente con quello abituale. Il primo livello resta comprensibile; il dettaglio è disponibile quando serve.",
  },
  athlete: {
    weekEyebrow: "Settimana · Il presente",
    weekTitle: "Oggi davanti. Il resto a portata di tap.",
    weekBody:
      "Il portale apre sulla settimana corrente e porta subito alla seduta del giorno. L’atleta vede esercizi, serie e volume senza attraversare dashboard o menu complessi.",
    realityEyebrow: "Session logging",
    realityTitle:
      "Il programma dice cosa fare. Il log racconta cosa è successo.",
    realityBody:
      "Ogni serie può essere registrata con ripetizioni, carico e tempo reali. L’atleta può completare, modificare o segnalare una differenza: è proprio lì che il coach trova informazione utile.",
    progressEyebrow: "Progressi · Il ritorno",
    progressTitle: "I dati tornano utili anche a chi si allena.",
    progressBody:
      "Readiness, sessioni completate e trend di forza restituiscono una lettura semplice del percorso, senza trasformare il portale in un software da analista.",
    wellnessEyebrow: "Wellness · Pochi secondi",
    wellnessTitle: "La risposta dell’atleta entra nel loop.",
    wellnessBody:
      "Cinque dimensioni, andamento storico e Tap Test neuromotorio. Il check-in è breve per l’atleta, ma aggiunge contesto alle decisioni del coach.",
    principles: [
      {
        title: "Oggi, non il database",
        body: "La prima schermata mostra la seduta e le azioni che servono in quel momento.",
      },
      {
        title: "Reale, non ideale",
        body: "Serie, ripetizioni e carichi possono essere diversi dal prescritto: è proprio quella differenza che serve al coach.",
      },
      {
        title: "Pochi secondi",
        body: "Wellness, RPE e Tap Test sono progettati per entrare nella routine senza trasformarsi in un secondo allenamento.",
      },
    ],
  },
  engineering: {
    stackTitle: "Un prodotto piccolo per scala. Non per complessità.",
    stackBody:
      "Il gruppo di utenti è intenzionalmente ristretto, ma i problemi sono quelli di un prodotto reale: autorizzazioni, dati sensibili, consistenza, versioni, stati vuoti e utilizzo mobile.",
    layers: [
      {
        n: "01",
        title: "React + TypeScript",
        body: "Interfacce coach desktop-first e portale atleta mobile-first, costruiti sulla stessa logica di dominio.",
      },
      {
        n: "02",
        title: "Supabase + PostgreSQL",
        body: "Autenticazione, persistenza e funzioni transazionali senza un backend applicativo separato.",
      },
      {
        n: "03",
        title: "Sicurezza multi-ruolo",
        body: "Row Level Security: ogni coach vede i propri atleti e ogni atleta soltanto il proprio spazio.",
      },
      {
        n: "04",
        title: "Motore di dominio",
        body: "Prescrizioni, calendario, ACWR, readiness e confronto pianificato-reale vivono in funzioni TypeScript testabili.",
      },
      {
        n: "05",
        title: "Versioning",
        body: "Il Program Builder lavora come un documento: diff, snapshot e salvataggi coerenti anche su strutture profonde.",
      },
      {
        n: "06",
        title: "Verifica",
        body: "Test unitari, integrazione delle policy di sicurezza ed E2E sui flussi critici.",
      },
    ],
    principle:
      "Il risultato non è una demo tecnica: è uno strumento che deve reggere una stagione reale.",
    securityEyebrow: "Confini affidabili",
    securityTitle: "La sicurezza non dipende dalla schermata aperta.",
    securityBody:
      "I ruoli vengono applicati vicino ai dati. Anche una richiesta costruita fuori dall’interfaccia attraversa autenticazione, policy RLS e funzioni transazionali prima di modificare lo stato.",
    securityFlow: [
      "Sessione autenticata",
      "Policy per ruolo",
      "RPC transazionale",
      "Dati autorizzati",
    ],
    verificationEyebrow: "Strategia di verifica",
    verificationTitle: "Ogni livello protegge un tipo diverso di errore.",
    verificationBody:
      "Le formule vengono testate in isolamento, le policy contro accessi incrociati e i flussi completi nel browser. Il test non è un numero da esibire: è una rete costruita attorno ai punti in cui il prodotto può davvero rompersi.",
    verificationItems: [
      {
        label: "Unit",
        value: "Regole e calcoli",
        note: "Prescrizioni, readiness, carico e trasformazioni pure.",
      },
      {
        label: "RLS",
        value: "Confini tra utenti",
        note: "Coach, atleti e risorse non possono attraversare il proprio perimetro.",
      },
      {
        label: "E2E",
        value: "Flussi reali",
        note: "Programmare, assegnare, registrare e rileggere il lavoro.",
      },
    ],
  },
}

const en: typeof it = {
  common: {
    home: "Home",
    product: "Product",
    explore: "Explore the project",
    reserved: "Restricted area",
    backHome: "Back to overview",
    discover: "Learn more",
    beta: "Field private beta",
    betaDetail:
      "Being tested this season with a small group of coaches and around 20 athletes.",
    skip: "Skip to content",
  },
  home: {
    topicsEyebrow: "Explore Moxie",
    topicsTitle: "Two experiences. One system.",
    topicsBody:
      "Enter through the coach workspace, the athlete portal or see what holds the whole product together. Program Builder and Analyser are Moxie’s two operational cores.",
    projectEyebrow: "A real project",
    projectTitle: "Built by a coach. Used in the field.",
    projectBody:
      "Moxie was born to replace the tools I used every day. It is neither a concept nor a product open to the market: it is a limited-use project, tested this season with real colleagues and athletes.",
    projectStats: [
      { value: "3–4", label: "coaches in the pilot group" },
      { value: "≈20", label: "athletes in real use" },
      { value: "1", label: "private beta season" },
    ],
    engineeringCta: "See how it is built",
  },
  topics: [
    {
      id: "coach",
      n: "01",
      eyebrow: "Coach workspace · Desktop first",
      title: "Coach experience",
      short:
        "Program, read athletes and adapt the work without changing tools or losing context.",
      hero: "All of coaching, in one workspace.",
      intro:
        "The coach starts from the roster, builds the work in Program Center and returns to Analyser to understand what to adapt. Library, Feedback and Calendar connect each step.",
    },
    {
      id: "programmazione",
      n: "01A",
      eyebrow: "Coach side · Desktop first",
      title: "Programming",
      short:
        "From the block to the single set, with the speed of a grid and the structure of a system.",
      hero: "The program is not a file. It is a living document.",
      intro:
        "The coach builds, assigns and adapts work in a grid designed around how coaches actually write: weeks, days, exercises and compact prescriptions in the same space.",
    },
    {
      id: "monitoraggio",
      n: "01B",
      eyebrow: "From signal to choice",
      title: "Monitoring",
      short:
        "Load, readiness and feedback become readable signals. The decision stays with the coach.",
      hero: "Know who needs you, right now.",
      intro:
        "Moxie connects what was planned, what actually happened and how the athlete responded. It does not decide for the coach: it reveals the deviations that deserve attention.",
    },
    {
      id: "atleta",
      n: "02",
      eyebrow: "Athlete side · Mobile first",
      title: "Athlete experience",
      short:
        "The session, feedback and wellness in a mobile portal that is simple to use every day.",
      hero: "Log reality without interrupting training.",
      intro:
        "The athlete sees what to do, edits what they actually performed and returns feedback in seconds. Data reaches the coach without chats, screenshots or transcription.",
    },
    {
      id: "engineering",
      n: "03",
      eyebrow: "Case study · Full stack",
      title: "Engineering",
      short:
        "Architecture, security and the domain engine behind a product used with real data.",
      hero: "Not just an interface. A system built end to end.",
      intro:
        "Moxie is also a full-stack case study: a multi-role application with sensitive data, versioned programs, real logs and tested domain rules.",
    },
  ],
  coach: {
    workflowEyebrow: "The real workflow",
    workflowTitle: "Scan the roster. Build. Analyse. Adapt.",
    workflowBody:
      "Moxie does not make the coach work in isolated modules. Each day crosses three connected levels and returns to the start with new information.",
    workflowSteps: [
      {
        n: "01",
        title: "Roster triage",
        body: "Dashboard, Weekly Monitor and System Map reveal who needs attention today.",
      },
      {
        n: "02",
        title: "Program the work",
        body: "Program Center and Builder manage structure, lifecycle, templates, exports and versions.",
      },
      {
        n: "03",
        title: "Read the response",
        body: "Analyser connects ACWR, readiness, compliance, feedback and individual history.",
      },
      {
        n: "04",
        title: "Adapt",
        body: "The coach’s decision returns to the program and feeds the next cycle.",
      },
    ],
    builderEyebrow: "Focal center · Program Builder V3",
    builderTitle: "The whole program in view. Every detail still editable.",
    builderBody:
      "A grid that keeps spreadsheet speed while turning prescriptions, weeks and versions into data connected to real execution.",
    builderCta: "Inside the Program Builder",
    analyserEyebrow: "Focal center · Analyser",
    analyserTitle: "History exists to decide what comes next.",
    analyserBody:
      "Load, intensity, readiness and planned-versus-actual meet in the same place. Every value declares whether it is real, estimated or insufficient.",
    analyserCta: "Inside analysis and monitoring",
    paletteEyebrow: "Operational speed · Cmd+K",
    paletteTitle: "The workspace also works without hunting through menus.",
    paletteBody:
      "Command Palette opens athletes, programs and actions from the keyboard. Alt+number changes section, “?” opens contextual help and the Builder keeps Excel-like cell navigation.",
    paletteHint: "Search an athlete, a program or an action…",
    paletteItems: [
      { keys: "⌘ K", label: "Open Command Palette" },
      { keys: "Alt 6", label: "Go to Program Center" },
      { keys: "Alt 7", label: "Go to Analyser" },
      { keys: "?", label: "Contextual help" },
    ],
    libraryEyebrow: "Exercise Library · Foundation",
    libraryTitle:
      "Not a list of names. The structured vocabulary of the program.",
    libraryBody:
      "172 exercises organized by type, target, pattern, equipment and mechanics. The same taxonomy keeps Builder selection, volume calculation and Analyser reading coherent.",
    feedbackEyebrow: "Feedback Center · Return from the field",
    feedbackTitle: "The athlete’s voice does not stay buried in a chat.",
    feedbackBody:
      "Check-ins, completed sessions, RPE, notes and pain reports enter one inbox. The coach reads feedback already connected to the person and the work that generated it.",
    contextEyebrow: "Operational context",
    contextTitle: "The season and the person always stay visible.",
    contextBody:
      "Calendar places sessions, competitions and tests in time. The athlete page brings together status, program, readiness and history before entering the full analysis.",
    modulesEyebrow: "Connected tools",
    modulesTitle: "Context is never lost between decisions.",
    modulesBody:
      "Supporting tools do not compete with Program Builder and Analyser: they provide the operational context that makes them useful.",
    modules: [
      {
        title: "Dashboard",
        tag: "Daily entry point",
        body: "Active athletes, readiness, unread feedback and upcoming events at a glance.",
      },
      {
        title: "Command Center",
        tag: "Quick triage",
        body: "Volume, neural demand and health reveal who needs attention before opening the detail.",
      },
      {
        title: "Exercise Library",
        tag: "172 structured exercises",
        body: "Type, target, pattern, equipment and mechanics make every exercise readable by Builder and Analyser.",
      },
      {
        title: "Feedback Center",
        tag: "The athlete’s voice",
        body: "RPE, notes, fatigue and pain enter an ordered queue instead of disappearing into chats.",
      },
      {
        title: "Calendar",
        tag: "Season context",
        body: "Competitions and events stay connected to the athletes and programs they give meaning to.",
      },
      {
        title: "Athlete management",
        tag: "Roster and history",
        body: "Profiles, invites, status and archiving preserve history without cluttering current work.",
      },
    ],
    analyserMockup: {
      title: "moxie · analyser center — roster snapshot",
      tabs: ["Snapshot", "Trend", "Programs"],
      headers: ["Athlete", "Program", "ACWR", "Readiness", "Compliance"],
      alert: "2 athletes in alert · 9 total",
    },
  },
  programming: {
    pillars: [
      {
        title: "A grid, not forms",
        body: "Weeks in columns and days in rows: the coach keeps the whole block in view while working on the detail.",
      },
      {
        title: "Coach-native syntax",
        body: "4x8 @75% r120, RIR, RPE, wave loading and EMOM become structured data without slowing down writing.",
      },
      {
        title: "History preserved",
        body: "Templates, duplication and versions let programs evolve without losing what came before.",
      },
    ],
    flowTitle: "From prescription to reality",
    flowBody:
      "An assigned program does not end when it is published. Athlete execution returns to the same system, exposing the distance between planned and actual work.",
  },
  monitoring: {
    plainTitle: "Technical numbers, immediate meaning.",
    plainBody:
      "Readiness means how prepared the athlete is today. RPE indicates how hard the session felt. ACWR compares recent load with usual load. The first layer stays clear; detail is available when needed.",
  },
  athlete: {
    weekEyebrow: "Week · The present",
    weekTitle: "Today in front. Everything else a tap away.",
    weekBody:
      "The portal opens on the current week and takes the athlete straight to today’s session. Exercises, sets and volume are visible without crossing dashboards or complex menus.",
    realityEyebrow: "Session logging",
    realityTitle: "The program says what to do. The log tells what happened.",
    realityBody:
      "Every set can be logged with actual reps, load and time. The athlete can complete, edit or flag a difference: that is exactly where the coach finds useful information.",
    progressEyebrow: "Progress · The return",
    progressTitle: "Data stays useful for the person doing the work.",
    progressBody:
      "Readiness, completed sessions and strength trends provide a simple reading of the journey without turning the portal into analyst software.",
    wellnessEyebrow: "Wellness · A few seconds",
    wellnessTitle: "The athlete response enters the loop.",
    wellnessBody:
      "Five dimensions, history and a neuromuscular Tap Test. The check-in is short for the athlete but adds context to the coach’s decisions.",
    principles: [
      {
        title: "Today, not the database",
        body: "The first screen shows the session and the actions needed in that moment.",
      },
      {
        title: "Actual, not ideal",
        body: "Sets, reps and loads can differ from the prescription: that difference is exactly what the coach needs.",
      },
      {
        title: "A few seconds",
        body: "Wellness, RPE and the Tap Test fit the routine without becoming a second workout.",
      },
    ],
  },
  engineering: {
    stackTitle: "A small product by scale. Not by complexity.",
    stackBody:
      "The user group is intentionally limited, but the problems are those of a real product: authorization, sensitive data, consistency, versions, empty states and mobile use.",
    layers: [
      {
        n: "01",
        title: "React + TypeScript",
        body: "Desktop-first coach interfaces and a mobile-first athlete portal built on the same domain logic.",
      },
      {
        n: "02",
        title: "Supabase + PostgreSQL",
        body: "Authentication, persistence and transactional functions without a separate application backend.",
      },
      {
        n: "03",
        title: "Multi-role security",
        body: "Row Level Security: each coach sees their athletes and each athlete only their own space.",
      },
      {
        n: "04",
        title: "Domain engine",
        body: "Prescriptions, calendar, ACWR, readiness and planned-versus-actual live in testable TypeScript functions.",
      },
      {
        n: "05",
        title: "Versioning",
        body: "The Program Builder behaves like a document: diffs, snapshots and coherent saves over deep structures.",
      },
      {
        n: "06",
        title: "Verification",
        body: "Unit tests, security-policy integration tests and E2E coverage for critical flows.",
      },
    ],
    principle:
      "The outcome is not a technical demo: it is a tool that must withstand a real season.",
    securityEyebrow: "Trusted boundaries",
    securityTitle: "Security does not depend on the screen being open.",
    securityBody:
      "Roles are enforced close to the data. Even a request built outside the interface crosses authentication, RLS policies and transactional functions before changing state.",
    securityFlow: [
      "Authenticated session",
      "Role policy",
      "Transactional RPC",
      "Authorized data",
    ],
    verificationEyebrow: "Verification strategy",
    verificationTitle:
      "Each layer protects against a different kind of failure.",
    verificationBody:
      "Formulas are tested in isolation, policies against cross-user access and complete flows in the browser. Testing is not a number to display: it is a safety net around the places where the product can actually break.",
    verificationItems: [
      {
        label: "Unit",
        value: "Rules and calculations",
        note: "Prescriptions, readiness, load and pure transformations.",
      },
      {
        label: "RLS",
        value: "User boundaries",
        note: "Coaches, athletes and resources cannot cross their own perimeter.",
      },
      {
        label: "E2E",
        value: "Real workflows",
        note: "Program, assign, log and review the work.",
      },
    ],
  },
}

export const topicTranslations: Record<Lang, typeof it> = { it, en }
