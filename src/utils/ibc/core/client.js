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
exports.execute_ibc_core_client_submitMisbehaviour = exports.execute_ibc_core_client_upgradeClient = exports.execute_ibc_core_client_updateClient = exports.execute_ibc_core_client_createClient = exports.query_ibc_core_client_upgradedConsensusState = exports.query_ibc_core_client_upgradedClientState = exports.query_ibc_core_client_clientParams = exports.query_ibc_core_client_clientStatus = exports.query_ibc_core_client_consensusStates = exports.query_ibc_core_client_consensusState = exports.query_ibc_core_client_clientStates = exports.query_ibc_core_client_clientState = void 0;
const types_1 = require("../../../../types");
// Supported query interfaces - types/proto/ibc/core/client/v1/query.rpc.query.d.ts
//---------------------------------------------
// IBC::CLIENT MODULE - QUERY HELPERS
// --------------------------------------------
function query_ibc_core_client_clientState(client, clientId) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.client.v1.clientState(types_1.ibc.core.client.v1.QueryClientStateRequest.fromPartial({
            clientId,
        }));
        return response;
    });
}
exports.query_ibc_core_client_clientState = query_ibc_core_client_clientState;
function query_ibc_core_client_clientStates(client, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.client.v1.clientStates(types_1.ibc.core.client.v1.QueryClientStatesRequest.fromPartial({
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_ibc_core_client_clientStates = query_ibc_core_client_clientStates;
function query_ibc_core_client_consensusState(client, clientId, revisionNumber, revisionHeight, latestHeight) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.client.v1.consensusState(types_1.ibc.core.client.v1.QueryConsensusStateRequest.fromPartial({
            clientId,
            revisionNumber,
            revisionHeight,
            latestHeight
        }));
        return response;
    });
}
exports.query_ibc_core_client_consensusState = query_ibc_core_client_consensusState;
function query_ibc_core_client_consensusStates(client, clientId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.client.v1.consensusStates(types_1.ibc.core.client.v1.QueryConsensusStatesRequest.fromPartial({
            clientId,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_ibc_core_client_consensusStates = query_ibc_core_client_consensusStates;
function query_ibc_core_client_clientStatus(client, clientId) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.client.v1.clientStatus(types_1.ibc.core.client.v1.QueryClientStatusRequest.fromPartial({
            clientId,
        }));
        return response;
    });
}
exports.query_ibc_core_client_clientStatus = query_ibc_core_client_clientStatus;
function query_ibc_core_client_clientParams(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.client.v1.clientParams(types_1.ibc.core.client.v1.QueryClientParamsRequest.fromPartial({}));
        return response;
    });
}
exports.query_ibc_core_client_clientParams = query_ibc_core_client_clientParams;
function query_ibc_core_client_upgradedClientState(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.client.v1.upgradedClientState(types_1.ibc.core.client.v1.QueryUpgradedClientStateRequest.fromPartial({}));
        return response;
    });
}
exports.query_ibc_core_client_upgradedClientState = query_ibc_core_client_upgradedClientState;
function query_ibc_core_client_upgradedConsensusState(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.client.v1.upgradedConsensusState(types_1.ibc.core.client.v1.QueryUpgradedConsensusStateRequest.fromPartial({}));
        return response;
    });
}
exports.query_ibc_core_client_upgradedConsensusState = query_ibc_core_client_upgradedConsensusState;
// Supported transaction interfaces - types/proto/ibc/core/client/v1/tx.rpc.msg.d.ts
//---------------------------------------------
// IBC::CLIENT MODULE - TRANSACTION HELPERS
// --------------------------------------------
//MsgCreateClient
function execute_ibc_core_client_createClient(clientState, consensusState, signer) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.ibc.core.client.v1.MsgCreateClient.fromPartial({
            clientState,
            consensusState,
            signer
        });
        return msg;
    });
}
exports.execute_ibc_core_client_createClient = execute_ibc_core_client_createClient;
//MsgUpdateClient
function execute_ibc_core_client_updateClient(clientId, header, signer) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.ibc.core.client.v1.MsgUpdateClient.fromPartial({
            clientId,
            header,
            signer
        });
        return msg;
    });
}
exports.execute_ibc_core_client_updateClient = execute_ibc_core_client_updateClient;
//MsgUpgradeClient
function execute_ibc_core_client_upgradeClient(clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.ibc.core.client.v1.MsgUpgradeClient.fromPartial({
            clientId,
            clientState,
            consensusState,
            proofUpgradeClient,
            proofUpgradeConsensusState,
            signer
        });
        return msg;
    });
}
exports.execute_ibc_core_client_upgradeClient = execute_ibc_core_client_upgradeClient;
//MsgSubmitMisbehaviour
function execute_ibc_core_client_submitMisbehaviour(clientId, misbehaviour, signer) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.ibc.core.client.v1.MsgSubmitMisbehaviour.fromPartial({
            clientId,
            misbehaviour,
            signer
        });
        return msg;
    });
}
exports.execute_ibc_core_client_submitMisbehaviour = execute_ibc_core_client_submitMisbehaviour;
