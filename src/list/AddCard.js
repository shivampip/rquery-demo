import React from "react";
import { useCreateItem } from "../actions/mutations/items";

function AddCard() {
    const mutation = useCreateItem("qm_pm_card");

    return (
        <div>
            <button
                onClick={() => {
                    mutation.mutate({
                        title: "Second card",
                    });
                }}
            >
                Add Card
            </button>
        </div>
    );
}

export default AddCard;
