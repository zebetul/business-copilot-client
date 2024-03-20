export const DEFAULT_REQUESTS = [
  {
    id: 4121,
    title:
      "4.1.2.1 Dimensiunea pieței țintă - Mărimea pieței și tendințele de evoluție",
    prompt:
      "Caută în baza de date și extrage denumirea pietei tinta de desfacere a companiei",
  },

  {
    id: 4122,
    title: "4.1.2.2 Dimensiunea pieței țintă - Top Firme dupa CAEN",
    prompt: `Pasul 1. Cauta in baza de date interna si extrage codul "CAEN". Pasul 2. Foloseste top_firme_tool si importa datele de pe topfirme.com utilizand codul CAEN gasit si creeaza o analiza detaliata a acestora.`,
  },

  {
    id: 4123,
    title: "4.1.2.3 Dimensiunea pieței țintă - Analiza Eurostat",
    prompt: `Pasul 1. Cauta in baza de date interna si extrage query URL-ul "eurostat". Pasul 2. Importa datele de pe EUROSTAT utilizand URL-ul gasit si creeaza o analiza detaliata a acestora.`,
  },

  // {
  //   id: 4124,
  //   title:
  //     "4.1.2.4 Dimensiunea pieței țintă - Tendințe de evoluție pe orizontul de operare al obiectivului",
  //   prompt: "",
  // },

  // {
  //   id: 4125,
  //   title: "4.1.2.5 Dimensiunea pieței țintă - Aria geografica de acoperire",
  //   prompt: "",
  // },

  // {
  //   id: 1000,
  //   title: "Resurse umane",
  //   prompt:
  //     "Cauta in baza de date si fa o analiza a resurselor umane din companie.",
  // },
  // {
  //   id: 1001,
  //   title: "Raport Domeniul alimentar in Romania 2023",
  //   prompt:
  //     "Cauta pe internet si fa un raport detaliat despre domeniul alimentar in Romania in 2023.",
  // },
];
