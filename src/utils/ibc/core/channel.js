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
exports.execute_ibc_core_channel_acknowledgement = exports.execute_ibc_core_channel_timeoutOnClose = exports.execute_ibc_core_channel_timeout = exports.execute_ibc_core_channel_recvPacket = exports.execute_ibc_core_channel_channelCloseConfirm = exports.execute_ibc_core_channel_channelCloseInit = exports.execute_ibc_core_channel_channelOpenConfirm = exports.execute_ibc_core_channel_channelOpenAck = exports.execute_ibc_core_channel_channelOpenTry = exports.execute_ibc_core_channel_channelOpenInit = exports.query_ibc_core_channel_nextSequenceReceive = exports.query_ibc_core_channel_unreceivedAcks = exports.query_ibc_core_channel_unreceivedPackets = exports.query_ibc_core_channel_packetAcknowledgements = exports.query_ibc_core_channel_packetAcknowledgement = exports.query_ibc_core_channel_packetReceipt = exports.query_ibc_core_channel_packetCommitments = exports.query_ibc_core_channel_packetCommitment = exports.query_ibc_core_channel_channelConsensusState = exports.query_ibc_core_channel_channelClientState = exports.query_ibc_core_channel_connectionChannels = exports.query_ibc_core_channel_channels = exports.query_ibc_core_channel_channel = void 0;
const types_1 = require("../../../../types");
// Supported query interfaces - types/proto/ibc/core/channel/v1/query.rpc.query.d.ts
//---------------------------------------------
// IBC::CHANNEL MODULE - QUERY HELPERS
// --------------------------------------------
function query_ibc_core_channel_channel(client, portId, channelId) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.channel.v1.channel(types_1.ibc.core.channel.v1.QueryChannelRequest.fromPartial({
            portId,
            channelId,
        }));
        return response;
    });
}
exports.query_ibc_core_channel_channel = query_ibc_core_channel_channel;
function query_ibc_core_channel_channels(client, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.channel.v1.channels(types_1.ibc.core.channel.v1.QueryChannelsRequest.fromPartial({
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_ibc_core_channel_channels = query_ibc_core_channel_channels;
function query_ibc_core_channel_connectionChannels(client, connection, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.channel.v1.connectionChannels(types_1.ibc.core.channel.v1.QueryConnectionChannelsRequest.fromPartial({
            connection,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_ibc_core_channel_connectionChannels = query_ibc_core_channel_connectionChannels;
function query_ibc_core_channel_channelClientState(client, portId, channelId) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.channel.v1.channelClientState(types_1.ibc.core.channel.v1.QueryChannelClientStateRequest.fromPartial({
            portId,
            channelId,
        }));
        return response;
    });
}
exports.query_ibc_core_channel_channelClientState = query_ibc_core_channel_channelClientState;
function query_ibc_core_channel_channelConsensusState(client, portId, channelId, revisionNumber, revisionHeight) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.channel.v1.channelConsensusState(types_1.ibc.core.channel.v1.QueryChannelConsensusStateRequest.fromPartial({
            portId,
            channelId,
            revisionNumber,
            revisionHeight
        }));
        return response;
    });
}
exports.query_ibc_core_channel_channelConsensusState = query_ibc_core_channel_channelConsensusState;
function query_ibc_core_channel_packetCommitment(client, portId, channelId, sequence) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.channel.v1.packetCommitment(types_1.ibc.core.channel.v1.QueryPacketCommitmentRequest.fromPartial({
            portId,
            channelId,
            sequence
        }));
        return response;
    });
}
exports.query_ibc_core_channel_packetCommitment = query_ibc_core_channel_packetCommitment;
function query_ibc_core_channel_packetCommitments(client, portId, channelId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.channel.v1.packetCommitments(types_1.ibc.core.channel.v1.QueryPacketCommitmentsRequest.fromPartial({
            portId,
            channelId,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_ibc_core_channel_packetCommitments = query_ibc_core_channel_packetCommitments;
function query_ibc_core_channel_packetReceipt(client, portId, channelId, sequence) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.channel.v1.packetReceipt(types_1.ibc.core.channel.v1.QueryPacketReceiptRequest.fromPartial({
            portId,
            channelId,
            sequence,
        }));
        return response;
    });
}
exports.query_ibc_core_channel_packetReceipt = query_ibc_core_channel_packetReceipt;
function query_ibc_core_channel_packetAcknowledgement(client, portId, channelId, sequence) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.channel.v1.packetAcknowledgement(types_1.ibc.core.channel.v1.QueryPacketAcknowledgementRequest.fromPartial({
            portId,
            channelId,
            sequence,
        }));
        return response;
    });
}
exports.query_ibc_core_channel_packetAcknowledgement = query_ibc_core_channel_packetAcknowledgement;
function query_ibc_core_channel_packetAcknowledgements(client, portId, channelId, packetCommitmentSequences, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.channel.v1.packetAcknowledgements(types_1.ibc.core.channel.v1.QueryPacketAcknowledgementsRequest.fromPartial({
            portId,
            channelId,
            packetCommitmentSequences,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_ibc_core_channel_packetAcknowledgements = query_ibc_core_channel_packetAcknowledgements;
function query_ibc_core_channel_unreceivedPackets(client, portId, channelId, packetCommitmentSequences) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.channel.v1.unreceivedPackets(types_1.ibc.core.channel.v1.QueryUnreceivedPacketsRequest.fromPartial({
            portId,
            channelId,
            packetCommitmentSequences,
        }));
        return response;
    });
}
exports.query_ibc_core_channel_unreceivedPackets = query_ibc_core_channel_unreceivedPackets;
function query_ibc_core_channel_unreceivedAcks(client, portId, channelId, packetAckSequences) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.channel.v1.unreceivedAcks(types_1.ibc.core.channel.v1.QueryUnreceivedAcksRequest.fromPartial({
            portId,
            channelId,
            packetAckSequences,
        }));
        return response;
    });
}
exports.query_ibc_core_channel_unreceivedAcks = query_ibc_core_channel_unreceivedAcks;
function query_ibc_core_channel_nextSequenceReceive(client, portId, channelId) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.ibc.core.channel.v1.nextSequenceReceive(types_1.ibc.core.channel.v1.QueryNextSequenceReceiveRequest.fromPartial({
            portId,
            channelId,
        }));
        return response;
    });
}
exports.query_ibc_core_channel_nextSequenceReceive = query_ibc_core_channel_nextSequenceReceive;
// Supported transaction interfaces - types/proto/ibc/core/channel/v1/tx.rpc.msg.d.ts
//---------------------------------------------
// IBC::CHANNEL MODULE - TRANSACTION HELPERS
// --------------------------------------------
//MsgChannelOpenInit
function execute_ibc_core_channel_channelOpenInit(portId, channel, signer) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.ibc.core.channel.v1.MsgChannelOpenInit.fromPartial({
            portId,
            channel,
            signer
        });
        return msg;
    });
}
exports.execute_ibc_core_channel_channelOpenInit = execute_ibc_core_channel_channelOpenInit;
//MsgChannelOpenTry
function execute_ibc_core_channel_channelOpenTry(portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.ibc.core.channel.v1.MsgChannelOpenTry.fromPartial({
            portId,
            previousChannelId,
            channel,
            counterpartyVersion,
            proofInit,
            proofHeight,
            signer
        });
        return msg;
    });
}
exports.execute_ibc_core_channel_channelOpenTry = execute_ibc_core_channel_channelOpenTry;
//MsgChannelOpenAck
function execute_ibc_core_channel_channelOpenAck(portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.ibc.core.channel.v1.MsgChannelOpenAck.fromPartial({
            portId,
            counterpartyChannelId,
            channelId,
            counterpartyVersion,
            proofTry,
            proofHeight,
            signer
        });
        return msg;
    });
}
exports.execute_ibc_core_channel_channelOpenAck = execute_ibc_core_channel_channelOpenAck;
//MsgChannelOpenConfirm
function execute_ibc_core_channel_channelOpenConfirm(portId, channelId, proofAck, proofHeight, signer) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.ibc.core.channel.v1.MsgChannelOpenConfirm.fromPartial({
            portId,
            channelId,
            proofAck,
            proofHeight,
            signer
        });
        return msg;
    });
}
exports.execute_ibc_core_channel_channelOpenConfirm = execute_ibc_core_channel_channelOpenConfirm;
//MsgChannelCloseInit
function execute_ibc_core_channel_channelCloseInit(portId, channelId, signer) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.ibc.core.channel.v1.MsgChannelCloseInit.fromPartial({
            portId,
            channelId,
            signer
        });
        return msg;
    });
}
exports.execute_ibc_core_channel_channelCloseInit = execute_ibc_core_channel_channelCloseInit;
//MsgChannelCloseConfirm
function execute_ibc_core_channel_channelCloseConfirm(portId, channelId, proofInit, proofHeight, signer) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.ibc.core.channel.v1.MsgChannelCloseConfirm.fromPartial({
            portId,
            channelId,
            signer,
            proofInit,
            proofHeight,
        });
        return msg;
    });
}
exports.execute_ibc_core_channel_channelCloseConfirm = execute_ibc_core_channel_channelCloseConfirm;
//MsgRecvPacket
function execute_ibc_core_channel_recvPacket(packet, proofCommitment, proofHeight, signer) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.ibc.core.channel.v1.MsgRecvPacket.fromPartial({
            packet,
            proofCommitment,
            proofHeight,
            signer,
        });
        return msg;
    });
}
exports.execute_ibc_core_channel_recvPacket = execute_ibc_core_channel_recvPacket;
//MsgTimeout
function execute_ibc_core_channel_timeout(packet, proofUnreceived, proofHeight, nextSequenceRecv, signer) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.ibc.core.channel.v1.MsgTimeout.fromPartial({
            packet,
            proofUnreceived,
            proofHeight,
            nextSequenceRecv,
            signer,
        });
        return msg;
    });
}
exports.execute_ibc_core_channel_timeout = execute_ibc_core_channel_timeout;
//MsgTimeoutOnClose
function execute_ibc_core_channel_timeoutOnClose(packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.ibc.core.channel.v1.MsgTimeoutOnClose.fromPartial({
            packet,
            proofUnreceived,
            proofHeight,
            nextSequenceRecv,
            signer,
        });
        return msg;
    });
}
exports.execute_ibc_core_channel_timeoutOnClose = execute_ibc_core_channel_timeoutOnClose;
//MsgAcknowledgement
function execute_ibc_core_channel_acknowledgement(packet, acknowledgement, proofAcked, proofHeight, signer) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.ibc.core.channel.v1.MsgAcknowledgement.fromPartial({
            packet,
            acknowledgement,
            proofHeight,
            proofAcked,
            signer,
        });
        return msg;
    });
}
exports.execute_ibc_core_channel_acknowledgement = execute_ibc_core_channel_acknowledgement;
