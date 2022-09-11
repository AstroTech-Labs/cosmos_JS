import { CosmosChainClient, cosmos, cosmwasm, osmosis } from "cosmsdkjs";

// Supported query interfaces - types/proto/cosmos/authz/v1beta1/query.rpc.query.d.ts
// Supported tranasction interfaces - types/proto/cosmos/authz/v1beta1/tx.rpc.msg.d.ts

//---------------------------------------------
// COSMOS::AUTHZ MODULE - QUERY HELPERS
// --------------------------------------------
export async function query_cosmos_authz_grant(
  client: CosmosChainClient,
  granter: string,
  grantee: string,
  msgtypeurl: string,
) {
  let response = await client.query.cosmos.authz.v1beta1.grant(
    cosmos.authz.v1beta1.QueryGrantRequest.fromPartial({
      granter: granter,
      grantee: grantee,
      msgtypeurl: msgtypeurl,
    }),
  );
  return response;
}

//---------------------------------------------
// COSMOS::AUTHZ MODULE - TRANSACTION HELPERS
// --------------------------------------------

// MsgGrant
export async function tx_cosmos_authz_grant(
  client: CosmosChainClient,
  granter: string,
  grantee: string,
  msgtypeurl: string,
  expiration: string,
) {
  let response = await client.tx.cosmos.authz.v1beta1.grant(
    cosmos.authz.v1beta1.MsgGrant.fromPartial({
      granter: granter,
      grantee: grantee,
      msgtypeurl: msgtypeurl,
      expiration: expiration,
    }),
  );
  return response;
}

// MsgExec
export async function tx_cosmos_authz_exec(
  client: CosmosChainClient,
  grantee: string,
  msgtypeurl: string,
  msg: string,
) {
  let response = await client.tx.cosmos.authz.v1beta1.exec(
    cosmos.authz.v1beta1.MsgExec.fromPartial({
      grantee: grantee,
      msgtypeurl: msgtypeurl,
      msg: msg,
    }),
  );
  return response;
}

// MsgRevoke
export async function tx_cosmos_authz_revoke(
  client: CosmosChainClient,
  granter: string,
  grantee: string,
  msgtypeurl: string,
) {
  let response = await client.tx.cosmos.authz.v1beta1.revoke(
    cosmos.authz.v1beta1.MsgRevoke.fromPartial({
      granter: granter,
      grantee: grantee,
      msgtypeurl: msgtypeurl,
    }),
  );
  return response;
}

// MsgRevokeAll
export async function tx_cosmos_authz_revokeall(client: CosmosChainClient, granter: string, grantee: string) {
  let response = await client.tx.cosmos.authz.v1beta1.revokeall(
    cosmos.authz.v1beta1.MsgRevokeAll.fromPartial({
      granter: granter,
      grantee: grantee,
    }),
  );
  return response;
}

// MsgExecAuthorized
export async function tx_cosmos_authz_execauthorized(
  client: CosmosChainClient,
  grantee: string,
  msgtypeurl: string,
  msg: string,
) {
  let response = await client.tx.cosmos.authz.v1beta1.execauthorized(
    cosmos.authz.v1beta1.MsgExecAuthorized.fromPartial({
      grantee: grantee,
      msgtypeurl: msgtypeurl,
      msg: msg,
    }),
  );
  return response;
}

// MsgExecAuthorizedByGrant
export async function tx_cosmos_authz_execauthorizedbygrant(
  client: CosmosChainClient,
  grantee: string,
  msgtypeurl: string,
  msg: string,
  grantid: string,
) {
  let response = await client.tx.cosmos.authz.v1beta1.execauthorizedbygrant(
    cosmos.authz.v1beta1.MsgExecAuthorizedByGrant.fromPartial({
      grantee: grantee,
      msgtypeurl: msgtypeurl,
      msg: msg,
      grantid: grantid,
    }),
  );
  return response;
}

// MsgExecAuthorizedByGrant
export async function tx_cosmos_authz_execauthorizedbygrants(
  client: CosmosChainClient,
  grantee: string,
  msgtypeurl: string,
  msg: string,
  grantids: string[],
) {
  let response = await client.tx.cosmos.authz.v1beta1.execauthorizedbygrants(
    cosmos.authz.v1beta1.MsgExecAuthorizedByGrants.fromPartial({
      grantee: grantee,
      msgtypeurl: msgtypeurl,
      msg: msg,
      grantids: grantids,
    }),
  );
  return response;
}

// MsgExecAuthorizedByGrant
export async function tx_cosmos_authz_execauthorizedbygrantsall(
  client: CosmosChainClient,
  grantee: string,
  msgtypeurl: string,
  msg: string,
) {
  let response = await client.tx.cosmos.authz.v1beta1.execauthorizedbygrantsall(
    cosmos.authz.v1beta1.MsgExecAuthorizedByGrantsAll.fromPartial({
      grantee: grantee,
      msgtypeurl: msgtypeurl,
      msg: msg,
    }),
  );
  return response;
}
