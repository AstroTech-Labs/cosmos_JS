"use strict";
// Supported query interfaces - types/proto/osmosis/epochs/query.rpc.query.d.ts
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
exports.query_osmosis_epoch_currentEpoch = exports.query_osmosis_epoch_epochInfos = void 0;
//---------------------------------------------
// OSMOSIS::EPOCH MODULE - QUERY HELPERS
// --------------------------------------------
const types_1 = require("../../../types");
function query_osmosis_epoch_epochInfos(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.epoches.v1.epochInfos(types_1.osmosis.epochs.v1beta1.QueryEpochsInfoRequest.fromPartial({}));
        return response;
    });
}
exports.query_osmosis_epoch_epochInfos = query_osmosis_epoch_epochInfos;
function query_osmosis_epoch_currentEpoch(client, identifier) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.epoches.v1.currentEpoch(types_1.osmosis.epochs.v1beta1.QueryCurrentEpochRequest.fromPartial({ identifier: identifier }));
        return response;
    });
}
exports.query_osmosis_epoch_currentEpoch = query_osmosis_epoch_currentEpoch;
