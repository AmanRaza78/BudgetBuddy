import { getTransactions, Transaction } from "@/app/action";
import TranscationRow from "./transcation-row";

export default async function TranscationList() {
  const { transactions, error } = await getTransactions();
  if (error) {
    return <p className="text-red-400">{error}</p>;
  }
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
            <div className="flex items-center gap-x-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                Text
              </span>
            </div>
          </th>

          <th scope="col" className="px-6 py-3 text-start">
            <div className="flex items-center gap-x-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                Amount
              </span>
            </div>
          </th>

          <th scope="col" className="px-6 py-3 text-start">
            <div className="flex items-center gap-x-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                Status
              </span>
            </div>
          </th>
          <th scope="col" className="px-6 py-3 text-start">
            <div className="flex items-center gap-x-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                Created
              </span>
            </div>
          </th>
          <th scope="col" className="px-6 py-3 text-end"></th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
      {transactions &&
          transactions.map((transaction: Transaction) => (
            <TranscationRow key={transaction.id} transaction={transaction} />
          ))}
      </tbody>
    </table>
  );
}
