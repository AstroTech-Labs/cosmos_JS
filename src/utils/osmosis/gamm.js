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
exports.execute_osmosis_gamm_exitSwapShareAmountIn = exports.execute_osmosis_gamm_exitSwapExternAmountOut = exports.execute_osmosis_gamm_joinSwapShareAmountOut = exports.execute_osmosis_gamm_joinSwapExternAmountIn = exports.execute_osmosis_gamm_SwapExactAmountOut = exports.execute_osmosis_gamm_SwapExactAmountIn = exports.execute_osmosis_gamm_ExitPool = exports.execute_osmosis_gamm_JoinPool = exports.query_osmosis_gamm_estimateSwapExactAmountOut = exports.query_osmosis_gamm_estimateSwapExactAmountIn = exports.query_osmosis_gamm_spotPrice = exports.query_osmosis_gamm_totalShares = exports.query_osmosis_gamm_totalPoolLiquidity = exports.query_osmosis_gamm_poolParams = exports.query_osmosis_gamm_pool = exports.query_osmosis_gamm_totalLiquidity = exports.query_osmosis_gamm_numpools = exports.query_osmosis_gamm_pools = void 0;
const types_1 = require("../../../types");
// Supported query interfaces - types/proto/osmosis/gamm/v1beta1/query.rpc.query.d.ts
// Supported transaction interfaces - types/proto/osmosis/gamm/v1beta1/tx.rpc.query.d.ts
//---------------------------------------------
// OSMOSIS::GAMM MODULE - QUERY HELPERS
// --------------------------------------------
function query_osmosis_gamm_pools(client, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.gamm.v1.pools(types_1.osmosis.gamm.v1beta1.QueryPoolsRequest.fromPartial({
            pagination: types_1.cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit })
        }));
        return response;
    });
}
exports.query_osmosis_gamm_pools = query_osmosis_gamm_pools;
function query_osmosis_gamm_numpools(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.gamm.v1.numPools(types_1.osmosis.gamm.v1beta1.QueryNumPoolsRequest.fromPartial({}));
        return response;
    });
}
exports.query_osmosis_gamm_numpools = query_osmosis_gamm_numpools;
function query_osmosis_gamm_totalLiquidity(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.gamm.v1.totalLiquidity(types_1.osmosis.gamm.v1beta1.QueryTotalLiquidityRequest.fromPartial({}));
        return response;
    });
}
exports.query_osmosis_gamm_totalLiquidity = query_osmosis_gamm_totalLiquidity;
function query_osmosis_gamm_pool(client, poolId) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.gamm.v1.pool(types_1.osmosis.gamm.v1beta1.QueryPoolRequest.fromPartial({ poolId: poolId }));
        return response;
    });
}
exports.query_osmosis_gamm_pool = query_osmosis_gamm_pool;
function query_osmosis_gamm_poolParams(client, poolId) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.gamm.v1.poolParams(types_1.osmosis.gamm.v1beta1.QueryPoolParamsRequest.fromPartial({ poolId: poolId }));
        return response;
    });
}
exports.query_osmosis_gamm_poolParams = query_osmosis_gamm_poolParams;
function query_osmosis_gamm_totalPoolLiquidity(client, poolId) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.gamm.v1.totalPoolLiquidity(types_1.osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest.fromPartial({ poolId: poolId }));
        return response;
    });
}
exports.query_osmosis_gamm_totalPoolLiquidity = query_osmosis_gamm_totalPoolLiquidity;
function query_osmosis_gamm_totalShares(client, poolId) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.gamm.v1.totalShares(types_1.osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest.fromPartial({ poolId: poolId }));
        return response;
    });
}
exports.query_osmosis_gamm_totalShares = query_osmosis_gamm_totalShares;
function query_osmosis_gamm_spotPrice(client, poolId, baseAssetDenom, quoteAssetDenom) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.gamm.v1.spotPrice(types_1.osmosis.gamm.v1beta1.QuerySpotPriceRequest.fromPartial({
            poolId: poolId,
            baseAssetDenom: baseAssetDenom,
            quoteAssetDenom: quoteAssetDenom
        }));
        return response;
    });
}
exports.query_osmosis_gamm_spotPrice = query_osmosis_gamm_spotPrice;
//export interface SwapAmountInRoute {
//   poolId: Long;
//   tokenOutDenom: string;
// }
function query_osmosis_gamm_estimateSwapExactAmountIn(client, sender, poolId, tokenIn, routes) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.gamm.v1.estimateSwapExactAmountIn(types_1.osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest.fromPartial({
            sender: sender,
            poolId: poolId,
            tokenIn: tokenIn,
            routes
        }));
        return response;
    });
}
exports.query_osmosis_gamm_estimateSwapExactAmountIn = query_osmosis_gamm_estimateSwapExactAmountIn;
function query_osmosis_gamm_estimateSwapExactAmountOut(client, sender, poolId, tokenOut, routes) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield client.query.osmosis.gamm.v1.estimateSwapExactAmountOut(types_1.osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest.fromPartial({
            sender: sender,
            poolId: poolId,
            tokenOut: tokenOut,
            routes
        }));
        return response;
    });
}
exports.query_osmosis_gamm_estimateSwapExactAmountOut = query_osmosis_gamm_estimateSwapExactAmountOut;
//---------------------------------------------
// OSMOSIS::GAMM MODULE - TRANSACTION HELPERS
// --------------------------------------------
function execute_osmosis_gamm_JoinPool(client, sender, poolId, shareOutAmount, tokenInMaxs) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.gamm.v1beta1.MsgJoinPool.fromPartial({
            sender: sender,
            poolId: poolId,
            shareOutAmount: shareOutAmount,
            tokenInMaxs: tokenInMaxs
        });
        return msg;
    });
}
exports.execute_osmosis_gamm_JoinPool = execute_osmosis_gamm_JoinPool;
function execute_osmosis_gamm_ExitPool(client, sender, poolId, shareInAmount, tokenOutMins) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.gamm.v1beta1.MsgExitPool.fromPartial({
            sender: sender,
            poolId: poolId,
            shareInAmount: shareInAmount,
            tokenOutMins: tokenOutMins
        });
        return msg;
    });
}
exports.execute_osmosis_gamm_ExitPool = execute_osmosis_gamm_ExitPool;
function execute_osmosis_gamm_SwapExactAmountIn(client, sender, routes, tokenIn, tokenOutMinAmount) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.gamm.v1beta1.MsgSwapExactAmountIn.fromPartial({
            sender: sender,
            routes: routes,
            tokenIn: tokenIn,
            tokenOutMinAmount: tokenOutMinAmount
        });
        return msg;
    });
}
exports.execute_osmosis_gamm_SwapExactAmountIn = execute_osmosis_gamm_SwapExactAmountIn;
function execute_osmosis_gamm_SwapExactAmountOut(sender, routes, tokenOut, tokenInMaxAmount) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.gamm.v1beta1.MsgSwapExactAmountOut.fromPartial({
            sender: sender,
            routes: routes,
            tokenOut: tokenOut,
            tokenInMaxAmount: tokenInMaxAmount
        });
        return msg;
    });
}
exports.execute_osmosis_gamm_SwapExactAmountOut = execute_osmosis_gamm_SwapExactAmountOut;
function execute_osmosis_gamm_joinSwapExternAmountIn(client, sender, poolId, tokenIn, shareOutMinAmount) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn.fromPartial({
            sender: sender,
            poolId: poolId,
            tokenIn: tokenIn,
            shareOutMinAmount: shareOutMinAmount
        });
        return msg;
    });
}
exports.execute_osmosis_gamm_joinSwapExternAmountIn = execute_osmosis_gamm_joinSwapExternAmountIn;
function execute_osmosis_gamm_joinSwapShareAmountOut(client, sender, poolId, tokenInDenom, tokenInMaxAmount, shareOutAmount) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut.fromPartial({
            sender: sender,
            poolId: poolId,
            tokenInDenom: tokenInDenom,
            shareOutAmount: shareOutAmount,
            tokenInMaxAmount: tokenInMaxAmount
        });
        return msg;
    });
}
exports.execute_osmosis_gamm_joinSwapShareAmountOut = execute_osmosis_gamm_joinSwapShareAmountOut;
function execute_osmosis_gamm_exitSwapExternAmountOut(client, sender, poolId, tokenOut, shareInMaxAmount) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut.fromPartial({
            sender: sender,
            poolId: poolId,
            tokenOut: tokenOut,
            shareInMaxAmount: shareInMaxAmount
        });
        return msg;
    });
}
exports.execute_osmosis_gamm_exitSwapExternAmountOut = execute_osmosis_gamm_exitSwapExternAmountOut;
function execute_osmosis_gamm_exitSwapShareAmountIn(client, sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = types_1.osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn.fromPartial({
            sender: sender,
            poolId: poolId,
            tokenOutDenom: tokenOutDenom,
            shareInAmount: shareInAmount,
            tokenOutMinAmount: tokenOutMinAmount
        });
        return msg;
    });
}
exports.execute_osmosis_gamm_exitSwapShareAmountIn = execute_osmosis_gamm_exitSwapShareAmountIn;
