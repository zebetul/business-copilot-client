import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { BookOpenIcon } from "@heroicons/react/24/outline";

function Chapter({ chapter: { title, requests }, sendRequest }) {
  return (
    <div className="w-full max-w-md rounded-lg border border-bgColorDark p-4">
      <div className="mb-10 flex flex-row items-center gap-2 text-textColorLight">
        <BookOpenIcon className="my-auto h-5 w-5" />

        <span className="text-textColor">{title}</span>
      </div>

      <ul className="flex flex-col gap-2">
        {requests.map((request) => {
          const { title, id, prompt: userRequest } = request;

          return (
            <li key={id} className="w-full">
              <Button
                className="w-full overflow-hidden"
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

Chapter.propTypes = {
  chapter: PropTypes.object.isRequired,
  sendRequest: PropTypes.func.isRequired,
};

export default Chapter;
