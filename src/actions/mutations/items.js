import { secureAxios } from "../../_helper/auth";
import { useMutation } from "react-query";
import { queryClient } from "../../_helper/query";

export const useCreateItem = (collection) => {
    let query = `items/${collection}`;

    return useMutation(
        (newItem) => {
            return secureAxios
                .post(`/${query}`, newItem)
                .then((res) => res.data);
        },
        {
            onSuccess: (data, variables, context) => {
                queryClient.invalidateQueries(["cards"]);
            },
        }
    );
};
