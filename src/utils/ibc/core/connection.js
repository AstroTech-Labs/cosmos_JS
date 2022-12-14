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
exports.execute_ibc_core_connection_connectionOpenConfirm = exports.execute_ibc_core_connection_connectionOpenAck = exports.execute_ibc_core_connection_connectionOpenTry = exports.execute_ibc_core_connection_connectionOpenInit = exports.query_ibc_core_connection_connectionConsensusState = exports.query_ibc_core_connection_connectionClientState = exports.query_ibc_core_connection_clientConnections = exports.query_ibc_core_connection_connections = exports.query_ibc_core_connection_connection = void 0;
const types_1 = require("../../../../types");
// Supported query interfaces - types/proto/ibc/core/connection/v1/query.rpc.query.d.ts
//---------------------------------------------
// IBC::CONNECTION MODULE - QUERY HELPERS
// --------------------------------------------
function query_ibc_core_connection_connection(client, connectionId) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.connection.v1.connection(types_1.ibc.core.connection.v1.QueryConnectionRequest.fromPartial({
            connectionId,
        }));
        return response;
    });
}
exports.query_ibc_core_connection_connection = query_ibc_core_connection_connection;
function query_ibc_core_connection_connections(client, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.connection.v1.connections(types_1.ibc.core.connection.v1.QueryConnectionsRequest.fromPartial({
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_ibc_core_connection_connections = query_ibc_core_connection_connections;
function query_ibc_core_connection_clientConnections(client, clientId) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.connection.v1.clientConnections(types_1.ibc.core.connection.v1.QueryClientConnectionsRequest.fromPartial({
            clientId,
        }));
        return response;
    });
}
exports.query_ibc_core_connection_clientConnections = query_ibc_core_connection_clientConnections;
function query_ibc_core_connection_connectionClientState(client, connectionId) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.connection.v1.connectionClientState(types_1.ibc.core.connection.v1.QueryConnectionClientStateRequest.fromPartial({
            connectionId,
        }));
        return response;
    });
}
exports.query_ibc_core_connection_connectionClientState = query_ibc_core_connection_connectionClientState;
function query_ibc_core_connection_connectionConsensusState(client, connectionId, revisionNumber, revisionHeight) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.connection.v1.connectionConsensusState(types_1.ibc.core.connection.v1.QueryConnectionConsensusStateRequest.fromPartial({
            connectionId,
            revisionNumber,
            revisionHeight,
        }));
        return response;
    });
}
exports.query_ibc_core_connection_connectionConsensusState = query_ibc_core_connection_connectionConsensusState;
// Supported transaction interfaces - types/proto/ibc/core/connection/v1/tx.rpc.msg.d.ts
//---------------------------------------------
// IBC::CONNECTION MODULE - TRANSACTION HELPERS
// --------------------------------------------
//MsgConnectionOpenInit
function execute_ibc_core_connection_connectionOpenInit(clientId, counterparty, version, delayPeriod, signer) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.ibc.core.connection.v1.MsgConnectionOpenInit.fromPartial({
            clientId,
            counterparty,
            version,
            delayPeriod,
            signer
        });
        return msg;
    });
}
exports.execute_ibc_core_connection_connectionOpenInit = execute_ibc_core_connection_connectionOpenInit;
//MsgConnectionOpenTry
function execute_ibc_core_connection_connectionOpenTry(clientId) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.ibc.core.connection.v1.MsgConnectionOpenTry.fromPartial({
            clientId,
        });
        return msg;
    });
}
exports.execute_ibc_core_connection_connectionOpenTry = execute_ibc_core_connection_connectionOpenTry;
//MsgConnectionOpenAck
function execute_ibc_core_connection_connectionOpenAck(connectionId, counterpartyConnectionId, version, clientState, proofHeight) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.ibc.core.connection.v1.MsgConnectionOpenAck.fromPartial({
            connectionId,
            counterpartyConnectionId,
            version,
            clientState,
            proofHeight
        });
        return msg;
    });
}
exports.execute_ibc_core_connection_connectionOpenAck = execute_ibc_core_connection_connectionOpenAck;
//MsgConnectionOpenConfirm
function execute_ibc_core_connection_connectionOpenConfirm(connectionId, proofAck, proofHeight, signer) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.ibc.core.connection.v1.MsgConnectionOpenConfirm.fromPartial({
            connectionId,
            proofAck,
            proofHeight,
            signer
        });
        return msg;
    });
}
exports.execute_ibc_core_connection_connectionOpenConfirm = execute_ibc_core_connection_connectionOpenConfirm;
