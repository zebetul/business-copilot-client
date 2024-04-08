import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiUpdateCompany } from "../../services/apiCompany";

function useUpdateCompany() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateCompany } = useMutation({
    mutationFn: apiUpdateCompany,
    onSuccess: () => {
      queryClient.invalidateQueries("company");
      toast.success("Company data updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateCompany, isUpdating };
}

export default useUpdateCompany;
