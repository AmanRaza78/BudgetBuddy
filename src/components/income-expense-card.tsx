import { addCommas } from "@/lib/converter";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

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
      {type === "income" ? (
        <Card className="w-[250px] h-fit">
          <CardHeader>
            <CardTitle>Income</CardTitle>
          </CardHeader>
          <CardContent>
            <h4>Expense</h4>
            <p className="text-green-400">${formattedAmount}</p>
          </CardContent>
        </Card>
      ) : (
        <Card className="w-[250px] h-fit">
          <CardHeader>
            <CardTitle>Expense</CardTitle>
          </CardHeader>
          <CardContent>
            <h4>Expense</h4>
            <p className="text-red-400">${formattedAmount}</p>
          </CardContent>
        </Card>
      )}
    </>
  );
}
