import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiGeneratePiataTinta } from "../../services/apiCompany";

function useGeneratePiataTinta() {
  const queryClient = useQueryClient();
  const { isPending: isUpdatingPiata, mutate: generatePiataTinta } =
    useMutation({
      mutationFn: apiGeneratePiataTinta,
      onSuccess: () => {
        queryClient.invalidateQueries("company");
        toast.success("Piata Tinta generated successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

  return { generatePiataTinta, isUpdatingPiata };
}

export default useGeneratePiataTinta;
