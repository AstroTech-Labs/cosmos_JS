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
exports.execute_cosmos_gov_deposit_msg = exports.execute_cosmos_gov_vote_weighted_msg = exports.execute_cosmos_gov_vote_msg = exports.execute_cosmos_gov_submit_proposal_msg = exports.query_cosmos_gov_tally_result = exports.query_cosmos_gov_deposits = exports.query_cosmos_gov_deposit = exports.query_cosmos_gov_params = exports.query_cosmos_gov_votes = exports.query_cosmos_gov_vote = exports.query_cosmos_gov_proposals = exports.query_cosmos_gov_proposal = void 0;
const types_1 = require("../../../types");
// Supported query interfaces - types/proto/cosmos/gov/v1beta1/query.rpc.query.d.ts
// Supported tranasction interfaces - types/proto/cosmos/gov/v1beta1/tx.rpc.msg.d.ts
//---------------------------------------------
// COSMOS::GOV MODULE - QUERY HELPERS
// --------------------------------------------
function query_cosmos_gov_proposal(client, proposalId) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.gov.v1beta1.proposal(types_1.cosmos.gov.v1beta1.QueryProposalRequest.fromPartial({
            proposalId,
        }));
        return response;
    });
}
exports.query_cosmos_gov_proposal = query_cosmos_gov_proposal;
function query_cosmos_gov_proposals(client, proposalStatus, voter, depositor, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.gov.v1beta1.proposals(types_1.cosmos.gov.v1beta1.QueryProposalsRequest.fromPartial({
            proposalStatus,
            voter,
            depositor,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_cosmos_gov_proposals = query_cosmos_gov_proposals;
function query_cosmos_gov_vote(client, proposalId, voter) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.gov.v1beta1.vote(types_1.cosmos.gov.v1beta1.QueryVoteRequest.fromPartial({
            proposalId,
            voter,
        }));
        return response;
    });
}
exports.query_cosmos_gov_vote = query_cosmos_gov_vote;
function query_cosmos_gov_votes(client, proposalId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.gov.v1beta1.votes(types_1.cosmos.gov.v1beta1.QueryVotesRequest.fromPartial({
            proposalId,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_cosmos_gov_votes = query_cosmos_gov_votes;
function query_cosmos_gov_params(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.gov.v1beta1.params(types_1.cosmos.gov.v1beta1.QueryParamsRequest.fromPartial({}));
        return response;
    });
}
exports.query_cosmos_gov_params = query_cosmos_gov_params;
function query_cosmos_gov_deposit(client, proposalId, depositor) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.gov.v1beta1.deposit(types_1.cosmos.gov.v1beta1.QueryDepositRequest.fromPartial({
            proposalId,
            depositor,
        }));
        return response;
    });
}
exports.query_cosmos_gov_deposit = query_cosmos_gov_deposit;
function query_cosmos_gov_deposits(client, proposalId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.gov.v1beta1.deposits(types_1.cosmos.gov.v1beta1.QueryDepositsRequest.fromPartial({
            proposalId,
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_cosmos_gov_deposits = query_cosmos_gov_deposits;
function query_cosmos_gov_tally_result(client, proposalId) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.gov.v1beta1.tallyResult(types_1.cosmos.gov.v1beta1.QueryTallyResultRequest.fromPartial({
            proposalId,
        }));
        return response;
    });
}
exports.query_cosmos_gov_tally_result = query_cosmos_gov_tally_result;
//---------------------------------------------
// COSMOS::GOV MODULE - TRANSACTION HELPERS
// --------------------------------------------
//MsgSubmitProposal
function execute_cosmos_gov_submit_proposal_msg(content, initialDeposit, proposer) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.gov.v1beta1.MsgSubmitProposal.fromPartial({
            content,
            initialDeposit,
            proposer,
        });
        return msg;
    });
}
exports.execute_cosmos_gov_submit_proposal_msg = execute_cosmos_gov_submit_proposal_msg;
//MsgVote
function execute_cosmos_gov_vote_msg(proposalId, voter, option) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.gov.v1beta1.MsgVote.fromPartial({
            proposalId,
            voter,
            option,
        });
        return msg;
    });
}
exports.execute_cosmos_gov_vote_msg = execute_cosmos_gov_vote_msg;
//MsgVoteWeighted
function execute_cosmos_gov_vote_weighted_msg(proposalId, voter, options) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.gov.v1beta1.MsgVoteWeighted.fromPartial({
            proposalId,
            voter,
            options,
        });
        return msg;
    });
}
exports.execute_cosmos_gov_vote_weighted_msg = execute_cosmos_gov_vote_weighted_msg;
//MsgDeposit
function execute_cosmos_gov_deposit_msg(proposalId, depositor, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.gov.v1beta1.MsgDeposit.fromPartial({
            proposalId,
            depositor,
            amount,
        });
        return msg;
    });
}
exports.execute_cosmos_gov_deposit_msg = execute_cosmos_gov_deposit_msg;
