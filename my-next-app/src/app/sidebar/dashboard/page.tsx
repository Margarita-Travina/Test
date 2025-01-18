
import React from 'react';
import SideBar from '../../components/SideBar';

const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="content p-4 flex-grow">
        <h1 className="text-4xl font-bold mb-4">Панель управления</h1>
        <p className="text-lg">Это страница панели управления.</p>
      </div>
    </div>
  );
};

export default Dashboard;
