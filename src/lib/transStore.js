import { atom } from 'nanostores';
import { POCKET } from '../service/PocketBase';

export const transStore = atom([]);

const records = await POCKET.collection('transactions').getFullList();
const listOfTransactions = records.map((record) => structuredClone(record));

export function load() {
  transStore.set([...transStore.get(), listOfTransactions]);
}
