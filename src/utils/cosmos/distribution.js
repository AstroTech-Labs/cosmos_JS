"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute_cosmos_distribution_fund_community_pool = exports.execute_cosmos_distribution_withdraw_validator_commission = exports.execute_cosmos_distribution_withdraw_delegator_reward = exports.execute_cosmos_distribution_set_withdraw_address = exports.query_cosmos_distribution_community_pool = exports.query_cosmos_distribution_delegator_withdraw_address = exports.query_cosmos_distribution_delegator_validators = exports.query_cosmos_distribution_delegation_total_rewards = exports.query_cosmos_distribution_delegationRewards = exports.query_cosmos_distribution_validator_slashes = exports.query_cosmos_distribution_validator_commission = exports.query_cosmos_distribution_validator_outstanding_rewards = exports.query_cosmos_distribution_params = void 0;
const types_1 = require("../../../types");
// Supported query interfaces - types/proto/cosmos/distribution/v1beta1/query.rpc.query.d.ts
// Supported tranasction interfaces - types/proto/cosmos/distribution/v1beta1/tx.rpc.msg.d.ts
//---------------------------------------------
// COSMOS::DISTRIBUTION MODULE - QUERY HELPERS
// --------------------------------------------
function query_cosmos_distribution_params(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.distribution.v1beta1.params(types_1.cosmos.distribution.v1beta1.QueryParamsRequest.fromPartial({}));
        return response;
    });
}
exports.query_cosmos_distribution_params = query_cosmos_distribution_params;
function query_cosmos_distribution_validator_outstanding_rewards(client, validatorAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.distribution.v1beta1.validatorOutstandingRewards(types_1.cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest.fromPartial({
            validatorAddress: validatorAddress,
        }));
        return response;
    });
}
exports.query_cosmos_distribution_validator_outstanding_rewards = query_cosmos_distribution_validator_outstanding_rewards;
function query_cosmos_distribution_validator_commission(client, validatorAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.distribution.v1beta1.validatorCommission(types_1.cosmos.distribution.v1beta1.QueryValidatorCommissionRequest.fromPartial({
            validatorAddress: validatorAddress,
        }));
        return response;
    });
}
exports.query_cosmos_distribution_validator_commission = query_cosmos_distribution_validator_commission;
function query_cosmos_distribution_validator_slashes(client, validatorAddress, startingHeight, endingHeight, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.distribution.v1beta1.validatorSlashes(types_1.cosmos.distribution.v1beta1.QueryValidatorSlashesRequest.fromPartial({
            validatorAddress: validatorAddress,
            startingHeight: startingHeight,
            endingHeight: endingHeight,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_cosmos_distribution_validator_slashes = query_cosmos_distribution_validator_slashes;
function query_cosmos_distribution_delegationRewards(client, delegatorAddress, validatorAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.distribution.v1beta1.delegationRewards(types_1.cosmos.distribution.v1beta1.QueryDelegationRewardsRequest.fromPartial({
            delegatorAddress,
            validatorAddress
        }));
        return response;
    });
}
exports.query_cosmos_distribution_delegationRewards = query_cosmos_distribution_delegationRewards;
function query_cosmos_distribution_delegation_total_rewards(client, delegatorAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.distribution.v1beta1.delegationTotalRewards(types_1.cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest.fromPartial({
            delegatorAddress,
        }));
        return response;
    });
}
exports.query_cosmos_distribution_delegation_total_rewards = query_cosmos_distribution_delegation_total_rewards;
function query_cosmos_distribution_delegator_validators(client, delegatorAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.distribution.v1beta1.delegatorValidators(types_1.cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest.fromPartial({
            delegatorAddress,
        }));
        return response;
    });
}
exports.query_cosmos_distribution_delegator_validators = query_cosmos_distribution_delegator_validators;
function query_cosmos_distribution_delegator_withdraw_address(client, delegatorAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.distribution.v1beta1.delegatorWithdrawAddress(types_1.cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest.fromPartial({
            delegatorAddress,
        }));
        return response;
    });
}
exports.query_cosmos_distribution_delegator_withdraw_address = query_cosmos_distribution_delegator_withdraw_address;
function query_cosmos_distribution_community_pool(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.distribution.v1beta1.communityPool(types_1.cosmos.distribution.v1beta1.QueryCommunityPoolRequest.fromPartial({}));
        return response;
    });
}
exports.query_cosmos_distribution_community_pool = query_cosmos_distribution_community_pool;
//---------------------------------------------
// COSMOS::DISTRIBUTION MODULE - TRANSACTION HELPERS
// --------------------------------------------
//MsgSetWithdrawAddress
function execute_cosmos_distribution_set_withdraw_address(delegatorAddress, withdrawAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.distribution.v1beta1.MsgSetWithdrawAddress.fromPartial({
            delegatorAddress,
            withdrawAddress,
        });
        return msg;
    });
}
exports.execute_cosmos_distribution_set_withdraw_address = execute_cosmos_distribution_set_withdraw_address;
// MsgWithdrawDelegatorReward
function execute_cosmos_distribution_withdraw_delegator_reward(delegatorAddress, validatorAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward.fromPartial({
            delegatorAddress,
            validatorAddress,
        });
        return msg;
    });
}
exports.execute_cosmos_distribution_withdraw_delegator_reward = execute_cosmos_distribution_withdraw_delegator_reward;
//MsgWithdrawValidatorCommission
function execute_cosmos_distribution_withdraw_validator_commission(validatorAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission.fromPartial({
            validatorAddress,
        });
        return msg;
    });
}
exports.execute_cosmos_distribution_withdraw_validator_commission = execute_cosmos_distribution_withdraw_validator_commission;
//MsgFundCommunityPool
function execute_cosmos_distribution_fund_community_pool(amount, depositor) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.distribution.v1beta1.MsgFundCommunityPool.fromPartial({
            amount,
            depositor,
        });
        return msg;
    });
}
exports.execute_cosmos_distribution_fund_community_pool = execute_cosmos_distribution_fund_community_pool;
