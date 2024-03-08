import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUpdateHistoryRecord } from "../../services/apiHistory";

function useUpdateHistoryRecord() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateRecord } = useMutation({
    mutationFn: apiUpdateHistoryRecord,

    onSuccess: () => {
      queryClient.invalidateQueries("history");
    },

    onError: (error) => {
      alert(error);
    },
  });

  return { isUpdating, updateRecord };
}

export default useUpdateHistoryRecord;
