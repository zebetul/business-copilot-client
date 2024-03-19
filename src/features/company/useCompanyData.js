import { useQuery } from "@tanstack/react-query";
import { apiGetCompanyData } from "../../services/apiCompanyData";

function useCompanyData() {
  const { data, isLoading } = useQuery({
    queryKey: ["company"],
    queryFn: apiGetCompanyData,
  });

  return { companyData: data, isLoading };
}

export default useCompanyData;
