import PropTypes from "prop-types";
import {
  DocumentIcon,
  GlobeAltIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";
import ButtonIcon from "../../ui/ButtonIcon";
import {
  ENFORCE_DOCS_SEARCH_PRE_PROMPT,
  ENFORCE_WEB_SEARCH_PRE_PROMPT,
} from "../../config/constants";

function RequestItem({ request, sendRequest, companyId }) {
  const {
    title,
    userRequest,
    resources,
    isEurostat,
    isTopFirme,
    isWebSearch,
    isDocumentsSearch,
  } = request;

  return (
    <div
      className={`flex h-32 w-52 flex-col justify-between rounded-lg bg-bgColor p-2 text-sm text-textColorLight transition-colors duration-300 ${userRequest ? "hover:text-textColor" : "opacity-25"}`}
      disabled={!userRequest}
    >
      <span className="pt-2 text-center">{title}</span>

      <div className="action_buttons flex justify-between gap-2">
        {isWebSearch && (
          <ButtonIcon
            variant="withText"
            onClick={() =>
              sendRequest({
                // Update the title to reflect the web search
                title: `${title} - web search`,
                // Prepand user request to enforce the llm to only call the web_search tool
                userRequest: `${ENFORCE_WEB_SEARCH_PRE_PROMPT}\n\n${userRequest}`,
                resources,
                companyId,
              })
            }
          >
            <GlobeAltIcon className="h-5 w-5" />

            <span>Web</span>
          </ButtonIcon>
        )}

        {isDocumentsSearch && (
          <ButtonIcon
            variant="withText"
            onClick={() =>
              sendRequest({
                // Update the title to reflect the docs search
                title: `${title} - documents search`,
                // Prepand user request to enforce the llm to only call the docs_search tool
                userRequest: `${ENFORCE_DOCS_SEARCH_PRE_PROMPT}\n\n${userRequest}`,
                resources,
                companyId,
              })
            }
          >
            <DocumentIcon className="h-5 w-5" />

            <span>Docs</span>
          </ButtonIcon>
        )}

        {(isTopFirme || isEurostat) && (
          <ButtonIcon
            variant="withText"
            onClick={() => sendRequest({ ...request, companyId })}
          >
            <TableCellsIcon className="h-5 w-5" />

            <span>Table</span>
          </ButtonIcon>
        )}
      </div>
    </div>
  );
}

RequestItem.propTypes = {
  request: PropTypes.object.isRequired,
  sendRequest: PropTypes.func.isRequired,
  userRequest: PropTypes.bool.isRequired,
  companyId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isEurostat: PropTypes.bool.isRequired,
};

export default RequestItem;
