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
exports.execute_cosmos_staking_undelegate = exports.execute_cosmos_staking_begin_redelegate = exports.execute_cosmos_staking_delegate = exports.execute_cosmos_staking_edit_validator = exports.execute_cosmos_staking_create_validator = exports.query_cosmos_staking_params = exports.query_cosmos_staking_pool = exports.query_cosmos_staking_historical_info = exports.query_cosmos_staking_delegator_validator = exports.query_cosmos_staking_delegator_validators = exports.query_cosmos_staking_redelegations = exports.query_cosmos_staking_delegator_unbonding_delegations = exports.query_cosmos_staking_delegator_delegations = exports.query_cosmos_staking_unbonding_delegation = exports.query_cosmos_staking_delegation = exports.query_cosmos_staking_validator_unbonding_delegations = exports.query_cosmos_staking_validator_delegations = exports.query_cosmos_staking_validator = exports.query_cosmos_staking_validators = void 0;
const types_1 = require("../../../types");
// Supported query interfaces - types/proto/cosmos/staking/v1beta1/query.rpc.query.d.ts
// Supported transaction interfaces - types/proto/cosmos/staking/v1beta1/tx.rpc.msg.d.ts
//---------------------------------------------
// COSMOS::STAKING MODULE - QUERY HELPERS
// --------------------------------------------
function query_cosmos_staking_validators(client, status, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.staking.v1beta1.validators(types_1.cosmos.staking.v1beta1.QueryValidatorsRequest.fromPartial({
            status: status,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_cosmos_staking_validators = query_cosmos_staking_validators;
function query_cosmos_staking_validator(client, validatorAddr) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.staking.v1beta1.validator(types_1.cosmos.staking.v1beta1.QueryValidatorRequest.fromPartial({
            validatorAddr: validatorAddr,
        }));
        return response;
    });
}
exports.query_cosmos_staking_validator = query_cosmos_staking_validator;
function query_cosmos_staking_validator_delegations(client, validatorAddr, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.staking.v1beta1.validatorDelegations(types_1.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest.fromPartial({
            validatorAddr: validatorAddr,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_cosmos_staking_validator_delegations = query_cosmos_staking_validator_delegations;
function query_cosmos_staking_validator_unbonding_delegations(client, validatorAddr, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.staking.v1beta1.validatorUnbondingDelegations(types_1.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest.fromPartial({
            validatorAddr: validatorAddr,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_cosmos_staking_validator_unbonding_delegations = query_cosmos_staking_validator_unbonding_delegations;
function query_cosmos_staking_delegation(client, delegatorAddr, validatorAddr) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.staking.v1beta1.delegation(types_1.cosmos.staking.v1beta1.QueryDelegationRequest.fromPartial({
            validatorAddr: validatorAddr,
            delegatorAddr: delegatorAddr,
        }));
        return response;
    });
}
exports.query_cosmos_staking_delegation = query_cosmos_staking_delegation;
function query_cosmos_staking_unbonding_delegation(client, delegatorAddr, validatorAddr) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.staking.v1beta1.unbondingDelegation(types_1.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest.fromPartial({
            validatorAddr: validatorAddr,
            delegatorAddr: delegatorAddr,
        }));
        return response;
    });
}
exports.query_cosmos_staking_unbonding_delegation = query_cosmos_staking_unbonding_delegation;
function query_cosmos_staking_delegator_delegations(client, delegatorAddr, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.staking.v1beta1.delegatorDelegations(types_1.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest.fromPartial({
            delegatorAddr: delegatorAddr,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_cosmos_staking_delegator_delegations = query_cosmos_staking_delegator_delegations;
function query_cosmos_staking_delegator_unbonding_delegations(client, delegatorAddr, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.staking.v1beta1.delegatorUnbondingDelegations(types_1.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest.fromPartial({
            delegatorAddr: delegatorAddr,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_cosmos_staking_delegator_unbonding_delegations = query_cosmos_staking_delegator_unbonding_delegations;
function query_cosmos_staking_redelegations(client, delegatorAddr, srcValidatorAddr, dstValidatorAddr, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.staking.v1beta1.redelegations(types_1.cosmos.staking.v1beta1.QueryRedelegationsRequest.fromPartial({
            delegatorAddr: delegatorAddr,
            srcValidatorAddr: srcValidatorAddr,
            dstValidatorAddr: dstValidatorAddr,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_cosmos_staking_redelegations = query_cosmos_staking_redelegations;
//delegatorValidators
function query_cosmos_staking_delegator_validators(client, delegatorAddr, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.staking.v1beta1.delegatorValidators(types_1.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest.fromPartial({
            delegatorAddr: delegatorAddr,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_cosmos_staking_delegator_validators = query_cosmos_staking_delegator_validators;
function query_cosmos_staking_delegator_validator(client, delegatorAddr, validatorAddr) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.staking.v1beta1.delegatorValidator(types_1.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest.fromPartial({
            delegatorAddr: delegatorAddr,
            validatorAddr: validatorAddr,
        }));
        return response;
    });
}
exports.query_cosmos_staking_delegator_validator = query_cosmos_staking_delegator_validator;
function query_cosmos_staking_historical_info(client, height) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.staking.v1beta1.historicalInfo(types_1.cosmos.staking.v1beta1.QueryHistoricalInfoRequest.fromPartial({
            height: height,
        }));
        return response;
    });
}
exports.query_cosmos_staking_historical_info = query_cosmos_staking_historical_info;
function query_cosmos_staking_pool(client, poolId) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.staking.v1beta1.pool(types_1.cosmos.staking.v1beta1.QueryPoolRequest.fromPartial({
            poolId: poolId,
        }));
        return response;
    });
}
exports.query_cosmos_staking_pool = query_cosmos_staking_pool;
function query_cosmos_staking_params(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.staking.v1beta1.params(types_1.cosmos.staking.v1beta1.QueryParamsRequest.fromPartial({}));
        return response;
    });
}
exports.query_cosmos_staking_params = query_cosmos_staking_params;
//---------------------------------------------
// COSMOS::STAKING MODULE - TRANSACTION HELPERS
// --------------------------------------------
//MsgCreateValidator
function execute_cosmos_staking_create_validator(description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.staking.v1beta1.MsgCreateValidator.fromPartial({
            description,
            commission,
            minSelfDelegation,
            delegatorAddress,
            validatorAddress,
            pubkey,
            value,
        });
        return msg;
    });
}
exports.execute_cosmos_staking_create_validator = execute_cosmos_staking_create_validator;
//MsgEditValidator
function execute_cosmos_staking_edit_validator(description, validatorAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.staking.v1beta1.MsgEditValidator.fromPartial({
            description,
            validatorAddress,
        });
        return msg;
    });
}
exports.execute_cosmos_staking_edit_validator = execute_cosmos_staking_edit_validator;
//MsgDelegate
function execute_cosmos_staking_delegate(delegatorAddress, validatorAddress, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.staking.v1beta1.MsgDelegate.fromPartial({
            delegatorAddress,
            validatorAddress,
            amount,
        });
        return msg;
    });
}
exports.execute_cosmos_staking_delegate = execute_cosmos_staking_delegate;
function execute_cosmos_staking_begin_redelegate(delegatorAddress, validatorSrcAddress, validatorDstAddress, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.staking.v1beta1.MsgBeginRedelegate.fromPartial({
            delegatorAddress,
            validatorSrcAddress,
            validatorDstAddress,
            amount,
        });
        return msg;
    });
}
exports.execute_cosmos_staking_begin_redelegate = execute_cosmos_staking_begin_redelegate;
function execute_cosmos_staking_undelegate(delegatorAddress, validatorAddress, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.staking.v1beta1.MsgUndelegate.fromPartial({
            delegatorAddress,
            validatorAddress,
            amount,
        });
        return msg;
    });
}
exports.execute_cosmos_staking_undelegate = execute_cosmos_staking_undelegate;
