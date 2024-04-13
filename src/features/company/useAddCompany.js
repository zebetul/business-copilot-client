import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiAddCompany } from "../../services/apiCompany";

function useAddCompany() {
  const queryClient = useQueryClient();

  const {
    mutate: addCompany,
    isPending,
    data: newCompany,
  } = useMutation({
    mutationFn: apiAddCompany,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["companies"],
      });

      toast.success("Company added successfully");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { addCompany, isPending, newCompany };
}

export default useAddCompany;
