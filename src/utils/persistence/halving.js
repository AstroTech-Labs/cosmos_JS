"use strict";
// Supported query interfaces - types/proto/persistence/halving/v1beta1/query.rpc.query.d.ts
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
exports.query_persistence_halving_params = void 0;
//---------------------------------------------
// PERSISTENCE::HALVING MODULE - QUERY HELPERS
// --------------------------------------------
const types_1 = require("../../../types");
function query_persistence_halving_params(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.persistence.halving.params(types_1.persistence.halving.v1beta1.QueryParamsRequest.fromPartial({}));
        return response;
    });
}
exports.query_persistence_halving_params = query_persistence_halving_params;
