## Cos'è Moxie (una frase)

**Moxie** è un coaching OS per atleti di performance (atletica leggera / palestra): il coach costruisce e adatta i programmi di allenamento in un editor stile foglio di calcolo, l'atleta li esegue e li registra da un portale mobile, e i dati (readiness, fatica, dolore) tornano indietro al coach in tempo reale. Nato da un coach-developer per sostituire i propri fogli Excel + gruppi WhatsApp, oggi in produzione con coach e atleti reali (piccola scala: 1 coach + 2-3 colleghi, 10-12 atleti). UI interamente in italiano. Non è un'app fitness generica da app store: non ha abbonamenti, non è pensata per un mercato di massa, è fatta su misura per come lavora davvero un coach di forza/atletica.

## Identità visiva (obbligatoria, non negoziabile)

- **Tema scuro** sempre attivo (non è un tema opzionale, è l'identità del prodotto): sfondo quasi nero `#131110` / `#151313`, superfici leggermente più chiare `#1e1b1b` e `#1a1717`.
- **Colore accento principale**: arancio `#ff8b5a` (variante più satura `#f2622a`).
- **Colori secondari già usati nell'UI reale** (non inventarli, ci sono già): viola/magenta `#c1449c`, viola pieno `#8b3bff` — usati per barre RPE, avatar a gradiente, glow readiness. Più verde/giallo/rosso semantici per stati (readiness buona/da tenere d'occhio/allarme, ACWR sweet spot/attenzione/rischio).
- **Logo**: un'icona quadrata con angoli arrotondati, sfondo quasi nero, con un'onda stilizzata (tipo tracciato ECG/segnale) disegnata con un gradiente lineare arancio→magenta→viola (`#F2622A → #C1449C → #8B3BFF`), stroke arrotondato spesso, con un pallino pieno arancio all'estremità destra dell'onda. Wordmark "MOXIE" in maiuscolo accanto, spesso con tagline piccola "ELITE PERFORMANCE" sotto.
- **Tipografia**: titoli in un sans-serif geometrico molto bold/black (peso 800-900, tutto maiuscolo o quasi, letter-spacing leggermente negativo) — nel prototipo web reale è "Lexend" pesi 700-900. Testo di corpo in un sans-serif più neutro e leggibile — nel prototipo è "Manrope".
- Nessuna icona/emoji generica da stock: preferire forme geometriche semplici, badge colorati a tinta piena, indicatori a pallino/semaforo.

## A chi si rivolge la pagina

Due pubblici, entrambi già "addetti ai lavori" (non un pubblico freddo da conquistare con marketing aggressivo, ma colleghi/atleti che devono capire rapidamente cosa stanno per usare):
1. **Coach** che devono iniziare a usare Moxie per gestire i propri atleti.
2. **Atleti** che ricevono un invito e devono capire cosa faranno dal telefono.

