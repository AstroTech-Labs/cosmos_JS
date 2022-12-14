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
exports.execute_cosmos_authz_revoke = exports.execute_cosmos_authz_exec = exports.execute_cosmos_authz_grant = exports.query_cosmos_authz_grants = void 0;
const types_1 = require("../../../types");
// Supported query interfaces - types/proto/cosmos/authz/v1beta1/query.rpc.query.d.ts
// Supported tranasction interfaces - types/proto/cosmos/authz/v1beta1/tx.rpc.msg.d.ts
//---------------------------------------------
// COSMOS::AUTHZ MODULE - QUERY HELPERS
// --------------------------------------------
function query_cosmos_authz_grants(client, granter, grantee, msgTypeUrl, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.authz.v1beta1.grants(types_1.cosmos.authz.v1beta1.QueryGrantsRequest.fromPartial({
            granter: granter,
            grantee: grantee,
            msgTypeUrl: msgTypeUrl,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit })
        }));
        return response;
    });
}
exports.query_cosmos_authz_grants = query_cosmos_authz_grants;
//---------------------------------------------
// COSMOS::AUTHZ MODULE - TRANSACTION HELPERS
// --------------------------------------------
// MsgGrant
function execute_cosmos_authz_grant(granter, grantee, authorization, expiration) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.authz.v1beta1.MsgGrant.fromPartial({
            granter: granter,
            grantee: grantee,
            grant: types_1.cosmos.authz.v1beta1.Grant.fromPartial({
                authorization: authorization,
                expiration: expiration,
            })
        });
        return msg;
    });
}
exports.execute_cosmos_authz_grant = execute_cosmos_authz_grant;
// MsgExec
function execute_cosmos_authz_exec(grantee, msgs) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.authz.v1beta1.MsgExec.fromPartial({
            grantee: grantee,
            msgs: msgs,
        });
        return msg;
    });
}
exports.execute_cosmos_authz_exec = execute_cosmos_authz_exec;
// MsgRevoke
function execute_cosmos_authz_revoke(granter, grantee, msgTypeUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.authz.v1beta1.MsgRevoke.fromPartial({
            granter: granter,
            grantee: grantee,
            msgTypeUrl: msgTypeUrl,
        });
        return msg;
    });
}
exports.execute_cosmos_authz_revoke = execute_cosmos_authz_revoke;
