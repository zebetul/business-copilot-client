import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUpdateHistoryRecord } from "../../services/apiHistory";
import toast from "react-hot-toast";

function useUpdateHistoryRecord() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateRecord } = useMutation({
    mutationFn: apiUpdateHistoryRecord,

    onSuccess: () => {
      queryClient.invalidateQueries("history");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isUpdating, updateRecord };
}

export default useUpdateHistoryRecord;
