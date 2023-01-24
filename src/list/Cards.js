import React from "react";
import { useItems } from "../actions/items";
import log from "cslog";
import AddCard from "./AddCard";

function Cards() {
    const { data, isSuccess, isLoading, isError } = useItems(
        "qm_pm_card",
        true
    );

    log.d(data, "Data");

    return (
        <div>
            <h3>Hello Cards</h3>
            <AddCard />
            {isLoading && <p>Loading...</p>}
            {isSuccess &&
                data.map((c) => {
                    return <div>{c.title}</div>;
                })}
        </div>
    );
}

export default Cards;
