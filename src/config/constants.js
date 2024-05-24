export const ENFORCE_DOCS_SEARCH_PRE_PROMPT =
  "Accesează căutarea în documentele interne O SINGURĂ DATĂ. NU accesa nicio altă unealtă înafară de cea dedicată căutării în documentele interne.";

export const ENFORCE_WEB_SEARCH_PRE_PROMPT =
  "Accesează căutarea pe internet O SINGURĂ DATĂ. NU accesa nicio altă unealtă înafară de cea dedicată căutării pe internet.";

export const DEFAULT_REQUESTS = [
  {
    title: "4.1.2 DIMENSIUNEA PIEȚEI ȚINTĂ",
    requests: [
      {
        title: "Mărimea pieței țintă",
        userRequest: `Mai jos vei găsi piataTinta si ariaGeografica a acesteia, la care ne vom referi în continuare.
        1. Caută informații despre cifra de afaceri în piataTinta raportată la ariaGeografica.
        2. Citește rezultatele căutării cu atenție.
        3. Folosește informațiile acumulate și genereaza o descriere detaliata care să cuprindă evaluarea cifrei de afaceri a pieței țintă, analiza creșterii cifrei de afaceri în ultimii ani, perspectivele de dezvoltare pe termen scurt și mediu și orice altă informație relevantă pe care ai găsit-o.
        
        - NU omite nicio informație relevantă din cele găsite prin căutare.
        - Dacă consideri că e util poți să citezi mot-a-mot unele din informațiile găsite.
        - Răspunsul să fie format din paragrafe, fără titluri, fără liste. 
        - Răspunsul să fie coerent, acesta urmând a fi integrat într-un plan de marketing.
        - NU uita să incluzi în raport, lista cu resurse, conform indicațiilor anterioare.`,
        resources: ["piataTinta", "ariaGeografica"],
        isWebSearch: true,
        isDocumentsSearch: true,
      },

      {
        title: "Distribuția pieței și principalii actori",
        userRequest: `Mai jos vei găsi piataTinta si ariaGeografica a acesteia, la care ne vom referi în continuare.
        1. Caută informații despre principalii actori în piataTinta si ariaGeografica.
        2. Citește rezultatele căutării cu atenție.
        3. Folosește informațiile acumulate și genereaza o descriere detaliata care să cuprindă principalii actori din piața țintă, evaluarea poziției de lider a retailerilor și producătorilor în piața țintă, distribuția cifrei de afaceri și a cotei de piață între companiile de top, care sunt tendințele în creșterea și consolidarea pieței și orice altă informație relevantă pe care ai găsit-o.
        
        - NU omite nicio informație relevantă din cele găsite prin căutare.
        - Dacă consideri că e util poți să citezi mot-a-mot unele din informațiile găsite.
        - Răspunsul să fie format din paragrafe, fără titluri, fără liste. 
        - Răspunsul să fie coerent, acesta urmând a fi integrat într-un plan de marketing.
        - NU uita să incluzi în raport, lista cu resurse, conform indicațiilor anterioare.`,
        resources: ["piataTinta", "ariaGeografica"],
        isWebSearch: true,
        isDocumentsSearch: true,
      },

      {
        title: "Comportamentul și preferințele consumatorilor",
        userRequest: `Mai jos vei găsi piataTinta si ariaGeografica a acesteia, la care ne vom referi în continuare.
        1. Caută informații despre comportamentul consumatorilor din piataTinta si ariaGeografica.
        2. Citește rezultatele căutării cu atenție.
        3. Folosește informațiile acumulate și genereaza o descriere detaliata care să cuprindă eventualele schimbări în preferințele și obiceiurile de consum ale consumatorilor, faci o analiză a impactului factorilor socio-economici și demografici asupra comportamentului de cumpărare, percepția și importanța prețurilor în deciziile de cumpărare și orice altă informație relevantă pe care ai găsit-o.
        
        - NU omite nicio informație relevantă din cele găsite prin căutare.
        - Dacă consideri că e util poți să citezi mot-a-mot unele din informațiile găsite.
        - Răspunsul să fie format din paragrafe, fără titluri, fără liste. 
        - Răspunsul să fie coerent, acesta urmând a fi integrat într-un plan de marketing.
        - NU uita să incluzi în raport, lista cu resurse, conform indicațiilor anterioare.`,
        resources: ["piataTinta", "ariaGeografica"],
        isWebSearch: true,
        isDocumentsSearch: true,
      },

      {
        title: "Factori Externi și Perspective de Viitor",
        userRequest: `Mai jos vei găsi piataTinta si ariaGeografica a acesteia, la care ne vom referi în continuare.
        1. Caută informații despre factori externi și perspective de viitor in piataTinta si ariaGeografica.
        2. Citește rezultatele căutării cu atenție.
        3. Folosește informațiile acumulate și genereaza o descriere detaliata care să cuprindă evaluarea influenței factorilor macroeconomici asupra pieței țintă, impactul reglementărilor guvernamentale și a politicilor fiscale asupra pieței, proiecții și previziuni pentru dezvoltarea pieței țintă pe termen lung și perspectivele investiționale și inovațiile tehnologice care pot influența piața țintă precum și orice altă informație relevantă pe care ai găsit-o.
        
        - NU omite nicio informație relevantă din cele găsite prin căutare.
        - Dacă consideri că e util poți să citezi mot-a-mot unele din informațiile găsite.
        - Răspunsul să fie format din paragrafe, fără titluri, fără liste. 
        - Răspunsul să fie coerent, acesta urmând a fi integrat într-un plan de marketing.
        - NU uita să incluzi în raport, lista cu resurse, conform indicațiilor anterioare.`,
        resources: ["piataTinta", "ariaGeografica"],
        isWebSearch: true,
        isDocumentsSearch: true,
      },

      {
        title: "Top Firme CAEN",
        userRequest: `
        1. Folosește top_firme_tool și importă datele de pe topfirme.com utilizând codul CAEN de mai jos.
        2. Structureaza datele obtinute intr-un tabel cu urmatoarele coloane: Romania, Ponderea in economia nationala si urmatoarele randuri: Numar agenti economici, Cifra de afaceri, Numar angajati, Profit.
        3. Raspunde cu tabelul creat si cu o analiză detaliată a acestor date.
        
        CAEN:`,
        resources: ["caen"],
        isTopFirme: true,
      },

      {
        title: "Analiză Eurostat PRODCOM",
        userRequest: `Mai jos vei găsi un TABEL in format HTML, extras de pe EUROSTAT.
        Creează o analiză detaliată a evoluției datelor aflate în TABEL. NU reda datele din tabel mot-a-mot, ci analizează-le și oferă o perspectivă asupra evoluției acestora. Tonul tău va fi pozitiv și optimist, in ceea ce privește evoluția acestei piețe.
        ATENTIE! NU ACCESA NICI O UNEALTA! Dacă tabelul este GOL răspunde că nu ai suficiente informații!
        
        TABEL:\n\n`,
        resources: ["prccode"],
        isEurostat: true,
      },

      {
        title: "Tendințe de evoluție pe orizontul de operare al obiectivului",
        userRequest: "",
        // isWebSearch: true,
        // isDocumentsSearch: true,
      },

      {
        title: "Aria geografică de acoperire a pieței țintă",
        userRequest: `Caută și creează un raport cu privire la aria geografică care este specificată mai jos, care să aiba următoarea structură:
        
        - O descriere a localităților, județelor sau regiunilor care fac parte din aria geografică
        - O descriere a populației - număr, etnie, ocuparea forței de muncă, șomajul (recensământ)
        - O descriere a activităților economice principale și evoluția acestora
        - O descriere a infrastructurii de transport și accesibilitate
        - O incheiere cu o concluzie care sa enumere principalele beneficii ale acestei arii geografice pentru implementarea proiectului.
        
        Mai jos găsești un exemplu după care să te ghidezi:
        
        <Exemplu>
        ARIA GEOGRAFICĂ DE ACOPERIRE
        Aria geografică este reprezentată în precădere de Regiunea de Nord-Vest a României.
        Regiunea Nord-Vest este compusă din următoarele județe: Bihor, Bistrița Năsăud, Cluj, Maramureș, Satu Mare și Sălaj. 
        Conform rezultatelor ultimului Recensământ al Populației, Regiunea Nord-Vest are o populație totală de 2,74 milioane persoane. Transilvania de Nord este o regiune cosmopolită, unde alături de români, trăiesc peste jumătate din numărul total al locuitorilor de etnie maghiară din România, ceea ce a dus la crearea unei identități culturale unice.
        La 01.01.2015, conform Balanței Forței de Muncă, resursele de muncă ale regiunii erau în număr de 1652.3 mii persoane din care populația ocupată civilă reprezenta 71.8%.
        Din punct de vedere al participării la principalele activități economice, populația ocupată civilă în agricultură, silvicultură și pescuit este de 29.2%, în timp ce populația ocupată civilă din industrie și construcții reprezintă 30.7%, iar în servicii este de 40.1%.
        Rata șomajului înregistrat la data de 31 decembrie 2015 a fost de 3.6%, fiind înregistrați 41.0 mii șomeri.
        Regiunea Nord-Vest este, după București-Ilfov, cea mai atractivă, din punct de vedere economic, dintre regiunile de dezvoltare ale României. Faptul se datorează pieței dezvoltate a muncii și salariilor, investițiilor străine, mediului privat și concurenței de piață, ca și intrărilor de tehnologii moderne. Economia Regiunii este în plină dezvoltare, cu o creștere dinamică în ultimii ani în sectoare precum construcțiile, industria de textile, industria de mașini, industria mobilei și echipamente. 
        În ceea ce privește infrastructura de transport, regiunea este străbătută de 7 drumuri europene, de 3.222 km de drumuri naționale, 4 aeroporturi, 1.641 km de rețea feroviară.
        Având în vedere scurta prezentare realizată Regiunii de Nord-Vest, putem afirma că locația de implementare a proiectului este propice, deoarece: 
        - Situația economică regională este una prosperă
        - Gradul de accesibilitate este ridicat 
        - Dispune de resurse umane calificate.
        </Exemplu>

        Aria Geografică:`,
        resources: ["ariaGeografica"],
        isWebSearch: true,
      },
    ],
  },

  {
    title: "4.1.3. STADIUL ACTUAL AL PIEȚEI",
    requests: [
      {
        title: "Caracteristici specifice ale pieței țintă",
        userRequest: `Mai jos vei găsi piataTinta si ariaGeografica a acesteia, la care ne vom referi în continuare.
        1. Caută informații despre stadiul actual al pietei tinta in ariaGeografica.
        2. Citește rezultatele căutării cu atenție.
        3. Folosește informațiile acumulate și genereaza o descriere detaliata care să cuprindă care sunt caracteristicile specifice ale pietei tinta, nevoile consumatorilor, oportunitati si provocari, sau orice altă informație relevantă pe care ai găsit-o.
        
        - NU omite nicio informație relevantă din cele găsite prin căutare.
        - Dacă consideri că e util poți să citezi mot-a-mot unele din informațiile găsite.
        - Răspunsul să fie format din paragrafe, fără titluri, fără liste. 
        - Răspunsul să fie coerent, acesta urmând a fi integrat într-un plan de marketing.
        - NU uita să incluzi în raport, lista cu resurse, conform indicațiilor anterioare.`,
        resources: ["piataTinta", "ariaGeografica"],
        isWebSearch: true,
        isDocumentsSearch: true,
      },

      {
        title: "Analiză Eurostat CAEN",
        userRequest: `Mai jos vei găsi un TABEL in format HTML, extras de pe EUROSTAT.
        Creează o analiză detaliată a evoluției datelor aflate în TABEL. NU reda datele din tabel mot-a-mot, ci analizează-le și oferă o perspectivă asupra evoluției acestora. Tonul tău va fi pozitiv și optimist, in ceea ce privește evoluția acestei piețe.

         - NU ACCESA NICI O UNEALTA!
         - Dacă in tabel nu ai informatii răspunde ca atare!
        
        TABEL:\n\n`,
        resources: ["caen"],
        isEurostat: true,
      },

      {
        title: "Principalele nevoi ale consumatorilor",
        userRequest: `Mai jos vei găsi piataTinta si ariaGeografica a acesteia, la care ne vom referi în continuare.
        1. Caută informații despre nevoile consumatorilor din piataTinta in ariaGeografica.
        2. Citește rezultatele căutării cu atenție.
        3. Folosește informațiile acumulate și genereaza o descriere detaliata despre nevoile consumatorilor din piata tinta, sau orice altă informație relevantă pe care ai găsit-o.
        
        - NU omite nicio informație relevantă din cele găsite prin căutare.
        - Dacă consideri că e util poți să citezi mot-a-mot unele din informațiile găsite.
        - Răspunsul să fie format din paragrafe, fără titluri, fără liste. 
        - Răspunsul să fie coerent, acesta urmând a fi integrat într-un plan de marketing.
        - NU uita să incluzi în raport, lista cu resurse, conform indicațiilor anterioare.`,
        resources: ["piataTinta", "ariaGeografica"],
        isWebSearch: true,
        isDocumentsSearch: true,
      },

      {
        title: "Principalele nevoi ale producătorilor",
        userRequest: `Mai jos vei găsi piataTinta si ariaGeografica a acesteia, la care ne vom referi în continuare.
        1. Caută informații despre nevoile producatorilor din piataTinta in ariaGeografica.
        2. Citește rezultatele căutării cu atenție.
        3. Folosește informațiile acumulate și genereaza o descriere detaliata despre nevoile producatorilor din piata tinta, sau orice altă informație relevantă pe care ai găsit-o.
        
        - NU omite nicio informație relevantă din cele găsite prin căutare.
        - Dacă consideri că e util poți să citezi mot-a-mot unele din informațiile găsite.
        - Răspunsul să fie format din paragrafe, fără titluri, fără liste. 
        - Răspunsul să fie coerent, acesta urmând a fi integrat într-un plan de marketing.
        - NU uita să incluzi în raport, lista cu resurse, conform indicațiilor anterioare.`,
        resources: ["piataTinta", "ariaGeografica"],
        isWebSearch: true,
        isDocumentsSearch: true,
      },

      {
        title: "Principalele tendințe identificate",
        userRequest: `Mai jos vei găsi piataTinta si ariaGeografica a acesteia, la care ne vom referi în continuare.
        1. Caută informații despre tendinte in piataTinta in ariaGeografica.
        2. Citește rezultatele căutării cu atenție.
        3. Folosește informațiile acumulate și genereaza o descriere detaliata despre tendintele din piata tinta, sau orice altă informație relevantă pe care ai găsit-o.
        
        - NU omite nicio informație relevantă din cele găsite prin căutare.
        - Dacă consideri că e util poți să citezi mot-a-mot unele din informațiile găsite.
        - Răspunsul să fie format din paragrafe, fără titluri, fără liste. 
        - Răspunsul să fie coerent, acesta urmând a fi integrat într-un plan de marketing.
        - NU uita să incluzi în raport, lista cu resurse, conform indicațiilor anterioare.`,
        resources: ["piataTinta", "ariaGeografica"],
        isWebSearch: true,
        isDocumentsSearch: true,
      },
    ],
  },

  {
    title: "4.1.4. ANALIZA POTENȚIALULUI DE CREȘTERE",
    requests: [
      {
        title: "Evolutia economiei - TERMEN SCURT",
        userRequest: `
        Suntem in anul 2024. Ai acces la documentul emis de Comisia Națională de Strategie și Prognoză privind evolutia indicatorilor macroeconomici din Romania 2024 - 2027.
        1. Caută informații despre proiectia principalilor indicatori macroeconomici.
        2. Citește rezultatele căutării cu atenție.
        3. Folosește informatiile despre evolutia Produsului Intern Brut si a cererii interne a acestuia
        4. Genereaza o descriere detaliata despre evoluția economiei din România pe termen scurt, folosind formatul din exemplul de mai jos. Avand in vedere ca este vorba de termen scurt, te vei referi in special la rezultatele din anul 2023 si la perspectivele pentru anul 2024.
        
        - NU omite nicio informație relevantă din cele găsite prin căutare
        - Vei reda datele statistice relevante.
        - Dacă consideri că e util poți să citezi mot-a-mot unele din informațiile găsite.
        - Răspunsul să fie format din paragrafe, fără titluri, fără liste. 
        - Răspunsul să fie coerent, acesta urmând a fi integrat într-un plan de marketing.

        <EXEMPLU>
        Pe termen scurt, în ceea ce privește situația României, Comisia Națională de Strategie și Prognoză estimează o reducere a economiei românești în anul 2023, când Produsul Intern Brut va scădea cu 2,5%. În perioada 2021-2027, România ar putea avea acces la o alocare de fonduri europene semnificativ superioară față de perioada anterioară de programare care vor avea un efect adițional asupra avansului economiei. Impactul asupra dinamicii valorii adăugate brute din industrie va fi de 2,2 puncte procentuale. Pe partea cererii, atât consumul privat cât și investițiile (formarea brută de capital fix) vor avea dinamici anuale mai mari în medie cu 3,4 și respectiv 5,4 puncte procentuale. 
        </EXEMPLU>
        `,
        isDocumentsSearch: true,
      },

      {
        title: "Evolutia economiei - TERMEN MEDIU",
        userRequest: `
        Suntem in anul 2024. Ai acces la documentul emis de Comisia Națională de Strategie și Prognoză privind evolutia indicatorilor macroeconomici din Romania 2024 - 2027
        1. Caută informații despre evoluția economiei din România pe termen mediu.
        2. Citește rezultatele căutării cu atenție.
        3. Folosește informatiile despre evolutia Produsului Intern Brut si a cererii interne a acestuia
        4. Genereaza o descriere detaliata despre evoluția economiei din România pe termen mediu, folosind formatul din exemplul de mai jos.
        
        - NU omite nicio informație relevantă din cele găsite prin căutare
        - Vei reda datele statistice relevante.
        - Dacă consideri că e util poți să citezi mot-a-mot unele din informațiile găsite.
        - Răspunsul să fie format din paragrafe, fără titluri, fără liste. 
        - Răspunsul să fie coerent, acesta urmând a fi integrat într-un plan de marketing.

        <EXEMPLU>
        Pe termen mediu, principala contribuție la creșterea economică a României va veni din partea productivității totale a factorilor (PTF), atâta timp cât se aplică în mod susținut politici ce urmăresc dezvoltarea capitalului uman, al infrastructurii fizice, consolidarea piețelor și ecosistemul de inovație (dinamismul firmelor și capacitățile de cercetare-dezvoltare-inovare).
        Atât în vechea perioadă de programare cât și în cea curentă, România s-a aflat și se află sub media europeană în ceea ce privește rata de absorbție a fondurilor puse la dispoziție de către UE, aflându-se constant în rândul țărilor cu cel mai mic procent al fondurilor utilizate. Creșterea ratei de absorbție și utilizarea eficientă a fondurilor UE devin imperative, astfel încât România și cetățenii săi să poate beneficia pe deplin de avantajele statutului de membru al UE. Implementarea instrumentelor structurale și de coeziune trebuie să urmărească prioritar impactul pozitiv la nivel socio-economic al programelor și nu doar simpla utilizare a fondurilor nerambursabile.        
        </EXEMPLU>
        `,
        isDocumentsSearch: true,
      },

      {
        title: "Evolutia economiei - TERMEN LUNG",
        userRequest: `
        1. Cauta informatiile referitoare la PROIECŢIA PRINCIPALILOR INDICATORI MACROECONOMICI.
        2. Genereaza un tabel cu aceste informatii care sa respecte urmatoarele reguli:
        - coloanele tabelului vor fii anii 2023, 2024, 2025, 2026, 2027.
        - randurile tabelului vor fi: Produsul Intern Brut - mld. lei, Produsul Intern Brut - crestere reala % , Consumul privat, Formarea Bruta de Capital Fix, Exporturi de bunuri si servicii, Importuri de bunuri si servicii, Indicele Preturilor de Consum (IPC) - medie anuala.
        3. Reda tabelul generat alaturi de o analiza detaliata a acestor date respectand urmatoarele:
        - Analiza să fie formata din paragrafe, fără titluri, fără liste. 
        - Analiza să fie coerenta, aceasta urmând a fi integrata într-un plan de marketing.
        - Datele se refera la o previziune a evolutiei economiei Romaniei pe termen lung, in perioada 2023 - 2027 asa ca referate la ele ca atare, nu ca si cum s-ar fi intamplat deja.
        `,
        isDocumentsSearch: true,
      },

      {
        title: "Principalii vectori care susțin creșterea",
        userRequest: `
        Mai jos vei găsi piataTinta si ariaGeografica a acesteia, la care ne vom referi în continuare.
        1. Caută informații despre principalii vectori care sustin cresterea piataTinta raportată la ariaGeografica.
        2. Citește rezultatele căutării cu atenție.
        3. Folosește informațiile acumulate și genereaza o lista, cu principalii vectori care susțin creșterea pietei tinta din discutie, conform exemplului de mai jos.
        
        - NU omite nicio informație relevantă din cele găsite prin căutare.
        - Dacă consideri că e util poți să citezi mot-a-mot unele din informațiile găsite.
        - Răspunsul să fie format din paragrafe, fără titluri, fără liste. 
        - Răspunsul să fie coerent, acesta urmând a fi integrat într-un plan de marketing.
        - NU uita să incluzi în raport, lista cu resurse, conform indicațiilor anterioare.

        <EXEMPLU>
        Prin raportare la piața de interes a întreprinderii prognozele de creștere ale pieței sunt încurajatoare având în vedere următoarele aspecte:
        -	Piața imobiliarelor este în creștere pe piața de interes a WEST CO IMPEX S.R.L.; la nivel național, creșterea nivelului de trai, precum și programele guvernamentale de susținere a dezvoltării fondului imobiliar , sugerează o traiectorie de creștere accelerată la nivelul pieței imobiliarelor, ceea ce se va traduce, în funcției de ciclul de construire a acestora, în formarea unei cereri solide pe piață pentru articolelor din material plastic pentru construcții;
        -	Prognozele privind dezvoltarea pieței de interes susțin existența unor perioade de fluctuații generate de specificul sectorului care este direct dependent de ciclul de construcție a clădirilor;
        -	Situația economică se va îmbunătăți ceea ce va încuraja investițiile în modernizarea locuințelor și a altor clădiri, inclusiv modernizări pentru creșterea eficienței confortului acestora, ceea ce va determina creșterea semnificativă a cererii pe piață;
        -	Procesul de urbanizarea este în continuă desfășurare, ceea ce implică construirea de noi locuințe, canalizări, stații de epurare în zonele rurale, la rândul lor vor genera cereri pentru fose septice;        
        </EXEMPLU>
        `,
        resources: ["piataTinta", "ariaGeografica"],
        isWebSearch: true,
        isDocumentsSearch: true,
      },

      {
        title: "Principalele trenduri",
        userRequest: "",
      },

      {
        title: "Tabele dimensiunea companiei și a pieței",
        userRequest: "",
      },

      {
        title: "Tabel + Grafic CAGR",
        userRequest: "",
      },

      {
        title: "Analiza SWOT",
        userRequest: "",
      },
    ],
  },

  {
    title: "HELPERS",
    requests: [
      {
        title: "PDF-uri despre PIATA TINTA",
        userRequest: `Mai jos vei gasi piata tinta si aria geografica, la care ne vom referi in continuare.
        Caută pdf-uri despre studii de marketing referitoare la piata tinta in aria geografica specificate. Returneaza toate linkurile găsite. Mentioneaza in cautare filetype:pdf. Foloseste un query in limba engleza dupa exemplul de mai jos:
        EXEMPLU: Food market in Romania, marketing paper, filetype:pdf
        `,
        resources: ["piataTinta", "ariaGeografica"],
        isWebSearch: true,
      },
    ],
  },
];

