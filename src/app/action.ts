"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

export async function addTranscations(
  formData: FormData
): Promise<TransactionResult> {
  const textValue = formData.get("text");
  const amountValue = formData.get("amount");

  if (!textValue || textValue === "" || !amountValue) {
    return { error: "Text or amount is missing" };
  }

  const text: string = textValue.toString();
  const amount: number = parseFloat(amountValue.toString());

  const session = await auth();

  if (!session?.user?.id) {
    return { error: "User not found" };
  }

  try {
    const transcationData: TransactionData = await prisma.transaction.create({
      data: {
        text: text,
        amount: amount,
        userId: session.user.id,
      },
    });
    revalidatePath('/')
    return { data: transcationData };
  } catch (error) {
    return { error: "Transaction not added" };
  }
}

export async function getUserBalance(): Promise<{
  balance?: number;
  error?: string;
}> {
  const session = await auth();

  if (!session?.user?.id) {
    return { error: "User not found" };
  }

  try {
    const transactions = await prisma.transaction.findMany({
      where: { userId: session.user.id },
    });

    const balance = transactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );

    return { balance };
  } catch (error) {
    return { error: "Database error" };
  }
}

export async function getIncomeExpense(): Promise<{
  income?: number;
  expense?: number;
  error?: string;
}> {
  const session = await auth();

  if (!session?.user?.id) {
    return { error: "User not found" };
  }

  try {
    const transactions = await prisma.transaction.findMany({
      where: { userId: session.user.id },
    });

    const amounts = transactions.map((transaction) => transaction.amount);

    const income = amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => acc + item, 0);

    const expense = amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => acc + item, 0);

    return { income, expense: Math.abs(expense) };
  } catch (error) {
    return { error: "Database error" };
  }
}


export interface Transaction {
  id: string;
  text: string;
  amount: number;
  userId: string;
  createdAt: Date;
}

export async function getTransactions(): Promise<{
  transactions?: Transaction[];
  error?: string;
}> {
  const session = await auth();

  if (!session?.user?.id) {
    return { error: "User not found" };
  }

  try {
    const transactions = await prisma.transaction.findMany({
      where: { userId: session.user.id },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { transactions };
  } catch (error) {
    return { error: 'Database error' };
  }
}

export async function deleteTransaction(transactionId: string): Promise<{
  message?: string;
  error?: string;
}> {
  const session = await auth();

  if (!session?.user?.id) {
    return { error: "User not found" };
  }

  try {
    await prisma.transaction.delete({
      where: {
        id: transactionId,
        userId: session.user.id,
      },
    });

    revalidatePath('/');
    return { message: 'Transaction deleted' };
  } catch (error) {
    return { error: 'Database error' };
  }
}
