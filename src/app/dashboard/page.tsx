import Balance from "@/components/balance";
import AddTranscationForm from "@/components/transcation-form";
import { getIncomeExpense } from "../action";
import IncomeExpenseCard from "@/components/income-expense-card";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard(){
    const session = await auth()
    if(!session?.user?.id){
        return redirect('/')
    }
    const {income, expense} = await getIncomeExpense();
    return(
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>
            <div className="bg-white shadow-md rounded-lg p-4 mb-6">
                <Balance/>
            </div>
            <div className="flex justify-around mb-6">
                <IncomeExpenseCard amount={income} type="income"/>
                <IncomeExpenseCard amount={expense} type="expense"/>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
                <AddTranscationForm/>
            </div>
        </div>
    )
}
