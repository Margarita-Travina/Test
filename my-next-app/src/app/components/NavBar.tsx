
import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:underline">Главная</Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:underline">О нас</Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:underline">Контакты</Link>
        </li>
        <li>
          <Link href="/sidebar/dashboard" className="text-white hover:underline">Панель управления</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
