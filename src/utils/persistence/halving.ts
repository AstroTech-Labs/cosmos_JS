

// Supported query interfaces - types/proto/persistence/halving/v1beta1/query.rpc.query.d.ts

//---------------------------------------------
// PERSISTENCE::HALVING MODULE - QUERY HELPERS
// --------------------------------------------



import {CosmosChainClient} from "../../clients";
import {persistence} from "../../proto";

export async function query_persistence_halving_params(client: CosmosChainClient) {
    let response = await client.query.persistence.halving.params(
        persistence.halving.v1beta1.QueryParamsRequest.fromPartial({})
    )
    return response;
}
