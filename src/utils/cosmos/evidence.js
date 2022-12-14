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
exports.execute_cosmos_evidence_submit_evidence = exports.query_cosmos_evidence_all_evidence = exports.query_cosmos_evidence_evidence = void 0;
const types_1 = require("../../../types");
// Supported query interfaces - types/proto/cosmos/evidence/v1beta1/query.rpc.query.d.ts
// Supported tranasction interfaces - types/proto/cosmos/evidence/v1beta1/tx.rpc.msg.d.ts
//---------------------------------------------
// COSMOS::EVIDENCE MODULE - QUERY HELPERS
// --------------------------------------------
function query_cosmos_evidence_evidence(client, evidenceHash) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.evidence.v1beta1.evidence(types_1.cosmos.evidence.v1beta1.QueryEvidenceRequest.fromPartial({
            evidenceHash: evidenceHash,
        }));
        return response;
    });
}
exports.query_cosmos_evidence_evidence = query_cosmos_evidence_evidence;
function query_cosmos_evidence_all_evidence(client, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.cosmos.evidence.v1beta1.allEvidence(types_1.cosmos.evidence.v1beta1.QueryAllEvidenceRequest.fromPartial({
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }));
        return response;
    });
}
exports.query_cosmos_evidence_all_evidence = query_cosmos_evidence_all_evidence;
//---------------------------------------------
// COSMOS::EVIDENCE MODULE - TRANSACTION HELPERS
// --------------------------------------------
// MsgSubmitEvidence
function execute_cosmos_evidence_submit_evidence(submitter, evidence) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.evidence.v1beta1.MsgSubmitEvidence.fromPartial({
            submitter,
            evidence,
        });
        return msg;
    });
}
exports.execute_cosmos_evidence_submit_evidence = execute_cosmos_evidence_submit_evidence;
