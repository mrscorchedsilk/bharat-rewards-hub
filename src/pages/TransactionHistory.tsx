
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowDownLeft, ArrowUpRight, Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

// Mock transaction data
const transactions = [
  {
    id: "tx-1",
    type: "cashback",
    amount: 120,
    description: "Amazon Purchase Cashback",
    date: "2023-05-12",
    status: "completed"
  },
  {
    id: "tx-2",
    type: "withdrawal",
    amount: -500,
    description: "Withdrawal to UPI",
    date: "2023-05-10",
    status: "completed"
  },
  {
    id: "tx-3",
    type: "cashback",
    amount: 45,
    description: "Flipkart Purchase Cashback",
    date: "2023-05-08",
    status: "completed"
  },
  {
    id: "tx-4",
    type: "cashback",
    amount: 85,
    description: "Myntra Purchase Cashback",
    date: "2023-05-06",
    status: "pending"
  },
  {
    id: "tx-5",
    type: "withdrawal",
    amount: -300,
    description: "Withdrawal to UPI",
    date: "2023-05-01",
    status: "completed"
  }
];

const TransactionHistory = () => {
  const { user } = useAuth();

  return (
    <div className="container max-w-4xl mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Transaction History</h1>
      
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Your Transactions</CardTitle>
              <CardDescription className="text-blue-400 glow-text">
                View all your cashback earnings and withdrawals
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Date</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="cashback">Cashback</TabsTrigger>
              <TabsTrigger value="withdrawals">Withdrawals</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="space-y-4">
                {transactions.map((tx) => (
                  <TransactionItem key={tx.id} transaction={tx} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="cashback">
              <div className="space-y-4">
                {transactions
                  .filter((tx) => tx.type === "cashback")
                  .map((tx) => (
                    <TransactionItem key={tx.id} transaction={tx} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="withdrawals">
              <div className="space-y-4">
                {transactions
                  .filter((tx) => tx.type === "withdrawal")
                  .map((tx) => (
                    <TransactionItem key={tx.id} transaction={tx} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

// Transaction Item Component
const TransactionItem = ({ transaction }: { transaction: any }) => {
  const isIncoming = transaction.amount > 0;
  
  return (
    <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          isIncoming ? "bg-green-100" : "bg-red-100"
        }`}>
          {isIncoming ? (
            <ArrowDownLeft className="h-5 w-5 text-green-600" />
          ) : (
            <ArrowUpRight className="h-5 w-5 text-red-600" />
          )}
        </div>
        
        <div>
          <h3 className="font-medium">{transaction.description}</h3>
          <p className="text-sm text-blue-400 glow-text">
            {new Date(transaction.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "short",
              day: "numeric"
            })}
          </p>
        </div>
      </div>
      
      <div className="text-right">
        <p className={`font-medium ${
          isIncoming ? "text-green-600" : "text-red-600"
        }`}>
          {isIncoming ? "+" : ""}{transaction.amount} ₹
        </p>
        <span className={`text-xs px-2 py-1 rounded-full ${
          transaction.status === "completed" 
            ? "bg-green-100 text-green-800" 
            : "bg-yellow-100 text-yellow-800"
        }`}>
          {transaction.status === "completed" ? "Completed" : "Pending"}
        </span>
      </div>
    </div>
  );
};

export default TransactionHistory;
