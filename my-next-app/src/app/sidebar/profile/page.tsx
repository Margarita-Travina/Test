// src/app/sidebar/profile/page.tsx
import React from 'react';
import SideBar from '../../../app/components/SideBar';

const Profile: React.FC = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="content p-4 flex-grow">
        <h1 className="text-4xl font-bold mb-4">Профиль</h1>
        <p className="text-lg">Это страница профиля.</p>
      </div>
    </div>
  );
};

export default Profile;
