const it = {
  nav: {
    links: [
      { label: "Prodotto", href: "#prodotto" },
      { label: "Feature", href: "#feature" },
      { label: "Casi reali", href: "#casi" },
      { label: "Ruoli", href: "#ruoli" },
      { label: "Perché Moxie", href: "#perche" },
    ],
    badge: "Coach · Atleta",
    langLabel: "EN",
  },
  hero: {
    badge: "Coaching OS · non un'app fitness · per coach e atleti",
    h1Pre: "Il carico si conosce",
    h1Grad: "prima",
    h1Post: "che l'atleta lo scopra sulla sua pelle.",
    subtitle:
      "Moxie è un coaching OS che collega programmazione, esecuzione reale, feedback dell'atleta e decisioni del coach in un unico loop. Non un'app fitness — una piattaforma pensata per chi allena ad alto livello e vuole capire davvero cosa succede ai propri atleti.",
    flow: [
      { t: "Coach scrive", d: "Il programma nel builder a griglia" },
      { t: "Atleta esegue", d: "E registra dal portale sul telefono" },
      { t: "Dati tornano", d: "Readiness, fatica e dolore al coach" },
    ],
  },
  problem: {
    label: "Il processo attuale",
    tools: ["Excel", "Google Sheets", "WhatsApp", "Note vocali", "Screenshot"],
    disconnected: "Decisioni disconnesse",
    h2a: "Il tuo coaching è già guidato dai dati.",
    h2b: "I tuoi strumenti no.",
    body: "Excel tiene i programmi. WhatsApp tiene il feedback. Le note tengono le sensazioni. Nessuno di questi strumenti parla con gli altri — e le decisioni le prendi cercando di tenere tutto in testa.",
    cta: "Moxie connects them.",
  },
  coreLoop: {
    eyebrow: "Il sistema · Core loop",
    h2: "Non un'app. Un sistema.",
    subtitle:
      "Ogni decisione di coaching alimenta quella successiva. Il loop non si interrompe mai.",
    steps: [
      {
        n: "01",
        label: "Plan",
        desc: "Il coach costruisce il programma nel builder. Prescrizione, volume, intensità, blocchi.",
      },
      {
        n: "02",
        label: "Execute",
        desc: "L'atleta registra ciò che è successo davvero — serie, carichi, RPE — dal portale mobile.",
      },
      {
        n: "03",
        label: "Measure",
        desc: "Moxie raccoglie performance, readiness, carichi e feedback in un unico posto.",
      },
      {
        n: "04",
        label: "Adapt",
        desc: "Il coach modifica la programmazione sulla base dei dati. Non delle impressioni.",
      },
    ],
    repeat: "e poi ricomincia",
    repeatTo: "Plan",
  },
  featureHighlights: {
    eyebrow: "Funzioni distintive",
    h2: "Non feature da brochure. Cose che un coach usa ogni giorno.",
    f01eyebrow: "01 — La feature che parla la tua lingua",
    f01title: "Sintassi di carico reale",
    f01body:
      "Come scrive davvero un coach — non menu a tendina, ma prescrizione in una riga.",
    syntax: [
      { code: "4x8 @75% r120", note: "4 serie · 8 rip · 75% · rec 2'" },
      { code: "5@80 · 3@85 · 1@90", note: "wave loading" },
      { code: "4x6 @rir2", note: "reps in riserva" },
      { code: "emom 10x3", note: "ogni minuto" },
      { code: "1x max @rpe9", note: "top set" },
      { code: "A1 / A2", note: "superset" },
    ],
    features: [
      {
        n: "02",
        title: 'Command Center "Triforza"',
        body: "Tre angolazioni sullo stesso atleta — volume, readiness, salute — prima di aprire il dettaglio.",
      },
      {
        n: "03",
        title: "Tap Test neuromotorio",
        body: "Non ti chiede come ti senti: misura una risposta del sistema nervoso, 10 secondi di tap.",
      },
      {
        n: "04",
        title: "ACWR a bande di rischio",
        body: "Sweet spot, attenzione, allarme. E se mancano dati lascia un buco: non inventa un numero.",
      },
      {
        n: "05",
        title: "Command Palette (Cmd+K)",
        body: "Scorciatoie da tastiera per un uso quotidiano senza mouse. Alt+numero per navigare.",
      },
      {
        n: "06",
        title: "Push & PWA installabile",
        body: "Una notifica quando il coach carica o modifica una seduta. In home screen, senza store.",
      },
    ],
  },
  featureRows: [
    {
      eyebrow: "Program Builder V3",
      title: "Il cuore del prodotto è una griglia",
      body: "Colonne per le settimane del blocco, righe per i giorni, celle con esercizi e prescrizione in sintassi compatta. Time machine per tornare a versioni precedenti, template, assegnazione a più atleti.",
      quote: undefined as string | undefined,
    },
    {
      eyebrow: "Command Center · System Map",
      title: "Tre angolazioni sullo stesso atleta",
      body: "Due sagome corporee — fronte e retro — in tre viste: volume per zona, readiness col glow neurale, salute che incrocia ACWR e dolore riportato. Il Tap Test sotto baseline forza l'allarme: il dato oggettivo ha sempre la precedenza.",
      quote:
        '"Tre angolazioni sullo stesso atleta, pensate per uno sguardo rapido prima di aprire il dettaglio."' as string | undefined,
    },
    {
      eyebrow: "Dashboard & Analyser",
      title: "Chi ha bisogno di te, adesso",
      body: "Roster con readiness a semaforo, RPE contro completamento, ACWR con bande di rischio, compliance a 7 giorni. Un banner in cima dice quanti atleti sono in alert su quanti totali.",
      quote:
        '"L\'app non inventa un numero: lascia un buco nel grafico piuttosto che mostrarti un valore falso."' as string | undefined,
    },
    {
      eyebrow: "Portale atleta · PWA",
      title: "Scrivi quello che hai fatto, non quello che dovevi fare",
      body: "Tre tab: Settimana, Progressi, Wellness. Reps, carico e tempo modificabili serie per serie. Il check-in giornaliero e il Tap Test misurano lo stato prima che tu arrivi stanco in palestra — non dopo.",
      quote:
        '"Un check-in sincero può far scalare o alleggerire un allenamento prima che tu arrivi stanco in palestra."' as string | undefined,
    },
  ],
  decisionMaking: {
    eyebrow: "Dal dato alla decisione",
    h2a: "Moxie non raccoglie dati.",
    h2b: "Li rende utilizzabili.",
    subtitle:
      "Ogni segnale in ingresso viene letto in relazione agli altri. Il risultato non è un grafico in più — è una risposta di coaching concreta.",
    signalsLabel: "Segnali in ingresso · 3 settimane",
    actionsLabel: "Risposta di coaching raccomandata",
    actions: [
      { label: "Riduci volume", sub: "–20% questa settimana" },
      { label: "Mantieni intensità", sub: "Non toccare i carichi percentuali" },
      { label: "Sposta sessione tecnica", sub: "Posticipa di 48h" },
      { label: "Rivaluta dopo 48h", sub: "Nuovo check-in wellness" },
    ],
    footer:
      "Non è un'AI che decide. È il dato che parla — il coach che sceglie.",
    verdictLabel: "Verdetto",
  },
  acwrDemo: {
    eyebrow: "Demo interattiva · ACWR",
    h2: "Vedi il rischio muoversi in tempo reale",
    subtitle:
      "Muovi gli slider e osserva ACWR e verdetto cambiare live. Sweet spot: 0.8–1.3.",
    weekLabels: ["Sett. –4", "Sett. –3", "Sett. –2", "Sett. pianif."],
    verdicts: {
      zero: { label: "Muovi gli slider", sub: "" },
      danger: {
        label: "Spike pericoloso",
        sub: "Rischio infortuni elevato. Intervieni subito.",
      },
      warn: {
        label: "Rischio in salita",
        sub: "Fuori dalla sweet spot. Monitora da vicino.",
      },
      ok: {
        label: "Zona ottimale",
        sub: "Carico ben distribuito. Continua così.",
      },
    },
    verdictLabel: "Verdetto",
    chartTitle: "ACWR simulato · ultime 4 settimane",
    unit: "UA",
    footerNote:
      "Il grafico mostra l'ACWR calcolato settimana per settimana sulla base dei carichi che imposti. Le bande colorate corrispondono alle zone di rischio usate in letteratura.",
  },
  caseStudies: {
    eyebrow: "Prova sul campo · 9 casistiche estreme",
    h2: 'Non atleti "tipo" per la demo',
    subtitle:
      "Abbiamo costruito 9 casistiche estreme apposta per stressare ogni funzione: chi fila liscio, chi rischia l'infortunio, chi sparisce, chi mente a se stesso sul carico. Ogni caso ha una forma riconoscibile nel grafico.",
    moxieLabel: "Cosa mostra Moxie",
    cases: [
      {
        archetype: "Il caso pulito",
        persona: "Lanciatore · Promesse · 6 mesi di storico",
        scenario:
          "Sei mesi su tre programmi in sequenza, ACWR sempre nella sweet spot, TSB in scarico corretto verso la gara, massimali in crescita costante — il grafico che si spera di vedere per ogni atleta.",
        moxie:
          "Quando tutto funziona, il Command Center resta silenzioso: nessun alert, nessuna forzatura.",
        captionLabel: "ACWR nella sweet spot",
      },
      {
        archetype: "Rischio infortunio",
        persona: "Juniores · burnout / infortunio in corso",
        scenario:
          "Il carico reale diverge dal prescritto, il check-in di benessere crolla, il Tap Test scende sotto la baseline. L'infortunio, quando arriva, era già stato anticipato dai segnali.",
        moxie:
          "L'alert non aspetta un solo numero fuori soglia: combina RPE, check-in e Tap Test.",
        captionLabel: "Tap Test sotto baseline",
      },
      {
        archetype: "Dati stantii",
        persona: "Allievi · abbandono totale · programma mai chiuso",
        scenario:
          "Un programma scaduto da 18 giorni, mai chiuso da nessuno. Molti sistemi continuerebbero a mostrarlo come 'settimana corrente'.",
        moxie:
          "Readiness e compliance sono segnalate esplicitamente come stantie: l'app dice 'dati insufficienti' invece di inventare un numero attuale.",
        captionLabel: "Ultimo accesso",
      },
      {
        archetype: "Rientro a rischio",
        persona: "Promesse · rientro dopo 4 mesi di stop",
        scenario:
          "Quattro mesi di stop, poi un rientro con carico deciso contro un cronico quasi a zero: la ricetta classica per una ricaduta.",
        moxie:
          "L'ACWR sale sopra la soglia di rischio prima che il rientro diventi un nuovo infortunio.",
        captionLabel: "ACWR fuori soglia",
      },
      {
        archetype: "Stato vuoto",
        persona: "Cadetti · profilo appena creato",
        scenario:
          "Nessun programma, nessuna seduta, nessun check-in: il caso più semplice da rompere per qualsiasi dashboard di analytics.",
        moxie:
          "Niente crash, niente grafici inventati: solo uno stato vuoto onesto.",
        captionLabel: "Storico",
      },
      {
        archetype: "Effetto yo-yo",
        persona: "Juniores · sessioni pianificate mai registrate",
        scenario:
          'Buchi veri nei log (non sedute segnate "saltate"), check-in di benessere scollegato dai giorni di sessione.',
        moxie:
          "La readiness distingue tra 'reale' (misurata) e 'stimata' (dedotta): non nasconde l'incertezza dietro un numero unico.",
        captionLabel: "Compliance",
      },
      {
        archetype: "Sovraccarico volontario",
        persona: "Promesse · ignora lo scarico prescritto",
        scenario:
          "Il programma dice scarico, lui lo ignora: tonnellaggio reale 30-40% sopra il prescritto, RPE sempre alto, completamento al 100%.",
        moxie:
          "La compliance al 100% non basta: il confronto pianificato-vs-reale rivela l'eccesso che una spunta 'fatto' non racconterebbe.",
        captionLabel: "Reale vs prescritto",
      },
      {
        archetype: "Metrica giusta",
        persona: "Juniores · lanci e salti · focus tecnico",
        scenario:
          "Sedute a tonnellaggio quasi zero per costruzione tecnica: contare i kg direbbe che non si sta allenando.",
        moxie:
          "Per queste discipline il segnale di carico reale è l'RPE, non il volume: l'app non forza una metrica sbagliata sul caso sbagliato.",
        captionLabel: "Segnale di carico",
      },
      {
        archetype: "Scarico corretto",
        persona: "Pre-gara · taper progressivo su 4 settimane",
        scenario:
          "Il carico scende in modo calcolato verso la gara, senza far scattare falsi allarmi.",
        moxie:
          "Il TSB resta positivo e l'ACWR non esce mai dalla banda sicura: il sistema riconosce uno scarico voluto da un crollo di carico subito.",
        captionLabel: "ACWR in taper",
      },
    ],
  },
  roles: {
    eyebrow: "Attività per ruolo",
    h2: "Due pubblici, già addetti ai lavori",
    coach: {
      title: "Coach",
      tag: "Desktop-first",
      items: [
        "Costruire programmi nel builder a griglia con sintassi di carico reale",
        "Duplicare, esportare in Excel/PDF, salvare come template",
        "Aprire il Command Center per il triage rapido del roster",
        "Leggere il Feedback Center: note post-seduta, RPE, fatica, dolore",
        "Analizzare ACWR, readiness·TSB e compliance nell'Analyser",
        "Gestire la libreria esercizi con famiglie di varianti",
        "Navigare tutto da tastiera con la Command Palette (Cmd+K)",
      ],
    },
    athlete: {
      title: "Atleta",
      tag: "Portale mobile · PWA",
      items: [
        "Vedere la seduta del giorno con volume, serie e RPE",
        "Registrare reps, carico e tempo — anche diversi dal prescritto",
        "Spuntare esercizi e serie fatte, aggiungerne o toglierne",
        "Fare il check-in di benessere: 5 dimensioni, scala 1-5",
        "Eseguire il Tap Test neuromotorio, minimo 2 tentativi",
        "Segnalare un infortunio o un fastidio direttamente dalla seduta",
        "Installare il portale come app e ricevere notifiche push",
      ],
    },
  },
  manifesto: {
    p1a: "Nato da un coach per sostituire i propri",
    p1excel: "fogli Excel",
    p1mid: "e i",
    p1whatsapp: "gruppi WhatsApp",
    p1b: "— dove i dati si perdevano tra uno screenshot e l'altro.",
    p2a: "Moxie",
    p2b: "chiude il cerchio",
    p2c: ": il programma, l'esecuzione e la risposta dell'atleta nello stesso posto.",
    p3: "Oggi in produzione, usato ogni giorno su atleti reali.",
  },
  whyMoxie: {
    eyebrow: "Perché Moxie",
    h2: "Un confronto onesto — anche dove Excel vince",
    subtitle:
      "Excel è più flessibile e ha curva zero. Moxie vince dove conta: il workflow che collega programmazione, feedback e decisione.",
    colWorkflow: "Workflow",
    colExcel: "Excel + WhatsApp",
    colGeneric: "App generiche",
    colMoxie: "Moxie",
    rows: [
      "Flessibilità assoluta e calcoli custom",
      "Curva di apprendimento / setup",
      "Programmazione allenamenti",
      "Comunicazione atleta ↔ coach",
      "Storico strutturato e versionato",
      "Readiness oggettiva",
      "Analisi workload (ACWR)",
      "Decisioni di coaching",
    ],
    core: "core",
    native: "nativo",
    excelWin: "vince",
    partial: "parziale",
    manual: "manuale",
  },
  scienceTrust: {
    eyebrow: "Basi scientifiche",
    h2: "Da dove vengono questi numeri",
    subtitle:
      "Moxie evidenzia segnali — il coach prende la decisione. Nessuna metrica predice nulla in modo deterministico.",
    refLabel: "Ref:",
    concepts: [
      {
        term: "ACWR",
        full: "Acute:Chronic Workload Ratio",
        desc: "Rapporto tra il carico della settimana corrente (acuto) e la media delle ultime 4 settimane (cronico). Misura quanto il carico recente si discosta dall'adattamento costruito nel tempo.",
        note: "Gabbett TJ (2016). The training-injury prevention paradox. British Journal of Sports Medicine.",
        caveat:
          "L'ACWR è un indicatore, non una previsione deterministica. Il coach interpreta — Moxie mostra.",
      },
      {
        term: "Readiness",
        full: "Prontezza all'allenamento",
        desc: "Stato funzionale giornaliero dell'atleta: qualità del sonno, percezione di fatica, umore, dolori. Raccolto via check-in soggettivo e test neuromotori (Tap Test).",
        note: "Hooper SL, Mackinnon LT (1995). Monitoring overtraining in athletes. Sports Medicine.",
        caveat:
          "La readiness integra segnali soggettivi e oggettivi. Nessun numero dice 'non allenarti' — il coach decide.",
      },
      {
        term: "Workload",
        full: "Carico di allenamento",
        desc: "Quantità e qualità del lavoro somministrato. In Moxie: volume (tonnellaggio, reps), intensità relativa (% 1RM, RIR) e RPE post-sessione. Ogni sintassi di carico è trattata come dato strutturato, non testo libero.",
        note: "Foster C et al. (2001). A new approach to monitoring exercise training. Journal of Strength & Conditioning Research.",
        caveat: "",
      },
      {
        term: "Performance trends",
        full: "Andamento della performance",
        desc: "Evoluzione dei massimali, dei volumi e dei tempi nel corso dei blocchi. Moxie versiona ogni programma: puoi tornare indietro e confrontare blocchi diversi sullo stesso atleta.",
        note: "Issurin VB (2010). New horizons for the methodology and physiology of training periodization. Sports Medicine.",
        caveat: "",
      },
    ],
  },
  gettingStarted: {
    eyebrow: "Onboarding",
    h2: "Da zero a Moxie in tre passi",
    steps: [
      {
        n: "01",
        label: "Crea gli atleti",
        desc: "Aggiungi il roster e i profili individuali.",
      },
      {
        n: "02",
        label: "Costruisci il programma",
        desc: "Editor a griglia, blocchi, prescrizioni in sintassi compatta.",
      },
      {
        n: "03",
        label: "Inizia a raccogliere dati",
        desc: "L'atleta registra. I dati tornano. Il loop parte.",
      },
    ],
  },
  finalCta: {
    h2: "Costruito per coach che ragionano sui dati",
    body: "Niente app generiche, niente fogli di calcolo sparsi. Moxie è uno strumento professionale fatto per chi allena ad alto livello — e vuole capire davvero cosa succede ai propri atleti.",
  },
  footer: {
    desc: "Un coaching OS per atleti di performance. Fatto su misura per come lavora davvero un coach di forza e atletica — non un'app fitness da app store.",
    meaningWord: "moxie",
    meaningPron: "/ˈmɒksi/",
    meaning: "fegato, grinta. Quello che serve all'atleta — e che il carico può togliergli.",
    github: "GitHub",
    instagram: "Instagram",
  },
}

