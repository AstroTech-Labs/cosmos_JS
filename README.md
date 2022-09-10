<p align="center" size="20">
    <span style="color:black;font-weight:700;font-size:30px">
    Cosmos
    </span> 
    <img src="https://www.computerhope.com/jargon/j/javascript.png" alt="isolated" width="40"/>
</p>
<p align="center">
    <a href="https://opensource.org/licenses/Apache-2.0"><img alt="License" src="https://img.shields.io/badge/License-Apache_2.0-blue.svg"></a>
    <a href="https://www.npmjs.com/package/persistenceonejs"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/persistenceonejs.svg"> </a>
</p>

<p align="center">
    <a href="https://cosmos.github.io/cosmjs/latest/stargate/index.html">Docs</a>
</p>

---

## Setup

```sh
npm install cosmosdk_js
```

## Usage

CosmosChainClient consistes of a `signingStargateClient` and a
`SigningCowsmWasmClient`, refered to as core and wasm respectively.

For querying use CosmosChainClient.query, this gives you a `tmclient`. Usage for
a tmclient for querying is based on `cosmos-sdk` i.e. query path is taken from
module locations.


NOTE - This is currently a W.I.P. Usage examples will be added soon here. 

-------------------------------

**Finding supported Queries and Transaction Msgs**

- To figure supported queries / tx msgs supported by any cosmos module, look at `query.rpc.query.d` and `tx.rpc.msg.d` in the `types/proto/<creator>/<module_name>`.