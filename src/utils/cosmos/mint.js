"use strict";
// Supported query interfaces - types/proto/cosmos/mint/v1beta1/query.rpc.query.d.ts
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
exports.query_cosmos_mint_annual_provisions = exports.query_cosmos_mint_inflation = exports.query_cosmos_mint_params = void 0;
//---------------------------------------------
// COSMOS::MINT MODULE - QUERY HELPERS
// --------------------------------------------
const types_1 = require("../../../types");
function query_cosmos_mint_params(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.mint.v1beta1.params(types_1.cosmos.mint.v1beta1.QueryParamsRequest.fromPartial({}));
        return response;
    });
}
exports.query_cosmos_mint_params = query_cosmos_mint_params;
function query_cosmos_mint_inflation(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.mint.v1beta1.inflation(types_1.cosmos.mint.v1beta1.QueryInflationRequest.fromPartial({}));
        return response;
    });
}
exports.query_cosmos_mint_inflation = query_cosmos_mint_inflation;
function query_cosmos_mint_annual_provisions(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.mint.v1beta1.annualProvisions(types_1.cosmos.mint.v1beta1.QueryAnnualProvisionsRequest.fromPartial({}));
        return response;
    });
}
exports.query_cosmos_mint_annual_provisions = query_cosmos_mint_annual_provisions;
