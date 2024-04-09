import { useQuery } from "@tanstack/react-query";
import { apiGetHistory } from "../../services/apiHistory";

export function useHistory(companyId) {
  const {
    isLoading,
    data: history,
    error,
  } = useQuery({
    queryKey: ["history", companyId],
    queryFn: () => apiGetHistory(companyId),
  });

  return { history, isLoading, error };
}
