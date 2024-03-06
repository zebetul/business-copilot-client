import { useQuery } from "@tanstack/react-query";

import { apiGetHistoryById } from "../../services/apiHistory";

export function useGetHistoryById(id) {
  const {
    data: interactionRecord,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["history", id],
    queryFn: () => apiGetHistoryById(id),
  });

  return { interactionRecord, isLoading, error };
}
