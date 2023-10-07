import { POCKET } from './PocketBase';

export interface Transaction {
  id: string;
  author: string;
  title: string;
  text: string;
  date_operation: number;
  type: string;
  created: number;
}

export async function createTransaction() {
  return await POCKET.collection('transactions').create({
    author: string,
    title: string,
    text: string,
    date_operation: number,
    type: string,
  });
}

export async function getUserTransactions(author): Promise<Transactions[]> {
  const result = await POCKET.collection('transactions').getList<Transaction>(
    1,
    50,
    {
      filter: `author='${author}' `,
    }
  );
  return result.items;
}

export async function getTransaction(id: string) {
  return await POCKET.collection('transactions').getOne(id);
}

export async function getAllTransactions() {
  return await POCKET.collection('transactions').getFullList({});
}
