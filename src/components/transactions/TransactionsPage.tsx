import { createSignal, onMount, For } from 'solid-js';
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
          {(transaction, i) => <p>{transaction.id}</p>}
        </For>
      </div>
    </section>
  );
}
