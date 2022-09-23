import { Rpc } from "@osmonauts/helpers";
export declare const createRPCQueryClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    cosmos: {
        auth: {
            v1beta1: import("../cosmos/auth/v1beta1/query.rpc.query").QueryClientImpl;
        };
        authz: {
            v1beta1: import("../cosmos/authz/v1beta1/query.rpc.query").QueryClientImpl;
        };
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/query.rpc.query").QueryClientImpl;
        };
        distribution: {
            v1beta1: import("../cosmos/distribution/v1beta1/query.rpc.query").QueryClientImpl;
        };
        evidence: {
            v1beta1: import("../cosmos/evidence/v1beta1/query.rpc.query").QueryClientImpl;
        };
        feegrant: {
            v1beta1: import("../cosmos/feegrant/v1beta1/query.rpc.query").QueryClientImpl;
        };
        gov: {
            v1beta1: import("../cosmos/gov/v1beta1/query.rpc.query").QueryClientImpl;
        };
        mint: {
            v1beta1: import("../cosmos/mint/v1beta1/query.rpc.query").QueryClientImpl;
        };
        params: {
            v1beta1: import("../cosmos/params/v1beta1/query.rpc.query").QueryClientImpl;
        };
        slashing: {
            v1beta1: import("../cosmos/slashing/v1beta1/query.rpc.query").QueryClientImpl;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/query.rpc.query").QueryClientImpl;
        };
        upgrade: {
            v1beta1: import("../cosmos/upgrade/v1beta1/query.rpc.query").QueryClientImpl;
        };
    };
    ibc: {
        applications: {
            interchain_accounts: {
                controller: {
                    v1: import("./applications/interchain_accounts/controller/v1/query.rpc.query").QueryClientImpl;
                };
                host: {
                    v1: import("./applications/interchain_accounts/host/v1/query.rpc.query").QueryClientImpl;
                };
            };
            transfer: {
                v1: import("./applications/transfer/v1/query.rpc.query").QueryClientImpl;
            };
        };
        core: {
            channel: {
                v1: import("./core/channel/v1/query.rpc.query").QueryClientImpl;
            };
            client: {
                v1: import("./core/client/v1/query.rpc.query").QueryClientImpl;
            };
            connection: {
                v1: import("./core/connection/v1/query.rpc.query").QueryClientImpl;
            };
        };
    };
}>;
