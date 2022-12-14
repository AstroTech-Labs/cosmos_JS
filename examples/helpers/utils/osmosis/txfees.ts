import {CosmosChainClient, osmosis} from "cosmsdkjs";

// Supported query interfaces - types/proto/osmosis/txfees/v1beta1/query.rpc.query.d.ts

//---------------------------------------------
// OSMOSIS::TXFEES MODULE - QUERY HELPERS
// --------------------------------------------

export async function query_osmosis_txfees_feeTokens(client: CosmosChainClient) {
    let response = await client.query.osmosis.txfees.feeTokens(
        osmosis.txfees.v1beta1.QueryFeeTokensRequest.fromPartial({})
    )
    return response;
}

export async function query_osmosis_txfees_denomSpotPrice(client: CosmosChainClient, denom: string) {
    let response = await client.query.osmosis.txfees.denomSpotPrice(
        osmosis.txfees.v1beta1.QueryDenomSpotPriceRequest.fromPartial({
            denom
        })
    )
    return response;
}

export async function query_osmosis_txfees_denomPoolId(client: CosmosChainClient, denom: string) {
    let response = await client.query.osmosis.txfees.denomPoolId(
        osmosis.txfees.v1beta1.QueryDenomPoolIdRequest.fromPartial({
            denom
        })
    )
    return response;
}

export async function query_osmosis_txfees_baseDenom(client: CosmosChainClient) {
    let response = await client.query.osmosis.txfees.baseDenom(
        osmosis.txfees.v1beta1.QueryBaseDenomRequest.fromPartial({})
    )
    return response;
}



