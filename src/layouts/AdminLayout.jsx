import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const menuItems = [
  { path: "/dashboard", label: "대시보드" },
  { path: "/products", label: "상품 관리" },
];
function AdminLayout() {
  return (
    <div>
      <aside>
        <div className="border-b border-slate-700 px-6 py-5">
          <span className="text-xl font-bold">Product Admin</span>
        </div>
        <nav aria-label="관리자 메뉴" className="p-4">
          <ul className="flex gap-2 md:flex-col">
            {menuItems.map((item) => (
              <li key={item.path} className="flex-1 md:flex-none">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    [
                      "",
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hober:bg-slate-800 hover:text-white",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex min-h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
          <span className="font-semibold text-slate-800">상품 관리 시스템</span>
          <span className="text-sm text-slate-500">관리자 모드</span>
        </header>
        <main id="main-content" className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default AdminLayout;
