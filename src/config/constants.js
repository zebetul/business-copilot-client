export const DEFAULT_REQUESTS = [
  {
    title: "4.1.2 Dimensiunea pieței țintă",
    requests: [
      {
        title: "Mărimea pieței și tendințele de evoluție",
        userRequest: `Mai jos vei găsi PIATA ȚINTĂ la care te vei referi în raportul tău. Caută pe internet informații relevante și fă un raport detaliat despre "Mărimea pieței și tendințele de evoluție ale acesteia". Nu omite nici o informație relevantă din cele găsite prin căutare. Menționează în raport linkurile la surse, în următorul format [Named Link](http://www.google.ro/ "Named link title"). Raportul tău va fi detaliat și descriptiv, va fi împărțit pe paragrafe. Raportul trebuie să dezvolte următoarele topicuri:
        
        Care este mărimea și tendințele pieței. Unde vei discuta despre evaluarea cifrei de afaceri a pieței țintă în contextul economiei românești, analiza creșterii cifrei de afaceri în ultimii ani și perspectivele de dezvoltare pe termen scurt și mediu, tendințe recente în consum pe piața țintă și impactul schimbărilor în comportamentul consumatorilor asupra pieței.
                            
        Cine sunt principalii actori și care este distribuția pieței. Aici vei identifica și analiza principalii jucători din piața țintă în România, poți să continui cu evaluarea poziției de lider a retailerilor și producătorilor în piața țintă, distribuția cifrei de afaceri și a cotei de piață între companiile de top și care sunt tendințele în creșterea și consolidarea pieței.
                            
        Comportamentul Consumatorilor și Preferințele. Aici discuți despre eventualele schimbări în preferințele și obiceiurile de consum ale populației românești, faci o analiză a impactului factorilor socio-economici și demografici asupra comportamentului de cumpărare și poți continua cu percepția și importanța prețurilor în deciziile de cumpărare.

        Ultimul topic va fi despre factori externi și perspective de viitor. Aici discuți despre evaluarea influenței factorilor macroeconomici asupra pieței țintă, despre impactul reglementărilor guvernamentale și a politicilor fiscale asupra pieței, proiecții și previziuni pentru dezvoltarea pieței țintă pe termen lung și perspectivele investiționale și inovațiile tehnologice care pot influența piața țintă.
    
        PIATA ȚINTĂ:`,
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
        userRequest: `Mai jos vei găsi un TABEL. Creează o analiză detaliată a evoluției datelor aflate în TABEL. NU accesa nici o unealtă, folosește doar datele primite. NU reda datele din tabel, ci analizează-le și oferă o perspectivă asupra evoluției acestora. Tonul tău va fi pozitiv și optimist, oferind argumente pentru oportunitatea de a investi în această piață.
        
        TABEL:`,
        resource: "prccode",
      },

      {
        title: "Tendințe de evoluție pe orizontul de operare",
        userRequest: "",
      },

      {
        title: "Aria geografică de acoperire",
        userRequest: `Caută pe internet și creează un raport cu privire la aria geografică care este specificată mai jos, care să cuprindă următoarele capitole:
        
        - Descriere localități, județe
        - Populație - număr, etnie, ocuparea forței de muncă, șomajul (recensământ)
        - Activități economice principale și evoluția acestora
        - Infrastructură de transport
        - Concluzie: principalele beneficii
        
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
        resource: "ariaGeografica",
      },
    ],
  },

  {
    title: "4.1.3. Stadiul actual, nevoi și tendințe",
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
        title: "Competiția pe domeniul de activitate",
        userRequest: `Caută pe internet date despre principalii competitori din România în DOMENIUL DE ACTIVITATE specificat mai jos.
        
        DOMENIUL DE ACTIVITATE:`,
        resource: "piataTinta",
      },
      {
        title: "Principalii clienți",
        userRequest: `1. Caută în baza de date care sunt principalii noștri clienți. 2. Caută pe internet clienții pe care i-ai găsit la pasul 1 și fă-mi un raport detaliat.`,
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
  { value: "Europa", label: "Europa" },
  { value: "Global", label: "Global" },
];
