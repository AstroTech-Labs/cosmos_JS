import {CosmosChainClient, ibc} from "cosmsdkjs";

// Supported query interfaces - types/proto/ibc/applications/interchain_accounts/host/v1/query.rpc.query.d.ts

//---------------------------------------------
// IBC::HOST MODULE - QUERY HELPERS
// --------------------------------------------

export async function query_ibc_applications_interchain_accounts_host_params(client: CosmosChainClient) {
    let response = await client.query.ibc.applications.interchain_accounts.host.v1.params(
        ibc.applications.interchain_accounts.host.v1.QueryParamsRequest.fromPartial({}),
    );
    return response;
}
