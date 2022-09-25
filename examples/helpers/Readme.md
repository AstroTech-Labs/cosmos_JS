### Cosmos SDK - Helper documentation guide

- Install packages.

```
npm install
```

- Declare environment variables to interact with the chain,

```
export WALLET_MNEMONIC=<mnemonic key>
export CHAIN_ID="dev-core-1"
export END_POINT="https://rpc.devnet.core.dexter.zone/"
```

- Execute the script to test cosmwasm util functions,

```
node --loader ts-node/esm contractVerification.ts
```
