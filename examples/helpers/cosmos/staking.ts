import { CosmosChainClient, cosmos, cosmwasm, osmosis } from "cosmsdkjs";
import { MsgWithdrawValidatorCommissionResponse } from "./distribution";

// Supported query interfaces - types/proto/cosmos/staking/v1beta1/query.rpc.query.d.ts
// Supported transaction interfaces - types/proto/cosmos/staking/v1beta1/tx.rpc.msg.d.ts

//---------------------------------------------
// COSMOS::STAKING MODULE - QUERY HELPERS
// --------------------------------------------

// QueryParams
export interface QueryParamsRequest {
  height?: string;
  prove?: boolean;
}

export interface QueryParamsResponse {
  height: string;
  result: {
    params: {
      unbondingTime: string;
      maxValidators: number;
      maxEntries: number;
      historicalEntries: number;
      bondDenom: string;
    };
  };
}

export async function query_cosmos_staking_params(
  client: CosmosChainClient,
  request: QueryParamsRequest,
): Promise<QueryParamsResponse> {
  return await client.query<QueryParamsRequest, QueryParamsResponse>(
    "/cosmos.staking.v1beta1.Query/Params",
    request,
  );
}

// QueryDelegation
export interface QueryDelegationRequest {
  delegatorAddr: string;
  validatorAddr: string;
  height?: string;
  prove?: boolean;
}

export interface QueryDelegationResponse {
  height: string;
  result: {
    delegationResponse: {
      delegation: {
        delegatorAddress: string;
        validatorAddress: string;
        shares: string;
      };
      balance: cosmos.Coin;
    };
  };
}

export async function query_cosmos_staking_delegation(
  client: CosmosChainClient,
  request: QueryDelegationRequest,
): Promise<QueryDelegationResponse> {
  return await client.query<QueryDelegationRequest, QueryDelegationResponse>(
    "/cosmos.staking.v1beta1.Query/Delegation",
    request,
  );
}

// QueryUnbondingDelegation
export interface QueryUnbondingDelegationRequest {
  delegatorAddr: string;
  validatorAddr: string;
  height?: string;
  prove?: boolean;
}

export interface QueryUnbondingDelegationResponse {
  height: string;
  result: {
    unbondingResponse: {
      delegatorAddress: string;
      validatorAddress: string;
      entries: {
        initialBalance: string;
        balance: string;
        creationHeight: string;
        completionTime: string;
      }[];
    };
  };
}

export async function query_cosmos_staking_unbonding_delegation(
  client: CosmosChainClient,
  request: QueryUnbondingDelegationRequest,
): Promise<QueryUnbondingDelegationResponse> {
  return await client.query<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse>(
    "/cosmos.staking.v1beta1.Query/UnbondingDelegation",
    request,
  );
}

// QueryDelegatorDelegations
export interface QueryDelegatorDelegationsRequest {
  delegatorAddr: string;
  height?: string;
  prove?: boolean;
}

export interface QueryDelegatorDelegationsResponse {
  height: string;
  result: {
    delegationResponses: {
      delergation: {
        delegatorAddress: string;
        validatorAddress: string;
        shares: string;
      };
      balance: cosmos.Coin;
    }[];
  };
}

export async function query_cosmos_staking_delegator_delegations(
  client: CosmosChainClient,
  request: QueryDelegatorDelegationsRequest,
): Promise<QueryDelegatorDelegationsResponse> {
  return await client.query<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse>(
    "/cosmos.staking.v1beta1.Query/DelegatorDelegations",
    request,
  );
}

// QueryDelegatorUnbondingDelegations
export interface QueryDelegatorUnbondingDelegationsRequest {
  delegatorAddr: string;
  height?: string;
  prove?: boolean;
}

export interface QueryDelegatorUnbondingDelegationsResponse {
  height: string;
  result: {
    unbondingResponses: {
      delegatorAddress: string;
      validatorAddress: string;
      entries: {
        initialBalance: string;
        balance: string;
        creationHeight: string;
        completionTime: string;
      }[];
    }[];
  };
}

export async function query_cosmos_staking_delegator_unbonding_delegations(
  client: CosmosChainClient,
  request: QueryDelegatorUnbondingDelegationsRequest,
): Promise<QueryDelegatorUnbondingDelegationsResponse> {
  return await client.query<
    QueryDelegatorUnbondingDelegationsRequest,
    QueryDelegatorUnbondingDelegationsResponse
  >("/cosmos.staking.v1beta1.Query/DelegatorUnbondingDelegations", request);
}

// QueryRedelegations
export interface QueryRedelegationsRequest {
  delegatorAddr: string;
  srcValidatorAddr: string;
  dstValidatorAddr: string;
  height?: string;
  prove?: boolean;
}

