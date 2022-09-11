import { CosmosChainClient, cosmos, cosmwasm, osmosis } from "cosmsdkjs";

//Supported query interfaces - types/proto/cosmos/auth/v1beta1/query.rpc.query.d.ts

//---------------------------------------------
// COSMOS::AUTH MODULE - QUERY HELPERS
// --------------------------------------------
export async function query_cosmos_auth(client: CosmosChainClient, address:string) {
  let response = await client.query.cosmos.auth.v1beta1.account(
	cosmos.auth.v1beta1.QueryAccountRequest.fromPartial({address: address})
	);
	return response;			
}
  
