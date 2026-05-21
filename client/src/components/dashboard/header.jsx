import { Menu, LogOut, Settings, Bell } from 'lucide-react'

export default function Header({ onMenuClick }) {
  return (
    <header className="border-b border-border bg-black text-white px-6 py-4 flex items-center justify-between">
      
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md hover:bg-muted"
        >
          <Menu className="w-5 h-5" />
        </button>

        <h1 className="text-2xl font-bold text-foreground">
          Car Rental
        </h1>
      </div>

      <div className="flex items-center gap-4">
        
        <button className="relative p-2 rounded-md hover:bg-muted">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
        </button>

        <button className="p-2 rounded-md hover:bg-muted">
          <Settings className="w-5 h-5" />
        </button>

        <button className="p-2 rounded-md hover:bg-muted">
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}