const en: typeof it = {
  nav: {
    links: [
      { label: "Product", href: "#prodotto" },
      { label: "Features", href: "#feature" },
      { label: "Real cases", href: "#casi" },
      { label: "Roles", href: "#ruoli" },
      { label: "Why Moxie", href: "#perche" },
    ],
    badge: "Coach · Athlete",
    langLabel: "IT",
  },
  hero: {
    badge: "Coaching OS · not a fitness app · for coaches and athletes",
    h1Pre: "Workload is known",
    h1Grad: "before",
    h1Post: "the athlete feels it on their skin.",
    subtitle:
      "Moxie is a coaching OS that connects programming, real execution, athlete feedback, and coach decisions in a single loop. Not a fitness app — a platform built for high-performance coaches who want to truly understand what's happening to their athletes.",
    flow: [
      { t: "Coach writes", d: "The program in the grid builder" },
      { t: "Athlete executes", d: "And logs it from the mobile portal" },
      { t: "Data returns", d: "Readiness, fatigue and pain back to coach" },
    ],
  },
  problem: {
    label: "Current process",
    tools: ["Excel", "Google Sheets", "WhatsApp", "Voice notes", "Screenshots"],
    disconnected: "Disconnected decisions",
    h2a: "Your coaching is already data-driven.",
    h2b: "Your tools aren't.",
    body: "Excel holds the programs. WhatsApp holds the feedback. Notes hold the feelings. None of these tools talk to each other — and you make decisions by trying to keep everything in your head.",
    cta: "Moxie connects them.",
  },
  coreLoop: {
    eyebrow: "The system · Core loop",
    h2: "Not an app. A system.",
    subtitle:
      "Every coaching decision feeds the next one. The loop never stops.",
    steps: [
      {
        n: "01",
        label: "Plan",
        desc: "The coach builds the program in the builder. Prescription, volume, intensity, blocks.",
      },
      {
        n: "02",
        label: "Execute",
        desc: "The athlete logs what actually happened — sets, loads, RPE — from the mobile portal.",
      },
      {
        n: "03",
        label: "Measure",
        desc: "Moxie collects performance, readiness, loads and feedback in one place.",
      },
      {
        n: "04",
        label: "Adapt",
        desc: "The coach adjusts the program based on data. Not on impressions.",
      },
    ],
    repeat: "and then it starts again",
    repeatTo: "Plan",
  },
  featureHighlights: {
    eyebrow: "Distinctive features",
    h2: "Not brochure features. Things a coach uses every day.",
    f01eyebrow: "01 — The feature that speaks your language",
    f01title: "Real load syntax",
    f01body:
      "How a coach actually writes — not dropdowns, but prescription in one line.",
    syntax: [
      { code: "4x8 @75% r120", note: "4 sets · 8 reps · 75% · rest 2'" },
      { code: "5@80 · 3@85 · 1@90", note: "wave loading" },
      { code: "4x6 @rir2", note: "reps in reserve" },
      { code: "emom 10x3", note: "every minute" },
      { code: "1x max @rpe9", note: "top set" },
      { code: "A1 / A2", note: "superset" },
    ],
    features: [
      {
        n: "02",
        title: 'Command Center "Triforza"',
        body: "Three angles on the same athlete — volume, readiness, health — before opening the detail view.",
      },
      {
        n: "03",
        title: "Neuromuscular Tap Test",
        body: "Doesn't ask how you feel: measures a nervous system response, 10 seconds of tapping.",
      },
      {
        n: "04",
        title: "ACWR with risk bands",
        body: "Sweet spot, caution, alarm. If data is missing it leaves a gap: it never invents a number.",
      },
      {
        n: "05",
        title: "Command Palette (Cmd+K)",
        body: "Keyboard shortcuts for daily use without a mouse. Alt+number to navigate.",
      },
      {
        n: "06",
        title: "Push notifications & installable PWA",
        body: "A notification when the coach uploads or edits a session. On your home screen, no app store.",
      },
    ],
  },
  featureRows: [
    {
      eyebrow: "Program Builder V3",
      title: "The heart of the product is a grid",
      body: "Columns for block weeks, rows for days, cells with exercises and compact-syntax prescriptions. Time machine to go back to previous versions, templates, multi-athlete assignment.",
      quote: undefined,
    },
    {
      eyebrow: "Command Center · System Map",
      title: "Three angles on the same athlete",
      body: "Two body silhouettes — front and back — in three views: zone volume, neural-glow readiness, health crossing ACWR with reported pain. Tap Test below baseline triggers the alarm: objective data always takes priority.",
      quote:
        '"Three angles on the same athlete, designed for a quick scan before opening the detail view."',
    },
    {
      eyebrow: "Dashboard & Analyser",
      title: "Who needs you, right now",
      body: "Roster with traffic-light readiness, RPE vs completion, ACWR with risk bands, 7-day compliance. A banner at the top shows how many athletes are in alert out of total.",
      quote:
        '"The app never invents a number: it leaves a gap in the chart rather than showing you a fake value."',
    },
    {
      eyebrow: "Athlete portal · PWA",
      title: "Log what you did, not what you were supposed to do",
      body: "Three tabs: Week, Progress, Wellness. Reps, load and time editable set by set. The daily check-in and Tap Test measure status before you arrive at the gym already tired — not after.",
      quote:
        '"An honest check-in can scale or lighten a session before you arrive at the gym already tired."',
    },
  ],
  decisionMaking: {
    eyebrow: "From data to decision",
    h2a: "Moxie doesn't collect data.",
    h2b: "It makes data usable.",
    subtitle:
      "Every incoming signal is read in relation to the others. The result isn't another chart — it's a concrete coaching response.",
    signalsLabel: "Incoming signals · 3 weeks",
    actionsLabel: "Recommended coaching response",
    actions: [
      { label: "Reduce volume", sub: "–20% this week" },
      { label: "Maintain intensity", sub: "Don't change percentage loads" },
      { label: "Reschedule technical session", sub: "Postpone by 48h" },
      { label: "Reassess after 48h", sub: "New wellness check-in" },
    ],
    footer: "Not an AI making decisions. The data speaks — the coach chooses.",
    verdictLabel: "Verdict",
  },
  acwrDemo: {
    eyebrow: "Interactive demo · ACWR",
    h2: "See the risk move in real time",
    subtitle:
      "Move the sliders and watch ACWR and verdict update live. Sweet spot: 0.8–1.3.",
    weekLabels: ["Week –4", "Week –3", "Week –2", "Planned week"],
    verdicts: {
      zero: { label: "Move the sliders", sub: "" },
      danger: {
        label: "Dangerous spike",
        sub: "High injury risk. Intervene now.",
      },
      warn: {
        label: "Rising risk",
        sub: "Outside the sweet spot. Monitor closely.",
      },
      ok: { label: "Optimal zone", sub: "Well-distributed load. Keep going." },
    },
    verdictLabel: "Verdict",
    chartTitle: "Simulated ACWR · last 4 weeks",
    unit: "AU",
    footerNote:
      "The chart shows the ACWR calculated week by week based on the loads you set. The colored bands correspond to the risk zones used in the literature.",
  },
  caseStudies: {
    eyebrow: "Field proof · 9 extreme scenarios",
    h2: 'Not "typical" athletes for the demo',
    subtitle:
      "We built 9 extreme scenarios specifically to stress-test every function: the smooth operator, the injury risk, the ghost, the one who lies to themselves about load. Each case has a recognizable shape in the chart.",
    moxieLabel: "What Moxie shows",
    cases: [
      {
        archetype: "The clean case",
        persona: "Thrower · U23 · 6 months of history",
        scenario:
          "Six months across three sequential programs, ACWR always in the sweet spot, TSB correctly tapering toward competition, personal bests growing steadily — the chart you hope to see for every athlete.",
        moxie:
          "When everything works, the Command Center stays silent: no alerts, no forced overrides.",
        captionLabel: "ACWR in sweet spot",
      },
      {
        archetype: "Injury risk",
        persona: "Junior · burnout / injury in progress",
        scenario:
          "Real load diverges from prescribed, the wellness check-in collapses, Tap Test drops below baseline. The injury, when it comes, was already signaled by the data.",
        moxie:
          "The alert doesn't wait for a single out-of-range number: it combines RPE, check-in and Tap Test.",
        captionLabel: "Tap Test below baseline",
      },
      {
        archetype: "Stale data",
        persona: "Youth · total dropout · program never closed",
        scenario:
          "A program expired 18 days ago, never closed by anyone. Many systems would keep showing it as 'current week'.",
        moxie:
          "Readiness and compliance are explicitly flagged as stale: the app says 'insufficient data' instead of inventing a current number.",
        captionLabel: "Last access",
      },
      {
        archetype: "Risky return",
        persona: "U23 · return after 4 months off",
        scenario:
          "Four months off, then a return with a decided load against a near-zero chronic: the classic recipe for a relapse.",
        moxie:
          "The ACWR rises above the risk threshold before the return becomes a new injury.",
        captionLabel: "ACWR out of range",
      },
      {
        archetype: "Empty state",
        persona: "Cadets · profile just created",
        scenario:
          "No program, no session, no check-in: the simplest case to break for any analytics dashboard.",
        moxie: "No crash, no invented charts: just an honest empty state.",
        captionLabel: "History",
      },
      {
        archetype: "Yo-yo effect",
        persona: "Junior · planned sessions never logged",
        scenario:
          'Real gaps in logs (not sessions marked "skipped"), wellness check-in disconnected from session days.',
        moxie:
          "Readiness distinguishes between 'real' (measured) and 'estimated' (inferred): it doesn't hide uncertainty behind a single number.",
        captionLabel: "Compliance",
      },
      {
        archetype: "Voluntary overload",
        persona: "U23 · ignores prescribed deload",
        scenario:
          "The program says deload, they ignore it: real tonnage 30–40% above prescribed, RPE always high, completion at 100%.",
        moxie:
          "100% compliance isn't enough: the planned-vs-real comparison reveals the excess that a 'done' checkmark wouldn't tell.",
        captionLabel: "Real vs prescribed",
      },
      {
        archetype: "Right metric",
        persona: "Junior · throws and jumps · technical focus",
        scenario:
          "Sessions at near-zero tonnage for technical development: counting kg would say no training is happening.",
        moxie:
          "For these disciplines the real load signal is RPE, not volume: the app doesn't force the wrong metric on the wrong case.",
        captionLabel: "Load signal",
      },
      {
        archetype: "Correct taper",
        persona: "Pre-competition · progressive taper over 4 weeks",
        scenario:
          "Load drops in a calculated way toward competition, without triggering false alarms.",
        moxie:
          "TSB stays positive and ACWR never leaves the safe band: the system recognizes an intentional deload from a sudden load collapse.",
        captionLabel: "ACWR in taper",
      },
    ],
  },
  roles: {
    eyebrow: "Activities by role",
    h2: "Two audiences, already professionals",
    coach: {
      title: "Coach",
      tag: "Desktop-first",
      items: [
        "Build programs in the grid builder with real load syntax",
        "Duplicate, export to Excel/PDF, save as template",
        "Open the Command Center for quick roster triage",
        "Read the Feedback Center: post-session notes, RPE, fatigue, pain",
        "Analyse ACWR, readiness·TSB and compliance in the Analyser",
        "Manage the exercise library with variant families",
        "Navigate everything by keyboard with the Command Palette (Cmd+K)",
      ],
    },
    athlete: {
      title: "Athlete",
      tag: "Mobile portal · PWA",
      items: [
        "See today's session with volume, sets and RPE",
        "Log reps, load and time — even if different from prescribed",
        "Check off completed exercises and sets, add or remove them",
        "Complete the wellness check-in: 5 dimensions, 1–5 scale",
        "Run the neuromuscular Tap Test, minimum 2 attempts",
        "Report an injury or discomfort directly from the session",
        "Install the portal as an app and receive push notifications",
      ],
    },
  },
  manifesto: {
    p1a: "Built by a coach to replace their own",
    p1excel: "Excel spreadsheets",
    p1mid: "and",
    p1whatsapp: "WhatsApp groups",
    p1b: "— where data got lost between one screenshot and the next.",
    p2a: "Moxie",
    p2b: "closes the loop",
    p2c: ": the program, the execution and the athlete response in one place.",
    p3: "In production today, used every day on real athletes.",
  },
  whyMoxie: {
    eyebrow: "Why Moxie",
    h2: "An honest comparison — even where Excel wins",
    subtitle:
      "Excel is more flexible and has zero learning curve. Moxie wins where it matters: the workflow connecting programming, feedback and decision.",
    colWorkflow: "Workflow",
    colExcel: "Excel + WhatsApp",
    colGeneric: "Generic apps",
    colMoxie: "Moxie",
    rows: [
      "Absolute flexibility and custom calculations",
      "Learning curve / setup",
      "Workout programming",
      "Athlete ↔ coach communication",
      "Structured, versioned history",
      "Objective readiness",
      "Workload analysis (ACWR)",
      "Coaching decisions",
    ],
    core: "core",
    native: "native",
    excelWin: "wins",
    partial: "partial",
    manual: "manual",
  },
  scienceTrust: {
    eyebrow: "Scientific basis",
    h2: "Where these numbers come from",
    subtitle:
      "Moxie highlights signals — the coach makes the decision. No metric predicts anything deterministically.",
    refLabel: "Ref:",
    concepts: [
      {
        term: "ACWR",
        full: "Acute:Chronic Workload Ratio",
        desc: "Ratio between the current week's load (acute) and the average of the last 4 weeks (chronic). Measures how much recent load deviates from the adaptation built over time.",
        note: "Gabbett TJ (2016). The training-injury prevention paradox. British Journal of Sports Medicine.",
        caveat:
          "ACWR is an indicator, not a deterministic prediction. The coach interprets — Moxie shows.",
      },
      {
        term: "Readiness",
        full: "Training readiness",
        desc: "The athlete's daily functional state: sleep quality, perceived fatigue, mood, aches. Collected via subjective check-in and neuromuscular tests (Tap Test).",
        note: "Hooper SL, Mackinnon LT (1995). Monitoring overtraining in athletes. Sports Medicine.",
        caveat:
          "Readiness integrates subjective and objective signals. No number says 'don't train' — the coach decides.",
      },
      {
        term: "Workload",
        full: "Training load",
        desc: "The quantity and quality of work administered. In Moxie: volume (tonnage, reps), relative intensity (% 1RM, RIR) and post-session RPE. Every load syntax is treated as structured data, not free text.",
        note: "Foster C et al. (2001). A new approach to monitoring exercise training. Journal of Strength & Conditioning Research.",
        caveat: "",
      },
      {
        term: "Performance trends",
        full: "Performance development",
        desc: "Evolution of personal bests, volumes and times across blocks. Moxie versions every program: you can go back and compare different blocks for the same athlete.",
        note: "Issurin VB (2010). New horizons for the methodology and physiology of training periodization. Sports Medicine.",
        caveat: "",
      },
    ],
  },
  gettingStarted: {
    eyebrow: "Onboarding",
    h2: "From zero to Moxie in three steps",
    steps: [
      {
        n: "01",
        label: "Create athletes",
        desc: "Add the roster and individual profiles.",
      },
      {
        n: "02",
        label: "Build the program",
        desc: "Grid editor, blocks, compact-syntax prescriptions.",
      },
      {
        n: "03",
        label: "Start collecting data",
        desc: "Athlete logs. Data returns. The loop starts.",
      },
    ],
  },
  finalCta: {
    h2: "Built for coaches who reason from data",
    body: "No generic apps, no scattered spreadsheets. Moxie is a professional tool built for high-performance coaches — who want to truly understand what's happening to their athletes.",
  },
  footer: {
    desc: "A coaching OS for performance athletes. Built around how a strength and track & field coach actually works — not a fitness app from the app store.",
    meaningWord: "moxie",
    meaningPron: "/ˈmɒksi/",
    meaning: "nerve, guts. What an athlete needs — and what training load can take away.",
    github: "GitHub",
    instagram: "Instagram",
  },
}

export const translations = { it, en }
export type Lang = "it" | "en"
export type T = typeof it
