
import { ReactNode } from 'react';
import '../app/styles/globals.css';
import NavBar from '../app/components/NavBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="ru">
      <body className="bg-gray-100 text-gray-900">
      <NavBar />
      <main className="container mx-auto p-4">
        {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
