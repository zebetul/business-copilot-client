import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import Button from "./Button";

function UserPill() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/login");
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
