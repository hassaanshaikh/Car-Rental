import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import {
  Search,
  Download,
  Eye,
} from "lucide-react";

const payments = [
  {
    id: "PAY001",
    bookingId: "BK001",
    customer: "John Doe",
    amount: "$450",
    date: "2026-05-18",
    method: "Credit Card",
    status: "Completed",
  },
  {
    id: "PAY002",
    bookingId: "BK002",
    customer: "Jane Smith",
    amount: "$380",
    date: "2026-05-17",
    method: "Debit Card",
    status: "Completed",
  },
  {
    id: "PAY003",
    bookingId: "BK003",
    customer: "Mike Johnson",
    amount: "$520",
    date: "2026-05-16",
    method: "PayPal",
    status: "Pending",
  },
  {
    id: "PAY004",
    bookingId: "BK004",
    customer: "Sarah Williams",
    amount: "$600",
    date: "2026-05-15",
    method: "Credit Card",
    status: "Completed",
  },
];

export default function Payments() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">
            Payment History
          </h2>

          <p className="text-muted-foreground mt-1">
            Track all transactions and payments
          </p>
        </div>

        <Button className="bg-accent hover:bg-accent/90 text-primary gap-2">
          <Download className="w-4 h-4" />
          Export Report
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6">
          <p className="text-sm text-muted-foreground">
            Total Revenue
          </p>

          <h3 className="text-3xl font-bold mt-2">
            $16,450
          </h3>

          <p className="text-xs text-green-600 font-semibold mt-2">
            This month
          </p>
        </Card>

        <Card className="p-6">
          <p className="text-sm text-muted-foreground">
            Completed Payments
          </p>

          <h3 className="text-3xl font-bold text-green-600 mt-2">
            156
          </h3>

          <p className="text-xs text-muted-foreground mt-2">
            Successfully processed
          </p>
        </Card>

        <Card className="p-6">
          <p className="text-sm text-muted-foreground">
            Pending Payments
          </p>

          <h3 className="text-3xl font-bold text-yellow-600 mt-2">
            8
          </h3>

          <p className="text-xs text-muted-foreground mt-2">
            Awaiting confirmation
          </p>
        </Card>

        <Card className="p-6">
          <p className="text-sm text-muted-foreground">
            Avg. Transaction
          </p>

          <h3 className="text-3xl font-bold text-accent mt-2">
            $487
          </h3>

          <p className="text-xs text-green-600 font-semibold mt-2">
            ↑ 5% vs last month
          </p>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex gap-4 flex-wrap">
          <div className="flex-1 min-w-64 relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />

            <Input
              placeholder="Search payments..."
              className="pl-10"
            />
          </div>

          <Button variant="outline">
            Filter by Status
          </Button>

          <Button variant="outline">
            Filter by Date
          </Button>
        </div>
      </Card>

      {/* Payments Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Payment ID
                </th>

                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Booking
                </th>

                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Customer
                </th>

                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Amount
                </th>

                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Method
                </th>

                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Date
                </th>

                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Status
                </th>

                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {payments.map((payment) => (
                <tr
                  key={payment.id}
                  className="border-b border-border hover:bg-muted/30"
                >
                  <td className="py-4 px-6 text-sm font-medium">
                    {payment.id}
                  </td>

                  <td className="py-4 px-6 text-sm">
                    {payment.bookingId}
                  </td>

                  <td className="py-4 px-6 text-sm">
                    {payment.customer}
                  </td>

                  <td className="py-4 px-6 text-sm font-semibold">
                    {payment.amount}
                  </td>

                  <td className="py-4 px-6 text-sm">
                    {payment.method}
                  </td>

                  <td className="py-4 px-6 text-sm">
                    {payment.date}
                  </td>

                  <td className="py-4 px-6 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${
                        payment.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>

                  <td className="py-4 px-6 text-sm">
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}