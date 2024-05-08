import PropTypes from "prop-types";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";

import { useCompany } from "../../contexts/CompanyContext";
import { DEFAULT_REQUESTS } from "../../config/constants";
import Chapter from "./Chapter";
import PageHeader from "../../ui/PageHeader";
import NoCompanySelected from "../../ui/NoCompanySelected";

function DefaultContent({ sendRequest }) {
  const { currentCompany } = useCompany();
  const companyId = currentCompany?.id;

  return (
    <>
      <PageHeader>
        <PageHeader.Title>
          <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-accentColor" />

          <span>Assistant</span>
        </PageHeader.Title>
      </PageHeader>

      {companyId ? (
        <div className="chapters_container flex flex-col items-center gap-5 pb-32">
          {DEFAULT_REQUESTS.map((chapter) => (
            <Chapter
              key={chapter.title}
              chapter={chapter}
              sendRequest={sendRequest}
            />
          ))}
        </div>
      ) : (
        <NoCompanySelected />
      )}
    </>
  );
}

DefaultContent.propTypes = {
  sendRequest: PropTypes.func.isRequired,
};

export default DefaultContent;
