import {CosmosChainClient, osmosis} from "cosmsdkjs";

// Supported query interfaces - types/proto/osmosis/pool-incentives/v1beta1/query.rpc.query.d.ts
// Supported transaction interfaces - types/proto/osmosis/pool-incentives/v1beta1/superfactory/tx.rpc.msg.d.ts

//---------------------------------------------
// OSMOSIS::POOL-INCENTIVES MODULE - QUERY HELPERS
// --------------------------------------------

export async function query_osmosis_pool_incentives_gaugeIds(client: CosmosChainClient, poolId: Long) {
    let response = await client.query.osmosis.pool_incentives.v1beta1.gaugeIds(
        osmosis.pool_incentives.QueryGaugeIdsRequest.fromPartial({
            poolId,
        })
    )
    return response;
}

export async function query_osmosis_pool_incentives_distrInfo(client: CosmosChainClient) {
    let response = await client.query.osmosis.pool_incentives.v1beta1.distrInfo(
        osmosis.pool_incentives.QueryDistrInfoRequest.fromPartial({})
    )
    return response;
}

export async function query_osmosis_pool_incentives_params(client: CosmosChainClient) {
    let response = await client.query.osmosis.pool_incentives.v1beta1.params(
        osmosis.pool_incentives.QueryParamsRequest.fromPartial({})
    )
    return response;
}

export async function query_osmosis_pool_incentives_lockableDurations(client: CosmosChainClient) {
    let response = await client.query.osmosis.pool_incentives.v1beta1.lockableDurations(
        osmosis.pool_incentives.QueryLockableDurationsRequest.fromPartial({})
    )
    return response;
}

export async function query_osmosis_pool_incentives_incentivizedPools(client: CosmosChainClient) {
    let response = await client.query.osmosis.pool_incentives.v1beta1.incentivizedPools(
        osmosis.pool_incentives.QueryIncentivizedPoolsRequest.fromPartial({})
    )
    return response;
}

export async function query_osmosis_pool_incentives_externalIncentiveGauges(client: CosmosChainClient) {
    let response = await client.query.osmosis.pool_incentives.v1beta1.externalIncentiveGauges(
        osmosis.pool_incentives.QueryExternalIncentiveGaugesRequest.fromPartial({})
    )
    return response;
}






