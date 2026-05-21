import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const revenueData = [
  { week: 'Week 1', revenue: 4000, target: 3500 },
  { week: 'Week 2', revenue: 5200, target: 3500 },
  { week: 'Week 3', revenue: 4800, target: 3500 },
  { week: 'Week 4', revenue: 6100, target: 3500 },
]

const bookingTrends = [
  { date: 'Mon', bookings: 12 },
  { date: 'Tue', bookings: 15 },
  { date: 'Wed', bookings: 18 },
  { date: 'Thu', bookings: 20 },
  { date: 'Fri', bookings: 22 },
  { date: 'Sat', bookings: 25 },
  { date: 'Sun', bookings: 20 },
]

const carPerformance = [
  { car: 'BMW UX', utilization: 90 },
  { car: 'KIA UX', utilization: 85 },
  { car: 'Jeep Wrangler', utilization: 92 },
]

export default function Analytics() {
  return (
    <div className="p-8 space-y-6">

      <div>
        <h2 className="text-3xl font-bold">
          Analytics & Reports
        </h2>

        <p className="text-gray-500 mt-1">
          Track your business performance metrics
        </p>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Revenue */}
        <div className="bg-white dark:bg-zinc-900 border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">
            Revenue vs Target
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar
                dataKey="revenue"
                fill="#ffd700"
                radius={[8, 8, 0, 0]}
              />

              <Bar
                dataKey="target"
                fill="#ffed4e"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Booking Trend */}
        <div className="bg-white dark:bg-zinc-900 border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">
            Weekly Booking Trends
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={bookingTrends}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="date" />
              <YAxis />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="bookings"
                fill="#ffd700"
                stroke="#ffed4e"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Fleet */}
      <div className="bg-white dark:bg-zinc-900 border rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-6">
          Fleet Utilization Rate
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={carPerformance}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis type="number" />
            <YAxis
              type="category"
              dataKey="car"
              width={120}
            />

            <Tooltip />

            <Bar
              dataKey="utilization"
              fill="#ffd700"
              radius={[0, 8, 8, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}