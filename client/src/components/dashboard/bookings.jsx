import { Search, Plus, Edit2, Trash2, Eye } from 'lucide-react'

const bookings = [
  {
    id: 'BK001',
    customer: 'John Doe',
    email: 'john@example.com',
    car: 'BMW UX',
    pickup: '2026-05-20',
    dropoff: '2026-05-23',
    amount: '$450',
    status: 'Completed',
  },
  {
    id: 'BK002',
    customer: 'Jane Smith',
    email: 'jane@example.com',
    car: 'KIA UX',
    pickup: '2026-05-21',
    dropoff: '2026-05-25',
    amount: '$380',
    status: 'Active',
  },
]

export default function Bookings() {
  return (
    <div className="p-8 space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">
            Bookings Management
          </h2>

          <p className="text-gray-500 mt-1">
            Manage all car rental bookings
          </p>
        </div>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg flex items-center gap-2 font-medium">
          <Plus className="w-4 h-4" />
          New Booking
        </button>
      </div>

      {/* Search */}
      <div className="bg-white dark:bg-zinc-900 border rounded-xl p-4 shadow-sm">
        <div className="flex gap-4 flex-wrap">

          <div className="flex-1 min-w-64 relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search bookings..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg bg-transparent outline-none"
            />
          </div>

          <button className="border px-4 py-2 rounded-lg">
            Filter
          </button>

          <button className="border px-4 py-2 rounded-lg">
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-zinc-900 border rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b bg-gray-50 dark:bg-zinc-800">
                <th className="text-left py-4 px-6">
                  Booking ID
                </th>

                <th className="text-left py-4 px-6">
                  Customer
                </th>

                <th className="text-left py-4 px-6">
                  Car
                </th>

                <th className="text-left py-4 px-6">
                  Dates
                </th>

                <th className="text-left py-4 px-6">
                  Amount
                </th>

                <th className="text-left py-4 px-6">
                  Status
                </th>

                <th className="text-left py-4 px-6">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b hover:bg-gray-50 dark:hover:bg-zinc-800"
                >
                  <td className="py-4 px-6 font-medium">
                    {booking.id}
                  </td>

                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium">
                        {booking.customer}
                      </p>

                      <p className="text-sm text-gray-500">
                        {booking.email}
                      </p>
                    </div>
                  </td>

                  <td className="py-4 px-6">
                    {booking.car}
                  </td>

                  <td className="py-4 px-6">
                    {booking.pickup} → {booking.dropoff}
                  </td>

                  <td className="py-4 px-6 font-semibold">
                    {booking.amount}
                  </td>

                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        booking.status === 'Completed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>

                  <td className="py-4 px-6">
                    <div className="flex gap-2">

                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Eye className="w-4 h-4" />
                      </button>

                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Edit2 className="w-4 h-4" />
                      </button>

                      <button className="p-2 hover:bg-red-100 text-red-600 rounded-lg">
                        <Trash2 className="w-4 h-4" />
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}