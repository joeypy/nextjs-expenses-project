export interface ITransaction {
  description?: string;
  amount: number | undefined;
  transactionType: boolean; // false: 'expenses' | true: 'income'
  category: string;
  account: string;
  createdAt: Date;
}

export interface ITransactionResponse {
  id?: number;
}