export interface QueryRedelegationsResponse {
  height: string;
  result: {
    redelgationResponses: {
      delegatorAddress: string;
      validatorSrcAddress: string;
      validatorDstAddress: string;
      entries: {
        initialBalance: string;
        balance: string;
        creationHeight: string;
        completionTime: string;
      }[];
    }[];
  };
}

export async function query_cosmos_staking_redelegations(
  client: CosmosChainClient,
  request: QueryRedelegationsRequest,
): Promise<QueryRedelegationsResponse> {
  return await client.query<QueryRedelegationsRequest, QueryRedelegationsResponse>(
    "/cosmos.staking.v1beta1.Query/Redelegations",
    request,
  );
}

// QueryDelegatorValidators

export interface QueryDelegatorValidatorsRequest {
  delegatorAddr: string;
  height?: string;
  prove?: boolean;
}

export interface QueryDelegatorValidatorsResponse {
  height: string;
  result: {
    validators: {
      operatorAddress: string;
      consensusPubkey: string;
      jailed: boolean;
      status: number;
      tokens: string;
      delegatorShares: string;
      description: {
        moniker: string;
        identity: string;
        website: string;
        details: string;
      };
      bondHeight: string;
      bondIntraTxCounter: string;
      unbondingHeight: string;
      unbondingTime: string;
      commission: {
        commissionRates: {
          rate: string;
          maxRate: string;
          maxChangeRate: string;
        };
        updateTime: string;
      };
      minSelfDelegation: string;
    }[];
  };
}

export async function query_cosmos_staking_delegator_validators(
  client: CosmosChainClient,
  request: QueryDelegatorValidatorsRequest,
): Promise<QueryDelegatorValidatorsResponse> {
  return await client.query<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>(
    "/cosmos.staking.v1beta1.Query/DelegatorValidators",
    request,
  );
}

// QueryDelegatorValidator
export interface QueryDelegatorValidatorRequest {
  delegatorAddr: string;
  validatorAddr: string;
  height?: string;
  prove?: boolean;
}

export interface QueryDelegatorValidatorResponse {
  height: string;
  result: {
    validators: {
      operatorAddress: string;
      consensusPubkey: string;
      jailed: boolean;
      status: number;
      tokens: string;
      delegatorShares: string;
      description: {
        moniker: string;
        identity: string;
        website: string;
        details: string;
      };
      bondHeight: string;
      bondIntraTxCounter: string;
      unbondingHeight: string;
      unbondingTime: string;
      commission: {
        commissionRates: {
          rate: string;
          maxRate: string;
          maxChangeRate: string;
        };
        updateTime: string;
      };
      minSelfDelegation: string;
    };
  };
}

export async function query_cosmos_staking_delegator_validator(
  client: CosmosChainClient,
  request: QueryDelegatorValidatorRequest,
): Promise<QueryDelegatorValidatorResponse> {
  return await client.query<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse>(
    "/cosmos.staking.v1beta1.Query/DelegatorValidator",
    request,
  );
}

// QueryHistoricalInfo
export interface QueryHistoricalInfoRequest {
  height?: string;
  prove?: boolean;
}

export interface QueryHistoricalInfoResponse {
  height: string;
  result: {
    header: {
      version: {
        block: string;
        app: string;
      };
      chainId: string;
      height: string;
      time: string;
      numTxs: string;
      totalTxs: string;
      lastBlockId: {
        hash: string;
        parts: {
          total: string;
          hash: string;
        };
      };
      lastCommitHash: string;
      dataHash: string;
      validatorsHash: string;
      nextValidatorsHash: string;
      consensusHash: string;
      appHash: string;
      lastResultsHash: string;
      evidenceHash: string;
      proposerAddress: string;
    };
    valset: {
      validator: {
        address: string;
        power: string;
      }[];
    };
  };
}

export async function query_cosmos_staking_historical_info(
  client: CosmosChainClient,
  request: QueryHistoricalInfoRequest,
): Promise<QueryHistoricalInfoResponse> {
  return await client.query<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse>(
    "/cosmos.staking.v1beta1.Query/HistoricalInfo",
    request,
  );
}

// QueryPool

export interface QueryPoolRequest {
  height?: string;
  prove?: boolean;
}

export interface QueryPoolResponse {
  height: string;
  result: {
    notBondedTokens: string;
    bondedTokens: string;
  };
}

export async function query_cosmos_staking_pool(
  client: CosmosChainClient,
  request: QueryPoolRequest,
): Promise<QueryPoolResponse> {
  return await client.query<QueryPoolRequest, QueryPoolResponse>(
    "/cosmos.staking.v1beta1.Query/Pool",
    request,
  );
}

