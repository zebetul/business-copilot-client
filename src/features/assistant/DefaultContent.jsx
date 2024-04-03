import PropTypes from "prop-types";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";

import { DEFAULT_REQUESTS } from "../../config/constants";
import Chapter from "./Chapter";
import PageHeader from "../../ui/PageHeader";

function DefaultContent({ sendRequest }) {
  return (
    <>
      <PageHeader>
        <PageHeader.Title>
          <ChatBubbleBottomCenterTextIcon className="my-auto h-8 w-8 text-accentColor" />

          <span>Assistant</span>
        </PageHeader.Title>
      </PageHeader>

      <div className="chapters_container flex flex-wrap justify-center gap-10 pb-32">
        {DEFAULT_REQUESTS.map((chapter) => (
          <Chapter
            key={chapter.title}
            chapter={chapter}
            sendRequest={sendRequest}
          />
        ))}
      </div>
    </>
  );
}

DefaultContent.propTypes = {
  sendRequest: PropTypes.func.isRequired,
};

export default DefaultContent;
