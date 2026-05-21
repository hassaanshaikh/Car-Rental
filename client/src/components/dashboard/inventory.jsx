import { Search, Plus, Edit2, Trash2, Eye } from 'lucide-react'

const cars = [
  {
    id: '1',
    name: 'BMW UX',
    model: 'X5 2024',
    plate: 'BMW-001',
    status: 'Available',
    dailyRate: '$150/day',
    bookings: 45,
  },
  {
    id: '2',
    name: 'KIA UX',
    model: 'Sportage 2024',
    plate: 'KIA-001',
    status: 'In Rental',
    dailyRate: '$120/day',
    bookings: 38,
  },
]

export default function Inventory() {
  return (
    <div className="p-8 space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">
            Car Inventory
          </h2>

          <p className="text-gray-500 mt-1">
            Manage your car fleet
          </p>
        </div>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg flex items-center gap-2 font-medium">
          <Plus className="w-4 h-4" />
          Add Car
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <div className="bg-white dark:bg-zinc-900 border rounded-xl p-4">
          <p className="text-gray-500 text-sm">
            Total Cars
          </p>

          <h2 className="text-3xl font-bold mt-2">
            50
          </h2>
        </div>

        <div className="bg-white dark:bg-zinc-900 border rounded-xl p-4">
          <p className="text-gray-500 text-sm">
            Available
          </p>

          <h2 className="text-3xl font-bold text-green-600 mt-2">
            35
          </h2>
        </div>

      </div>

      {/* Search */}
      <div className="bg-white dark:bg-zinc-900 border rounded-xl p-4">
        <div className="flex gap-4 flex-wrap">

          <div className="flex-1 min-w-64 relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search cars..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg bg-transparent outline-none"
            />
          </div>

          <button className="border px-4 py-2 rounded-lg">
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-zinc-900 border rounded-xl overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b bg-gray-50 dark:bg-zinc-800">
                <th className="text-left py-4 px-6">
                  Car Name
                </th>

                <th className="text-left py-4 px-6">
                  Model
                </th>

                <th className="text-left py-4 px-6">
                  Plate
                </th>

                <th className="text-left py-4 px-6">
                  Status
                </th>

                <th className="text-left py-4 px-6">
                  Rate
                </th>

                <th className="text-left py-4 px-6">
                  Bookings
                </th>

                <th className="text-left py-4 px-6">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {cars.map((car) => (
                <tr
                  key={car.id}
                  className="border-b hover:bg-gray-50 dark:hover:bg-zinc-800"
                >
                  <td className="py-4 px-6 font-medium">
                    {car.name}
                  </td>

                  <td className="py-4 px-6">
                    {car.model}
                  </td>

                  <td className="py-4 px-6 text-yellow-500 font-mono">
                    {car.plate}
                  </td>

                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        car.status === 'Available'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {car.status}
                    </span>
                  </td>

                  <td className="py-4 px-6 font-semibold">
                    {car.dailyRate}
                  </td>

                  <td className="py-4 px-6">
                    {car.bookings}
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