//---------------------------------------------
// COSMOS::STAKING MODULE - TRANSACTION HELPERS
// --------------------------------------------

// MsgCreateValidator
export interface MsgCreateValidator {
  description: {
    moniker: string;
    identity: string;
    website: string;
    details: string;
  };
  validatorAddress: string;
  commission: {
    rate: string;
    maxRate: string;
    maxChangeRate: string;
  };
  minSelfDelegation: string;
  delegatorAddress: string;
  pubkey: string;
  value: string;
}

export async function tx_cosmos_staking_create_validator(
  client: CosmosChainClient,
  msg: MsgCreateValidator,
  memo?: string,
): Promise<StdTx> {
  return await client.tx<MsgCreateValidator>("/cosmos.staking.v1beta1.Msg/CreateValidator", msg, memo);
}

// MsgEditValidator
export interface MsgEditValidator {
  description: {
    moniker: string;
    identity: string;
    website: string;
    details: string;
  };
  validatorAddress: string;
  commissionRate: string;
  minSelfDelegation: string;
}

export async function tx_cosmos_staking_edit_validator(
  client: CosmosChainClient,
  msg: MsgEditValidator,
  memo?: string,
): Promise<StdTx> {
  return await client.tx<MsgEditValidator>("/cosmos.staking.v1beta1.Msg/EditValidator", msg, memo);
}

// MsgDelegate
export interface MsgDelegate {
  delegatorAddress: string;
  validatorAddress: string;
  amount: string;
}

export async function tx_cosmos_staking_delegate(
  client: CosmosChainClient,
  msg: MsgDelegate,
  memo?: string,
): Promise<StdTx> {
  return await client.tx<MsgDelegate>("/cosmos.staking.v1beta1.Msg/Delegate", msg, memo);
}

// MsgBeginRedelegate
export interface MsgBeginRedelegate {
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
  amount: string;
}

export async function tx_cosmos_staking_begin_redelegate(
  client: CosmosChainClient,
  msg: MsgBeginRedelegate,
  memo?: string,
): Promise<StdTx> {
  return await client.tx<MsgBeginRedelegate>("/cosmos.staking.v1beta1.Msg/BeginRedelegate", msg, memo);
}

// MsgUndelegate
export interface MsgUndelegate {
  delegatorAddress: string;
  validatorAddress: string;
  amount: string;
}

export async function tx_cosmos_staking_undelegate(
  client: CosmosChainClient,
  msg: MsgUndelegate,
  memo?: string,
): Promise<StdTx> {
  return await client.tx<MsgUndelegate>("/cosmos.staking.v1beta1.Msg/Undelegate", msg, memo);
}

// MsgUnjail
export interface MsgUnjail {
  validatorAddr: string;
}

export async function tx_cosmos_staking_unjail(
  client: CosmosChainClient,
  msg: MsgUnjail,
  memo?: string,
): Promise<StdTx> {
  return await client.tx<MsgUnjail>("/cosmos.staking.v1beta1.Msg/Unjail", msg, memo);
}

// MsgWithdrawDelegatorReward

export interface MsgWithdrawDelegatorReward {
  delegatorAddress: string;
  validatorAddress: string;
}

export async function tx_cosmos_staking_withdraw_delegator_reward(
  client: CosmosChainClient,
  msg: MsgWithdrawDelegatorReward,
  memo?: string,
): Promise<StdTx> {
  return await client.tx<MsgWithdrawDelegatorReward>(
    "/cosmos.staking.v1beta1.Msg/WithdrawDelegatorReward",
    msg,
    memo,
  );
}

// MsgWithdrawValidatorCommission

export interface MsgWithdrawValidatorCommission {
  validatorAddress: string;
}

export async function tx_cosmos_staking_withdraw_validator_commission(
  client: CosmosChainClient,
  msg: MsgWithdrawValidatorCommission,
  memo?: string,
): Promise<MsgWithdrawValidatorCommissionResponse> {
  return await client.tx<MsgWithdrawValidatorCommission>(
    "/cosmos.staking.v1beta1.Msg/WithdrawValidatorCommission",
    msg,
    memo,
  );
}

// MsgFundCommunityPool

export interface MsgFundCommunityPool {
  amount: string;
  depositor: string;
}

export async function tx_cosmos_staking_fund_community_pool(
  client: CosmosChainClient,
  msg: MsgFundCommunityPool,
  memo?: string,
): Promise<StdTx> {
  return await client.tx<MsgFundCommunityPool>("/cosmos.staking.v1beta1.Msg/FundCommunityPool", msg, memo);
}

//---------------------------------------------
