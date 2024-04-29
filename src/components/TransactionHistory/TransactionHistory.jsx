import css from "./TransactionHistory.module.css";
import clsx from "clsx";

export default function TransactionHistory({ transactions }) {
  return (
    <table className={clsx(css.transactionTable)}>
      <thead>
        <tr>
          <th className={clsx(css.tableLine)}>Type</th>
          <th className={clsx(css.tableLine)}>Amount</th>
          <th className={clsx(css.tableLine)}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr className={clsx(css.lineitem, css.line)} key={transaction.id}>
            <td className={clsx(css.lineitem, css.type)}>{transaction.type}</td>
            <td className={clsx(css.lineitem, css.amount)}>
              {transaction.amount}
            </td>
            <td className={clsx(css.lineitem, css.currency)}>
              {transaction.currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
