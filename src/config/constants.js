export const DEFAULT_REQUESTS = [
  {
    title: "4.1.2 Dimensiunea pieței țintă",
    requests: [
      {
        title: "Mărimea pieței și tendințele de evoluție",
        userRequest: `Caută pe internet și fă un raport detaliat despre "Marimea pietei și tendințele de evoluție in ..." PIATA care este sepecificata mai jos.
        
        PIATA:`,
        resource: "piataTinta",
      },

      {
        title: "Top Firme după CAEN",
        userRequest: `Folosește top_firme_tool și importă datele de pe topfirme.com utilizând codul CAEN de mai jos și creează o analiză detaliată a acestora.
        
        CAEN:`,
        resource: "caen",
      },

      {
        title: "Analiza Eurostat",
        userRequest: `Importă datele de pe EUROSTAT utilizând URL-ul de mai jos și creează o analiză detaliată a acestora.
        
        URL:`,
        resource: "eurostat",
      },

      {
        title: "Tendințe de evoluție pe orizontul de operare",
        userRequest: "",
      },

      {
        title: "Aria geografică de acoperire",
        userRequest: `Cauta pe internet si creează un raport cu privire la aria geografică care este specificata mai jos, care sa cuprinda urmatoarele capitole:
        
        - Decriere localitati, judete
        - Populatie - numar, etnie, ocuparea fortei de munca, somajul(recensamant)
        - activitati economice principale si evolutia acestora
        - infrastructura de transport
        - Concluzie: pricipalele beneficii
        
        Mai jos gasesti un exemplu dupa care sa te ghidezi:
        
        <Exemplu>
        ARIA GEOGRAFICĂ DE ACOPERIRE
        Aria geografică este reprezentată în precădere de Regiunea de Nord-Vest a României.
        Regiunea Nord-Vest este compusă din următoarele județe: Bihor, Bistrița Năsăud, Cluj, Maramureș, Satu Mare și Sălaj. 
        Conform rezultatelor ultimului Recensământ al Populației, Regiunea Nord-Vest are o populație totală de 2,74 milioane persoane. Transilvania de Nord este o regiune cosmopolită, unde alături de români, trăiesc peste jumătate din numărul total al locuitorilor de etnie maghiară din România, ceea ce a dus la crearea unei identități culturale unice.
        La 01.01.2015, conform Balanței Forței de Muncă, resursele de muncă ale regiunii erau în număr de 1652.3 mii persoane din care populația ocupată civilă reprezenta 71.8%.
        Din punct de vedere al participării la principalele activități economice, populația ocupată civilă în agricultură, silvicultură și pescuit este de 29.2%, în timp ce populația ocupată civilă din industrie și construcții reprezintă 30.7% iar în servicii este de 40.1%.
        Rata șomajului înregistrat la data de 31 decembrie 2015 a fost de 3.6% fiind înregistrați 41.0 mii șomeri.
        Regiunea Nord-Vest este, după București-Ilfov, cea mai atractivă, din punct de vedere economic, dintre regiunile de dezvoltare ale României. Faptul se datorează pieței dezvoltate a muncii și salariilor, investițiilor străine, mediului privat și concurentei de piață, ca și intrărilor de tehnologii moderne.Economia Regiunii este în plină dezvoltare, cu o creștere dinamică în ultimii ani în sectoare precum construcțiile, industria de textile, industria de mașini, industria mobilei și echipamente. 
        În ceea ce privește infrastructura de transport, regiunea este străbătută de 7 drumuri europene, de 3.222 km de drumuri naționale, 4 aeroporturi, 1.641 km de rețea feroviară.
        Având în vedere scurta prezentare realizată Regiunii de Nord-Vest, putem afirma că locația de implementare a proiectului este propice, deoarece: 
        -	Situația economică regională este una prosperă
        -	Gradul de accesibilitate este ridicat 
        -	Dispune de resurse umane calificate.
        </Exemplu>

        Aria Geografica:`,
        resource: "ariaGeografica",
      },
    ],
  },

  {
    title: "4.1.3. Stadiul actual, nevoi si tendinte",
    requests: [
      {
        title: "Analiza mărimea pieței pe CAEN",
        userRequest: "",
      },

      {
        title: "Principalele nevoi identificate",
        userRequest: "",
      },

      {
        title: "Principalele tendințe identificate",
        userRequest: "",
      },
    ],
  },

  {
    title: "4.1.4. Analiza potențialului de creștere",
    requests: [
      {
        title: "Analiza potențial de creștere",
        userRequest: "",
      },

      {
        title: "Tabel principalii indicatori macroeconomici",
        userRequest: "",
      },

      {
        title: "Principalii vectori care susțin creșterea",
        userRequest: "",
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
    title: "0.0.1 Testing requests",
    requests: [
      {
        title: "Resurse umane",
        userRequest:
          "Caută în baza de date și fă o analiză a resurselor umane din companie.",
      },
      {
        title: "Competitia pe domeniul de activitate",
        userRequest: `Cauntă pe internet date despre principalii competitori din Romania in DOMENIUL DE ACTIVITATE specificat mai jos.
        
        DOMENIUL DE ACTIVITATE:`,
        resource: "piataTinta",
      },
    ],
  },
];

export const ARII_GEOGRAFICE = [
  "Regiunea Bucuresti",
  "Regiunea de Centru",
  "Regiunea de Nord-Est",
  "Regiunea de Nord-Vest",
  "Regiunea de Sud-Est",
  "Regiunea de Sud-Vest Oltenita",
  "Regiunea de Sud Muntenia",
  "Regiunea de Vest",
];
