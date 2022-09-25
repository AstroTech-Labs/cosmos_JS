export declare const createLCDClient: ({ restEndpoint }: {
    restEndpoint: string;
}) => Promise<{
    osmosis: {
        epochs: {
            v1beta1: import("./epochs/query.lcd").LCDQueryClient;
        };
        gamm: {
            v1beta1: import("./gamm/v1beta1/query.lcd").LCDQueryClient;
        };
        incentives: import("./incentives/query.lcd").LCDQueryClient;
        lockup: import("./lockup/query.lcd").LCDQueryClient;
        mint: {
            v1beta1: import("./mint/v1beta1/query.lcd").LCDQueryClient;
        };
        poolincentives: {
            v1beta1: import("./pool-incentives/v1beta1/query.lcd").LCDQueryClient;
        };
        superfluid: import("./superfluid/query.lcd").LCDQueryClient;
        tokenfactory: {
            v1beta1: import("./tokenfactory/v1beta1/query.lcd").LCDQueryClient;
        };
        txfees: {
            v1beta1: import("./txfees/v1beta1/query.lcd").LCDQueryClient;
        };
    };
}>;
