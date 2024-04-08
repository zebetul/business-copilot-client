import { useQuery } from "@tanstack/react-query";
import { apiGetCompanies } from "../../services/apiCompany";

function useCompanies() {
  const {
    data: companies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["companies"],
    queryFn: apiGetCompanies,
  });

  return { companies, isLoading, error };
}

export default useCompanies;
