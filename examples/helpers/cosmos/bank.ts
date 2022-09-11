import { CosmosChainClient, cosmos, cosmwasm, osmosis } from "cosmsdkjs";

// Supported query interfaces - types/proto/cosmos/bank/v1beta1/query.rpc.query.d.ts
// Supported tranasction interfaces - types/proto/cosmos/bank/v1beta1/tx.rpc.msg.d.ts

//---------------------------------------------
// COSMOS::BANK MODULE - QUERY HELPERS
// --------------------------------------------
export async function query_cosmos_bank_balance(client: CosmosChainClient, address: string, denom: string) {
	let response = await client.query.cosmos.bank.v1beta1.balance(
		cosmos.bank.v1beta1.QueryBalanceRequest.fromPartial({
			address: address,
			denom: denom
		})
	)
	return response;
}

export async function query_cosmos_bank_all_balances(client: CosmosChainClient, address: string) {

	let response = await client.query.cosmos.bank.v1beta1.allBalances(
		cosmos.bank.v1beta1.QueryAllBalancesRequest.fromPartial({
			address: address
		})
	)
	return response;
}

export async function query_cosmos_bank_total_supply(client: CosmosChainClient, denom: string) {
	let response = await client.query.cosmos.bank.v1beta1.totalSupply(
		cosmos.bank.v1beta1.QueryTotalSupplyRequest.fromPartial({
			denom: denom
		})
	)
	return response;
}

export async function query_cosmos_bank_supply_of(client: CosmosChainClient, denom: string) {
	let response = await client.query.cosmos.bank.v1beta1.supplyOf(
		cosmos.bank.v1beta1.QuerySupplyOfRequest.fromPartial({
			denom: denom
		})
	)
	return response;
}

export async function query_cosmos_bank_params(client: CosmosChainClient) {
	let response = await client.query.cosmos.bank.v1beta1.params(
		cosmos.bank.v1beta1.QueryParamsRequest.fromPartial({})
	)
	return response;
}




//---------------------------------------------
// COSMOS::BANK MODULE - TRANSACTION HELPERS
// --------------------------------------------

// MsgSend
export async function tx_cosmos_bank_send(client: CosmosChainClient, fromAddress: string, toAddress: string, amount: cosmos.base.v1beta1.ICoin[], memo: string) {
	// Create a new transaction
	let tx = client.cosmos.newStdTx();

	// Add MsgSend to the transaction
	tx.addMsg(
		cosmos.bank.v1beta1.MsgSend.fromPartial({
			fromAddress: fromAddress,
			toAddress: toAddress,
			amount: amount,
		})
	);

	// Sign the transaction
	tx.sign(fromAddress);

	// Broadcast the transaction
	let response = await client.cosmos.broadcastTx(tx, memo);
	return response;
}

// MsgMultiSend
export async function tx_cosmos_bank_multi_send(client: CosmosChainClient,fromAddress: string, inputs: cosmos.bank.v1beta1.IMsgMultiSend.Input[], outputs: cosmos.bank.v1beta1.IMsgMultiSend.Output[], memo: string) {
	// Create a new transaction
	let tx = client.cosmos.newStdTx();

	// Add MsgMultiSend to the transaction
	tx.addMsg(
		cosmos.bank.v1beta1.MsgMultiSend.fromPartial({
			inputs: inputs,
			outputs: outputs,
		})
	);

	// Sign the transaction
	tx.sign(fromAddress);

	// Broadcast the transaction
	let response = await client.cosmos.broadcastTx(tx, memo);
	return response;
}

// MsgFundCommunityPool
export async function tx_cosmos_bank_fund_community_pool(client: CosmosChainClient,fromAddress: string, amount: cosmos.base.v1beta1.ICoin[], memo: string) {
	// Create a new transaction
	let tx = client.cosmos.newStdTx();

	// Add MsgFundCommunityPool to the transaction
	tx.addMsg(
		cosmos.bank.v1beta1.MsgFundCommunityPool.fromPartial({
			amount: amount,
			depositor: fromAddress,
		})
	);

	// Sign the transaction
	tx.sign(fromAddress);

	// Broadcast the transaction
	let response = await client.cosmos.broadcastTx(tx, memo);
	return response;
}

// MsgSetWithdrawAddress
export async function tx_cosmos_bank_set_withdraw_address(client: CosmosChainClient,fromAddress: string, withdrawAddress: string, memo: string) {
	// Create a new transaction
	let tx = client.cosmos.newStdTx();

	// Add MsgSetWithdrawAddress to the transaction
	tx.addMsg(
		cosmos.bank.v1beta1.MsgSetWithdrawAddress.fromPartial({
			depositor: fromAddress,
			withdrawAddress: withdrawAddress,
		})
	);

	// Sign the transaction
	tx.sign(fromAddress);

	// Broadcast the transaction
	let response = await client.cosmos.broadcastTx(tx, memo);
	return response;
}

// MsgWithdrawDelegatorReward
export async function tx_cosmos_bank_withdraw_delegator_reward(client: CosmosChainClient,fromAddress: string, validatorAddress: string, memo: string) {
	// Create a new transaction
	let tx = client.cosmos.newStdTx();

	// Add MsgWithdrawDelegatorReward to the transaction
	tx.addMsg(
		cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward.fromPartial({
			delegatorAddress: fromAddress,
			validatorAddress: validatorAddress,
		})
	);

	// Sign the transaction
	tx.sign(fromAddress);

	// Broadcast the transaction
	let response = await client.cosmos.broadcastTx(tx, memo);
	return response;
}

// MsgWithdrawValidatorCommission
export async function tx_cosmos_bank_withdraw_validator_commission(client: CosmosChainClient,fromAddress: string, validatorAddress: string, memo: string) {
	// Create a new transaction
	let tx = client.cosmos.newStdTx();

	// Add MsgWithdrawValidatorCommission to the transaction
	tx.addMsg(
		cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission.fromPartial({
			validatorAddress: validatorAddress,
		})
	);

	// Sign the transaction
	tx.sign(fromAddress);

	// Broadcast the transaction
	let response = await client.cosmos.broadcastTx(tx, memo);
	return response;
}



