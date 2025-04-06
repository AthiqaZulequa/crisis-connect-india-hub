
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  amount: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please enter a valid amount",
  }),
  name: z.string().min(2, {
    message: "Please enter your name",
  }),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  paymentMethod: z.enum(["card", "upi", "netbanking"]),
  donationType: z.string({
    required_error: "Please select a donation type",
  }),
});

type DonationFormValues = z.infer<typeof formSchema>;

export function DonationCard() {
  const [isProcessing, setIsProcessing] = useState(false);
  
  const form = useForm<DonationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      name: "",
      email: "",
      paymentMethod: "card",
      donationType: "",
    },
  });

  function onSubmit(values: DonationFormValues) {
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      toast.success("Donation processed successfully! Thank you for your support.");
      setIsProcessing(false);
      form.reset();
    }, 1500);
  }

  const predefinedAmounts = ["100", "500", "1000", "5000"];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Make a Donation</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="donationType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Donation Purpose</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select purpose" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="flood">Flood Relief</SelectItem>
                      <SelectItem value="earthquake">Earthquake Relief</SelectItem>
                      <SelectItem value="cyclone">Cyclone Relief</SelectItem>
                      <SelectItem value="medical">Medical Relief</SelectItem>
                      <SelectItem value="general">General Fund</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount (₹)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter amount" {...field} />
                  </FormControl>
                  <div className="flex gap-2 mt-2">
                    {predefinedAmounts.map((amount) => (
                      <Button 
                        key={amount} 
                        type="button" 
                        variant="outline"
                        size="sm"
                        onClick={() => form.setValue("amount", amount)}
                      >
                        ₹{amount}
                      </Button>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Payment Method</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="card" />
                        </FormControl>
                        <FormLabel className="font-normal">Credit/Debit Card</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="upi" />
                        </FormControl>
                        <FormLabel className="font-normal">UPI</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="netbanking" />
                        </FormControl>
                        <FormLabel className="font-normal">Net Banking</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full" disabled={isProcessing}>
              {isProcessing ? "Processing..." : "Make Donation"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
