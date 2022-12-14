import {CosmosChainClient} from "../../clients";
import {cosmos} from "../../proto";

//Supported query interfaces - types/proto/cosmos/auth/v1beta1/query.rpc.query.d.ts

//---------------------------------------------
// COSMOS::AUTH MODULE - QUERY HELPERS
// --------------------------------------------



export async function query_cosmos_auth_account(client: CosmosChainClient, address: string) {
  let response = await client.query.cosmos.auth.v1beta1.account(
    cosmos.auth.v1beta1.QueryAccountRequest.fromPartial({
      address: address
    }),
  );
  return response;
}


export async function query_cosmos_auth_accounts(client: CosmosChainClient,  offset?: number,
  limit?: number) {
  let response = await client.query.cosmos.auth.v1beta1.accounts(
    cosmos.auth.v1beta1.QueryAccountsRequest.fromPartial({
      pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit})

    }),
  );
  return response;
}

export async function query_cosmos_auth_params(client: CosmosChainClient) {
  let response = await client.query.cosmos.auth.v1beta1.params(
    cosmos.auth.v1beta1.QueryParamsRequest.fromPartial({}),
  );
  return response;
}
