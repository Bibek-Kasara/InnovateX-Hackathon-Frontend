// src/pages/Dashboard.tsx
import { useUser } from '@clerk/clerk-react';

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900 text-gray-900 dark:text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <p className="text-lg">Hello, {user?.fullName || 'User'} 👋</p>
      
      {/* Example Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Your Profile</h2>
          <p>Email: {user?.emailAddresses[0]?.emailAddress}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className="list-disc pl-4">
            <li>📄 View Services</li>
            <li>🔧 Edit Profile</li>
            <li>📬 Contact Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
