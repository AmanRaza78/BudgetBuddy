import Balance from "@/components/balance";
import AddTranscationForm from "@/components/transcation-form";
import { getIncomeExpense } from "../action";
import IncomeExpenseCard from "@/components/income-expense-card";

export default async function Dashboard(){
    const {income, expense} = await getIncomeExpense()
    return(
        <>
        <h1>Dashboard</h1>
        <Balance/>
        <IncomeExpenseCard amount={income} type="income"/>
        <IncomeExpenseCard amount={expense} type="expense"/>
        <AddTranscationForm/>
        </>
    )
}