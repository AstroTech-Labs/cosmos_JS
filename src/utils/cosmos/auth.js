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
exports.query_cosmos_auth_params = exports.query_cosmos_auth_accounts = exports.query_cosmos_auth_account = void 0;
const types_1 = require("../../../types");
//Supported query interfaces - types/proto/cosmos/auth/v1beta1/query.rpc.query.d.ts
//---------------------------------------------
// COSMOS::AUTH MODULE - QUERY HELPERS
// --------------------------------------------
function query_cosmos_auth_account(client, address) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.auth.v1beta1.account(types_1.cosmos.auth.v1beta1.QueryAccountRequest.fromPartial({
            address: address
        }));
        return response;
    });
}
exports.query_cosmos_auth_account = query_cosmos_auth_account;
function query_cosmos_auth_accounts(client, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.auth.v1beta1.accounts(types_1.cosmos.auth.v1beta1.QueryAccountsRequest.fromPartial({
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit })
        }));
        return response;
    });
}
exports.query_cosmos_auth_accounts = query_cosmos_auth_accounts;
function query_cosmos_auth_params(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.auth.v1beta1.params(types_1.cosmos.auth.v1beta1.QueryParamsRequest.fromPartial({}));
        return response;
    });
}
exports.query_cosmos_auth_params = query_cosmos_auth_params;
