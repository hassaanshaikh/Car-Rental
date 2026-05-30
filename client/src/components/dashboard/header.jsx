// import { Menu, LogOut, Settings, Bell } from 'lucide-react'

// export default function Header({ onMenuClick }) {
//   return (
//     <header className="border-b border-border bg-black text-white px-6 py-4 flex items-center justify-between">
      
//       <div className="flex items-center gap-4">
//         <button
//           onClick={onMenuClick}
//           className="lg:hidden p-2 rounded-md hover:bg-muted"
//         >
//           <Menu className="w-5 h-5" />
//         </button>

//         <h1 className="text-2xl font-bold text-foreground">
//           Car Rental
//         </h1>
//       </div>

//       <div className="flex items-center gap-4">
        
//         <button className="relative p-2 rounded-md hover:bg-muted">
//           <Bell className="w-5 h-5" />
//           <span className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
//         </button>

//         <button className="p-2 rounded-md hover:bg-muted">
//           <Settings className="w-5 h-5" />
//         </button>

//         <button className="p-2 rounded-md hover:bg-muted">
//           <LogOut className="w-5 h-5" />
//         </button>
//       </div>
//     </header>
//   )
// }

import { Menu, LogOut, Settings, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header({ onMenuClick }) {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <header className="border-b border-border bg-black text-white px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md hover:bg-gray-800"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <h1 className="text-2xl font-bold">
            Car Rental
          </h1>

          <p className="text-sm text-gray-400">
            Welcome, {user?.name || "User"}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-md hover:bg-gray-800">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
        </button>

        <button className="p-2 rounded-md hover:bg-gray-800">
          <Settings className="w-5 h-5" />
        </button>

        <div className="hidden md:flex items-center gap-3 px-3 py-2 bg-gray-900 rounded-lg">
          <div>
            <p className="text-sm font-medium">
              {user?.name}
            </p>

            <p className="text-xs text-gray-400">
              {user?.email}
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="p-2 rounded-md hover:bg-red-600 transition"
          title="Logout"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}