"use strict";
// Supported query interfaces - types/proto/osmosis/txfees/v1beta1/query.rpc.query.d.ts
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
exports.query_osmosis_txfees_baseDenom = exports.query_osmosis_txfees_denomPoolId = exports.query_osmosis_txfees_denomSpotPrice = exports.query_osmosis_txfees_feeTokens = void 0;
//---------------------------------------------
// OSMOSIS::TXFEES MODULE - QUERY HELPERS
// --------------------------------------------
const types_1 = require("../../../types");
function query_osmosis_txfees_feeTokens(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.txfees.feeTokens(types_1.osmosis.txfees.v1beta1.QueryFeeTokensRequest.fromPartial({}));
        return response;
    });
}
exports.query_osmosis_txfees_feeTokens = query_osmosis_txfees_feeTokens;
function query_osmosis_txfees_denomSpotPrice(client, denom) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.txfees.denomSpotPrice(types_1.osmosis.txfees.v1beta1.QueryDenomSpotPriceRequest.fromPartial({
            denom
        }));
        return response;
    });
}
exports.query_osmosis_txfees_denomSpotPrice = query_osmosis_txfees_denomSpotPrice;
function query_osmosis_txfees_denomPoolId(client, denom) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.txfees.denomPoolId(types_1.osmosis.txfees.v1beta1.QueryDenomPoolIdRequest.fromPartial({
            denom
        }));
        return response;
    });
}
exports.query_osmosis_txfees_denomPoolId = query_osmosis_txfees_denomPoolId;
function query_osmosis_txfees_baseDenom(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.txfees.baseDenom(types_1.osmosis.txfees.v1beta1.QueryBaseDenomRequest.fromPartial({}));
        return response;
    });
}
exports.query_osmosis_txfees_baseDenom = query_osmosis_txfees_baseDenom;