Accesso **solo su invito** (non c'è self-signup pubblico, non c'è pricing, non c'è un pulsante "Prova gratis" — evitare quel linguaggio da SaaS generico).

## Struttura di pagina consigliata (dalla bozza, da migliorare)

1. **Nav** — logo+wordmark a sinistra, link di sezione al centro (Prodotto, Feature, Casi reali, Ruoli, Perché Moxie), a destra un badge "Coach · Atleta" e un pulsante "Chiedi un invito" (non è un link cliccabile reale, è testuale).
2. **Hero** — headline forte in 2-3 righe su "il carico si conosce prima che l'atleta lo scopra sulla sua pelle", sottotitolo che spiega il collegamento builder↔portale↔dati, un piccolo diagramma di flusso verticale (Coach scrive → Atleta esegue → Dati tornano), e sotto un **mockup UI ad alta fedeltà del Program Builder** (vedi sezione feature sotto per il dettaglio di cosa mostrare) dentro una finestra stile browser (pallini semaforo rosso/giallo/verde in alto).
3. **Sezione "feature highlights"** — griglia di 5-6 card compatte (icona colorata + titolo + una riga), le funzioni più distintive: sintassi di carico reale, Command Center "Triforza", Tap Test neuromotorio, ACWR a bande di rischio, Command Palette, notifiche push/PWA.
4. **Manifesto breve** — 2-3 frasi grandi che raccontano il problema (Excel + WhatsApp, dati che si perdono) e la soluzione (Moxie chiude il cerchio), non un muro di testo.
5. **Righe di feature alternate** (testo da un lato, mockup UI dall'altro, alternando sinistra/destra): Program Builder, Command Center/System Map, Dashboard & Analyser, Portale atleta (questo in un frame telefono, non browser).
6. **Case study a tab** (vedi sezione dedicata sotto) — 9 profili mock selezionabili, ognuno mostra un caso estremo e la funzione di Moxie che lo intercetta.
7. **Attività divise per ruolo** — due colonne Coach / Atleta con 6-7 attività concrete ciascuna (lista qui sotto).
8. **"Perché Moxie"** — una tabella di confronto onesta contro le alternative reali sostituite: Excel+WhatsApp / app fitness generiche / Moxie, su criteri come sintassi di carico reale, ritorno dei dati al coach, readiness misurata oggettivamente, versioning del programma.
9. **CTA finale** — banda a colore pieno arancio, invito a chiedere l'accesso (niente form pubblico, è su invito).
10. **Footer minimale** — logo, una riga di tagline, nessun link esterno reale (il prodotto non ha ancora un sito pubblico).

## Sezione "Case study" — i 9 profili mock (nuova, importante)

Per testare l'app durante lo sviluppo abbiamo creato 9 atleti finti, ma **non "medi"**: ognuno è una casistica estrema pensata apposta per stressare una funzione specifica (rischio infortunio, dati mancanti, incoerenza, ecc.). Sono un ottimo materiale per una sezione "prova sul campo" perché sono dati reali del sistema (anche se atleti finti), non mockup illustrativi generici.

**Design consigliato**: una fila di pillole/tab orizzontali (una per atleta, con un pallino colorato per l'archetipo), che al click cambiano un pannello sotto — non uno scroll/carosello, perché con 9 casi nominati l'utente deve capire subito quanti sono e poterli scegliere direttamente. Il pannello per ogni caso mostra: tag archetipo colorato, nome, una riga di contesto persona, 1-2 frasi di scenario, un box "cosa mostra Moxie" (la funzione/metrica specifica che interviene), e 3 "stat tile" con i numeri chiave (valori reali, colorati per stato: verde=ok, giallo=attenzione, rosso=allarme, grigio=neutro/assente).

Introduzione alla sezione: *"Non abbiamo generato atleti 'tipo' per la demo — abbiamo costruito 9 casistiche estreme apposta per stressare ogni funzione: chi fila liscio, chi rischia l'infortunio, chi sparisce, chi mente a se stesso sul carico."*

I 9 casi (dati reali osservati nel sistema mock):

1. **Marco LaMacchina** — tag "Il caso pulito" (verde). Lanciatore, categoria Promesse, 6 mesi di storico. *Scenario*: sei mesi su tre programmi in sequenza, ACWR sempre nella sweet spot, TSB in scarico corretto verso la gara, massimali in crescita costante — il grafico che si spera di vedere per ogni atleta. *Cosa mostra Moxie*: quando tutto funziona, il Command Center resta silenzioso — nessun alert, nessuna forzatura. Stat: ACWR 1,00 (ok), Compliance 100% (ok), Storico continuo 6 mesi (neutro).

2. **Luca RedFlag** — tag "Rischio infortunio" (rosso). Juniores, burnout/infortunio in corso. *Scenario*: il carico reale diverge da quello prescritto, il check-in di benessere crolla, il Tap Test scende sotto la sua baseline — l'infortunio, quando arriva, è stato anticipato dai segnali. *Cosa mostra Moxie*: l'alert non aspetta un solo numero fuori soglia, combina RPE, check-in e Tap Test. Stat: ACWR 0,86 (ok — nota: non è l'ACWR a scattare qui), Compliance 75% (attenzione), Stato "Infortunato" (allarme).

3. **Giulia Fantasma** — tag "Dati stantii" (grigio). Allievi, abbandono totale, programma mai chiuso. *Scenario*: un programma scaduto da 18 giorni, mai chiuso da nessuno — molti sistemi continuerebbero a mostrarlo come "settimana corrente". *Cosa mostra Moxie*: readiness e compliance segnalate esplicitamente come stantie — l'app dice "dati insufficienti" invece di inventare un numero attuale. Stat: ACWR 0,00 (allarme), Compliance 0% (allarme), Ultimo accesso 18gg fa (attenzione).

4. **Andrea Veterano** — tag "Rientro a rischio" (arancio). Promesse, rientro dopo 4 mesi di stop. *Scenario*: quattro mesi di stop, poi un rientro con carico deciso contro un cronico quasi a zero — la ricetta classica per una ricaduta. *Cosa mostra Moxie*: l'ACWR sale sopra la soglia di rischio prima che il rientro diventi un nuovo infortunio. Stat: ACWR 1,59 (allarme, fuori soglia), Compliance 100% (ok), Buco di storico 4 mesi (attenzione).

5. **Sara Novellina** — tag "Stato vuoto" (grigio chiaro). Cadetti, profilo appena creato. *Scenario*: nessun programma, nessuna seduta, nessun check-in — il caso più semplice da rompere per qualsiasi dashboard di analytics. *Cosa mostra Moxie*: niente crash, niente grafici inventati, solo uno stato vuoto onesto. Stat: ACWR "—" (neutro), Compliance 0% (neutro, non allarme — è vuoto, non fallito), Storico 0gg (neutro).

6. **Davide Incostante** — tag "Effetto yo-yo" (giallo). Juniores, sessioni pianificate mai registrate. *Scenario*: buchi veri nei log (non sedute segnate "saltate"), check-in di benessere scollegato dai giorni di sessione. *Cosa mostra Moxie*: la readiness si distingue tra "reale" (misurata) e "stimata" (dedotta) — non nasconde l'incertezza dietro un numero unico. Stat: ACWR 0,57 (allarme), Compliance 25% (allarme), Check-in vs sessioni "scorrelato" (attenzione).

7. **Simone Overachiever** — tag "Sovraccarico volontario" (magenta). Promesse, ignora lo scarico prescritto. *Scenario*: il programma dice scarico, lui lo ignora — tonnellaggio reale 30-40% sopra il prescritto, RPE sempre alto, completamento al 100%. *Cosa mostra Moxie*: la compliance al 100% non basta — il confronto pianificato-vs-reale rivela l'eccesso che una spunta "fatto" non racconterebbe. Stat: ACWR 0,98 (ok), Compliance 100% (ok), Reale vs prescritto "+30/40%" (attenzione).

8. **Elena Tecnica** — tag "Metrica giusta" (viola pieno). Juniores, lanci e salti, focus tecnico. *Scenario*: sedute a tonnellaggio quasi zero per costruzione tecnica — contare i kg direbbe che non si sta allenando. *Cosa mostra Moxie*: per queste discipline il segnale di carico reale è l'RPE, non il volume — l'app non forza una metrica sbagliata sul caso sbagliato. Stat: ACWR 0,91 (ok), Compliance 100% (ok), Segnale di carico "RPE" (neutro).

9. **Federico Tapering** — tag "Scarico corretto" (verde). Pre-gara, taper progressivo su 4 settimane. *Scenario*: il carico scende in modo calcolato verso la gara, senza far scattare falsi allarmi. *Cosa mostra Moxie*: il TSB resta positivo e l'ACWR non esce mai dalla banda sicura — il sistema riconosce uno scarico voluto da un crollo di carico subito. Stat: ACWR 0,83 (ok), Compliance 100% (ok), Taper "4 settimane" (neutro).

## Le funzioni di Moxie, TUTTE, in dettaglio

### Lato Coach (desktop-first)

**Dashboard / Roster**
- Header "Roster" con data corrente.
- 3 stat card: Atleti Attivi (numero grande), Feedback da leggere (numero, verde se 0), Prossima gara (barra colorata).
- Grafico "Panoramica Atleti": barre orizzontali per atleta, due serie affiancate — RPE medio (viola) e Completamento % (arancio), toggle Settimana/Mese/3 Mesi.
- Tabella "Roster Atleti": avatar+nome, ultima sessione (data+stato), readiness (barra colorata verde/giallo/rosso + %), programma attivo (badge), status (ATTIVO/INFORTUNATO).
- "Weekly Monitor": griglia calendario atleti × giorni della settimana, pallini colorati per stato seduta (completata verde, saltata rossa, parziale gialla, pianificata blu, riposo grigio).
- Pulsante "Vista rapida" che apre il Command Center (vedi sotto).

**Athletes**
- Ricerca, filtri (Tutti/Alert/Attivo/Infortunato/Disciplina/Categoria).
- Grid di card atleta: avatar con iniziali su sfondo a gradiente rosa→viola, nome, disciplina, età/sesso, status badge, barra readiness a gradiente, programma attivo.
- Onboarding nuovo atleta via invito.

**Programs Center**
- Stat: Attivi / Bozze / Template.
- Lista programmi: nome, badge stato (IN CORSO verde, COMPLETATO blu, ARCHIVIATO grigio), data, durata (settimane/sedute), atleta assegnato.
- Azioni: Crea Nuovo, Duplica, Esporta Excel/PDF, Explorer, Concludi, Archivia, Salva come template, Elimina.
- Wizard di creazione a step, assegnazione bulk a più atleti.

**Program Builder V3** (il cuore del prodotto)
- Griglia stile foglio Excel: colonne = settimane del blocco (SETT 1..N, con etichetta "SCARICO" o "OGGI" o "COMPETIZIONE"), righe = giorni (LUN...DOM), celle = sedute con esercizi.
- Ogni cella-esercizio mostra: nome esercizio (es. "Back Squat (High Bar)"), poi la prescrizione in sintassi compatta.
- **Sintassi di prescrizione reale** (mostrare come esempio, è un punto di forza distintivo):
  - `4x8 @75% r120` → 4 serie da 8 ripetizioni al 75% del massimale, 2 minuti di recupero
  - `5x5 @80% r3` → recupero in minuti se ≤10
  - `4x6 @rir2` → RIR (reps in riserva)
  - `1x max @rpe9` → top set
  - `emom 10x3` → EMOM
  - `5@80 · 3@85 · 1@90` → wave loading (onde di intensità crescente)
  - Superset/circuiti etichettati `A1` / `A2` (posizione automatica nella seduta)
  - Blocchi multipli separati da `/`: `5x5 @80% / 3x5 @70%`
- Top bar: nome atleta, nome programma, badge stato, settimane totali, data, pulsanti Blocco/Ciclo/Settimana, Template, Salva, Oggi, Metadati, cronologia/versioning ("time machine" — si può tornare a versioni precedenti del programma).
- Tab: Programma / Pianifica / Tutto / Competizione.
- Vista calendario alternativa.

**Command Center / Quick Review Roster / System Map "Triforza"**
- Modal a schermo intero: header "Quick Review Roster", tab data (-3gg, -2gg, -1gg, Oggi, +1gg, +2gg, +3gg, o data libera).
- Per ogni atleta: **due sagome corporee stilizzate (fronte/retro)**, ripetute 3 volte affiancate per 3 viste diverse, selezionabili:
  1. **Vista Volume** — colora le zone del corpo per tonnellaggio settimanale relativo (intensità del colore = quanto è caricata quella zona).
  2. **Vista Readiness ("Triforza")** — la sagoma si illumina con un **glow verde/giallo/rosso** a seconda del Neural Demand Score (0-100: sopra 70 alto, 40-70 da monitorare, sotto 40 normale), calcolato da complessità/intensità degli esercizi pianificati, incrociato col Tap Test (se il picco del test scende sotto l'80% della media mobile a 14 giorni dell'atleta, forza lo stato ad "allarme" indipendentemente dal modello — il dato oggettivo ha sempre la precedenza). Se la data è nel futuro o mancano dati, l'etichetta mostra "stima".
  3. **Vista Salute** — semaforo che combina l'ACWR (Acute:Chronic Workload Ratio) con la doloribilità muscolare autoriportata dall'atleta.
- Ogni vista ha un piccolo toggle secondario "Per zona / Per pattern".

**Analyser Center**
- Tab: Snapshot / Trend / Programmi.
- Vista Snapshot: tabella con colonne Atleta, Programma Attivo (+ settimana corrente), **ACWR** (numero + pallino colorato: verde 0,8-1,3 "sweet spot", giallo 0,6-0,8/1,3-1,5 "attenzione", rosso fuori soglia), **Readiness·TSB** (valore + trend), **Compliance 7gg** (barra percentuale colorata), Ultimo Feedback (data), badge ALERT quando serve attenzione.
- Banner riepilogo in alto: "N atleti in alert su M totali".
- Grafici aggiuntivi nel dettaglio atleta: "Carico & RPE — ultime 8 settimane" (barre volume + linea RPE), "Compliance — ultime 8 settimane", ACWR nel tempo con bande colorate di rischio, "Progressione 1RM" (linea storica del massimale stimato).

**Altre funzioni coach**
- Calendar (vista calendario eventi/sedute).
- Exercise Library (libreria esercizi con tag, filtri, famiglie di varianti).
- Feedback Center (coda aggregata di note post-seduta, RPE, segnalazioni di fatica/dolore da tutti gli atleti).
- Notifications (digest settimanale).
- Command Palette (Cmd+K) + scorciatoie da tastiera (Alt+numero per navigare, ? per l'elenco scorciatoie) — pensata per un uso quotidiano senza mouse.
- Documentazione in-app (help center con guide per coach e per atleta).

### Lato Atleta (portale mobile, PWA installabile)

Navigazione a 3 tab in basso: **Settimana / Progressi / Wellness**.

**Settimana**
- Striscia calendario L M M G V S D con indicatori a pallino per i giorni con sedute.
- Card della seduta del giorno: nome seduta, categoria (es. "Palestra"), badge stato ("FATTA" verde se completata), esercizio con volume totale (es. "3×3 · 100 kg"), riepilogo (n. esercizi, n. serie, volume kg totale), RPE registrato, link "Rivedi" per il dettaglio.
- Principio guida: **"Scrivi quello che hai fatto, non quello che dovevi fare"** — reps, carico e tempo per ogni serie sono modificabili singolarmente rispetto a quanto prescritto, si possono aggiungere/togliere serie, spunta verde per segnare l'esercizio (o la singola serie) fatta.
- Segnalazione infortunio/fastidio direttamente dalla seduta.

**Wellness**
- Check-in giornaliero, titolo **"Come stai? Pochi secondi, nessun giudizio."**
- 5 dimensioni, ciascuna su scala **1-5** con estremi descrittivi ed etichette testuali:
  1. **Sonno** — "Come hai dormito?" (Pessimo → Ottimo)
  2. **Energia** — "Quanta energia hai?" (A terra → Carico)
  3. **Muscoli** — "Come senti i muscoli?" (Doloranti → Freschi)
  4. **Umore** — "Com'è l'umore?" (Giù → Su)
  5. **Stress** — "Quanto sei sereno?" (Stressato → Sereno)
  - UI: una domanda alla volta con indicatore di progresso (es. "1/5 · SONNO"), 5 pulsanti numerati 1-5 su una barra sfumata rosso→verde.
- Punteggio sintesi combinato su 10, con confronto "+0.3 vs media".
- Mini grafico "Andamento benessere" (linea verde, ultimi check-in).
- Card **Test Neuromotorio** (Finger Tap Test): "Ultimo picco: NN tap" — flusso: countdown 3-2-1, 10 secondi di tap sullo schermo, conteggio nascosto durante il test (per non farlo diventare un gioco di auto-motivazione distorto), minimo 2 tentativi + un 3° opzionale, baseline calcolata su media mobile 14 giorni.

**Progressi**
- Carico nel tempo, record personali (1RM stimato), andamento readiness.

**Altro**
- Notifiche push (opt-in con un prompt gentile: *"Resta aggiornato — ricevi una notifica sul telefono quando il coach carica o modifica una tua seduta, niente da controllare a mano ogni volta"*, con opzione "Non m'interessa").
- Installabile come PWA (icona in home screen, non serve passare da uno store).
- Overlay/watermark anti-condivisione sui contenuti del programma (email+timestamp visibili in trasparenza) per scoraggiare screenshot/condivisione non autorizzata.

## Citazioni reali da poter riusare nel copy

Queste frasi esistono già nella documentazione in-app di Moxie — sono autentiche, non inventate per il marketing:
- *"L'app non salva mai un dato che non capisce."*
- *"Un check-in sincero può far scalare o alleggerire un allenamento prima che tu arrivi stanco in palestra — non dopo."*
- *"Non ti chiede come ti senti, misura direttamente una risposta del sistema nervoso."* (sul Tap Test)
- *"L'app non inventa un numero: lascia un buco nel grafico piuttosto che mostrarti un valore falso."* (sull'ACWR quando mancano dati)
- *"Tre angolazioni sullo stesso atleta, pensate per uno sguardo rapido prima di aprire il dettaglio."* (sul Command Center)

## Tono di voce

- Italiano, diretto, mai da "SaaS aziendale" (niente "rivoluziona il tuo workflow", niente claim gonfiati).
- Onesto sulla scala reale del prodotto: non è usato da migliaia di persone, è usato da un coach e dai suoi colleghi/atleti veri. Questo è un punto di forza da comunicare (autenticità), non da nascondere.
- Concreto: preferire esempi reali (sintassi di prescrizione, soglie numeriche vere) a claim vaghi tipo "la piattaforma più avanzata".

## Cosa NON includere

- Nessun pricing, nessun piano di abbonamento, nessun form di signup pubblico self-service.
- Nessun link esterno reale (non esiste ancora un dominio pubblico).
- Nessun nome di competitor reale nel confronto — solo le alternative genericamente descritte (Excel+WhatsApp, app fitness generiche).
- Non chiamarla "app fitness" — è un coaching OS per performance, distinzione esplicita richiesta più volte nel copy esistente.

## Cosa migliorare rispetto alla bozza allegata

La bozza (`locandina-moxie.html`) ha screenshot reali dell'app ma catturati a bassa risoluzione e compressi troppo per stare in un unico file HTML leggero — risultano sgranati. Con Figma Make, generare **mockup UI puliti e ad alta fedeltà** delle schermate descritte sopra (Dashboard, Program Builder, Command Center/System Map, Wellness check-in) usando l'identità visiva descritta, invece di provare a imitare pixel-per-pixel screenshot di bassa qualità.
