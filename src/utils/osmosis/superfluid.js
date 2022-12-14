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
exports.execute_osmosis_superfluid_unPoolWhitelistedPool = exports.execute_osmosis_superfluid_lockAndSuperfluidDelegate = exports.execute_osmosis_superfluid_superfluidUnbondLock = exports.execute_osmosis_superfluid_superfluidUndelegate = exports.execute_osmosis_superfluid_superfluidDelegate = exports.query_osmosis_superfluid_estimateSuperfluidDelegatedAmountByValidatorDenom = exports.query_osmosis_superfluid_superfluidDelegationsByValidatorDenom = exports.query_osmosis_superfluid_superfluidDelegationsByDelegator = exports.query_osmosis_superfluid_superfluidUndelegationsByDelegator = exports.query_osmosis_superfluid_superfluidDelegationAmount = exports.query_osmosis_superfluid_totalSuperfluidDelegations = exports.query_osmosis_superfluid_connectedIntermediaryAccountr = exports.query_osmosis_superfluid_allIntermediaryAccounts = exports.query_osmosis_superfluid_assetMultiplier = exports.query_osmosis_superfluid_allAssets = exports.query_osmosis_superfluid_assetType = exports.query_osmosis_superfluid_params = void 0;
const types_1 = require("../../../types");
// Supported query interfaces - types/proto/osmosis/superfluid/query.rpc.query.d.ts
// Supported transaction interfaces - types/proto/osmosis/superfluid/tx.rpc.msg.d.ts
//---------------------------------------------
// OSMOSIS::SUPERFLUID MODULE - QUERY HELPERS
// --------------------------------------------
function query_osmosis_superfluid_params(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.superfluid.params(types_1.osmosis.superfluid.QueryParamsRequest.fromPartial({}));
        return response;
    });
}
exports.query_osmosis_superfluid_params = query_osmosis_superfluid_params;
function query_osmosis_superfluid_assetType(client, denom) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.superfluid.assetType(types_1.osmosis.superfluid.AllAssetsRequest.fromPartial({
            denom,
        }));
        return response;
    });
}
exports.query_osmosis_superfluid_assetType = query_osmosis_superfluid_assetType;
function query_osmosis_superfluid_allAssets(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.superfluid.allAssets(types_1.osmosis.superfluid.AllAssetsRequest.fromPartial({}));
        return response;
    });
}
exports.query_osmosis_superfluid_allAssets = query_osmosis_superfluid_allAssets;
function query_osmosis_superfluid_assetMultiplier(client, denom) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.superfluid.assetMultiplier(types_1.osmosis.superfluid.AssetMultiplierRequest.fromPartial({
            denom,
        }));
        return response;
    });
}
exports.query_osmosis_superfluid_assetMultiplier = query_osmosis_superfluid_assetMultiplier;
function query_osmosis_superfluid_allIntermediaryAccounts(client, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.superfluid.allIntermediaryAccounts(types_1.osmosis.superfluid.AllIntermediaryAccountsRequest.fromPartial({
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_osmosis_superfluid_allIntermediaryAccounts = query_osmosis_superfluid_allIntermediaryAccounts;
function query_osmosis_superfluid_connectedIntermediaryAccountr(client, denom) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.superfluid.connectedIntermediaryAccount(types_1.osmosis.superfluid.AssetMultiplierRequest.fromPartial({
            denom,
        }));
        return response;
    });
}
exports.query_osmosis_superfluid_connectedIntermediaryAccountr = query_osmosis_superfluid_connectedIntermediaryAccountr;
function query_osmosis_superfluid_totalSuperfluidDelegations(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.superfluid.totalSuperfluidDelegations(types_1.osmosis.superfluid.TotalSuperfluidDelegationsRequest.fromPartial({}));
        return response;
    });
}
exports.query_osmosis_superfluid_totalSuperfluidDelegations = query_osmosis_superfluid_totalSuperfluidDelegations;
function query_osmosis_superfluid_superfluidDelegationAmount(client, delegatorAddress, validatorAddress, denom) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.superfluid.superfluidDelegationAmount(types_1.osmosis.superfluid.SuperfluidDelegationAmountRequest.fromPartial({
            delegatorAddress,
            validatorAddress,
            denom,
        }));
        return response;
    });
}
exports.query_osmosis_superfluid_superfluidDelegationAmount = query_osmosis_superfluid_superfluidDelegationAmount;
function query_osmosis_superfluid_superfluidUndelegationsByDelegator(client, delegatorAddress, denom) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.superfluid.superfluidUndelegationsByDelegator(types_1.osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest.fromPartial({
            delegatorAddress,
            denom,
        }));
        return response;
    });
}
exports.query_osmosis_superfluid_superfluidUndelegationsByDelegator = query_osmosis_superfluid_superfluidUndelegationsByDelegator;
function query_osmosis_superfluid_superfluidDelegationsByDelegator(client, delegatorAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.superfluid.superfluidDelegationsByDelegator(types_1.osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest.fromPartial({
            delegatorAddress,
        }));
        return response;
    });
}
exports.query_osmosis_superfluid_superfluidDelegationsByDelegator = query_osmosis_superfluid_superfluidDelegationsByDelegator;
function query_osmosis_superfluid_superfluidDelegationsByValidatorDenom(client, validatorAddress, denom) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.superfluid.superfluidDelegationsByValidatorDenom(types_1.osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest.fromPartial({
            validatorAddress,
            denom,
        }));
        return response;
    });
}
exports.query_osmosis_superfluid_superfluidDelegationsByValidatorDenom = query_osmosis_superfluid_superfluidDelegationsByValidatorDenom;
function query_osmosis_superfluid_estimateSuperfluidDelegatedAmountByValidatorDenom(client, validatorAddress, denom) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.superfluid.estimateSuperfluidDelegatedAmountByValidatorDenom(types_1.osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.fromPartial({
            validatorAddress,
            denom,
        }));
        return response;
    });
}
exports.query_osmosis_superfluid_estimateSuperfluidDelegatedAmountByValidatorDenom = query_osmosis_superfluid_estimateSuperfluidDelegatedAmountByValidatorDenom;
//---------------------------------------------
// OSMOSIS::SUPERFLUID MODULE - TRANSACTION HELPERS
// --------------------------------------------
//MsgSuperfluidDelegate
function execute_osmosis_superfluid_superfluidDelegate(sender, lockId, valAddr) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.superfluid.MsgSuperfluidDelegate.fromPartial({
            sender,
            lockId,
            valAddr
        });
        return msg;
    });
}
exports.execute_osmosis_superfluid_superfluidDelegate = execute_osmosis_superfluid_superfluidDelegate;
//MsgSuperfluidUndelegate
function execute_osmosis_superfluid_superfluidUndelegate(sender, lockId) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.superfluid.MsgSuperfluidUndelegate.fromPartial({
            sender,
            lockId,
        });
        return msg;
    });
}
exports.execute_osmosis_superfluid_superfluidUndelegate = execute_osmosis_superfluid_superfluidUndelegate;
//MsgSuperfluidUnbondLock
function execute_osmosis_superfluid_superfluidUnbondLock(sender, lockId) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.superfluid.MsgSuperfluidUnbondLock.fromPartial({
            sender,
            lockId,
        });
        return msg;
    });
}
exports.execute_osmosis_superfluid_superfluidUnbondLock = execute_osmosis_superfluid_superfluidUnbondLock;
//MsgLockAndSuperfluidDelegate
function execute_osmosis_superfluid_lockAndSuperfluidDelegate(sender, coins, valAddr) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.superfluid.MsgLockAndSuperfluidDelegate.fromPartial({
            sender,
            coins,
            valAddr
        });
        return msg;
    });
}
exports.execute_osmosis_superfluid_lockAndSuperfluidDelegate = execute_osmosis_superfluid_lockAndSuperfluidDelegate;
//MsgUnPoolWhitelistedPool
function execute_osmosis_superfluid_unPoolWhitelistedPool(sender, poolId) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.superfluid.MsgUnPoolWhitelistedPool.fromPartial({
            sender,
            poolId,
        });
        return msg;
    });
}
exports.execute_osmosis_superfluid_unPoolWhitelistedPool = execute_osmosis_superfluid_unPoolWhitelistedPool;
