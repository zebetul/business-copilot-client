import { useNavigate } from "react-router-dom";

import Button from "./Button";
import useUser from "../features/authentication/useUser";
import useLogout from "../features/authentication/useLogout";

function UserPill() {
  const { user } = useUser();
  const navigate = useNavigate();
  const { logout, isPending } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="w-full flex items-center justify-center mt-auto mb-5">
      <img
        src={user?.avatar}
        alt={user?.name}
        className="w-8 h-8 rounded-full"
      />

      <span className="ms-2">{user?.name}</span>

      <Button className="ms-auto" type="button" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
}

export default UserPill;
