import { CosmosChainClient } from "../../../types/clients/client";
import { cosmos } from "../../../types/proto/cosmos/bundle";
import { coins, Coin } from "@cosmjs/stargate";
import { Any } from "cosmjs-types/google/protobuf/any.js";
import {Long}  from "long";

// Supported query interfaces - types/proto/cosmos/gov/v1beta1/query.rpc.query.d.ts
// Supported tranasction interfaces - types/proto/cosmos/gov/v1beta1/tx.rpc.msg.d.ts

//---------------------------------------------
// COSMOS::GOV MODULE - QUERY HELPERS
// --------------------------------------------


// Proposal queries proposal details based on ProposalID
  // PROPOSAL_STATUS_UNSPECIFIED = 0
  // PROPOSAL_STATUS_DEPOSIT_PERIOD = 1
  // PROPOSAL_STATUS_VOTING_PERIOD = 2
  // PROPOSAL_STATUS_PASSED = 3
  // PROPOSAL_STATUS_REJECTED = 4
  // PROPOSAL_STATUS_FAILED = 5
export async function query_gov_proposal(
  client: CosmosChainClient,
  proposalId: number
) {
  let response = await client.query.cosmos.gov.v1beta1.proposal(
    cosmos.gov.v1beta1.QueryProposalRequest.fromPartial({proposalId: proposalId}) 
  );
  return response;
}

// Proposals queries all proposals based on given status.
export async function query_gov_proposals(
  client: CosmosChainClient,
  proposalStatus: number,
  voter: string,
  depositor: string,
  limit?: number,
  offset?:number 
) {
  let response = await client.query.cosmos.gov.v1beta1.proposals(
    cosmos.gov.v1beta1.QueryProposalsRequest.fromPartial({ 
      proposalStatus: cosmos.gov.v1beta1.proposalStatusFromJSON(proposalStatus),
      voter: voter,
      depositor: depositor,
      pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit})
     })
  );
  return response;
}

// Vote queries voted information based on proposalID, voterAddr
export async function query_gov_vote(
  client: CosmosChainClient,
  proposalId: number,
  voter: string
) {
  let response = await client.query.cosmos.gov.v1beta1.vote(
    cosmos.gov.v1beta1.QueryVoteRequest.fromPartial({ proposalId: proposalId, voter: voter })
  );
  return response;
}

// Votes queries votes of a given proposal.
export async function query_gov_votes(
  client: CosmosChainClient,
  proposalId: number,
  offset?: number,
  limit?: number
) {
  let response = await client.query.cosmos.gov.v1beta1.votes(
    cosmos.gov.v1beta1.QueryVotesRequest.fromPartial({ proposalId: proposalId, 
      pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit})
     })
  );
  return response;
}

// Params queries all parameters of the gov module.
// params_type defines which parameters to query for, can be one of "voting", "tallying" or "deposit".
export async function query_gov_params(
  client: CosmosChainClient,
  paramsType: string
) {
  let response = await client.query.cosmos.gov.v1beta1.params(
    cosmos.gov.v1beta1.QueryParamsRequest.fromPartial({ paramsType: paramsType })
  );
  return response;
}

// Deposit queries single deposit information based proposalID, depositAddr.
export async function query_gov_deposit(
  client: CosmosChainClient,
  proposalId: number,
  depositor: string
) {
  let response = await client.query.cosmos.gov.v1beta1.deposit(
    cosmos.gov.v1beta1.QueryDepositRequest.fromPartial({ proposalId: proposalId, depositor: depositor })
  );
  return response;
}

// Deposits queries all deposits of a single proposal.
export async function query_gov_deposits(
  client: CosmosChainClient,
  proposalId: number,
  offset?: number,
  limit?: number
) {
  let response = await client.query.cosmos.gov.v1beta1.deposits(
    cosmos.gov.v1beta1.QueryDepositsRequest.fromPartial({  proposalId: proposalId, 
      pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}) })
  );
  return response;
}

// TallyResult queries the tally of a proposal vote.
export async function query_gov_tallyresult(
  client: CosmosChainClient,
  proposalId: number,
) {
  let response = await client.query.cosmos.gov.v1beta1.tallyResult(
    cosmos.gov.v1beta1.QueryTallyResultRequest.fromPartial({ proposalId: proposalId })
  );
  return response;
}


//---------------------------------------------
// COSMOS::GOV MODULE - TRANSACTION HELPERS
// --------------------------------------------

export async function make_cosmos_gov_submitProposal_msg(
    client: CosmosChainClient,
    proposal: { typeUrl?: string; value?: Uint8Array },
    denom: string,
    deposit: number
  ) {
    const [account] = await client.wallet.getAccounts();
    let submit_proposal_msg = cosmos.gov.v1beta1.MsgSubmitProposal.fromPartial({
        content: {
            typeUrl: proposal.typeUrl,
            value: proposal.value,
        },
        initialDeposit: coins(deposit, denom),
        proposer: account.address
    });
    return submit_proposal_msg
  }
  
  export async function make_cosmos_gov_vote_msg(
    client: CosmosChainClient,
    proposalid: number,
    vote: number
  ) { 
    const [account] = await client.wallet.getAccounts();
    let vote_msg = cosmos.gov.v1beta1.MsgVote.fromPartial({
        proposalId: proposalid,
        voter: account.address,
        option: vote
    });
    return vote_msg;
  }
    
  export async function make_cosmos_gov_voteWeighted_msg(
    client: CosmosChainClient,
    proposalid: number,
    options: any,
  ) { 
    const [account] = await client.wallet.getAccounts();
    let vote_weighted_msg = cosmos.gov.v1beta1.MsgVoteWeighted.fromPartial({
        proposalId: proposalid,
        voter: account.address,
        options: options
    });
    return vote_weighted_msg;
  }

  export async function make_cosmos_gov_deposit_msg(
    client: CosmosChainClient,
    proposal_id: number,
    amount_: string,
    denom: string
  ) {
    const [account] = await client.wallet.getAccounts();
    let deposit_msg = cosmos.gov.v1beta1.MsgDeposit.fromPartial({
            proposalId: proposal_id,
            depositor: account.address,
            amount: [{
              denom: denom,
              amount: amount_
            }]
        });
    return deposit_msg
  }
  