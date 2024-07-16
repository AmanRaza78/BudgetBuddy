import { getUserBalance } from "@/app/action";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { addCommas } from "@/lib/converter";

export default async function Balance() {
  const {balance} = await getUserBalance();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Balance</CardTitle>
      </CardHeader>
      <CardContent>
      <h1>Rs {addCommas(Number(balance?.toFixed(2) ?? 0))}</h1>
      </CardContent>
    </Card>
  );
}
