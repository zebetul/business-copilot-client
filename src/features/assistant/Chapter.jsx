import PropTypes from "prop-types";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import Dropdown from "../../ui/Dropdown";
import RequestsList from "./RequestsList";

function Chapter({ chapter: { title, requests }, sendRequest }) {
  return (
    <Dropdown>
      <Dropdown.Header>
        <BookOpenIcon className="my-auto h-5 w-5" />

        <span className="text-sm text-textColor">{title}</span>
      </Dropdown.Header>

      <Dropdown.Content>
        <RequestsList requests={requests} sendRequest={sendRequest} />
      </Dropdown.Content>
    </Dropdown>
  );
}

Chapter.propTypes = {
  chapter: PropTypes.object.isRequired,
  sendRequest: PropTypes.func.isRequired,
};

export default Chapter;
