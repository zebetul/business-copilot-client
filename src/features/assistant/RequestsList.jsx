import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { BookOpenIcon } from "@heroicons/react/24/outline";

function RequestsList({ chapter: { title, requests }, sendRequest }) {
  return (
    <div className="max-w-md rounded-lg border border-bgColorDark p-4">
      <div className="mb-2 flex flex-row text-sm text-textColorLight">
        <BookOpenIcon className="my-auto h-4 w-4" />

        <span className="ml-2">Chapter</span>
      </div>

      <p className="mb-10 text-lg text-textColor">{title}</p>

      <ul className="flex flex-col gap-2">
        {requests.map((request) => {
          const { title, id, prompt: userRequest } = request;

          return (
            <li key={id} className="w-full">
              <Button
                className="w-full"
                onClick={() =>
                  sendRequest({
                    title,
                    userRequest,
                  })
                }
                disabled={!userRequest}
              >
                {title}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

RequestsList.propTypes = {
  chapter: PropTypes.object.isRequired,
  sendRequest: PropTypes.func.isRequired,
};

export default RequestsList;
