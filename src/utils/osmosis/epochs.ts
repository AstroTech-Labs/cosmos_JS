// Supported query interfaces - types/proto/osmosis/epochs/query.rpc.query.d.ts

//---------------------------------------------
// OSMOSIS::EPOCH MODULE - QUERY HELPERS
// --------------------------------------------



import {CosmosChainClient} from "../../clients";
import {osmosis} from "../../proto";

export async function query_osmosis_epoch_epochInfos(client: CosmosChainClient) {
    let response = await client.query.osmosis.epoches.v1.epochInfos(
        osmosis.epochs.v1beta1.QueryEpochsInfoRequest.fromPartial({})
    )
    return response;
}

export async function query_osmosis_epoch_currentEpoch(client: CosmosChainClient, identifier: string) {
    let response = await client.query.osmosis.epoches.v1.currentEpoch(
        osmosis.epochs.v1beta1.QueryCurrentEpochRequest.fromPartial({identifier: identifier})
    )
    return response;
}
  
