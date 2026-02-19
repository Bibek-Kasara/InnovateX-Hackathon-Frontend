// components/ProtectedRoute.tsx
import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    // Optional: you can show a spinner/loading screen here
    return <div className="text-center mt-10 text-gray-500">Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
