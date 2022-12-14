import { LCDClient } from "@osmonauts/lcd";
import { ModuleBalanceRequest, ModuleBalanceResponse, ModuleLockedAmountRequest, ModuleLockedAmountResponse, AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse, AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse, AccountLockedCoinsRequest, AccountLockedCoinsResponse, AccountLockedPastTimeRequest, AccountLockedPastTimeResponse, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse, LockedDenomRequest, LockedDenomResponse, LockedRequest, LockedResponse, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse, AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse, AccountLockedDurationRequest, AccountLockedDurationResponse, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    moduleBalance(_params?: ModuleBalanceRequest): Promise<ModuleBalanceResponse>;
    moduleLockedAmount(_params?: ModuleLockedAmountRequest): Promise<ModuleLockedAmountResponse>;
    accountUnlockableCoins(params: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponse>;
    accountUnlockingCoins(params: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponse>;
    accountLockedCoins(params: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponse>;
    accountLockedPastTime(params: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponse>;
    accountLockedPastTimeNotUnlockingOnly(params: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse>;
    accountUnlockedBeforeTime(params: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponse>;
    accountLockedPastTimeDenom(params: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponse>;
    lockedDenom(params: LockedDenomRequest): Promise<LockedDenomResponse>;
    lockedByID(params: LockedRequest): Promise<LockedResponse>;
    syntheticLockupsByLockupID(params: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponse>;
    accountLockedLongerDuration(params: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponse>;
    accountLockedDuration(params: AccountLockedDurationRequest): Promise<AccountLockedDurationResponse>;
    accountLockedLongerDurationNotUnlockingOnly(params: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse>;
    accountLockedLongerDurationDenom(params: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponse>;
}
