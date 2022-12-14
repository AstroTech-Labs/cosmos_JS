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
exports.make_clearAdmin_msg = exports.make_updateAdmin_msg = exports.make_migrateContract_msg = exports.make_executeContract_msg = exports.make_instantiateContract_msg = exports.make_storeCode_msg = exports.find_code_id_from_contract_hash = exports.query_wasm_pinnedCodes = exports.query_wasm_codes = exports.query_wasm_code = exports.query_wasm_smartContractState = exports.query_wasm_rawContractState = exports.query_wasm_allContractState = exports.query_wasm_contractsByCode = exports.query_wasm_contractHistory = exports.query_wasm_contractInfo = void 0;
const types_1 = require("../../../types");
// Supported query interfaces - types/proto/cosmwasm/wasm/v1/query.rpc.query.d.ts
// Supported transaction interfaces - types/proto/cosmwasm/wasm/v1/tx.rpc.query.d.ts
//---------------------------------------------
// COSMWASM::WASM MODULE - QUERY HELPERS
// --------------------------------------------
// ContractInfo gets the contract meta data
function query_wasm_contractInfo(client, contract_addr) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmwasm.wasm.v1.contractInfo(types_1.cosmwasm.wasm.v1.QueryContractInfoRequest.fromPartial({ address: contract_addr }));
        return response;
    });
}
exports.query_wasm_contractInfo = query_wasm_contractInfo;
function query_wasm_contractHistory(client, contract_addr) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmwasm.wasm.v1.contractHistory(types_1.cosmwasm.wasm.v1.QueryContractHistoryRequest.fromPartial({ address: contract_addr }));
        return response;
    });
}
exports.query_wasm_contractHistory = query_wasm_contractHistory;
// ContractsByCode lists all smart contracts for a code id
function query_wasm_contractsByCode(client, codeId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let codes = yield client.query.cosmwasm.wasm.v1.contractsByCode(types_1.cosmwasm.wasm.v1.QueryContractsByCodeRequest.fromPartial({
            codeId: codeId,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit })
        }));
        return codes;
    });
}
exports.query_wasm_contractsByCode = query_wasm_contractsByCode;
// AllContractState gets all raw store data for a single contract
function query_wasm_allContractState(client, address, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmwasm.wasm.v1.allContractState(types_1.cosmwasm.wasm.v1.QueryAllContractStateRequest.fromPartial({
            address: address,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit })
        }));
        return response;
    });
}
exports.query_wasm_allContractState = query_wasm_allContractState;
// RawContractState gets single key from the raw store data of a contract
function query_wasm_rawContractState(client, address, queryData) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmwasm.wasm.v1.rawContractState(types_1.cosmwasm.wasm.v1.QueryRawContractStateRequest.fromPartial({ address: address, queryData: queryData }));
        return response;
    });
}
exports.query_wasm_rawContractState = query_wasm_rawContractState;
// SmartContractState get smart query result from the contract
function query_wasm_smartContractState(client, address, queryData) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmwasm.wasm.v1.smartContractState(types_1.cosmwasm.wasm.v1.QuerySmartContractStateRequest.fromPartial({ address: address, queryData: queryData }));
        return response;
    });
}
exports.query_wasm_smartContractState = query_wasm_smartContractState;
// Code gets the binary code and metadata for a singe wasm code
function query_wasm_code(client, code_id) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmwasm.wasm.v1.code(types_1.cosmwasm.wasm.v1.QueryCodeRequest.fromPartial({ codeId: code_id }));
        return response;
    });
}
exports.query_wasm_code = query_wasm_code;
// Code gets the binary code and metadata for a singe wasm code
function query_wasm_codes(client, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmwasm.wasm.v1.codes(types_1.cosmwasm.wasm.v1.QueryCodesRequest.fromPartial({
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({
                offset: offset,
                limit: limit
            })
        }));
        return response;
    });
}
exports.query_wasm_codes = query_wasm_codes;
// PinnedCodes gets the pinned code ids
function query_wasm_pinnedCodes(client, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmwasm.wasm.v1.pinnedCodes(types_1.cosmwasm.wasm.v1.QueryPinnedCodesRequest.fromPartial({
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({
                offset: offset,
                limit: limit
            })
        }));
        return response;
    });
}
exports.query_wasm_pinnedCodes = query_wasm_pinnedCodes;
// Return list of codeIds with codeInfos having datahash for the contract
function find_code_id_from_contract_hash(client, hash, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let codes = yield query_wasm_codes(client, offset, limit);
        let codeInfos = codes["codeInfos"];
        for (let i = 0; i < codeInfos.length; i++) {
            let hex = Buffer.from(codeInfos[i]["dataHash"]).toString("hex");
            let code_id = codeInfos[i]["codeId"];
            if (hash == hex) {
                return code_id;
            }
        }
        return 0;
    });
}
exports.find_code_id_from_contract_hash = find_code_id_from_contract_hash;
//---------------------------------------------
// COSMWASM::WASM MODULE - TRANSACTION HELPERS
// --------------------------------------------
function make_storeCode_msg(wallet_address, wasm_bytecode, instantiatePermission) {
    return __awaiter(this, void 0, void 0, function* () {
        let store_code_msg = types_1.cosmwasm.wasm.v1.MsgStoreCode.fromPartial({
            sender: wallet_address,
            wasmByteCode: wasm_bytecode,
            instantiatePermission: instantiatePermission
        });
        return store_code_msg;
    });
}
exports.make_storeCode_msg = make_storeCode_msg;
function make_instantiateContract_msg(wallet_address, code_id, init_msg, label, funds, admin) {
    return __awaiter(this, void 0, void 0, function* () {
        let instantiate_msg = types_1.cosmwasm.wasm.v1.MsgInstantiateContract.fromPartial({
            sender: wallet_address,
            admin: admin,
            codeId: code_id,
            label: label,
            msg: init_msg,
            funds: funds
        });
        return instantiate_msg;
    });
}
exports.make_instantiateContract_msg = make_instantiateContract_msg;
function make_executeContract_msg(wallet_address, contract_address, msg, funds) {
    return __awaiter(this, void 0, void 0, function* () {
        let execute_msg = types_1.cosmwasm.wasm.v1.MsgExecuteContract.fromPartial({
            sender: wallet_address,
            contract: contract_address,
            msg: msg,
            funds: funds
        });
        return execute_msg;
    });
}
exports.make_executeContract_msg = make_executeContract_msg;
function make_migrateContract_msg(wallet_address, contract_address, code_id, msg) {
    return __awaiter(this, void 0, void 0, function* () {
        let migrate_msg = types_1.cosmwasm.wasm.v1.MsgMigrateContract.fromPartial({
            sender: wallet_address,
            contract: contract_address,
            codeId: code_id,
            msg: msg
        });
        return migrate_msg;
    });
}
exports.make_migrateContract_msg = make_migrateContract_msg;
function make_updateAdmin_msg(wallet_address, contract_address, new_admin) {
    return __awaiter(this, void 0, void 0, function* () {
        let update_admin_msg = types_1.cosmwasm.wasm.v1.MsgUpdateAdmin.fromPartial({
            sender: wallet_address,
            contract: contract_address,
            newAdmin: new_admin
        });
        return update_admin_msg;
    });
}
exports.make_updateAdmin_msg = make_updateAdmin_msg;
function make_clearAdmin_msg(wallet_address, contract_address) {
    return __awaiter(this, void 0, void 0, function* () {
        let clear_admin_msg = types_1.cosmwasm.wasm.v1.MsgClearAdmin.fromPartial({
            sender: wallet_address,
            contract: contract_address
        });
        return clear_admin_msg;
    });
}
exports.make_clearAdmin_msg = make_clearAdmin_msg;
