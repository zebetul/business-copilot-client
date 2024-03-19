export const DEFAULT_REQUESTS = [
  {
    id: 4122,
    title: "4.1.2. Dimensiunea pieței țintă - Eurostat",
    prompt: `Mai jos găsești un query URL pentru acces la date EUROSTAT. Importă datele utilizând acest URL și creează o analiză detaliată a acestora.
      
      URL: https://ec.europa.eu/eurostat/api/comext/dissemination/statistics/1.0/data/ds-056120?format=JSON&sinceTimePeriod=2020&decl=066&prccode=22221100&prccode=22221200&indicators=PRODVAL&lang=en`,
    // input: [
    //   {
    //     label: "Eurostat data query",
    //     url: "https://ec.europa.eu/eurostat/api/comext/dissemination/statistics/1.0/data/ds-056120?format=JSON&sinceTimePeriod=2020&decl=066&prccode=22221100&prccode=22221200&indicators=PRODVAL&lang=en",
    //   },
    // ],
  },
  {
    id: 4121,
    title:
      "4.1.2. Dimensiunea pieței țintă - Mărimea pieței și tendințele de evoluție",
    prompt:
      "Caută în baza de date și fă-mi un raport cu situația resurselor umane din firmă.",
  },

  {
    id: 4123,
    title:
      "4.1.2. Dimensiunea pieței țintă - Tendințe de evoluție pe orizontul de operare al obiectivului",
    prompt: "Caută în baza de date și fă o prezentare detaliată a firmei.",
  },
  {
    id: 1000,
    title: "Resurse umane",
    prompt:
      "Cauta in baza de date si fa o analiza a resurselor umane din companie.",
  },
  {
    id: 1001,
    title: "Raport Domeniul alimentar in Romania 2023",
    prompt:
      "Cauta pe internet si fa un raport detaliat despre domeniul alimentar in Romania in 2023.",
  },
];
