import { CosmosChainClient, cosmos, cosmwasm, osmosis } from "cosmsdkjs";

// Supported tranasction interfaces - types/proto/cosmos/crisis/v1beta1/tx.rpc.msg.d.


export interface MsgVerifyInvariant {
	  type: "cosmos-sdk/MsgVerifyInvariant";
	  value: {
		sender: string;
		invariant_module_name: string;
		invariant_route: string;
	  };
			
}

export interface MsgVerifyInvariantResponse {
	  height: string;
	  result: {
		events: cosmos.Event[];
		log: string;
	  };

}


//---------------------------------------------
// COSMOS::CRISIS MODULE - TRANSACTION HELPERS
// --------------------------------------------




// MsgVerifyInvariant
export function make_cosmos_crisis_verifyInvariant_msg(
  sender: string,
  invariant_module_name: string,
  invariant_route: string,
): cosmos.tx.Msg {
  return {
    typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
    value: {
      sender: sender,
      invariantModuleName: invariant_module_name,
      invariantRoute: invariant_route,
    },
  };
}
