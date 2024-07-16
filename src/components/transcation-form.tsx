"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import addTranscations from "@/app/action";
import { toast } from "sonner";
import { useRef } from "react";
import SubmitButton from "./submit-button";

export default function AddTranscationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTranscations(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success("Transcation Added Successfully");
      formRef.current?.reset();
    }
  };
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={clientAction}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="text">Text</Label>
              <Input id="text" placeholder="Enter Name" name="text" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="amount">Amount</Label>
              Amount <br /> (negative - expense, positive - income)
              <Input
                id="amount"
                placeholder="Enter Amount"
                name="amount"
              />{" "}
            </div>
          </div>
          <div>
            <SubmitButton />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
