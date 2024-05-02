import PropTypes from "prop-types";

import ButtonIcon from "../../ui/ButtonIcon";
import { SparklesIcon } from "@heroicons/react/24/outline";
import useGeneratePiataTinta from "./useGeneratePiataTinta";
import toast from "react-hot-toast";

function AIGenerateCompanyPiataTinta({
  company,
  isUpdating,
  produsulServiciul,
}) {
  const { generatePiataTinta, isUpdatingPiata } = useGeneratePiataTinta();

  function handleGeneratePiataTinta(event) {
    event.preventDefault();

    if (!produsulServiciul) return toast.error("Introdu produsul / serviciul");

    generatePiataTinta({ produsulServiciul, id: company.id });
  }

  return (
    <div className="absolute right-0 top-0 mr-2 mt-5">
      <ButtonIcon
        className="mt-2"
        variant="accent"
        onClick={(event) => {
          handleGeneratePiataTinta(event);
        }}
        disabled={isUpdating || isUpdatingPiata}
      >
        <SparklesIcon className="h-6 w-6" />
      </ButtonIcon>
    </div>
  );
}

AIGenerateCompanyPiataTinta.propTypes = {
  company: PropTypes.object.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  produsulServiciul: PropTypes.string.isRequired,
};

export default AIGenerateCompanyPiataTinta;
