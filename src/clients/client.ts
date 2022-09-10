import { HdPath } from "@cosmjs/crypto";
import { DirectSecp256k1HdWallet} from "@cosmjs/proto-signing";
import { Coin, createProtobufRpcClient, QueryClient, SigningStargateClient } from "@cosmjs/stargate";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { PersistenceWalletOptions, PersistenceLocalConfig } from "../config/config";
import { createRPCQueryClient } from "../proto/cosmwasm/rpc.query";
export interface Config {
  rpc: string;
  chainId: string;
  gasPrices: Coin;
  gasAdjustment: string;
}

export interface WalletOptions {
  bip39Password: string;
  hdPaths: [HdPath];
  prefix: string;
}

export class CosmosChainClient {
  public wallet: DirectSecp256k1HdWallet;
  public signer;
  public mnemonic: string;
  public config: Config;
  public core: SigningStargateClient;
  public wasm: SigningCosmWasmClient;
  public query;

  private constructor(
    mnemonic: string,
    wallet: DirectSecp256k1HdWallet,
    signer,
    wasm: SigningCosmWasmClient,
    core: SigningStargateClient,
    queryclient,
    config?: Config,
  ) {
    this.mnemonic = mnemonic;
    this.config = config;
    this.wallet = wallet;
    this.signer = signer;
    this.core = core;
    this.wasm = wasm;
    this.query = queryclient;
  }

  static async init(mnemonic: string, chainConfig?: Config, wallet_options?:WalletOptions, signer?): Promise<CosmosChainClient> {
    //wallet
    const config = chainConfig || PersistenceLocalConfig;
    const act_wallet_options = wallet_options || PersistenceWalletOptions;
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, act_wallet_options);
    const clientsigner = signer || wallet;
    //signing clients
    const core = await SigningStargateClient.connectWithSigner(config.rpc, clientsigner);
    const wasm = await SigningCosmWasmClient.connectWithSigner(config.rpc, clientsigner);
    //query client
    const tendermintClient = await Tendermint34Client.connect(config.rpc);
    const queryClient = new QueryClient(tendermintClient);
    const rpc = await createProtobufRpcClient(queryClient);
    const query = await createRPCQueryClient({ rpc: rpc });
    return new CosmosChainClient(mnemonic, wallet, clientsigner, wasm, core, query, config);
  }
}
