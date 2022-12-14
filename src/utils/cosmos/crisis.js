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
exports.execute_cosmos_crisis_verify_invariant = void 0;
const types_1 = require("../../../types");
// Supported tranasction interfaces - types/proto/cosmos/crisis/v1beta1/tx.rpc.msg.d.
//---------------------------------------------
// COSMOS::CRISIS MODULE - TRANSACTION HELPERS
// --------------------------------------------
function execute_cosmos_crisis_verify_invariant(sender, invariantModuleName, invariantRoute) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.crisis.v1beta1.MsgVerifyInvariant.fromPartial({
            sender: sender,
            invariantModuleName: invariantModuleName,
            invariantRoute: invariantRoute,
        });
        return msg;
    });
}
exports.execute_cosmos_crisis_verify_invariant = execute_cosmos_crisis_verify_invariant;
