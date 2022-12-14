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
exports.execute_cosmos_feegrant_revoke_allowance = exports.execute_cosmos_feegrant_grant_allowance = exports.query_cosmos_feegrant_allowances = exports.query_cosmos_feegrant_allowance = void 0;
const types_1 = require("../../../types");
// Supported query interfaces - types/proto/cosmos/feegrant/v1beta1/query.rpc.query.d.ts
// Supported tranasction interfaces - types/proto/cosmos/feegrant/v1beta1/tx.rpc.msg.d.ts
//---------------------------------------------
// COSMOS::FEEGRANT MODULE - QUERY HELPERS
// --------------------------------------------
function query_cosmos_feegrant_allowance(client, granter, grantee) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.feegrant.v1beta1.allowance(types_1.cosmos.feegrant.v1beta1.QueryAllowanceRequest.fromPartial({
            granter,
            grantee,
        }));
        return response;
    });
}
exports.query_cosmos_feegrant_allowance = query_cosmos_feegrant_allowance;
function query_cosmos_feegrant_allowances(client, grantee, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.feegrant.v1beta1.allowances(types_1.cosmos.feegrant.v1beta1.QueryAllowancesRequest.fromPartial({
            grantee,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit })
        }));
        return response;
    });
}
exports.query_cosmos_feegrant_allowances = query_cosmos_feegrant_allowances;
//---------------------------------------------
// COSMOS::FEEGRANT MODULE - TRANSACTION HELPERS
// --------------------------------------------
//MsgGrantAllowance
function execute_cosmos_feegrant_grant_allowance(granter, grantee, allowance) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.feegrant.v1beta1.MsgGrantAllowance.fromPartial({
            granter,
            grantee,
            allowance,
        });
        return msg;
    });
}
exports.execute_cosmos_feegrant_grant_allowance = execute_cosmos_feegrant_grant_allowance;
//MsgRevokeAllowance
function execute_cosmos_feegrant_revoke_allowance(granter, grantee) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.feegrant.v1beta1.MsgRevokeAllowance.fromPartial({
            granter,
            grantee,
        });
        return msg;
    });
}
exports.execute_cosmos_feegrant_revoke_allowance = execute_cosmos_feegrant_revoke_allowance;
