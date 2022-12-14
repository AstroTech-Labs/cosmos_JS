"use strict";
// Supported query interfaces - types/proto/cosmos/slashing/v1beta1/query.rpc.query.d.ts
// Supported transaction interfaces - types/proto/cosmos/slashing/v1beta1/tx.rpc.msg.d.ts
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
exports.execute_cosmos_slashing_unjail = exports.query_cosmos_slashing_signing_infos = exports.query_cosmos_slashing_signing_info = exports.query_cosmos_slashing_params = void 0;
//---------------------------------------------
// COSMOS::SLASHING MODULE - QUERY HELPERS
// --------------------------------------------
const types_1 = require("../../../types");
function query_cosmos_slashing_params(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.slashing.v1beta1.params(types_1.cosmos.slashing.v1beta1.QueryParamsRequest.fromPartial({}));
        return response;
    });
}
exports.query_cosmos_slashing_params = query_cosmos_slashing_params;
function query_cosmos_slashing_signing_info(client, consAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.slashing.v1beta1.signingInfo(types_1.cosmos.slashing.v1beta1.QuerySigningInfoRequest.fromPartial({
            consAddress,
        }));
        return response;
    });
}
exports.query_cosmos_slashing_signing_info = query_cosmos_slashing_signing_info;
function query_cosmos_slashing_signing_infos(client, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.slashing.v1beta1.signingInfos(types_1.cosmos.slashing.v1beta1.QuerySigningInfosRequest.fromPartial({
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_cosmos_slashing_signing_infos = query_cosmos_slashing_signing_infos;
//---------------------------------------------
// COSMOS::SLASHING MODULE - TRANSACTION HELPERS
// --------------------------------------------
//MsgUnjail
function execute_cosmos_slashing_unjail(validatorAddr) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.slashing.v1beta1.MsgUnjail.fromPartial({
            validatorAddr,
        });
        return msg;
    });
}
exports.execute_cosmos_slashing_unjail = execute_cosmos_slashing_unjail;
