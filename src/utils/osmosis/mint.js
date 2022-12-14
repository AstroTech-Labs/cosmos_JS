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
exports.query_osmosis_mint_epochProvisions = exports.query_osmosis_mint_params = void 0;
const types_1 = require("../../../types");
// Supported query interfaces - types/proto/osmosis/mint/v1beta1/query.rpc.query.d.ts
//---------------------------------------------
// OSMOSIS::MINT MODULE - QUERY HELPERS
// --------------------------------------------
function query_osmosis_mint_params(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.mint.v1beta1.params(types_1.osmosis.mint.v1beta1.QueryParamsRequest.fromPartial({}));
        return response;
    });
}
exports.query_osmosis_mint_params = query_osmosis_mint_params;
function query_osmosis_mint_epochProvisions(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.mint.v1beta1.epochProvisions(types_1.osmosis.mint.v1beta1.QueryEpochProvisionsRequest.fromPartial({}));
        return response;
    });
}
exports.query_osmosis_mint_epochProvisions = query_osmosis_mint_epochProvisions;
