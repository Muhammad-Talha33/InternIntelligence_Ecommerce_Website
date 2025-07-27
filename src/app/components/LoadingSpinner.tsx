import React from 'react';
import { LuLoaderCircle } from 'react-icons/lu';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-64">
      <div className="text-center">
        <LuLoaderCircle className="h-12 w-12 animate-spin text-gray-800 mx-auto mb-4" />
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;