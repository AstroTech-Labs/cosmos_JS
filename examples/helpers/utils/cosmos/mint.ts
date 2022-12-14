import { CosmosChainClient, cosmos} from "cosmsdkjs";
// Supported query interfaces - types/proto/cosmos/mint/v1beta1/query.rpc.query.d.ts

//---------------------------------------------
// COSMOS::MINT MODULE - QUERY HELPERS
// --------------------------------------------

export async function query_cosmos_mint_params(client: CosmosChainClient) {
    let response = await client.query.cosmos.mint.v1beta1.params(
        cosmos.mint.v1beta1.QueryParamsRequest.fromPartial({}),
    );
    return response;
}

export async function query_cosmos_mint_inflation(client: CosmosChainClient) {
    let response = await client.query.cosmos.mint.v1beta1.inflation(
        cosmos.mint.v1beta1.QueryInflationRequest.fromPartial({}),
    );
    return response;
}



export async function query_cosmos_mint_annual_provisions(client: CosmosChainClient) {
    let response = await client.query.cosmos.mint.v1beta1.annualProvisions(
        cosmos.mint.v1beta1. QueryAnnualProvisionsRequest.fromPartial({}),
    );
    return response;
}
