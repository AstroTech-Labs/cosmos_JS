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
exports.execute_cosmos_vesting_create_vesting_account = void 0;
const types_1 = require("../../../types");
// Supported transaction interfaces - types/proto/cosmos/vesting/v1beta1/tx.rpc.msg.d.ts
//---------------------------------------------
// COSMOS::VESTING MODULE - TRANSACTION HELPERS
// --------------------------------------------
//MsgCreateVestingAccount
function execute_cosmos_vesting_create_vesting_account(fromAddress, toAddress, amount, endTime, delayed) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.cosmos.vesting.v1beta1.MsgCreateVestingAccount.fromPartial({
            fromAddress,
            toAddress,
            amount: amount,
            endTime,
            delayed,
        });
        return msg;
    });
}
exports.execute_cosmos_vesting_create_vesting_account = execute_cosmos_vesting_create_vesting_account;
