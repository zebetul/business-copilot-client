export const DEFAULT_REQUESTS = [
  {
    id: 4121,
    title: "4.1.2.1 - Mărimea pieței și tendințele de evoluție",
    prompt: `Pasul 1. Caută în baza de date internă și extrage "piataTinta". Pasul 2. Caută pe internet și fă un raport detaliat despre mărimea pieței și tendințele de evoluție.`,
  },

  {
    id: 4122,
    title: "4.1.2.2 - Top Firme după CAEN",
    prompt: `Pasul 1. Caută în baza de date internă și extrage codul "caen". Pasul 2. Folosește top_firme_tool și importă datele de pe topfirme.com utilizând codul CAEN găsit și creează o analiză detaliată a acestora.`,
  },

  {
    id: 4123,
    title: "4.1.2.3 - Analiza Eurostat",
    prompt: `Pasul 1. Caută în baza de date internă și extrage query URL-ul "eurostat". Pasul 2. Importă datele de pe EUROSTAT utilizând URL-ul găsit și creează o analiză detaliată a acestora.`,
  },

  // {
  //   id: 4124,
  //   title:
  //     "4.1.2.4 Dimensiunea pieței țintă - Tendințe de evoluție pe orizontul de operare al obiectivului",
  //   prompt: "",
  // },

  // {
  //   id: 4125,
  //   title: "4.1.2.5 Dimensiunea pieței țintă - Aria geografică de acoperire",
  //   prompt: "",
  // },

  // {
  //   id: 1000,
  //   title: "Resurse umane",
  //   prompt:
  //     "Caută în baza de date și fă o analiză a resurselor umane din companie.",
  // },
  // {
  //   id: 1001,
  //   title: "Raport Domeniul alimentar în România 2023",
  //   prompt:
  //     "Caută pe internet și fă un raport detaliat despre domeniul alimentar în România în 2023.",
  // },
];
