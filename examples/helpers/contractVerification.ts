import { Slip10RawIndex, pathToString, stringToPath } from "@cosmjs/crypto";
import { CosmosChainClient, cosmwasm } from "cosmossdkjs";
import {
  query_wasm_contractInfo,
  query_wasm_contractHistory,
  query_wasm_contractsByCode,
  query_wasm_allContractState,
  query_wasm_rawContractState,
  query_wasm_smartContractState,
  query_wasm_code,
  query_wasm_codes,
  query_wasm_pinnedCodes,
  find_code_id_from_contract_hash,
  make_storeCode_msg,
  make_instantiateContract_msg,
  make_executeContract_msg,
  make_migrateContract_msg,
  make_updateAdmin_msg,
  make_clearAdmin_msg,
} from "cosmossdkjs/src/utils/cosmwasm";

async function coswasm_module_client_functions_testing() {
  const mnemonic = process.env.WALLET_MNEMONIC;
  const chain_id = process.env.CHAIN_ID;
  const END_POINT = process.env.END_POINT;

  // Incase the mnemonic / chain ID is not set in the environment variables
  if (!mnemonic || !chain_id) {
    throw new Error("WALLET_MNEMONIC / CHAIN_ID is not set");
  }

  const deposit_amount = 512_000_000;
  const fee_denom = "uxprt";
  const CHAIN_ID = chain_id;

  // Create a new persistence client
  const client = await CosmosChainClient.init(
    mnemonic,
    {
      rpc: END_POINT,
      chainId: CHAIN_ID,
      gasPrices: {
        denom: fee_denom,
        amount: "2000000",
      },
      gasAdjustment: "1.5",
    },
    {
      bip39Password: "",
      hdPaths: [stringToPath("m/44'/118'/0'/0/0")],
      prefix: "persistence",
    },
  );

  // Get wallet address
  const [Account] = await client.wallet.getAccounts();
  const wallet_address = Account.address;
  console.log(`WALLET ADDRESS =  ${wallet_address}`);
  const OWNER = wallet_address;

  // Get chain height
  const height = await client.wasm.getHeight();
  console.log(`Blockchain height = ${height}`);

  // Get xprt balance
  const balance_res = await client.wasm.getBalance(wallet_address, fee_denom);
  let wallet_balance = Number(balance_res["amount"]) / 10 ** 6;
  console.log(`Wallet's XPRT balance = ${wallet_balance}`);

  let codes = await query_wasm_codes(client, undefined, undefined);
  console.log(codes);
  console.log("\n");
  let codeInfos = codes["codeInfos"];

  //   for (let i = 0; i < codeInfos.length; i++) {
  //     let hex = Buffer.from(codeInfos[i]["dataHash"]).toString("hex");
  //     let code_id = codeInfos[i]["codeId"];
  //     if (hash == hex) {
  //       return code_id;
  //     }
  //   }
}
