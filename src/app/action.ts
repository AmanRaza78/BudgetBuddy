'use server'

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

export async function addTranscations(formData:FormData): Promise<TransactionResult>{
    const textValue = formData.get('text')
    const amountValue = formData.get('amount')

    if (!textValue || textValue === '' || !amountValue) {
        return { error: 'Text or amount is missing' };
    }

    const text: string = textValue.toString();
    const amount: number = parseFloat(amountValue.toString());
  

    const session = await auth()

    if(!session?.user?.id){
         return { error: 'User not found' };
    }

    try {
        const transcationData: TransactionData = await prisma.transaction.create({
            data:{
                text:text,
                amount: amount,
                userId: session.user.id
            }
        })
        return { data: transcationData };
        
    } catch (error) {
        return { error: 'Transaction not added' };

    }

}

export async function getUserBalance(): Promise<{
    balance?: number;
    error?: string;
  }> {
    const session = await auth()

    if(!session?.user?.id){
         return { error: 'User not found' };
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
      return { error: 'Database error' };
    }
  }
  