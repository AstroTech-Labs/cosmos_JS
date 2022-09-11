import { CosmosChainClient, cosmos, cosmwasm, osmosis } from "cosmsdkjs";
// Supported query interfaces - types/proto/cosmos/mint/v1beta1/query.rpc.query.d.ts

//---------------------------------------------
// COSMOS::MINT MODULE - QUERY HELPERS
// --------------------------------------------

export async function query_cosmos_mint(client: CosmosChainClient) {
	
  let response = await client.query.cosmos.mint.v1beta1.params(
	cosmos.mint.v1beta1.QueryParamsRequest.fromPartial({})
  )
  return response;

}

export async function query_cosmos_mintinflation(client: CosmosChainClient) {
			
  let response = await client.query.cosmos.mint.v1beta1.inflation(
	cosmos.mint.v1beta1.QueryInflationRequest.fromPartial({})
  )
  return response;

}

export async function query_cosmos_mintannualprovisions(client: CosmosChainClient) {	
	  let response = await client.query.cosmos.mint.v1beta1.annualprovisions(
	cosmos.mint.v1beta1.QueryAnnualProvisionsRequest.fromPartial({})
  )
  return response;

}

export async function query_cosmos_mintparams(client: CosmosChainClient) {	
	  let response = await client.query.cosmos.mint.v1beta1.params(
	cosmos.mint.v1beta1.QueryParamsRequest.fromPartial({})
  )
  return response;

}

// Supported transaction interfaces - types/proto/cosmos/mint/v1beta1/tx.rpc.msg.d.ts

//---------------------------------------------
// COSMOS::MINT MODULE - TRANSACTION HELPERS
// --------------------------------------------

// MsgBeginRedelegate
export async function tx_cosmos_mint(client: CosmosChainClient) {
	
  let response = await client.tx.cosmos.mint.v1beta1.inflation(
	cosmos.mint.v1beta1.MsgInflation.fromPartial({})
  )
  return response;

}

// MsgBeginRedelegate
export async function tx_cosmos_mintinflation(client: CosmosChainClient) {	
  let response = await client.tx.cosmos.mint.v1beta1.inflation(
	cosmos.mint.v1beta1.MsgInflation.fromPartial({})
  )
  return response;


}

// MsgBeginRedelegate
export async function tx_cosmos_mintannualprovisions(client: CosmosChainClient) {
	
  let response = await client.tx.cosmos.mint.v1beta1.annualprovisions(
	cosmos.mint.v1beta1.MsgAnnualProvisions.fromPartial({})
  )
  return response;

}

// MsgBeginRedelegate
export async function tx_cosmos_mintparams(client: CosmosChainClient) {

	  let response = await client.tx.cosmos.mint.v1beta1.params(
	cosmos.mint.v1beta1.MsgParams.fromPartial({})
  )
  return response;

}






