import PropTypes from "prop-types";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";

import { DEFAULT_REQUESTS } from "../../config/constants";
import Header1 from "../../ui/Header1";
import Header2 from "../../ui/Header2";
import Chapter from "./Chapter";

function DefaultContent({ sendRequest }) {
  return (
    <>
      <Header1>
        <ChatBubbleBottomCenterTextIcon className="my-auto h-8 w-8 text-accentColor" />

        <span>Assistant</span>
      </Header1>

      <Header2>Choose a request from below or type one</Header2>

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
