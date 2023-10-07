import { createSignal, onMount, For } from 'solid-js';
import { getAllTransactions } from '../../service//TransactionsService';
export default function CreateTransaction() {
  const [transactions, setTransactions] = createSignal([]);

  onMount(async () => {
    setTransactions(await getAllTransactions());
  });
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
            </div>
          )}
        </For>
      </div>
    </section>
  );
}
