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
exports.execute_osmosis_tokenfactory_changeAdmin = exports.execute_osmosis_tokenfactory_burn = exports.execute_osmosis_tokenfactory_mint = exports.execute_osmosis_tokenfactory_createDenom = exports.query_osmosis_tokenfactory_denomsFromCreator = exports.query_osmosis_tokenfactory_denomAuthorityMetadata = exports.query_osmosis_tokenfactory_params = void 0;
const types_1 = require("../../../types");
// Supported query interfaces - types/proto/osmosis/tokenfactory/v1beta1/query.rpc.query.d.ts
// Supported transaction interfaces - types/proto/osmosis/tokenfactory/v1beta1/tx.rpc.msg.d.ts
//---------------------------------------------
// OSMOSIS::TOKENFACTORY MODULE - QUERY HELPERS
// --------------------------------------------
function query_osmosis_tokenfactory_params(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.tokenfactory.params(types_1.osmosis.tokenfactory.v1beta1.QueryParamsRequest.fromPartial({}));
        return response;
    });
}
exports.query_osmosis_tokenfactory_params = query_osmosis_tokenfactory_params;
function query_osmosis_tokenfactory_denomAuthorityMetadata(client, denom) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.tokenfactory.denomAuthorityMetadata(types_1.osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest.fromPartial({
            denom,
        }));
        return response;
    });
}
exports.query_osmosis_tokenfactory_denomAuthorityMetadata = query_osmosis_tokenfactory_denomAuthorityMetadata;
function query_osmosis_tokenfactory_denomsFromCreator(client, creator) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.tokenfactory.denomsFromCreator(types_1.osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest.fromPartial({
            creator,
        }));
        return response;
    });
}
exports.query_osmosis_tokenfactory_denomsFromCreator = query_osmosis_tokenfactory_denomsFromCreator;
//---------------------------------------------
// OSMOSIS::TOKENFACTORY MODULE - TRANSACTION HELPERS
// --------------------------------------------
//MsgCreateDenom
function execute_osmosis_tokenfactory_createDenom(sender, subdenom) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.tokenfactory.v1beta1.MsgCreateDenom.fromPartial({
            sender,
            subdenom,
        });
        return msg;
    });
}
exports.execute_osmosis_tokenfactory_createDenom = execute_osmosis_tokenfactory_createDenom;
//MsgMint
function execute_osmosis_tokenfactory_mint(sender, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.tokenfactory.v1beta1.MsgMint.fromPartial({
            sender,
            amount,
        });
        return msg;
    });
}
exports.execute_osmosis_tokenfactory_mint = execute_osmosis_tokenfactory_mint;
//MsgBurn
function execute_osmosis_tokenfactory_burn(sender, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.tokenfactory.v1beta1.MsgBurn.fromPartial({
            sender,
            amount,
        });
        return msg;
    });
}
exports.execute_osmosis_tokenfactory_burn = execute_osmosis_tokenfactory_burn;
//MsgChangeAdmin
function execute_osmosis_tokenfactory_changeAdmin(sender, denom, newAdmin) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.tokenfactory.v1beta1.MsgChangeAdmin.fromPartial({
            sender,
            denom,
            newAdmin
        });
        return msg;
    });
}
exports.execute_osmosis_tokenfactory_changeAdmin = execute_osmosis_tokenfactory_changeAdmin;
