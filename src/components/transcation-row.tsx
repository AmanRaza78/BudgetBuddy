"use client";
import { deleteTransaction, Transaction } from "@/app/action";
import { toast } from "sonner";
import { Button } from "./ui/button";

export default function TranscationRow({
  transaction,
}: {
  transaction: Transaction;
}) {
  const handleDeleteTransaction = async (transactionId: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (!confirmed) return;

    const { message, error } = await deleteTransaction(transactionId);

    if (error) {
      toast.error(error);
    }

    toast.success(message);
  };
  return (
    <tr>
      <td className="size-px whitespace-nowrap">
        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
          <div className="flex items-center gap-x-3">
            <div className="grow">
              <span className="block text-sm font-semibold text-gray-800">
                {transaction.text}
              </span>
            </div>
          </div>
        </div>
      </td>
      <td className="h-px w-72 whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="block text-sm font-semibold text-gray-800">
            {transaction.amount}
          </span>
        </div>
      </td>
      <td className="size-px whitespace-nowrap">
        <div className="px-6 py-3">
          {transaction.amount > 0 ? (
            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-green-300 text-white rounded-full">
              Income
            </span>
          ) : (
            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-300 text-white rounded-full">
              Expense
            </span>
          )}
        </div>
      </td>
      <td className="size-px whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="text-sm text-gray-500">
            {transaction.createdAt.toLocaleDateString()}
          </span>
        </div>
      </td>
      <td className="size-px whitespace-nowrap">
        <div className="px-6 py-1.5">
          <Button variant="destructive" onClick={() => handleDeleteTransaction(transaction.id)}>Delete</Button>
        </div>
      </td>
    </tr>
  );
}
