import React, { useState } from 'react';

export const ResponsiveGrid = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Column 1', 'Column 2', 'Column 3'];

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4">
      {/* Mobile Tab Controls */}
      <div className="flex md:hidden mb-4">
        <div className="w-full flex rounded-lg bg-white shadow overflow-hidden">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-1 py-2 text-sm font-medium transition-colors
                ${activeTab === index
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative">
        {/* Desktop/Tablet Grid View */}
        <div className="md:grid md:grid-cols-3 gap-4">
          {/* Column 1 */}
          <div className={`bg-white rounded-lg shadow w-full p-6 md:w-64 lg:w-80 sm:bg-red-100 ${activeTab === 0 ? 'block' : 'md:block hidden'}`}>
            <h2 className="text-xl font-bold mb-4">Column 1</h2>
            <p className="text-gray-600">
              Width breakpoints:
              Mobile: 100%
              Tablet: 256px
              Desktop: 320px
            </p>
          </div>

          {/* Column 2 */}
          <div className={`bg-white rounded-lg shadow w-full p-6 md:w-64 lg:w-80 ${activeTab === 1 ? 'block' : 'md:block hidden'}`}>
            <h2 className="text-xl font-bold mb-4">Column 2</h2>
            <p className="text-gray-600">
              Each column maintains fixed widths at specific breakpoints rather than
              fluid proportional widths.
            </p>
          </div>

          {/* Column 3 */}
          <div className={`bg-white rounded-lg shadow w-full p-6 md:w-64 lg:w-80 ${activeTab === 2 ? 'block' : 'md:block hidden'}`}>
            <h2 className="text-xl font-bold mb-4">Column 3</h2>
            <p className="text-gray-600">
              Columns stack vertically on mobile and arrange horizontally
              with fixed widths on larger screens.
            </p>
          </div>
        </div>
      </div>

      {/* Screen Size Indicators */}
      <div className="mt-8 space-y-4">
        {/* Mobile Indicator */}
        <div className="block md:hidden p-4 bg-red-100 rounded-lg">
          <p className="font-mono text-red-800">
            Mobile View {"(< 768px)"}:
            <br />
            Tabbed single column view
          </p>
        </div>

        {/* Tablet Indicator */}
        <div className="hidden md:block lg:hidden p-4 bg-yellow-100 rounded-lg">
          <p className="font-mono text-yellow-800">
            Tablet View (768px - 1023px):
            <br />
            3 columns × 256px fixed width
          </p>
        </div>

        {/* Desktop Indicator */}
        <div className="hidden lg:block p-4 bg-green-100 rounded-lg">
          <p className="font-mono text-green-800">
            Desktop View (1024px+):
            <br />
            3 columns × 320px fixed width
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveGrid;