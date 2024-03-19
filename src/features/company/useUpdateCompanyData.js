import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiUpdateCompanyData } from "../../services/apiCompanyData";

function useUpdateCompanyData() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateCompanyData } = useMutation({
    mutationFn: apiUpdateCompanyData,
    onSuccess: () => {
      queryClient.invalidateQueries("company");
      toast.success("Company data updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateCompanyData, isUpdating };
}

export default useUpdateCompanyData;
