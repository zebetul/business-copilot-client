import { useQuery } from "@tanstack/react-query";
import { apiGetCompany } from "../../services/apiCompany";

function useCompanyData(id) {
  const {
    data: company,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["company", id],
    queryFn: () => apiGetCompany(id),
  });

  return { company, isLoading, error };
}

export default useCompanyData;
