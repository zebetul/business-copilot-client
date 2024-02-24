import { useQuery } from "@tanstack/react-query";
import { apiGetHistory } from "../../services/apiAssistant";

export function useHistory() {
  const {
    isLoading,
    data: history,
    error,
  } = useQuery({
    queryKey: ["history"],
    queryFn: apiGetHistory,
  });

  return { history, isLoading, error };
}
