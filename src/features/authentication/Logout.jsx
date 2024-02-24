import ButtonIcon from "../../ui/ButtonIcon";
import useLogout from "./useLogout";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";

function Logout() {
  const { logout, isPending } = useLogout();

  const handleLogout = () => {
    logout();
  };
  return (
    <ButtonIcon className="ms-auto" onClick={handleLogout} disabled={isPending}>
      <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
    </ButtonIcon>
  );
}

export default Logout;
