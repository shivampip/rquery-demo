import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import Cards from "./list/Cards";
import { queryClient } from "./_helper/query";

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Cards />
            </div>
        </QueryClientProvider>
    );
}

export default App;
