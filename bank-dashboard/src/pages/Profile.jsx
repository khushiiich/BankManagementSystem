import React from 'react';

const Profile = () => {
  const userProfile = {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    avatar: '👤'
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Profile
          </h1>
          
          {/* Profile Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8">
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-4xl shadow-lg">
                  {userProfile.avatar}
                </div>
                <div className="text-white">
                  <h2 className="text-2xl font-bold">{userProfile.name}</h2>
                  <p className="text-indigo-100">{userProfile.role}</p>
                </div>
              </div>
            </div>
            
            {/* Profile Details */}
            <div className="p-8">
              <div className="space-y-6">
                {/* Name */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-400 text-xl">👤</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">
                      {userProfile.name}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-400 text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">
                      {userProfile.email}
                    </p>
                  </div>
                </div>

                {/* Role */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-400 text-xl">🔑</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Role</p>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">
                      {userProfile.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Logout Button */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>🚪</span>
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 text-center">
              <div className="text-3xl mb-2">🏦</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Bank Management</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">System Administrator</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 text-center">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Analytics</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Full Access</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 text-center">
              <div className="text-3xl mb-2">⚙️</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Settings</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">System Configuration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
