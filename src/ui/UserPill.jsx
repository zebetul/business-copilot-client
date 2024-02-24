import useUser from "../features/authentication/useUser";
import Logout from "../features/authentication/Logout";

function UserPill() {
  const { user } = useUser();

  return (
    <div className="w-full flex items-center justify-center mt-auto mb-5">
      <span className="ms-2 text-sm text-textColorLight">{user?.email}</span>

      <Logout />
    </div>
  );
}

export default UserPill;
