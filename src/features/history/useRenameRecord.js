import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRenameRecord } from "../../services/apiHistory";

function useRenameRecord() {
  const queryClient = useQueryClient();

  const { isPending: isRenaming, mutate: renameRecord } = useMutation({
    mutationFn: (newRecord) => apiRenameRecord(newRecord),

    onSuccess: () => {
      queryClient.invalidateQueries("history");
    },

    onError: (error) => {
      alert(error);
    },
  });

  return { isRenaming, renameRecord };
}

export default useRenameRecord;
