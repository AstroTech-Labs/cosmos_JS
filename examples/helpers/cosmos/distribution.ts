import { CosmosChainClient, cosmos} from "cosmsdkjs";
import {Coin} from "../../../types/proto/cosmos/base/v1beta1/coin";

// Supported query interfaces - types/proto/cosmos/distribution/v1beta1/query.rpc.query.d.ts
// Supported tranasction interfaces - types/proto/cosmos/distribution/v1beta1/tx.rpc.msg.d.ts

//---------------------------------------------
// COSMOS::DISTRIBUTION MODULE - QUERY HELPERS
// --------------------------------------------

export async function query_cosmos_distribution_params(client: CosmosChainClient) {
    let response = await client.query.cosmos.distribution.v1beta1.params(
        cosmos.distribution.v1beta1.QueryParamsRequest.fromPartial({}),
    );
    return response;
}

export async function query_cosmos_distribution_validator_outstanding_rewards(client: CosmosChainClient,validatorAddress: string) {
    let response = await client.query.cosmos.distribution.v1beta1.params(
        cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest.fromPartial({
            validatorAddress,
        }),
    );
    return response;
}

export async function query_cosmos_distribution_validator_commission(client: CosmosChainClient,validatorAddress: string) {
    let response = await client.query.cosmos.distribution.v1beta1.params(
        cosmos.distribution.v1beta1.QueryValidatorCommissionRequest.fromPartial({
            validatorAddress,
        }),
    );
    return response;
}

export async function query_cosmos_distribution_validator_slashes(client: CosmosChainClient,validatorAddress: string) {
    let response = await client.query.cosmos.distribution.v1beta1.params(
        cosmos.distribution.v1beta1.QueryValidatorCommissionRequest.fromPartial({
            validatorAddress,
        }),
    );
    return response;
}



export async function query_cosmos_distribution_delegation_rewards(client: CosmosChainClient,validatorAddress: string,delegatorAddress: string) {
    let response = await client.query.cosmos.distribution.v1beta1.params(
        cosmos.distribution.v1beta1.QueryDelegationRewardsRequest.fromPartial({
            validatorAddress,
            delegatorAddress,
        }),
    );
    return response;
}



export async function query_cosmos_distribution_delegation_total_rewards(client: CosmosChainClient,delegatorAddress: string) {
    let response = await client.query.cosmos.distribution.v1beta1.params(
        cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest.fromPartial({

            delegatorAddress,
        }),
    );
    return response;
}

export async function query_cosmos_distribution_delegator_validators(client: CosmosChainClient,delegatorAddress: string) {
    let response = await client.query.cosmos.distribution.v1beta1.params(
        cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest.fromPartial({

            delegatorAddress,
        }),
    );
    return response;
}


export async function query_cosmos_distribution_delegator_withdraw_address(client: CosmosChainClient,delegatorAddress: string) {
    let response = await client.query.cosmos.distribution.v1beta1.params(
        cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest.fromPartial({

            delegatorAddress,
        }),
    );
    return response;
}


export async function query_cosmos_distribution_community_pool(client: CosmosChainClient) {
    let response = await client.query.cosmos.distribution.v1beta1.params(
        cosmos.distribution.v1beta1.QueryCommunityPoolRequest.fromPartial({}),
    );
    return response;
}



//---------------------------------------------
// COSMOS::DISTRIBUTION MODULE - TRANSACTION HELPERS
// --------------------------------------------

//MsgSetWithdrawAddress
export async function execute_cosmos_distribution_set_withdraw_address(
    delegatorAddress: string,
     withdrawAddress: string,
) {
    let msg = cosmos.distribution.v1beta1.MsgSetWithdrawAddress.fromPartial({
        delegatorAddress,
        withdrawAddress,

    });
    return msg;
}

// MsgWithdrawDelegatorReward
export async function execute_cosmos_distribution_withdraw_delegator_reward(
    delegatorAddress: string,
    withdrawAddress: string,
) {
    let msg = cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward.fromPartial({
        delegatorAddress,
        withdrawAddress,

    });
    return msg;
}

//MsgWithdrawValidatorCommission
export async function execute_cosmos_distribution_withdraw_validator_commission(
    validatorAddress: string,
) {
    let msg = cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission.fromPartial({
        validatorAddress,

    });
    return msg;
}

//MsgFundCommunityPool
export async function execute_cosmos_distribution_fund_community_pool(
    amount: Coin[],
   depositor: string,
) {
    let msg = cosmos.distribution.v1beta1.MsgFundCommunityPool.fromPartial({
        amount,
        depositor,

    });
    return msg;
}