export const ARII_GEOGRAFICE = [
  { value: "Selectează aria geografică", label: "Selectează aria geografică" },
  { value: "Regiunea București", label: "Regiunea București" },
  { value: "Regiunea de Centru", label: "Regiunea de Centru" },
  { value: "Regiunea de Nord-Est", label: "Regiunea de Nord-Est" },
  { value: "Regiunea de Nord-Vest", label: "Regiunea de Nord-Vest" },
  { value: "Regiunea de Sud-Est", label: "Regiunea de Sud-Est" },
  {
    value: "Regiunea de Sud-Vest Oltenița",
    label: "Regiunea de Sud-Vest Oltenița",
  },
  { value: "Regiunea de Sud Muntenia", label: "Regiunea de Sud Muntenia" },
  { value: "Regiunea de Vest", label: "Regiunea de Vest" },
  { value: "România", label: "România" },
  { value: "Uniunea Europeană", label: "Uniunea Europeană" },
  { value: "Global", label: "Global" },
];

export const CLIENTI_TINTA = [
  { value: "Selectează clienții țintă", label: "Selectează clienții țintă" },
  { value: "Persoane fizice", label: "Persoane fizice" },
  { value: "Persoane juridice", label: "Persoane juridice" },
  { value: "Instituții publice", label: "Instituții publice" },
  { value: "Mixt", label: "Mixt" },
];
