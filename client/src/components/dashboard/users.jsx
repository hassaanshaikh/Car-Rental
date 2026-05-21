import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

import {
  Search,
  Plus,
  Edit2,
  Trash2,
  Eye,
  Mail,
} from "lucide-react";

const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    status: "Active",
    bookings: 5,
    joinDate: "2025-01-15",
    verified: true,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 (555) 234-5678",
    status: "Active",
    bookings: 3,
    joinDate: "2025-02-20",
    verified: true,
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1 (555) 345-6789",
    status: "Inactive",
    bookings: 1,
    joinDate: "2025-03-10",
    verified: false,
  },
  {
    id: "4",
    name: "Sarah Williams",
    email: "sarah@example.com",
    phone: "+1 (555) 456-7890",
    status: "Active",
    bookings: 8,
    joinDate: "2024-12-05",
    verified: true,
  },
];

export default function Users() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">
            User Management
          </h2>

          <p className="text-muted-foreground mt-1">
            Manage customer accounts and profiles
          </p>
        </div>

        <Button className="bg-accent hover:bg-accent/90 text-primary gap-2">
          <Plus className="w-4 h-4" />
          Add User
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6">
          <p className="text-sm text-muted-foreground">Total Users</p>
          <h3 className="text-3xl font-bold mt-2">1,284</h3>
          <p className="text-xs text-green-600 font-semibold mt-2">
            ↑ 15% this month
          </p>
        </Card>

        <Card className="p-6">
          <p className="text-sm text-muted-foreground">Active Users</p>
          <h3 className="text-3xl font-bold text-green-600 mt-2">
            1,087
          </h3>
          <p className="text-xs text-muted-foreground mt-2">
            Last 30 days
          </p>
        </Card>

        <Card className="p-6">
          <p className="text-sm text-muted-foreground">
            Verified Accounts
          </p>
          <h3 className="text-3xl font-bold text-accent mt-2">
            98%
          </h3>
          <p className="text-xs text-muted-foreground mt-2">
            1,258 verified
          </p>
        </Card>

        <Card className="p-6">
          <p className="text-sm text-muted-foreground">
            Avg. Bookings/User
          </p>
          <h3 className="text-3xl font-bold mt-2">3.8</h3>
          <p className="text-xs text-green-600 font-semibold mt-2">
            ↑ 2% vs last month
          </p>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex gap-4 flex-wrap">
          <div className="flex-1 min-w-64 relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />

            <Input
              placeholder="Search users..."
              className="pl-10"
            />
          </div>

          <Button variant="outline">
            Filter by Status
          </Button>

          <Button variant="outline">
            Filter by Verification
          </Button>
        </div>
      </Card>

      {/* Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Name
                </th>

                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Email
                </th>

                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Phone
                </th>

                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Status
                </th>

                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Bookings
                </th>

                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Join Date
                </th>

                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Verified
                </th>

                <th className="text-left py-4 px-6 text-sm font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-border hover:bg-muted/30"
                >
                  <td className="py-4 px-6 text-sm font-medium">
                    {user.name}
                  </td>

                  <td className="py-4 px-6 text-sm">
                    {user.email}
                  </td>

                  <td className="py-4 px-6 text-sm">
                    {user.phone}
                  </td>

                  <td className="py-4 px-6 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="py-4 px-6 text-sm font-semibold">
                    {user.bookings}
                  </td>

                  <td className="py-4 px-6 text-sm">
                    {user.joinDate}
                  </td>

                  <td className="py-4 px-6 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${
                        user.verified
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {user.verified ? "Yes" : "No"}
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
                        <Mail className="w-4 h-4" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
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