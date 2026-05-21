import {
  TrendingUp,
  Calendar,
  DollarSign,
  Users,
} from 'lucide-react'

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

const bookingData = [
  { month: 'Jan', bookings: 45, revenue: 2250 },
  { month: 'Feb', bookings: 52, revenue: 2600 },
  { month: 'Mar', bookings: 48, revenue: 2400 },
  { month: 'Apr', bookings: 61, revenue: 3050 },
  { month: 'May', bookings: 55, revenue: 2750 },
  { month: 'Jun', bookings: 67, revenue: 3350 },
]

const carUsageData = [
  { name: 'BMW UX', value: 45 },
  { name: 'KIA UX', value: 30 },
  { name: 'Jeep Wrangler', value: 25 },
]

const COLORS = ['#ffd700', '#ffed4e', '#ffc107']

export  default function Overview() {
  return (
    <div className="p-8 space-y-8">

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white dark:bg-zinc-900 border rounded-xl p-6 shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Total Bookings
              </p>

              <h2 className="text-3xl font-bold mt-2">
                328
              </h2>

              <p className="text-xs text-yellow-500 mt-2 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +12% this month
              </p>
            </div>

            <Calendar className="w-8 h-8 text-yellow-400 opacity-30" />
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 border rounded-xl p-6 shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Total Revenue
              </p>

              <h2 className="text-3xl font-bold mt-2">
                $16,450
              </h2>

              <p className="text-xs text-yellow-500 mt-2 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +8% this month
              </p>
            </div>

            <DollarSign className="w-8 h-8 text-yellow-400 opacity-30" />
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 border rounded-xl p-6 shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Active Users
              </p>

              <h2 className="text-3xl font-bold mt-2">
                1,284
              </h2>

              <p className="text-xs text-yellow-500 mt-2 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +5% this month
              </p>
            </div>

            <Users className="w-8 h-8 text-yellow-400 opacity-30" />
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 border rounded-xl p-6 shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Available Cars
              </p>

              <h2 className="text-3xl font-bold mt-2">
                42
              </h2>

              <p className="text-xs text-green-600 mt-2">
                Out of 50 total
              </p>
            </div>

            <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Bar Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-zinc-900 border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">
            Bookings & Revenue
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bookingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />

              <Tooltip />

              <Bar
                dataKey="bookings"
                fill="#ffd700"
                radius={[8, 8, 0, 0]}
              />

              <Bar
                dataKey="revenue"
                fill="#ffed4e"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white dark:bg-zinc-900 border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">
            Car Usage
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={carUsageData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {carUsageData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}