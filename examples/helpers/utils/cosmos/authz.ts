import { CosmosChainClient, cosmos, cosmwasm, osmosis } from "cosmsdkjs";
import { Any } from "cosmjs-types/google/protobuf/any.js";
// Supported query interfaces - types/proto/cosmos/authz/v1beta1/query.rpc.query.d.ts
// Supported tranasction interfaces - types/proto/cosmos/authz/v1beta1/tx.rpc.msg.d.ts

//---------------------------------------------
// COSMOS::AUTHZ MODULE - QUERY HELPERS
// --------------------------------------------
export async function query_cosmos_authz_grants(
  client: CosmosChainClient,
  granter: string,
  grantee: string,
  msgtypeurl: string,
  offset?: number,
  limit?: number
) {
  let response = await client.query.cosmos.authz.v1beta1.grants(
    cosmos.authz.v1beta1.QueryGrantsRequest.fromPartial({
      granter: granter,
      grantee: grantee,
      msgtypeurl: msgtypeurl,
      pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit})
    }),
  );
  return response;
}

//---------------------------------------------
// COSMOS::AUTHZ MODULE - TRANSACTION HELPERS
// --------------------------------------------

// MsgGrant
export async function execute_cosmos_authz_grant(
  granter: string,
  grantee: string,
  authorization: any,
  expiration: string,
) {
  let msg =  cosmos.authz.v1beta1.MsgGrant.fromPartial({
      granter: granter,
      grantee: grantee,
      grant: cosmos.authz.v1beta1.Grant.fromPartial({
        authorization: authorization,
      expiration: expiration,
    })
    });
  return msg;
}

// MsgExec
export async function execute_cosmos_authz_exec(
  grantee: string,
  msgtypeurl: string,
  msgs: Any[],
) {
  let msg =  cosmos.authz.v1beta1.MsgExec.fromPartial({
      grantee: grantee,
      msgtypeurl: msgtypeurl,
      msg: msgs,
    });
  return msg;
}

// MsgRevoke
export async function execute_cosmos_authz_revoke(
  granter: string,
  grantee: string,
  msgtypeurl: string,
) {
  let msg =  cosmos.authz.v1beta1.MsgRevoke.fromPartial({
      granter: granter,
      grantee: grantee,
      msgtypeurl: msgtypeurl,
    });
  return msg;
}
