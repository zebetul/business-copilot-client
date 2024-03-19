import { useQuery } from "@tanstack/react-query";
import { apiGetCompanyData } from "../../services/apiCompanyData";

function useCompanyData() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["company"],
    queryFn: apiGetCompanyData,
  });

  return { companyData: data, isLoading, error };
}

export default useCompanyData;
