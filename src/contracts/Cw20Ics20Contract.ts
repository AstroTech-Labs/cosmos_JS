/**
 * This file was automatically generated by cosmwasm-typescript-gen@0.3.6.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the cosmwasm-typescript-gen generate command to regenerate this file.
 */

import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
export interface AllAccountsResponse {
  accounts: string[];
  [k: string]: unknown;
}
export type Uint128 = string;
export type Expiration =
  | {
      at_height: number;
    }
  | {
      at_time: Timestamp;
    }
  | {
      never: {
        [k: string]: unknown;
      };
    };
export type Timestamp = Uint64;
export type Uint64 = string;
export interface AllAllowancesResponse {
  allowances: AllowanceInfo[];
  [k: string]: unknown;
}
export interface AllowanceInfo {
  allowance: Uint128;
  expires: Expiration;
  spender: string;
  [k: string]: unknown;
}
export interface AllowanceResponse {
  allowance: Uint128;
  expires: Expiration;
  [k: string]: unknown;
}
export interface BalanceResponse {
  balance: Uint128;
  [k: string]: unknown;
}
export type Amount =
  | {
      native: Coin;
    }
  | {
      cw20: Cw20Coin;
    };
export interface ChannelResponse {
  balances: Amount[];
  info: ChannelInfo;
  total_sent: Amount[];
  [k: string]: unknown;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export interface Cw20Coin {
  address: string;
  amount: Uint128;
  [k: string]: unknown;
}
export interface ChannelInfo {
  connection_id: string;
  counterparty_endpoint: IbcEndpoint;
  id: string;
  [k: string]: unknown;
}
export interface IbcEndpoint {
  channel_id: string;
  port_id: string;
  [k: string]: unknown;
}
export type Cw20ExecuteMsg =
  | {
      transfer: {
        amount: Uint128;
        recipient: string;
        [k: string]: unknown;
      };
    }
  | {
      burn: {
        amount: Uint128;
        [k: string]: unknown;
      };
    }
  | {
      send: {
        amount: Uint128;
        contract: string;
        msg: Binary;
        [k: string]: unknown;
      };
    }
  | {
      increase_allowance: {
        amount: Uint128;
        expires?: Expiration | null;
        spender: string;
        [k: string]: unknown;
      };
    }
  | {
      decrease_allowance: {
        amount: Uint128;
        expires?: Expiration | null;
        spender: string;
        [k: string]: unknown;
      };
    }
  | {
      transfer_from: {
        amount: Uint128;
        owner: string;
        recipient: string;
        [k: string]: unknown;
      };
    }
  | {
      send_from: {
        amount: Uint128;
        contract: string;
        msg: Binary;
        owner: string;
        [k: string]: unknown;
      };
    }
  | {
      burn_from: {
        amount: Uint128;
        owner: string;
        [k: string]: unknown;
      };
    }
  | {
      mint: {
        amount: Uint128;
        recipient: string;
        [k: string]: unknown;
      };
    }
  | {
      update_minter: {
        new_minter: string;
        [k: string]: unknown;
      };
    }
  | {
      update_marketing: {
        description?: string | null;
        marketing?: string | null;
        project?: string | null;
        [k: string]: unknown;
      };
    }
  | {
      upload_logo: Logo;
    };
export type Binary = string;
export type Logo =
  | {
      url: string;
    }
  | {
      embedded: EmbeddedLogo;
    };
export type EmbeddedLogo =
  | {
      svg: Binary;
    }
  | {
      png: Binary;
    };
export type Cw20QueryMsg =
  | {
      balance: {
        address: string;
        [k: string]: unknown;
      };
    }
  | {
      token_info: {
        [k: string]: unknown;
      };
    }
  | {
      allowance: {
        owner: string;
        spender: string;
        [k: string]: unknown;
      };
    }
  | {
      minter: {
        [k: string]: unknown;
      };
    }
  | {
      marketing_info: {
        [k: string]: unknown;
      };
    }
  | {
      download_logo: {
        [k: string]: unknown;
      };
    }
  | {
      all_allowances: {
        limit?: number | null;
        owner: string;
        start_after?: string | null;
        [k: string]: unknown;
      };
    }
  | {
      all_accounts: {
        limit?: number | null;
        start_after?: string | null;
        [k: string]: unknown;
      };
    };
export interface Cw20ReceiveMsg {
  amount: Uint128;
  msg: Binary;
  sender: string;
  [k: string]: unknown;
}
export interface DownloadLogoResponse {
  data: Binary;
  mime_type: string;
  [k: string]: unknown;
}
export type ExecuteMsg =
  | {
      receive: Cw20ReceiveMsg;
    }
  | {
      transfer: TransferMsg;
    }
  | {
      allow: AllowMsg;
    }
  | {
      update_admin: {
        admin: string;
        [k: string]: unknown;
      };
    };
export interface TransferMsg {
  channel: string;
  remote_address: string;
  timeout?: number | null;
  [k: string]: unknown;
}
export interface AllowMsg {
  contract: string;
  gas_limit?: number | null;
  [k: string]: unknown;
}
export interface InitMsg {
  allowlist: AllowMsg[];
  default_gas_limit?: number | null;
  default_timeout: number;
  gov_contract: string;
  [k: string]: unknown;
}
export interface ListChannelsResponse {
  channels: ChannelInfo[];
  [k: string]: unknown;
}
export type LogoInfo =
  | "embedded"
  | {
      url: string;
    };
export type Addr = string;
export interface MarketingInfoResponse {
  description?: string | null;
  logo?: LogoInfo | null;
  marketing?: Addr | null;
  project?: string | null;
  [k: string]: unknown;
}
export interface MinterResponse {
  cap?: Uint128 | null;
  minter: string;
  [k: string]: unknown;
}
export interface PortResponse {
  port_id: string;
  [k: string]: unknown;
}
export type QueryMsg =
  | {
      port: {
        [k: string]: unknown;
      };
    }
  | {
      list_channels: {
        [k: string]: unknown;
      };
    }
  | {
      channel: {
        id: string;
        [k: string]: unknown;
      };
    }
  | {
      config: {
        [k: string]: unknown;
      };
    }
  | {
      admin: {
        [k: string]: unknown;
      };
    }
  | {
      allowed: {
        contract: string;
        [k: string]: unknown;
      };
    }
  | {
      list_allowed: {
        limit?: number | null;
        start_after?: string | null;
        [k: string]: unknown;
      };
    };
export interface TokenInfoResponse {
  decimals: number;
  name: string;
  symbol: string;
  total_supply: Uint128;
  [k: string]: unknown;
}
export interface Cw20Ics20ReadOnlyInterface {
  contractAddress: string;
  port: () => Promise<PortResponse>;
  listChannels: () => Promise<ListChannelsResponse>;
  channel: ({ id }: { id: string }) => Promise<ChannelResponse>;
  config: () => Promise<ConfigResponse>;
  admin: () => Promise<AdminResponse>;
  allowed: ({ contract }: { contract: string }) => Promise<AllowedResponse>;
  listAllowed: ({
    limit,
    startAfter,
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<ListAllowedResponse>;
}
export class Cw20Ics20QueryClient implements Cw20Ics20ReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.port = this.port.bind(this);
    this.listChannels = this.listChannels.bind(this);
    this.channel = this.channel.bind(this);
    this.config = this.config.bind(this);
    this.admin = this.admin.bind(this);
    this.allowed = this.allowed.bind(this);
    this.listAllowed = this.listAllowed.bind(this);
  }

