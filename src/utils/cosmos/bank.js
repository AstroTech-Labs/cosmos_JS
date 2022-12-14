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
exports.execute_cosmos_bank_multi_send = exports.execute_cosmos_bank_send = exports.query_cosmos_bank_denoms_metadata = exports.query_cosmos_bank_denom_metadata = exports.query_cosmos_bank_params = exports.query_cosmos_bank_supply_of = exports.query_cosmos_bank_total_supply = exports.query_cosmos_bank_all_balances = exports.query_cosmos_bank_balance = void 0;
const types_1 = require("../../../types");
// Supported query interfaces - types/proto/cosmos/bank/v1beta1/query.rpc.query.d.ts
// Supported tranasction interfaces - types/proto/cosmos/bank/v1beta1/tx.rpc.msg.d.ts
//---------------------------------------------
// COSMOS::BANK MODULE - QUERY HELPERS
// --------------------------------------------
function query_cosmos_bank_balance(client, address, denom) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.bank.v1beta1.balance(types_1.cosmos.bank.v1beta1.QueryBalanceRequest.fromPartial({
            address: address,
            denom: denom,
        }));
        return response;
    });
}
exports.query_cosmos_bank_balance = query_cosmos_bank_balance;
function query_cosmos_bank_all_balances(client, address, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.bank.v1beta1.allBalances(types_1.cosmos.bank.v1beta1.QueryAllBalancesRequest.fromPartial({
            address: address,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_cosmos_bank_all_balances = query_cosmos_bank_all_balances;
function query_cosmos_bank_total_supply(client, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.bank.v1beta1.totalSupply(types_1.cosmos.bank.v1beta1.QueryTotalSupplyRequest.fromPartial({
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_cosmos_bank_total_supply = query_cosmos_bank_total_supply;
function query_cosmos_bank_supply_of(client, denom) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.bank.v1beta1.supplyOf(types_1.cosmos.bank.v1beta1.QuerySupplyOfRequest.fromPartial({
            denom,
        }));
        return response;
    });
}
exports.query_cosmos_bank_supply_of = query_cosmos_bank_supply_of;
function query_cosmos_bank_params(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.bank.v1beta1.params(types_1.cosmos.bank.v1beta1.QueryParamsRequest.fromPartial({}));
        return response;
    });
}
exports.query_cosmos_bank_params = query_cosmos_bank_params;
function query_cosmos_bank_denom_metadata(client, denom) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.bank.v1beta1.denomMetadata(types_1.cosmos.bank.v1beta1.QueryDenomMetadataRequest.fromPartial({
            denom,
        }));
        return response;
    });
}
exports.query_cosmos_bank_denom_metadata = query_cosmos_bank_denom_metadata;
function query_cosmos_bank_denoms_metadata(client, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.bank.v1beta1.denomsMetadata(types_1.cosmos.bank.v1beta1.QueryDenomsMetadataRequest.fromPartial({
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_cosmos_bank_denoms_metadata = query_cosmos_bank_denoms_metadata;
//---------------------------------------------
// COSMOS::BANK MODULE - TRANSACTION HELPERS
// --------------------------------------------
// MsgSend
function execute_cosmos_bank_send(fromAddress, toAddress, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.bank.v1beta1.MsgSend.fromPartial({
            fromAddress,
            toAddress,
            amount: amount,
        });
        return msg;
    });
}
exports.execute_cosmos_bank_send = execute_cosmos_bank_send;
// MsgMultiSend
function execute_cosmos_bank_multi_send(inputs, outputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.bank.v1beta1.MsgMultiSend.fromPartial({
            inputs: inputs,
            outputs: outputs,
        });
        return msg;
    });
}
exports.execute_cosmos_bank_multi_send = execute_cosmos_bank_multi_send;
