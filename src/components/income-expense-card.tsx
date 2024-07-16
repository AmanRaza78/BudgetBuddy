import { addCommas } from "@/lib/converter";
import { Card } from "./ui/card";

interface IncomeExponseProps {
  amount: number | undefined;
  type: string;
}

export default function IncomeExpenseCard({
  amount,
  type,
}: IncomeExponseProps) {
  const formattedAmount = addCommas(Number(amount?.toFixed(2)));

  return (
    <>
      {type === 'income' ? (
        <Card className="w-fit">
          <h4>Income</h4>
          <p className="text-green-400">
            ${formattedAmount}
          </p>
        </Card>
      ) : (
        <Card className="w-fit">
          <h4>Expense</h4>
          <p className="text-red-400">
            ${formattedAmount}
          </p>
        </Card>
      )}
    </>
  );
}
