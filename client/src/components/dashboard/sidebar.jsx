import {
  LayoutDashboard,
  Calendar,
  Car,
  BarChart3,
  CreditCard,
  Users,
} from 'lucide-react'

const menuItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'bookings', label: 'Bookings', icon: Calendar },
  { id: 'inventory', label: 'Car Inventory', icon: Car },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'payments', label: 'Payments', icon: CreditCard },
  { id: 'users', label: 'Users', icon: Users },
]

export default function Sidebar({
  activeTab,
  setActiveTab,
  isOpen,
  setIsOpen,
}) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static w-64 h-full bg-black border-r border-gray-800 transition-transform duration-300 z-50 flex flex-col
        ${
          isOpen
            ? 'translate-x-0'
            : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-black">
              CR
            </div>

            <h2 className="text-lg font-bold text-white">
              CarRental Pro
            </h2>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium
                ${
                  activeTab === item.id
                    ? 'bg-yellow-400 text-black'
                    : 'text-white hover:bg-gray-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800 space-y-2">
          <div className="text-xs text-gray-400 uppercase font-semibold">
            Support
          </div>

          <button className="w-full text-left px-4 py-2 rounded-lg text-white hover:bg-gray-800">
            Help Center
          </button>

          <button className="w-full text-left px-4 py-2 rounded-lg text-white hover:bg-gray-800">
            Documentation
          </button>
        </div>
      </aside>
    </>
  )
}