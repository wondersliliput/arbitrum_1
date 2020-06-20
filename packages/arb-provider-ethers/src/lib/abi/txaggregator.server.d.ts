// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace txaggregator {
  export interface SendTransactionArgs {
    to?: string
    sequenceNum?: string
    value?: string
    data?: string
    pubkey?: string
    signature?: string
  }

  export interface SendTransactionReply {
    accepted?: boolean
  }

  export interface TxAggregatorService {
    SendTransaction: (r: SendTransactionArgs) => SendTransactionReply
  }
}
