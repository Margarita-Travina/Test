
import React from 'react';
import Link from 'next/link';

const SideBar: React.FC = () => {
  return (
    <div className="sidebar bg-white p-4 shadow-md">
      <ul className="space-y-2">
        <li>
          <Link href="/sidebar/dashboard" className="text-blue-500 hover:underline">Панель управления</Link>
        </li>
        <li>
          <Link href="/sidebar/settings" className="text-blue-500 hover:underline">Настройки</Link>
        </li>
        <li>
          <Link href="/sidebar/profile" className="text-blue-500 hover:underline">Профиль</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
