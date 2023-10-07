import { For, createResource } from 'solid-js';
import { getAllTransactions } from '../../service//TransactionsService';
export default function CreateTransaction() {
  const [transactions] = createResource(fetchTransactions);

  async function fetchTransactions() {
    const results = await getAllTransactions();
    return results;
  }

  return (
    <section>
      <div>Forn here</div>
      <div>
        List here
        <For each={transactions()}>
          {(transaction, i) => (
            <div>
              <h2>{transaction.id}</h2>
              <p>{transaction.title}</p>
              <hr />
              <small>
                <pre>{JSON.stringify(transaction, null, 2)}</pre>
              </small>
            </div>
          )}
        </For>
      </div>
    </section>
  );
}
