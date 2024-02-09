import { useQuery } from "@tanstack/react-query";
import { apiGetDocuments } from "../../services/apiDocuments";

export function useDocuments() {
  const {
    isLoading,
    data: documents,
    error,
  } = useQuery({
    queryKey: ["documents"],
    queryFn: apiGetDocuments,
  });

  return { documents, isLoading, error };
}
