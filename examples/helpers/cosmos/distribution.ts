import { CosmosChainClient, cosmos, cosmwasm, osmosis } from "cosmsdkjs";

// Supported query interfaces - types/proto/cosmos/distribution/v1beta1/query.rpc.query.d.ts
// Supported tranasction interfaces - types/proto/cosmos/distribution/v1beta1/tx.rpc.msg.d.ts

//---------------------------------------------
// COSMOS::DISTRIBUTION MODULE - QUERY HELPERS
// --------------------------------------------

// QueryCommunityPool
export interface QueryCommunityPoolRequest {
  height?: string;
  prove?: boolean;
}
export interface QueryCommunityPoolResponse {
  height: string;
  result: {
    communityPool: cosmos.Coin[];
  };
}

export async function query_cosmos_distribution_community_pool(
  client: CosmosChainClient,
  request: QueryCommunityPoolRequest,
): Promise<QueryCommunityPoolResponse> {
  return await client.query<QueryCommunityPoolRequest, QueryCommunityPoolResponse>(
    "/cosmos.distribution.v1beta1.Query/CommunityPool",
    request,
  );
}

//---------------------------------------------
// COSMOS::DISTRIBUTION MODULE - TRANSACTION HELPERS
// --------------------------------------------

// MsgFundCommunityPool
export interface MsgFundCommunityPool {
  type: "cosmos-sdk/MsgFundCommunityPool";
  value: {
    amount: cosmos.Coin[];
    depositor: string;
  };
}

export interface MsgFundCommunityPoolResponse {
  height: string;
  result: {
    events: cosmos.Event[];
    log: string;
  };
}

// MsgFundCommunityPool
export function make_cosmos_distribution_fund_community_pool_msg(
  amount: cosmos.Coin[],
  depositor: string,
): cosmos.tx.Msg {
  return {
    typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
    value: {
      amount: amount,
      depositor: depositor,
    },
  };
}

// MsgSetWithdrawAddress
export interface MsgSetWithdrawAddress {
  type: "cosmos-sdk/MsgSetWithdrawAddress";
  value: {
    delegatorAddress: string;
    withdrawAddress: string;
  };
}

export interface MsgSetWithdrawAddressResponse {
  height: string;
  result: {
    events: cosmos.Event[];
    log: string;
  };
}

// MsgSetWithdrawAddress
export function make_cosmos_distribution_set_withdraw_address_msg(
  delegator_address: string,
  withdraw_address: string,
): cosmos.tx.Msg {
  return {
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
    value: {
      delegatorAddress: delegator_address,
      withdrawAddress: withdraw_address,
    },
  };
}

// MsgWithdrawDelegatorReward
export interface MsgWithdrawDelegatorReward {
  type: "cosmos-sdk/MsgWithdrawDelegatorReward";
  value: {
    delegatorAddress: string;
    validatorAddress: string;
  };
}

export interface MsgWithdrawDelegatorRewardResponse {
  height: string;
  result: {
    events: cosmos.Event[];
    log: string;
  };
}

// MsgWithdrawDelegatorReward
export function make_cosmos_distribution_withdraw_delegator_reward_msg(
  delegator_address: string,
  validator_address: string,
): cosmos.tx.Msg {
  return {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
    value: {
      delegatorAddress: delegator_address,
      validatorAddress: validator_address,
    },
  };
}

// MsgWithdrawValidatorCommission
export interface MsgWithdrawValidatorCommission {
  type: "cosmos-sdk/MsgWithdrawValidatorCommission";
  value: {
    validatorAddress: string;
  };
}

export interface MsgWithdrawValidatorCommissionResponse {
  height: string;
  result: {
    events: cosmos.Event[];
    log: string;
  };
}

// MsgWithdrawValidatorCommission
export function make_cosmos_distribution_withdraw_validator_commission_msg(
  validator_address: string,
): cosmos.tx.Msg {
  return {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
    value: {
      validatorAddress: validator_address,
    },
  };
}

// MsgFundCommunityPool
export async function send_cosmos_distribution_fund_community_pool_msg(
  client: CosmosChainClient,
  msg: MsgFundCommunityPool,
  memo = "",
): Promise<MsgFundCommunityPoolResponse> {
  return await client.send<MsgFundCommunityPool, MsgFundCommunityPoolResponse>(msg, memo);
}

// MsgSetWithdrawAddress
export async function send_cosmos_distribution_set_withdraw_address_msg(
  client: CosmosChainClient,
  msg: MsgSetWithdrawAddress,
  memo = "",
): Promise<MsgSetWithdrawAddressResponse> {
  return await client.send<MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse>(msg, memo);
}

// MsgWithdrawDelegatorReward
export async function send_cosmos_distribution_withdraw_delegator_reward_msg(
  client: CosmosChainClient,
  msg: MsgWithdrawDelegatorReward,
  memo = "",
): Promise<MsgWithdrawDelegatorRewardResponse> {
  return await client.send<MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse>(msg, memo);
}

// MsgWithdrawValidatorCommission
export async function send_cosmos_distribution_withdraw_validator_commission_msg(
  client: CosmosChainClient,
  msg: MsgWithdrawValidatorCommission,
  memo = "",
): Promise<MsgWithdrawValidatorCommissionResponse> {
  return await client.send<MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse>(msg, memo);
}

// ---------------------------------------------