  port = async (): Promise<PortResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      port: {},
    });
  };
  listChannels = async (): Promise<ListChannelsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_channels: {},
    });
  };
  channel = async ({ id }: { id: string }): Promise<ChannelResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      channel: {
        id,
      },
    });
  };
  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {},
    });
  };
  admin = async (): Promise<AdminResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      admin: {},
    });
  };
  allowed = async ({ contract }: { contract: string }): Promise<AllowedResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      allowed: {
        contract,
      },
    });
  };
  listAllowed = async ({
    limit,
    startAfter,
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<ListAllowedResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_allowed: {
        limit,
        start_after: startAfter,
      },
    });
  };
}
export interface Cw20Ics20Interface extends Cw20Ics20ReadOnlyInterface {
  contractAddress: string;
  sender: string;
  receive: (
    {
      amount,
      msg,
      sender,
    }: {
      amount: string;
      msg: string;
      sender: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: readonly Coin[],
  ) => Promise<ExecuteResult>;
  transfer: (
    {
      channel,
      remoteAddress,
      timeout,
    }: {
      channel: string;
      remoteAddress: string;
      timeout?: number;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: readonly Coin[],
  ) => Promise<ExecuteResult>;
  allow: (
    {
      contract,
      gasLimit,
    }: {
      contract: string;
      gasLimit?: number;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: readonly Coin[],
  ) => Promise<ExecuteResult>;
  updateAdmin: (
    {
      admin,
    }: {
      admin: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: readonly Coin[],
  ) => Promise<ExecuteResult>;
}
export class Cw20Ics20Client extends Cw20Ics20QueryClient implements Cw20Ics20Interface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.receive = this.receive.bind(this);
    this.transfer = this.transfer.bind(this);
    this.allow = this.allow.bind(this);
    this.updateAdmin = this.updateAdmin.bind(this);
  }

  receive = async (
    {
      amount,
      msg,
      sender,
    }: {
      amount: string;
      msg: string;
      sender: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: readonly Coin[],
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        receive: {
          amount,
          msg,
          sender,
        },
      },
      fee,
      memo,
      funds,
    );
  };
  transfer = async (
    {
      channel,
      remoteAddress,
      timeout,
    }: {
      channel: string;
      remoteAddress: string;
      timeout?: number;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: readonly Coin[],
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        transfer: {
          channel,
          remote_address: remoteAddress,
          timeout,
        },
      },
      fee,
      memo,
      funds,
    );
  };
  allow = async (
    {
      contract,
      gasLimit,
    }: {
      contract: string;
      gasLimit?: number;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: readonly Coin[],
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        allow: {
          contract,
          gas_limit: gasLimit,
        },
      },
      fee,
      memo,
      funds,
    );
  };
  updateAdmin = async (
    {
      admin,
    }: {
      admin: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: readonly Coin[],
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        update_admin: {
          admin,
        },
      },
      fee,
      memo,
      funds,
    );
  };
}
