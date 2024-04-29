import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiUpdateCaen } from "../../services/apiCompany";

function useUpdateCaen() {
  const queryClient = useQueryClient();
  const { isPending: isUpdatingCaen, mutate: updateCaen } = useMutation({
    mutationFn: apiUpdateCaen,
    onSuccess: () => {
      queryClient.invalidateQueries("company");
      toast.success("CAEN updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateCaen, isUpdatingCaen };
}

export default useUpdateCaen;
