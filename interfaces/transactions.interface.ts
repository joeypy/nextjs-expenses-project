export interface ITransaction {
  description?: string;
  amount: number;
  transactionType: 'expenses' | 'income';
  category: string;
  account: string;
  created_at: Date;
}

export interface ITransactionResponse {
  id?: number;
}
