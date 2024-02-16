import PropTypes from "prop-types";

const requests = [
  {
    title: "Situatie resurse umane",
    description:
      "Cauta in baza de date si fa-mi un raport cu situatia resurselor umane din firma.",
  },

  {
    title: "Analiza evolutie domeniu alimentar",
    description:
      "Cauta pe internet informatii relevante despre evolutia domeniului alimentar in ultimii ani in Romaina si fa-mi un raport detaliat pe capitole cu trimiteri la resurse.",
  },

  {
    title: "Descriere companie",
    description:
      "Cauta in baza de date si fa o descriere a companiei pe capitole.",
  },
];

function DefaultContent({ sendRequest }) {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="mt-40 mb-3 text-6xl font-bold text-textColorLight text-center">
        Make a request
      </h1>

      <p className="mb-7 font-bold text-textColorLight">
        Choose a request from below or type your own request.
      </p>

      <div className="requests_container flex flex-row gap-2 flex-wrap">
        {requests.map((request, index) => (
          <button
            key={index}
            className="p-2 border rounded-md text-xs text-textColorLight font-bold hover:bg-bgColor transition-colors"
            onClick={() => sendRequest(request.description)}
          >
            {request.title}
          </button>
        ))}
      </div>
    </div>
  );
}

DefaultContent.propTypes = {
  sendRequest: PropTypes.func.isRequired,
};

export default DefaultContent;
