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
exports.execute_osmosis_lockup_extendLockup = exports.execute_osmosis_lockup_beginUnlocking = exports.execute_osmosis_lockup_beginUnlockingAll = exports.execute_osmosis_lockup_lockTokens = exports.query_osmosis_lockup_accountLockedLongerDurationDenom = exports.query_osmosis_lockup_accountLockedLongerDurationNotUnlockingOnly = exports.query_osmosis_lockup_accountLockedDuration = exports.query_osmosis_lockup_accountLockedLongerDuration = exports.query_osmosis_lockup_syntheticLockupsByLockupID = exports.query_osmosis_lockup_lockedDenom = exports.query_osmosis_lockup_accountLockedPastTimeDenom = exports.query_osmosis_lockup_accountUnlockedBeforeTime = exports.query_osmosis_lockup_accountLockedPastTimeNotUnlockingOnly = exports.query_osmosis_lockup_accountLockedPastTime = exports.query_osmosis_lockup_accountLockedCoins = exports.query_osmosis_lockup_accountUnlockingCoins = exports.query_osmosis_lockup_accountUnlockableCoins = exports.query_osmosis_lockup_moduleLockedAmount = exports.query_osmosis_lockup_moduleBalance = void 0;
const types_1 = require("../../../types");
// Supported query interfaces - types/proto/osmosis/lockup/query.rpc.query.d.ts
// Supported transaction interfaces - types/proto/osmosis/lockup/tx.rpc.msg.d.ts
//---------------------------------------------
// OSMOSIS::LOCKUP MODULE - QUERY HELPERS
// --------------------------------------------
function query_osmosis_lockup_moduleBalance(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.lockup.v1.moduleBalance(types_1.osmosis.lockup.ModuleBalanceRequest.fromPartial({}));
        return response;
    });
}
exports.query_osmosis_lockup_moduleBalance = query_osmosis_lockup_moduleBalance;
function query_osmosis_lockup_moduleLockedAmount(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.lockup.v1.moduleLockedAmount(types_1.osmosis.lockup.ModuleLockedAmountRequest.fromPartial({}));
        return response;
    });
}
exports.query_osmosis_lockup_moduleLockedAmount = query_osmosis_lockup_moduleLockedAmount;
function query_osmosis_lockup_accountUnlockableCoins(client, owner) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.lockup.v1.accountUnlockableCoins(types_1.osmosis.lockup.AccountUnlockableCoinsRequest.fromPartial({
            owner
        }));
        return response;
    });
}
exports.query_osmosis_lockup_accountUnlockableCoins = query_osmosis_lockup_accountUnlockableCoins;
function query_osmosis_lockup_accountUnlockingCoins(client, owner) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.lockup.v1.accountUnlockingCoins(types_1.osmosis.lockup.AccountUnlockingCoinsRequest.fromPartial({
            owner
        }));
        return response;
    });
}
exports.query_osmosis_lockup_accountUnlockingCoins = query_osmosis_lockup_accountUnlockingCoins;
function query_osmosis_lockup_accountLockedCoins(client, owner) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.lockup.v1.accountLockedCoins(types_1.osmosis.lockup.AccountLockedCoinsRequest.fromPartial({
            owner
        }));
        return response;
    });
}
exports.query_osmosis_lockup_accountLockedCoins = query_osmosis_lockup_accountLockedCoins;
function query_osmosis_lockup_accountLockedPastTime(client, owner, timestamp) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.lockup.v1.accountLockedPastTime(types_1.osmosis.lockup.AccountLockedPastTimeRequest.fromPartial({
            owner,
            timestamp,
        }));
        return response;
    });
}
exports.query_osmosis_lockup_accountLockedPastTime = query_osmosis_lockup_accountLockedPastTime;
function query_osmosis_lockup_accountLockedPastTimeNotUnlockingOnly(client, owner, timestamp) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.lockup.v1.accountLockedPastTimeNotUnlockingOnly(types_1.osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyRequest.fromPartial({
            owner,
            timestamp,
        }));
        return response;
    });
}
exports.query_osmosis_lockup_accountLockedPastTimeNotUnlockingOnly = query_osmosis_lockup_accountLockedPastTimeNotUnlockingOnly;
function query_osmosis_lockup_accountUnlockedBeforeTime(client, owner, timestamp) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.lockup.v1.accountUnlockedBeforeTime(types_1.osmosis.lockup.AccountUnlockedBeforeTimeRequest.fromPartial({
            owner,
            timestamp,
        }));
        return response;
    });
}
exports.query_osmosis_lockup_accountUnlockedBeforeTime = query_osmosis_lockup_accountUnlockedBeforeTime;
function query_osmosis_lockup_accountLockedPastTimeDenom(client, owner, timestamp, denom) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.lockup.v1.accountLockedPastTimeDenom(types_1.osmosis.lockup.AccountLockedPastTimeDenomRequest.fromPartial({
            owner,
            timestamp,
            denom
        }));
        return response;
    });
}
exports.query_osmosis_lockup_accountLockedPastTimeDenom = query_osmosis_lockup_accountLockedPastTimeDenom;
function query_osmosis_lockup_lockedDenom(client, denom, duration) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.lockup.v1.lockedDenom(types_1.osmosis.lockup.LockedDenomRequest.fromPartial({
            denom,
            duration
        }));
        return response;
    });
}
exports.query_osmosis_lockup_lockedDenom = query_osmosis_lockup_lockedDenom;
function query_osmosis_lockup_syntheticLockupsByLockupID(client, lockId) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.lockup.v1.syntheticLockupsByLockupID(types_1.osmosis.lockup.SyntheticLockupsByLockupIDRequest.fromPartial({
            lockId
        }));
        return response;
    });
}
exports.query_osmosis_lockup_syntheticLockupsByLockupID = query_osmosis_lockup_syntheticLockupsByLockupID;
function query_osmosis_lockup_accountLockedLongerDuration(client, owner, duration) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.lockup.v1.accountLockedLongerDuration(types_1.osmosis.lockup.AccountLockedLongerDurationRequest.fromPartial({
            owner,
            duration
        }));
        return response;
    });
}
exports.query_osmosis_lockup_accountLockedLongerDuration = query_osmosis_lockup_accountLockedLongerDuration;
function query_osmosis_lockup_accountLockedDuration(client, owner, duration) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.lockup.v1.accountLockedDuration(types_1.osmosis.lockup.AccountLockedDurationRequest.fromPartial({
            owner,
            duration
        }));
        return response;
    });
}
exports.query_osmosis_lockup_accountLockedDuration = query_osmosis_lockup_accountLockedDuration;
function query_osmosis_lockup_accountLockedLongerDurationNotUnlockingOnly(client, owner, duration) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.lockup.v1.accountLockedLongerDurationNotUnlockingOnly(types_1.osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyRequest.fromPartial({
            owner,
            duration
        }));
        return response;
    });
}
exports.query_osmosis_lockup_accountLockedLongerDurationNotUnlockingOnly = query_osmosis_lockup_accountLockedLongerDurationNotUnlockingOnly;
function query_osmosis_lockup_accountLockedLongerDurationDenom(client, owner, duration, denom) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.lockup.v1.accountLockedLongerDurationDenom(types_1.osmosis.lockup.AccountLockedLongerDurationDenomRequest.fromPartial({
            owner,
            duration,
            denom
        }));
        return response;
    });
}
exports.query_osmosis_lockup_accountLockedLongerDurationDenom = query_osmosis_lockup_accountLockedLongerDurationDenom;
//---------------------------------------------
// OSMOSIS::LOCKUP MODULE - QUERY HELPERS
// --------------------------------------------
//MsgLockTokens
function execute_osmosis_lockup_lockTokens(owner, duration, coins) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.lockup.MsgLockTokens.fromPartial({
            owner,
            duration,
            coins
        });
        return msg;
    });
}
exports.execute_osmosis_lockup_lockTokens = execute_osmosis_lockup_lockTokens;
//MsgBeginUnlockingAll
function execute_osmosis_lockup_beginUnlockingAll(owner) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.lockup.MsgBeginUnlockingAll.fromPartial({
            owner,
        });
        return msg;
    });
}
exports.execute_osmosis_lockup_beginUnlockingAll = execute_osmosis_lockup_beginUnlockingAll;
//MsgBeginUnlocking
function execute_osmosis_lockup_beginUnlocking(owner, ID, coins) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.lockup.MsgBeginUnlocking.fromPartial({
            owner,
            ID,
            coins
        });
        return msg;
    });
}
exports.execute_osmosis_lockup_beginUnlocking = execute_osmosis_lockup_beginUnlocking;
//MsgExtendLockup
function execute_osmosis_lockup_extendLockup(owner, ID) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.lockup.MsgExtendLockup.fromPartial({
            owner,
            ID,
        });
        return msg;
    });
}
exports.execute_osmosis_lockup_extendLockup = execute_osmosis_lockup_extendLockup;
