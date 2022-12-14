"use strict";
// Supported query interfaces - types/proto/osmosis/pool-incentives/v1beta1/query.rpc.query.d.ts
// Supported transaction interfaces - types/proto/osmosis/pool-incentives/v1beta1/superfactory/tx.rpc.msg.d.ts
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
exports.query_osmosis_pool_incentives_externalIncentiveGauges = exports.query_osmosis_pool_incentives_incentivizedPools = exports.query_osmosis_pool_incentives_lockableDurations = exports.query_osmosis_pool_incentives_params = exports.query_osmosis_pool_incentives_distrInfo = exports.query_osmosis_pool_incentives_gaugeIds = void 0;
//---------------------------------------------
// OSMOSIS::POOL-INCENTIVES MODULE - QUERY HELPERS
// --------------------------------------------
const types_1 = require("../../../types");
function query_osmosis_pool_incentives_gaugeIds(client, poolId) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.pool_incentives.v1beta1.gaugeIds(types_1.osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest.fromPartial({
            poolId,
        }));
        return response;
    });
}
exports.query_osmosis_pool_incentives_gaugeIds = query_osmosis_pool_incentives_gaugeIds;
function query_osmosis_pool_incentives_distrInfo(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.pool_incentives.v1beta1.distrInfo(types_1.osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest.fromPartial({}));
        return response;
    });
}
exports.query_osmosis_pool_incentives_distrInfo = query_osmosis_pool_incentives_distrInfo;
function query_osmosis_pool_incentives_params(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.pool_incentives.v1beta1.params(types_1.osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest.fromPartial({}));
        return response;
    });
}
exports.query_osmosis_pool_incentives_params = query_osmosis_pool_incentives_params;
function query_osmosis_pool_incentives_lockableDurations(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.pool_incentives.v1beta1.lockableDurations(types_1.osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest.fromPartial({}));
        return response;
    });
}
exports.query_osmosis_pool_incentives_lockableDurations = query_osmosis_pool_incentives_lockableDurations;
function query_osmosis_pool_incentives_incentivizedPools(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.pool_incentives.v1beta1.incentivizedPools(types_1.osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest.fromPartial({}));
        return response;
    });
}
exports.query_osmosis_pool_incentives_incentivizedPools = query_osmosis_pool_incentives_incentivizedPools;
function query_osmosis_pool_incentives_externalIncentiveGauges(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.pool_incentives.v1beta1.externalIncentiveGauges(types_1.osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest.fromPartial({}));
        return response;
    });
}
exports.query_osmosis_pool_incentives_externalIncentiveGauges = query_osmosis_pool_incentives_externalIncentiveGauges;
