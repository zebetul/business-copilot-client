import { useQuery } from "@tanstack/react-query";
import { apiGetDocuments } from "../../services/apiDocuments";

export function useDocuments(companyId) {
  const {
    isLoading,
    data: documents,
    error,
  } = useQuery({
    queryKey: ["documents", companyId],
    queryFn: () => apiGetDocuments(companyId),
  });

  return { documents, isLoading, error };
}
