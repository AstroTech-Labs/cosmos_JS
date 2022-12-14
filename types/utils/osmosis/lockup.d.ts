/// <reference types="long" />
import { Duration } from "../../../types/proto/google/protobuf/duration";
import { Coin } from "../../../types/proto/cosmos/base/v1beta1/coin";
import { CosmosChainClient } from "../../clients";
export declare function query_osmosis_lockup_moduleBalance(client: CosmosChainClient): Promise<any>;
export declare function query_osmosis_lockup_moduleLockedAmount(client: CosmosChainClient): Promise<any>;
export declare function query_osmosis_lockup_accountUnlockableCoins(client: CosmosChainClient, owner: string): Promise<any>;
export declare function query_osmosis_lockup_accountUnlockingCoins(client: CosmosChainClient, owner: string): Promise<any>;
export declare function query_osmosis_lockup_accountLockedCoins(client: CosmosChainClient, owner: string): Promise<any>;
export declare function query_osmosis_lockup_accountLockedPastTime(client: CosmosChainClient, owner: string, timestamp: Date): Promise<any>;
export declare function query_osmosis_lockup_accountLockedPastTimeNotUnlockingOnly(client: CosmosChainClient, owner: string, timestamp: Date): Promise<any>;
export declare function query_osmosis_lockup_accountUnlockedBeforeTime(client: CosmosChainClient, owner: string, timestamp: Date): Promise<any>;
export declare function query_osmosis_lockup_accountLockedPastTimeDenom(client: CosmosChainClient, owner: string, timestamp: Date, denom: string): Promise<any>;
export declare function query_osmosis_lockup_lockedDenom(client: CosmosChainClient, denom: string, duration: Duration): Promise<any>;
export declare function query_osmosis_lockup_syntheticLockupsByLockupID(client: CosmosChainClient, lockId: Long): Promise<any>;
export declare function query_osmosis_lockup_accountLockedLongerDuration(client: CosmosChainClient, owner: string, duration: Duration): Promise<any>;
export declare function query_osmosis_lockup_accountLockedDuration(client: CosmosChainClient, owner: string, duration: Duration): Promise<any>;
export declare function query_osmosis_lockup_accountLockedLongerDurationNotUnlockingOnly(client: CosmosChainClient, owner: string, duration: Duration): Promise<any>;
export declare function query_osmosis_lockup_accountLockedLongerDurationDenom(client: CosmosChainClient, owner: string, duration: Duration, denom: string): Promise<any>;
export declare function execute_osmosis_lockup_lockTokens(owner: string, duration: Duration, coins: Coin[]): Promise<import("../../proto/osmosis/lockup/tx").MsgLockTokens>;
export declare function execute_osmosis_lockup_beginUnlockingAll(owner: string): Promise<import("../../proto/osmosis/lockup/tx").MsgBeginUnlockingAll>;
export declare function execute_osmosis_lockup_beginUnlocking(owner: string, ID: Long, coins: Coin[]): Promise<import("../../proto/osmosis/lockup/tx").MsgBeginUnlocking>;
export declare function execute_osmosis_lockup_extendLockup(owner: string, ID: Long): Promise<import("../../proto/osmosis/lockup/tx").MsgExtendLockup>;
