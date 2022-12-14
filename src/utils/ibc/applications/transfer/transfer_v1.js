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
exports.execute_ibc_applications_transfer_v1_transfer = exports.query_ibc_applications_transfer_v1_denomHash = exports.query_ibc_applications_transfer_v1_params = exports.query_ibc_applications_transfer_v1_denomTraces = exports.query_ibc_applications_transfer_v1_denomTrace = void 0;
const types_1 = require("../../../../../types");
// Supported query interfaces - types/proto/ibc/applications/transfer/v1/query.rpc.query.d.ts
//---------------------------------------------
// IBC::TRANSFER_V1 MODULE - QUERY HELPERS
// --------------------------------------------
function query_ibc_applications_transfer_v1_denomTrace(client, hash) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.applications.transfer.v1.denomTrace(types_1.ibc.applications.transfer.v1.QueryDenomTraceRequest.fromPartial({
            hash,
        }));
        return response;
    });
}
exports.query_ibc_applications_transfer_v1_denomTrace = query_ibc_applications_transfer_v1_denomTrace;
function query_ibc_applications_transfer_v1_denomTraces(client, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.applications.transfer.v1.denomTraces(types_1.ibc.applications.transfer.v1.QueryDenomTracesRequest.fromPartial({
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_ibc_applications_transfer_v1_denomTraces = query_ibc_applications_transfer_v1_denomTraces;
function query_ibc_applications_transfer_v1_params(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.applications.transfer.v1.params(types_1.ibc.applications.transfer.v1.QueryParamsRequest.fromPartial({}));
        return response;
    });
}
exports.query_ibc_applications_transfer_v1_params = query_ibc_applications_transfer_v1_params;
function query_ibc_applications_transfer_v1_denomHash(client, trace) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.applications.transfer.v1.denomHash(types_1.ibc.applications.transfer.v1.QueryDenomHashRequest.fromPartial({
            trace
        }));
        return response;
    });
}
exports.query_ibc_applications_transfer_v1_denomHash = query_ibc_applications_transfer_v1_denomHash;
// Supported transaction interfaces - types/proto/ibc/applications/transfer/v1/tx.rpc.msg.d.ts
//---------------------------------------------
// IBC::BANK MODULE - TRANSACTION HELPERS
// --------------------------------------------
//MsgTransfer
function execute_ibc_applications_transfer_v1_transfer(sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.ibc.applications.transfer.v1.MsgTransfer.fromPartial({
            sourcePort,
            sourceChannel,
            token,
            sender,
            receiver,
            timeoutHeight,
            timeoutTimestamp
        });
        return msg;
    });
}
exports.execute_ibc_applications_transfer_v1_transfer = execute_ibc_applications_transfer_v1_transfer;
