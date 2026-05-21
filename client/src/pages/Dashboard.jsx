import { useState } from 'react'

import Header from '../components/dashboard/header'
import Sidebar from '../components/dashboard/sidebar'
import Overview from '../components/dashboard/overview'
import Bookings from '../components/dashboard/bookings'
import Inventory from '../components/dashboard/inventory'
import Analytics from '../components/dashboard/analytics'
import Payments from '../components/dashboard/payments'
import Users from '../components/dashboard/users'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-background dark:bg-dark">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <main className="flex-1 overflow-auto">
          {activeTab === 'overview' && <Overview />}
          {activeTab === 'bookings' && <Bookings />}
          {activeTab === 'inventory' && <Inventory />}
          {activeTab === 'analytics' && <Analytics />}
          {activeTab === 'payments' && <Payments />}
          {activeTab === 'users' && <Users />}
        </main>
      </div>
    </div>
  )
}