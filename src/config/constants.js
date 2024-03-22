export const DEFAULT_REQUESTS = [
  {
    title: "4.1.2 - Dimensiunea pieței țintă",
    requests: [
      {
        title: "Mărimea pieței și tendințele de evoluție",
        id: "4.1.2.1",
        prompt: `Pasul 1. Caută în baza de date internă și extrage "piataTinta". Pasul 2. Caută pe internet și fă un raport detaliat despre mărimea pieței și tendințele de evoluție.`,
      },

      {
        title: "Top Firme după CAEN",
        id: "4.1.2.2",
        prompt: `Pasul 1. Caută în baza de date internă și extrage codul "caen". Pasul 2. Folosește top_firme_tool și importă datele de pe topfirme.com utilizând codul CAEN găsit și creează o analiză detaliată a acestora.`,
      },

      {
        title: "Analiza Eurostat",
        id: "4.1.2.3",
        prompt: `Pasul 1. Caută în baza de date internă și extrage query URL-ul "eurostat". Pasul 2. Importă datele de pe EUROSTAT utilizând URL-ul găsit și creează o analiză detaliată a acestora.`,
      },
      {
        title: "Tendințe de evoluție pe orizontul de operare",
        id: "4.1.2.4",
        prompt: "",
      },

      {
        title: "Aria geografică de acoperire",
        id: "4.1.2.5",
        prompt: "",
      },
    ],
  },

  {
    title: "4.1.3. Stadiul actual, nevoi si tendinte",
    requests: [
      {
        title: "Analiza marimea pietei pe CAEN",
        id: "4.1.3.1",
        prompt: "",
      },

      {
        title: "Principalele nevoi identificate",
        id: "4.1.3.2",
        prompt: "",
      },

      {
        title: "Principalele tendințe identificate",
        id: "4.1.3.3",
        prompt: "",
      },
    ],
  },

  {
    title: "4.1.4. Analiza potențialului de creştere a pieţei",
    requests: [
      {
        title: "Analiza potential de crestere pe termen scurt, mediu, lung",
        id: "4.1.4.1",
        prompt: "",
      },

      {
        title: "Tabel Proiectia principalilor indicatori macroeconomici",
        id: "4.1.4.2",
        prompt: "",
      },

      {
        title: "Principalii vectori care susțin creșterea",
        id: "4.1.4.3",
        prompt: "",
      },

      {
        title: "Principalele trenduri",
        id: "4.1.4.4",
        prompt: "",
      },

      {
        title:
          "Tabele dimensiunea companiei, dimensiunea pietei in Romania si in UE",
        id: "4.1.4.5",
        prompt: "",
      },

      {
        title: "Tabel + Grafic CAGR",
        id: "4.1.4.6",
        prompt: "",
      },

      {
        title: "Analiza SWOT",
        id: "4.1.4.7",
        prompt: "",
      },
    ],
  },

  {
    title: "0.0.1 - Testing requests",
    requests: [
      {
        title: "Resurse umane",
        id: "0.0.1.1",
        prompt:
          "Caută în baza de date și fă o analiză a resurselor umane din companie.",
      },
      {
        title: "Raport Domeniul alimentar în România 2023",
        id: "0.0.1.2",
        prompt:
          "Caută pe internet și fă un raport detaliat despre domeniul alimentar în România în 2023.",
      },
    ],
  },
];
