import PropTypes from "prop-types";
import useUser from "../features/authentication/useUser";
import Logout from "../features/authentication/Logout";

function UserPill({ className }) {
  const { user } = useUser();

  return (
    <div
      className={`flex w-full items-center justify-center py-2 ${className}`}
    >
      <span className="ms-2 text-sm text-textColorLight">{user?.email}</span>

      <Logout />
    </div>
  );
}

UserPill.propTypes = {
  className: PropTypes.string,
};

export default UserPill;
