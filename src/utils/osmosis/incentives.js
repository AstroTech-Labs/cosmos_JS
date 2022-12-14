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
exports.execute_osmosis_incentives_add_to_gauge = exports.execute_osmosis_incentives_create_gauge = exports.query_osmosis_incentives_lockableDurations = exports.query_osmosis_incentives_rewardsEst = exports.query_osmosis_incentives_upcomingGaugesPerDenom = exports.query_osmosis_incentives_upcomingGauges = exports.query_osmosis_incentives_activeGaugesPerDenom = exports.query_osmosis_incentives_activeGauges = exports.query_osmosis_incentives_gauges = exports.query_osmosis_incentives_gaugeByID = exports.query_osmosis_incentives_moduleDistributedCoins = exports.query_osmosis_incentives_moduleToDistributeCoins = void 0;
const types_1 = require("../../../types");
// Supported query interfaces - types/proto/osmosis/incentives/query.rpc.query.d.ts
// Supported transaction interfaces - types/proto/osmosis/incentives/tx.rpc.msg.d.ts
//---------------------------------------------
// OSMOSIS::INCENTIVES MODULE - QUERY HELPERS
// --------------------------------------------
function query_osmosis_incentives_moduleToDistributeCoins(client) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(types_1.osmosis.incentives);
        let response = yield client.query.osmosis.incentives.v1.moduleToDistributeCoins(types_1.osmosis.incentives.ModuleToDistributeCoinsRequest.fromPartial({}));
        return response;
    });
}
exports.query_osmosis_incentives_moduleToDistributeCoins = query_osmosis_incentives_moduleToDistributeCoins;
function query_osmosis_incentives_moduleDistributedCoins(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.incentives.v1.moduleDistributedCoins(types_1.osmosis.incentives.ModuleDistributedCoinsRequest.fromPartial({}));
        return response;
    });
}
exports.query_osmosis_incentives_moduleDistributedCoins = query_osmosis_incentives_moduleDistributedCoins;
function query_osmosis_incentives_gaugeByID(client, id) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.incentives.v1.gaugeByID(types_1.osmosis.incentives.GaugeByIDRequest.fromPartial({ id: id }));
        return response;
    });
}
exports.query_osmosis_incentives_gaugeByID = query_osmosis_incentives_gaugeByID;
function query_osmosis_incentives_gauges(client, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.incentives.v1.gauges(types_1.osmosis.incentives.GaugesRequest.fromPartial({
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit })
        }));
        return response;
    });
}
exports.query_osmosis_incentives_gauges = query_osmosis_incentives_gauges;
function query_osmosis_incentives_activeGauges(client, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.incentives.v1.activeGauges(types_1.osmosis.incentives.ActiveGaugesRequest.fromPartial({
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit })
        }));
        return response;
    });
}
exports.query_osmosis_incentives_activeGauges = query_osmosis_incentives_activeGauges;
function query_osmosis_incentives_activeGaugesPerDenom(client, denom, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.incentives.v1.activeGaugesPerDenom(types_1.osmosis.incentives.ActiveGaugesPerDenomRequest.fromPartial({
            denom: denom,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit })
        }));
        return response;
    });
}
exports.query_osmosis_incentives_activeGaugesPerDenom = query_osmosis_incentives_activeGaugesPerDenom;
function query_osmosis_incentives_upcomingGauges(client, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.incentives.v1.upcomingGauges(types_1.osmosis.incentives.UpcomingGaugesRequest.fromPartial({
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit })
        }));
        return response;
    });
}
exports.query_osmosis_incentives_upcomingGauges = query_osmosis_incentives_upcomingGauges;
function query_osmosis_incentives_upcomingGaugesPerDenom(client, denom, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.incentives.v1.upcomingGaugesPerDenom(types_1.osmosis.incentives.UpcomingGaugesPerDenomRequest.fromPartial({
            denom: denom,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit })
        }));
        return response;
    });
}
exports.query_osmosis_incentives_upcomingGaugesPerDenom = query_osmosis_incentives_upcomingGaugesPerDenom;
function query_osmosis_incentives_rewardsEst(client, owner, lockIds, endEpoch) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.incentives.v1.rewardsEst(types_1.osmosis.incentives.RewardsEstRequest.fromPartial({ owner: owner, lockIds: lockIds, endEpoch: endEpoch }));
        return response;
    });
}
exports.query_osmosis_incentives_rewardsEst = query_osmosis_incentives_rewardsEst;
function query_osmosis_incentives_lockableDurations(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.incentives.v1.lockableDurations(types_1.osmosis.incentives.QueryLockableDurationsRequest.fromPartial({}));
        return response;
    });
}
exports.query_osmosis_incentives_lockableDurations = query_osmosis_incentives_lockableDurations;
//---------------------------------------------
// OSMOSIS::INCENTIVES MODULE - TRANSACTION HELPERS
// --------------------------------------------
//MsgCreateGauge
function execute_osmosis_incentives_create_gauge(isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.incentives.MsgCreateGauge.fromPartial({
            isPerpetual,
            owner,
            distributeTo,
            coins,
            startTime,
            numEpochsPaidOver
        });
        return msg;
    });
}
exports.execute_osmosis_incentives_create_gauge = execute_osmosis_incentives_create_gauge;
//MsgAddToGauge
function execute_osmosis_incentives_add_to_gauge(owner, gaugeId, rewards) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.incentives.MsgAddToGauge.fromPartial({
            owner,
            gaugeId,
            rewards
        });
        return msg;
    });
}
exports.execute_osmosis_incentives_add_to_gauge = execute_osmosis_incentives_add_to_gauge;
