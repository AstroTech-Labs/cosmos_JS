import { CosmosChainClient, cosmos, cosmwasm, osmosis } from "cosmsdkjs";

//Supported query interfaces - types/proto/cosmos/auth/v1beta1/query.rpc.query.d.ts

//---------------------------------------------
// COSMOS::AUTH MODULE - QUERY HELPERS
// --------------------------------------------
export async function query_cosmos_auth(client: CosmosChainClient) {
  // Query account
  let response = await client.query.cosmos.auth.v1beta1.account(
    cosmos.auth.v1beta1.QueryAccountRequest.fromPartial({
      address: "cosmos1qyqsyqcyq5rqwzqfpg9scrgjl03hn0y2ydfh5u",
    }),
  );
  return response;
}

export async function query_cosmos_auth_account(client: CosmosChainClient) {
  // Query account
  let response = await client.query.cosmos.auth.v1beta1.account(
    cosmos.auth.v1beta1.QueryAccountRequest.fromPartial({
      address: "cosmos1qyqsyqcyq5rqwzqfpg9scrgjl03hn0y2ydfh5u",
    }),
  );
  return response;
}

//Supported transaction interfaces - types/proto/cosmos/auth/v1beta1/tx.rpc.msg.d.ts

//---------------------------------------------
// COSMOS::AUTH MODULE - TRANSACTION HELPERS
// --------------------------------------------

// MsgSend
export async function tx_cosmos_auth(client: CosmosChainClient) {
  // Create a new transaction
  let tx = client.cosmos.newStdTx();

  // Add MsgSend to the transaction
  tx.addMsg(
    cosmos.auth.v1beta1.MsgSend.fromPartial({
      fromAddress: "cosmos1qyqsyqcyq5rqwzqfpg9scrgjl03hn0y2ydfh5u",
      toAddress: "cosmos1qyqsyqcyq5rqwzqfpg9scrgjl03hn0y2ydfh5u",
      amount: [cosmos.base.v1beta1.Coin.fromPartial({ denom: "uatom", amount: "1000000" })],
    }),
  );

  // Sign the transaction
  tx.sign("cosmos1qyqsyqcyq5rqwzqfpg9scrgjl03hn0y2ydfh5u");

  // Broadcast the transaction
  let response = await client.cosmos.broadcastTx(tx);
  return response;
}
