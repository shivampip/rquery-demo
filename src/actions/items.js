import { secureAxios, publicAxios } from "../_helper/auth";
import { useQuery } from "react-query";

export const useItems = (collection, enabled) => {
    return useQuery(
        ["cards"],
        () => secureAxios.get(`/items/${collection}`).then((res) => res.data),
        {
            enabled: enabled,
        }
    );
};
