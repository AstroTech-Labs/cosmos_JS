"use strict";
// Supported query interfaces - types/proto/cosmos/upgrade/v1beta1/query.rpc.query.d.ts
// Supported transaction interfaces - types/proto/cosmos/upgrade/v1beta1/tx.rpc.msg.d.ts
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
exports.query_cosmos_upgrade_module_versions = exports.query_cosmos_upgrade_upgraded_consensus_state = exports.query_cosmos_upgrade_applied_plan = exports.query_cosmos_upgrade_current_plan = void 0;
//---------------------------------------------
// COSMOS::UPGRADE MODULE - QUERY HELPERS
// --------------------------------------------
const types_1 = require("../../../types");
function query_cosmos_upgrade_current_plan(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.upgrage.v1beta1.currentPlan(types_1.cosmos.upgrade.v1beta1.QueryCurrentPlanRequest.fromPartial({}));
        return response;
    });
}
exports.query_cosmos_upgrade_current_plan = query_cosmos_upgrade_current_plan;
function query_cosmos_upgrade_applied_plan(client, name) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.upgrage.v1beta1.appliedPlan(types_1.cosmos.upgrade.v1beta1.QueryAppliedPlanRequest.fromPartial({
            name,
        }));
        return response;
    });
}
exports.query_cosmos_upgrade_applied_plan = query_cosmos_upgrade_applied_plan;
function query_cosmos_upgrade_upgraded_consensus_state(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.upgrage.v1beta1.upgradedConsensusState(types_1.cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest.fromPartial({}));
        return response;
    });
}
exports.query_cosmos_upgrade_upgraded_consensus_state = query_cosmos_upgrade_upgraded_consensus_state;
function query_cosmos_upgrade_module_versions(client, moduleName) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.upgrage.v1beta1.moduleVersions(types_1.cosmos.upgrade.v1beta1.QueryModuleVersionsRequest.fromPartial({
            moduleName,
        }));
        return response;
    });
}
exports.query_cosmos_upgrade_module_versions = query_cosmos_upgrade_module_versions;
