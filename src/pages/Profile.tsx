import React from 'react';
import { useUser, UserButton } from '@clerk/clerk-react';


const Profile: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user?.fullName || 'User'}!</h1>
      <p className="text-lg">Email: {user?.emailAddresses[0]?.emailAddress}</p>
      <div className="mt-6">
        <UserButton />
      </div>
    </div>
  );
};

export default Profile;
