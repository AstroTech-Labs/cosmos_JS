"use strict";
// Supported query interfaces - types/proto/ibc/applications/interchain_accounts/controller/v1/query.rpc.query.d.ts
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
exports.query_ibc_applications_interchain_accounts_controller_params = void 0;
//---------------------------------------------
// IBC::CONTROLLER MODULE - QUERY HELPERS
// --------------------------------------------
const types_1 = require("../../../../../types");
function query_ibc_applications_interchain_accounts_controller_params(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.applications.interchain_accounts.controller.v1.params(types_1.ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest.fromPartial({}));
        return response;
    });
}
exports.query_ibc_applications_interchain_accounts_controller_params = query_ibc_applications_interchain_accounts_controller_params;
