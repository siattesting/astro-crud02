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

export interface Chat {
  id: string;
  first: string;
  firstName: string;
  second: string;
  secondName: string;
  messages: Message[];
}

export async function createChat(
  first: string,
  firstName: string,
  second: string,
  secondName: string
): Promise<Chat> {
  return await POCKET.collection('chats').create<Chat>({
    first,
    firstName,
    second,
    secondName,
    messages: [],
  });
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

export async function updateChat(id: string, messages: Message[]) {
  return await POCKET.collection('chats').update(id, {
    messages,
  });
}

export async function getUserChats(link: string): Promise<Chat[]> {
  const result = await POCKET.collection('chats').getList<Chat>(1, 50, {
    filter: `first='${link}' || second='${link}'`,
  });
  return result.items;
}

export async function getChat(id: string) {
  return await POCKET.collection('chats').getOne(id);
}

export function getChatName(chat: Chat, link: string) {
  const name = chat.first === link ? chat.secondName : chat.firstName;
  return name[0].toUpperCase();
}
